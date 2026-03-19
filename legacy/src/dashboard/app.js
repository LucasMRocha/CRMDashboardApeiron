// â”€â”€ DATA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const RAW_DATA = window.RAW_DATA || [];
// CONSTANTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const TODAY = '2026-03-12';
const TODAY_D = new Date(TODAY);
const WEEK_END = new Date(TODAY_D); WEEK_END.setDate(WEEK_END.getDate() + 7);
const STAGES = ['Lead','Qualification','Proposal','Negotiation','Deal'];
const STATUS_LIST = ['Open','Closed - Won','Closed - Lost','Internal denial'];
const SOURCE_LIST = ['Internal Referral','External Referral','External Demand','Partners','Network Search'];

// Chart instances
let charts = {};

// â”€â”€ FORMAT HELPERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function fmtBRL(v) {
  if (!v && v !== 0) return 'â€”';
  return 'R$ ' + Number(v).toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: 0});
}
function fmtBRLshort(v) {
  if (!v && v !== 0) return 'â€”';
  if (v >= 1000000) return 'R$ ' + (v/1000000).toFixed(1).replace('.',',') + 'M';
  if (v >= 1000) return 'R$ ' + (v/1000).toFixed(0) + 'k';
  return 'R$ ' + v;
}
function fmtDate(s) {
  if (!s) return 'â€”';
  const p = s.split('-');
  if (p.length < 3) return s;
  return p[2]+'/'+p[1]+'/'+p[0];
}
function fmtPct(v) { return v ? Math.round(v*100)+'%' : 'â€”'; }

// â”€â”€ DATE COMPARISON â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function dateOf(s) { return s ? new Date(s) : null; }
function isOverdue(s) { const d = dateOf(s); return d && d < TODAY_D; }
function isDueSoon(s) { const d = dateOf(s); return d && d >= TODAY_D && d <= WEEK_END; }

// â”€â”€ FILTER STATE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function getChecked(name) {
  return [...document.querySelectorAll(`input[name="${name}"]:checked`)].map(el => el.value);
}
// â”€â”€ FILTER GROUP CONFIG â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Static groups: pre-built in HTML, always default-on
const STATIC_GROUPS = [
  { key:'stage',  label:'Funnel Stage',     col:'Funnel_Stage',    type:'checkbox', fg:'fg-stage',  cbName:'stage'  },
  { key:'status', label:'Status',           col:'Status',          type:'checkbox', fg:'fg-status', cbName:'status' },
  { key:'source', label:'Lead Source',      col:'Source_Lead',     type:'checkbox', fg:'fg-source', cbName:'source' },
  { key:'date',   label:'Next Action Date', col:'Date_Next_Action',type:'date',     fg:'fg-date',   cbName:'date'   },
];
const STATIC_COLS = new Set(STATIC_GROUPS.map(g => g.col));
const SKIP_COLS   = new Set(['ID_Opportunity']);
// Dynamic groups default-enabled (preserved from old config)
const DYN_DEFAULT_ON = new Set(['Seller','Urgency','Segment']);

// Auto-generate dynamic col defs from RAW_DATA on first record
function buildDynColDefs() {
  if (!RAW_DATA.length) return [];
  return Object.keys(RAW_DATA[0])
    .filter(col => !STATIC_COLS.has(col) && !SKIP_COLS.has(col))
    .map(col => {
      const vals = RAW_DATA.map(r => r[col]).filter(v => v != null && v !== '');
      const isDate    = /date|_dt/i.test(col);
      const isNumeric = vals.length > 0 && vals.every(v => typeof v === 'number');
      const uniqueVals = [...new Set(vals.map(v => String(v)))].sort();
      const type = isDate ? 'date' : isNumeric ? 'range' : uniqueVals.length <= 30 ? 'checkbox' : 'text';
      return { key:'dyn_'+col, col, label:col.replace(/_/g,' '), type,
               uniqueVals: type==='checkbox' ? uniqueVals : null };
    });
}
const DYNAMIC_COL_DEFS = buildDynColDefs();

// Unified state
const filterGroupState = {};
STATIC_GROUPS.forEach(g    => { filterGroupState[g.key] = true; });
DYNAMIC_COL_DEFS.forEach(d => { filterGroupState[d.key] = DYN_DEFAULT_ON.has(d.col); });

let filterCfgOpen = false;

function toggleFilterCfg() {
  filterCfgOpen = !filterCfgOpen;
  const panel = document.getElementById('filter-cfg-panel');
  const btn   = document.getElementById('filter-cfg-btn');
  panel.style.display = filterCfgOpen ? '' : 'none';
  btn.classList.toggle('active', filterCfgOpen);
  if (filterCfgOpen) renderFilterCfgPanel();
}

function renderFilterCfgPanel() {
  const makeItem = (key, label, on) =>
    `<div class="filter-cfg-item"><span>${label}</span>
      <label class="fcfg-toggle">
        <input type="checkbox" ${on?'checked':''} onchange="setFilterGroup('${key}',this.checked)">
        <span class="fcfg-slider"></span>
      </label></div>`;
  const panel = document.getElementById('filter-cfg-panel');
  let html = `<div class="filter-cfg-panel-title">Active Filter Groups</div>
    <div class="filter-cfg-section-label">Default Filters</div>` +
    STATIC_GROUPS.map(g => makeItem(g.key, g.label, filterGroupState[g.key])).join('') +
    `<div class="filter-cfg-section-label">All Columns</div>` +
    DYNAMIC_COL_DEFS.map(d => makeItem(d.key, d.label, filterGroupState[d.key])).join('');
  panel.innerHTML = html;
}

function setFilterGroup(key, visible) {
  filterGroupState[key] = visible;

  // â”€â”€ Static group: toggle pre-built HTML element
  const sg = STATIC_GROUPS.find(g => g.key === key);
  if (sg) {
    const el = document.getElementById(sg.fg);
    if (el) el.style.display = visible ? '' : 'none';
    if (!visible) {
      document.querySelectorAll(`input[name="${sg.cbName}"]`).forEach(cb => cb.checked = true);
      const df = document.getElementById('date-from');
      const dt = document.getElementById('date-to');
      if (df) df.value = '';
      if (dt) dt.value = '';
    }
    applyFilters();
    return;
  }

  // â”€â”€ Dynamic group: create or toggle DOM element
  const dd = DYNAMIC_COL_DEFS.find(d => d.key === key);
  if (!dd) return;
  const containerId = 'dyn-fg-' + dd.col;
  const container   = document.getElementById('dynamic-filter-groups');
  let el = document.getElementById(containerId);

  if (visible) {
    if (!el) {
      el = document.createElement('div');
      el.className = 'filter-group';
      el.id = containerId;
      el.innerHTML = buildDynGroupHTML(dd);
      container.appendChild(el);
      el.querySelectorAll('input').forEach(i => {
        i.addEventListener('change', applyFilters);
        if (i.type === 'text') i.addEventListener('input', applyFilters);
      });
    } else {
      el.style.display = '';
    }
  } else {
    if (el) {
      el.style.display = 'none';
      el.querySelectorAll('input').forEach(i => { if (i.type==='checkbox') i.checked=true; else i.value=''; });
    }
  }
  applyFilters();
}

function buildDynGroupHTML(def) {
  const hdr = `<div class="filter-group-header"><span class="dot"></span>${def.label}</div>`;
  if (def.type === 'checkbox') {
    return hdr + `<div id="dyn-cb-${def.col}">` +
      def.uniqueVals.map(v =>
        `<label class="checkbox-item">
           <input type="checkbox" class="filter-checkbox" name="${def.key}" value="${v.replace(/"/g,'&quot;')}" checked>
           <span>${v||'â€”'}</span>
         </label>`).join('') +
      `</div>`;
  } else if (def.type === 'date') {
    return hdr + `<div class="date-range">
      <label>From:</label><input type="date" id="dyn-from-${def.col}">
      <label>To:</label><input type="date" id="dyn-to-${def.col}">
    </div>`;
  } else if (def.type === 'range') {
    return hdr + `<div class="num-range">
      <input type="number" placeholder="Min" id="dyn-min-${def.col}">
      <span class="num-range-sep">â€“</span>
      <input type="number" placeholder="Max" id="dyn-max-${def.col}">
    </div>`;
  } else {
    return hdr + `<div style="padding:4px 0">
      <input type="text" class="dyn-text-input" placeholder="Search ${def.label}â€¦" id="dyn-txt-${def.col}">
    </div>`;
  }
}

function initDynamicGroups() {
  DYNAMIC_COL_DEFS.forEach(d => {
    if (filterGroupState[d.key]) setFilterGroup(d.key, true);
  });
}

function getFiltered() {
  // â”€â”€ Static filters
  const stages   = filterGroupState['stage']  ? getChecked('stage')  : null;
  const statuses = filterGroupState['status'] ? getChecked('status') : null;
  const sources  = filterGroupState['source'] ? getChecked('source') : null;
  const dateFrom = filterGroupState['date']   ? document.getElementById('date-from').value : '';
  const dateTo   = filterGroupState['date']   ? document.getElementById('date-to').value   : '';

  // â”€â”€ Pre-collect active dynamic filters (only those with visible DOM elements)
  const activeDyn = DYNAMIC_COL_DEFS.filter(d => {
    if (!filterGroupState[d.key]) return false;
    const el = document.getElementById('dyn-fg-' + d.col);
    return el && el.style.display !== 'none';
  });

  return RAW_DATA.filter(r => {
    // Static checks
    if (stages  && r.Funnel_Stage && !stages.includes(r.Funnel_Stage))   return false;
    if (statuses && !(statuses.includes((r.Status||'Open').trim())))      return false;
    if (sources  && r.Source_Lead && !sources.includes(r.Source_Lead))    return false;
    if (dateFrom && r.Date_Next_Action && r.Date_Next_Action < dateFrom)  return false;
    if (dateTo   && r.Date_Next_Action && r.Date_Next_Action > dateTo)    return false;

    // Dynamic checks
    for (const def of activeDyn) {
      const val = r[def.col];
      if (def.type === 'checkbox') {
        const checked = getChecked(def.key);
        if (checked.length < def.uniqueVals.length && val != null && val !== ''
            && !checked.includes(String(val))) return false;
      } else if (def.type === 'date') {
        const from = document.getElementById('dyn-from-' + def.col)?.value || '';
        const to   = document.getElementById('dyn-to-'   + def.col)?.value || '';
        const sv   = val ? String(val).slice(0,10) : '';
        if (from && sv && sv < from) return false;
        if (to   && sv && sv > to)   return false;
      } else if (def.type === 'range') {
        const minV = parseFloat(document.getElementById('dyn-min-' + def.col)?.value ?? '');
        const maxV = parseFloat(document.getElementById('dyn-max-' + def.col)?.value ?? '');
        const n = typeof val === 'number' ? val : parseFloat(val) || 0;
        if (!isNaN(minV) && n < minV) return false;
        if (!isNaN(maxV) && n > maxV) return false;
      } else {
        const q = (document.getElementById('dyn-txt-' + def.col)?.value || '').toLowerCase().trim();
        if (q && !String(val ?? '').toLowerCase().includes(q)) return false;
      }
    }
    return true;
  });
}

// â”€â”€ FORECAST PERIOD â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
let forecastPeriod = 'year';

function setPeriod(p) {
  forecastPeriod = p;
  document.querySelectorAll('.period-chip').forEach(el => {
    el.classList.toggle('active', el.getAttribute('onclick') === `setPeriod('${p}')`);
  });
  updateForecastKPI();
}

function calcForecast(openRows) {
  const _fc = r => { const v = +r.Forecast_Deal_Value; return isFinite(v) && v > 0 ? v : 0; };
  let rows = openRows;
  if (forecastPeriod === 'month') {
    const ym = TODAY.slice(0,7);
    rows = openRows.filter(r => (r.Date_Creation||'').slice(0,7) === ym);
  } else if (forecastPeriod === 'quarter') {
    const q = 'Q' + Math.ceil((new Date(TODAY).getMonth()+1)/3);
    const yy = TODAY.slice(2,4);
    rows = openRows.filter(r => { const fd = r['Forecast _Date']||''; return fd.startsWith(yy) && fd.includes(q); });
  } else if (forecastPeriod === 'year') {
    const yy = TODAY.slice(2,4);
    rows = openRows.filter(r => (r['Forecast _Date']||'').startsWith(yy));
  }
  return rows.reduce((s,r) => s + _fc(r), 0);
}

function updateForecastKPI() {
  if (!cachedOpen) return;
  document.getElementById('kv-forecast').textContent = fmtBRLshort(calcForecast(cachedOpen));
}

// â”€â”€ APPLY FILTERS (main) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function applyFilters() {
  const data = getFiltered();
  const st = r => (r.Status||'Open').trim();
  const open = data.filter(r => st(r) === 'Open');
  const won  = data.filter(r => st(r) === 'Closed - Won');
  const lost = data.filter(r => st(r) === 'Closed - Lost' || st(r) === 'Internal denial');

  // Cache for chart-filter re-render; clear any active chart selection
  cachedOpen = open; cachedWon = won; cachedLost = lost;
  Object.keys(chartHighlightState).forEach(k => chartHighlightState[k] = new Set());

  // Record count
  document.getElementById('countDisplay').textContent = data.length;

  // â”€â”€ KPIs
  const overdueCnt = open.filter(r => isOverdue(r.Date_Next_Action)).length;
  const _fcOpen = r => (s => isFinite(s) && s > 0 ? s : 0)(+r.Forecast_Deal_Value);
  const _estOpen= r => (s => isFinite(s) && s > 0 ? s : 0)(+r.Estimated_Value);
  const totalFc  = calcForecast(open);
  const totalEst = open.reduce((s,r) => s + _estOpen(r), 0);
  const wonVal     = won.reduce((s,r) => s + (r.Estimated_Value||0), 0);
  const avgDays    = open.length ? (open.reduce((s,r) => s + (r.Days_on_Stage||0), 0) / open.length) : 0;

  document.getElementById('kv-open').textContent = open.length;
  document.getElementById('kv-forecast').textContent = fmtBRLshort(totalFc);
  document.getElementById('kv-estimated').textContent = fmtBRLshort(totalEst);
  document.getElementById('kv-won').textContent = won.length;
  document.getElementById('ks-won').textContent = fmtBRL(wonVal);
  document.getElementById('kv-overdue').textContent = overdueCnt;
  document.getElementById('kv-days').textContent = Math.round(avgDays) + ' d';

  const kpiOverdue = document.getElementById('kpi-overdue');
  kpiOverdue.classList.toggle('danger', overdueCnt > 0);

  // â”€â”€ CHARTS
  renderCharts(data, open, won, lost);

  // â”€â”€ TABLES
  renderFollowupTable(open);
  renderClosedTable(won, lost);
}

// â”€â”€ CHARTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const CHART_DEFAULTS = {
  color: '#ccc',
  plugins: { legend: { labels: { color: '#ccc', font: { family: 'Inter', size: 11 } } } },
  scales: {}
};
function darkScales(axis) {
  const base = {
    ticks: { color: '#ccc', font: { family: 'Inter', size: 10, weight: '600' } },
    grid: { color: 'rgba(255,255,255,0.06)' }
  };
  return axis === 'xy' ? { x: base, y: base } :
         axis === 'x'  ? { x: base } : { y: base };
}
function destroyChart(id) {
  if (charts[id]) { charts[id].destroy(); delete charts[id]; }
}

// â”€â”€ CHART FILTER STATE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
let cachedOpen = [], cachedWon = [], cachedLost = [];
// chartHighlightState[key] = Set<index> (empty Set = nothing selected)
const chartHighlightState = {};
const chartBaseColors = {}; // key â†’ { colors, dsIdx }

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function dimColors(baseColors, activeSet) {
  // activeSet = Set of active indices (or empty = restore all)
  if (!activeSet || activeSet.size === 0) return [...baseColors];
  return baseColors.map((c,i) =>
    activeSet.has(i) ? c : (c.startsWith('#') ? hexToRgba(c,0.18) : c.replace(/[\d.]+\)$/, '0.18)'))
  );
}

function resetChartColors(key) {
  if (charts[key] && chartBaseColors[key]) {
    const { colors, dsIdx } = chartBaseColors[key];
    charts[key].data.datasets[dsIdx].backgroundColor = [...colors];
    charts[key].update('none');
  }
  chartHighlightState[key] = new Set();
}

function highlightChartItem(chartKey, index, baseColors, dsIdx=0, ctrlHeld=false) {
  chartBaseColors[chartKey] = { colors:[...baseColors], dsIdx };
  const chart = charts[chartKey];
  if (!chart) return;

  if (!chartHighlightState[chartKey]) chartHighlightState[chartKey] = new Set();

  if (!ctrlHeld) {
    // Plain click: clear ALL charts, then select only this item
    Object.keys(chartHighlightState).forEach(k => {
      if (k !== chartKey) resetChartColors(k);
    });

    const sel = chartHighlightState[chartKey];
    const onlyThis = sel.size === 1 && sel.has(index);
    sel.clear();
    if (!onlyThis) sel.add(index); // toggle off if already the sole selection
  } else {
    // Ctrl+click: toggle this item in THIS chart only, don't touch others
    const sel = chartHighlightState[chartKey];
    if (sel.has(index)) sel.delete(index);
    else                sel.add(index);
  }

  const sel = chartHighlightState[chartKey];
  chart.data.datasets[dsIdx].backgroundColor = dimColors(baseColors, sel);
  chart.update('none');
  renderTablesWithFilter();
}

// Build one filter function per active chart (OR within chart, AND across charts)
function buildChartFilters() {
  return Object.entries(chartHighlightState)
    .filter(([, sel]) => sel && sel.size > 0)
    .map(([key, sel]) => {
      const chart = charts[key];
      if (!chart) return null;
      const perItem = [...sel].map(idx => buildSingleFilter(key, idx, chart)).filter(Boolean);
      return perItem.length ? r => perItem.some(f => f(r)) : null;
    })
    .filter(Boolean);
}

function buildSingleFilter(chartKey, index, chart) {
  const label = chart.data.labels ? chart.data.labels[index] : null;
  switch (chartKey) {
    case 'funnel':  return r => r.Funnel_Stage === label;
    case 'quarter': return r => (r['Forecast _Date']||'') === label;
    case 'source':  return r => r.Source_Lead === label;
    case 'monthStage': {
      // index â†’ month key â†’ filter by Date_Creation month
      const allMonths = [...new Set(
        RAW_DATA.map(r=>r.Date_Creation?String(r.Date_Creation).slice(0,7):null).filter(Boolean)
      )].sort();
      const ym = allMonths[index];
      return r => ym && String(r.Date_Creation||'').slice(0,7) === ym;
    }
    case 'days': {
      const ranges = [[0,30],[31,60],[61,90],[91,120],[121,Infinity]];
      const [mn,mx] = ranges[index];
      return r => { const d = r.Days_on_Stage||0; return d >= mn && d <= mx; };
    }
    default: return null;
  }
}

function renderTablesWithFilter() {
  const filters = buildChartFilters(); // AND across charts
  const pass = filters.length ? r => filters.every(f => f(r)) : null;
  renderFollowupTable(pass ? cachedOpen.filter(pass) : cachedOpen);
  renderClosedTable(
    pass ? cachedWon.filter(pass)  : cachedWon,
    pass ? cachedLost.filter(pass) : cachedLost
  );
}

function renderCharts(data, open, won, lost) {
  // â”€â”€ Status single chip â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const wr = won.length+lost.length > 0 ? Math.round(won.length/(won.length+lost.length)*100) : null;
  document.getElementById('status-strip').innerHTML = `
    <div class="status-chip-single">
      <div class="sc-item"><div class="sc-dot" style="background:#6ABF4B"></div><span>Open:</span><span class="sc-val">${open.length}</span></div>
      <div class="sc-item"><div class="sc-dot" style="background:#27AE60"></div><span>Won:</span><span class="sc-val">${won.length}</span></div>
      <div class="sc-item"><div class="sc-dot" style="background:#E74C3C"></div><span>Lost:</span><span class="sc-val">${lost.length}</span></div>
      <div class="sc-item"><div class="sc-dot" style="background:#3498DB"></div><span>Win Rate:</span><span class="sc-val">${wr !== null ? wr+'%' : 'â€”'}</span></div>
    </div>`;

  // â”€â”€ Chart 1 â€” Forecast by Quarter â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  destroyChart('quarter');
  const quarters = [...new Set(open.map(r=>r['Forecast _Date']).filter(Boolean))].sort();
  const QTR_COLORS = ['#6ABF4B','#3498DB','#E67E22','#9B59B6','#1ABC9C','#E74C3C'];
  const qtrFc = quarters.map(q => open.filter(r=>r['Forecast _Date']===q).reduce((a,r)=>a+(r.Forecast_Deal_Value||0),0));
  const qColors = quarters.map((_,i) => QTR_COLORS[i % QTR_COLORS.length]);
  charts['quarter'] = new Chart(document.getElementById('chartQuarter'), {
    type:'bar',
    data:{ labels:quarters, datasets:[{ label:'Forecast (R$)', data:qtrFc, backgroundColor:[...qColors], borderRadius:4 }] },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{display:false}, tooltip:{callbacks:{label:ctx=>fmtBRL(ctx.raw)}} },
      scales:{
        x:{ticks:{color:'#ccc',font:{family:'Inter',size:11,weight:'600'}},grid:{display:false}},
        y:{ticks:{color:'#ccc',callback:v=>fmtBRLshort(v),font:{family:'Inter',size:10,weight:'600'}},grid:{color:'rgba(255,255,255,0.06)'}}
      },
      onClick:(evt,els)=>{ if(els.length) highlightChartItem('quarter',els[0].index,qColors,0,evt.native?.ctrlKey||evt.native?.metaKey); }
    }
  });
  document.getElementById('chartQuarter').style.cursor = 'pointer';

  // â”€â”€ Chart 2 â€” Stage Funnel (centered bars via stacked transparent offset) â”€
  destroyChart('funnel');
  const funnelCounts = STAGES.map(s => open.filter(r=>r.Funnel_Stage===s).length);
  const FUNNEL_COLORS = ['#1ABC9C','#6ABF4B','#3498DB','#E67E22','#E74C3C'];
  const maxFunnel = Math.max(...funnelCounts, 1);
  const funnelOffsets = funnelCounts.map(c => (maxFunnel - c) / 2);
  charts['funnel'] = new Chart(document.getElementById('chartFunnel'), {
    type:'bar',
    data:{ labels:STAGES, datasets:[
      { label:'_offset', data:funnelOffsets, backgroundColor:'transparent', borderColor:'transparent', borderWidth:0, borderRadius:0 },
      { label:'Opportunities', data:funnelCounts, backgroundColor:[...FUNNEL_COLORS], borderRadius:4 }
    ]},
    options:{
      indexAxis:'y', responsive:true, maintainAspectRatio:false,
      plugins:{
        legend:{display:false},
        tooltip:{
          filter: item => item.datasetIndex === 1,
          callbacks:{ label:ctx => ctx.raw+' opportunities' }
        }
      },
      scales:{
        x:{ stacked:true, display:false, max: maxFunnel * 1.05 },
        y:{ stacked:true, ticks:{color:'#ccc',font:{family:'Inter',size:11}}, grid:{display:false} }
      },
      onClick:(evt,els)=>{
        const hit = els.find(e => e.datasetIndex === 1);
        if (hit) highlightChartItem('funnel',hit.index,FUNNEL_COLORS,1,evt.native?.ctrlKey||evt.native?.metaKey);
      }
    }
  });
  document.getElementById('chartFunnel').style.cursor = 'pointer';

  // â”€â”€ Chart 3 â€” Days on Stage histogram â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  destroyChart('days');
  const BINS = ['0â€“30','31â€“60','61â€“90','91â€“120','>120'];
  const BIN_COLORS = ['#6ABF4B','#A3C53A','#E67E22','#E74C3C','#8E44AD'];
  const binCounts = open.reduce((acc,r) => {
    const d = r.Days_on_Stage||0;
    acc[d<=30?0:d<=60?1:d<=90?2:d<=120?3:4]++;
    return acc;
  }, [0,0,0,0,0]);
  charts['days'] = new Chart(document.getElementById('chartDays'), {
    type:'bar',
    data:{ labels:BINS, datasets:[{ label:'Opportunities', data:binCounts, backgroundColor:[...BIN_COLORS], borderRadius:4 }] },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{display:false}, tooltip:{callbacks:{label:ctx=>ctx.raw+' opps'}} },
      scales:{
        x:{ticks:{color:'#ccc',font:{family:'Inter',size:11,weight:'600'}},grid:{display:false}},
        y:{ticks:{color:'#ccc',font:{family:'Inter',size:10,weight:'600'},stepSize:1},grid:{color:'rgba(255,255,255,0.06)'}}
      },
      onClick:(evt,els)=>{ if(els.length) highlightChartItem('days',els[0].index,BIN_COLORS,0,evt.native?.ctrlKey||evt.native?.metaKey); }
    }
  });
  document.getElementById('chartDays').style.cursor = 'pointer';

  // â”€â”€ Chart 3b â€” Lead Source doughnut â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  destroyChart('source');
  const srcCounts = SOURCE_LIST.map(s => data.filter(r=>r.Source_Lead===s).length);
  const SRC_COLORS = ['#6ABF4B','#3498DB','#E67E22','#9B59B6','#E74C3C'];
  chartBaseColors['source'] = { colors:[...SRC_COLORS], dsIdx:0 };
  chartHighlightState['source'] = chartHighlightState['source'] || new Set();
  charts['source'] = new Chart(document.getElementById('chartSource'), {
    type:'doughnut',
    data:{ labels:SOURCE_LIST, datasets:[{ data:srcCounts, backgroundColor:[...SRC_COLORS], borderWidth:0 }] },
    options:{
      responsive:true, maintainAspectRatio:false, cutout:'62%',
      plugins:{
        legend:{position:'bottom',labels:{color:'#ccc',font:{family:'Inter',size:9,weight:'600'},boxWidth:8,padding:6}},
        tooltip:{callbacks:{label:ctx=>ctx.label+': '+ctx.raw}}
      },
      onClick:(evt,els)=>{ if(els.length) highlightChartItem('source',els[0].index,SRC_COLORS,0,evt.native?.ctrlKey||evt.native?.metaKey); }
    }
  });
  document.getElementById('chartSource').style.cursor = 'pointer';

  // â”€â”€ Chart 5 â€” New Opportunities by Week â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  destroyChart('week');
  const weekMap = {};
  data.forEach(r => { if(r.Week) weekMap[r.Week] = (weekMap[r.Week]||0)+1; });
  const weekKeys = Object.keys(weekMap).map(Number).sort((a,b)=>a-b);
  const weekCounts = weekKeys.map(w => weekMap[w]);
  charts['week'] = new Chart(document.getElementById('chartWeek'), {
    type:'bar',
    data:{
      labels: weekKeys.map(w => 'W'+w),
      datasets:[{ label:'Opportunities', data:weekCounts,
        backgroundColor:'rgba(106,191,75,0.7)', borderColor:'rgba(106,191,75,1)',
        borderWidth:1, borderRadius:3 }]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{display:false}, tooltip:{callbacks:{label:ctx=>'Opps: '+ctx.raw}} },
      scales:{
        x:{ ticks:{color:'#ccc',font:{size:8,weight:'600'},maxRotation:60}, grid:{color:'#1e1e1e'} },
        y:{ ticks:{color:'#ccc',font:{size:9,weight:'600'},stepSize:1}, grid:{color:'#1e1e1e'}, beginAtZero:true }
      }
    }
  });

  // â”€â”€ Chart 6 â€” Opps by Creation Month Ã— Stage (stacked) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  destroyChart('monthStage');
  // Build month labels sorted chronologically from Date_Creation
  const monthMap = {}; // "YYYY-MM" â†’ { stage: count }
  data.forEach(r => {
    if (!r.Date_Creation) return;
    const ym = String(r.Date_Creation).slice(0,7);
    if (!monthMap[ym]) monthMap[ym] = {};
    const st = r.Funnel_Stage || 'Unknown';
    monthMap[ym][st] = (monthMap[ym][st]||0) + 1;
  });
  const monthKeys = Object.keys(monthMap).sort();
  const monthLabels = monthKeys.map(ym => {
    const d = new Date(ym + '-01');
    return d.toLocaleString('en', {month:'short'}) + ' ' + String(d.getFullYear()).slice(2);
  });
  const FUNNEL_COLORS_MS = ['#1ABC9C','#6ABF4B','#3498DB','#E67E22','#E74C3C'];
  const msDatasets = STAGES.map((stage, si) => ({
    label: stage,
    data: monthKeys.map(ym => (monthMap[ym]||{})[stage]||0),
    backgroundColor: FUNNEL_COLORS_MS[si],
    borderWidth: 0,
    borderRadius: 2
  }));
  // For highlight: flat index = monthKey index; filter = all stages in that month
  const msBaseColors = monthKeys.map((_,i) => '#6ABF4B'); // unused, handled inline
  chartHighlightState['monthStage'] = chartHighlightState['monthStage'] || new Set();
  charts['monthStage'] = new Chart(document.getElementById('chartMonthStage'), {
    type:'bar',
    data:{ labels: monthLabels, datasets: msDatasets },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{
        legend:{ position:'bottom', labels:{color:'#888',font:{family:'Inter',size:9},boxWidth:8,padding:6} },
        tooltip:{ mode:'index', intersect:false,
          callbacks:{ title: ctx => ctx[0].label, label: ctx => ctx.dataset.label+': '+ctx.raw }
        }
      },
      scales:{
        x:{ stacked:true, ticks:{color:'#ccc',font:{size:8,weight:'600'},maxRotation:45}, grid:{color:'#1e1e1e'} },
        y:{ stacked:true, ticks:{color:'#ccc',font:{size:9,weight:'600'},stepSize:1}, grid:{color:'#1e1e1e'}, beginAtZero:true }
      },
      onClick:(evt,els) => {
        if (!els.length) return;
        const idx = els[0].index;
        const ctrlHeld = evt.native?.ctrlKey || evt.native?.metaKey;
        if (!chartHighlightState['monthStage']) chartHighlightState['monthStage'] = new Set();
        if (!ctrlHeld) {
          Object.keys(chartHighlightState).forEach(k => { if(k!=='monthStage') resetChartColors(k); });
          const sel = chartHighlightState['monthStage'];
          const only = sel.size===1 && sel.has(idx);
          sel.clear(); if(!only) sel.add(idx);
        } else {
          const sel = chartHighlightState['monthStage'];
          if(sel.has(idx)) sel.delete(idx); else sel.add(idx);
        }
        // Dim non-selected months across all datasets
        msDatasets.forEach((ds, si) => {
          const sel2 = chartHighlightState['monthStage'];
          charts['monthStage'].data.datasets[si].backgroundColor =
            sel2.size === 0 ? FUNNEL_COLORS_MS[si] :
            monthKeys.map((_,i) => sel2.has(i) ? FUNNEL_COLORS_MS[si] :
              FUNNEL_COLORS_MS[si].replace(/^#/, '') === FUNNEL_COLORS_MS[si].replace(/^#/,'') ?
              hexToRgba(FUNNEL_COLORS_MS[si], 0.18) : FUNNEL_COLORS_MS[si]);
        });
        charts['monthStage'].update('none');
        renderTablesWithFilter();
      }
    }
  });
  document.getElementById('chartMonthStage').style.cursor = 'pointer';
  applyColVisibility('closed');
}

// â”€â”€ SORT STATE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
let tableSort = { col: 'ID_Opportunity', dir: 'asc' };
let colFilters = {};
let colFiltersVisible = false;

function sortBy(col) {
  if (tableSort.col === col) {
    tableSort.dir = tableSort.dir === 'asc' ? 'desc' : 'asc';
  } else {
    tableSort.col = col;
    tableSort.dir = 'asc';
  }
  updateSortIndicators();
  applyFilters(); // re-render table
}

function updateSortIndicators() {
  document.querySelectorAll('#sort-header-row th').forEach(th => th.classList.remove('sort-active'));
  const safeKey = SORT_IND_ID[tableSort.col] || tableSort.col;
  const ind = document.getElementById('si-' + safeKey);
  if (ind) {
    ind.textContent = tableSort.dir === 'asc' ? 'â–²' : 'â–¼';
    ind.closest('th').classList.add('sort-active');
  }
}

function setColFilter(col, val) {
  if (val.trim() === '') delete colFilters[col];
  else colFilters[col] = val.trim().toLowerCase();
  applyFilters();
}

function toggleColFilters() {
  colFiltersVisible = !colFiltersVisible;
  document.getElementById('col-filter-row').style.display = colFiltersVisible ? '' : 'none';
  const btn = document.getElementById('col-filter-btn');
  btn.classList.toggle('active', colFiltersVisible);
  btn.textContent = colFiltersVisible ? 'âŠ¡ Column Filters' : 'âŠŸ Column Filters';
  if (!colFiltersVisible) {
    // clear col filters on hide
    colFilters = {};
    document.querySelectorAll('#col-filter-row input').forEach(i => i.value='');
    applyFilters();
  }
}

function applyColFilters(rows) {
  return rows.filter(r => {
    return Object.entries(colFilters).every(([col, val]) => {
      const v = String(r[col] ?? '').toLowerCase();
      // numeric: interpret filter as range prefix like ">50000" or plain text match
      if (val.startsWith('>')) { const n = parseFloat(val.slice(1)); return !isNaN(n) && (parseFloat(r[col])||0) > n; }
      if (val.startsWith('<')) { const n = parseFloat(val.slice(1)); return !isNaN(n) && (parseFloat(r[col])||0) < n; }
      return v.includes(val);
    });
  });
}

const SORT_NUMERIC = new Set(['ID_Opportunity','Estimated_Value','Forecast_Deal_Value','Probability','Days_on_Stage']);
const SORT_DATE    = new Set(['Date_Next_Action','Date_Creation','Date_Actual_Stage','Forecast_Date','Forecast _Date']);
const SORT_IND_ID  = { 'Type of service': 'ServiceType', 'Forecast _Date': 'FcstQtr' };

function sortRows(rows) {
  const { col, dir } = tableSort;
  return [...rows].sort((a, b) => {
    const av = a[col], bv = b[col];
    let cmp;
    if (SORT_NUMERIC.has(col)) {
      cmp = (parseFloat(av) || 0) - (parseFloat(bv) || 0);
    } else if (SORT_DATE.has(col)) {
      if (!av && !bv) cmp = 0;
      else if (!av) cmp = 1; else if (!bv) cmp = -1;
      else cmp = av < bv ? -1 : av > bv ? 1 : 0;
    } else {
      const as = String(av ?? '').toLowerCase(), bs = String(bv ?? '').toLowerCase();
      if (!as && !bs) cmp = 0;
      else if (!as) cmp = 1; else if (!bs) cmp = -1;
      else cmp = as < bs ? -1 : as > bs ? 1 : 0;
    }
    return dir === 'desc' ? -cmp : cmp;
  });
}

// â”€â”€ FOLLOW-UP TABLE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function urgBadge(u) {
  if (!u) return '';
  const cls = u==='High'?'badge-urg-high':u==='Medium'?'badge-urg-mid':'badge-urg-low';
  return `<span class="${cls}">${u}</span>`;
}
function probBadge(p) {
  if (p===undefined||p===null||p==='') return 'â€”';
  const pct = Math.round(p*100);
  const cls = pct>=70?'badge-prob-high':pct>=40?'badge-prob-mid':'badge-prob-low';
  return `<span class="badge ${cls}">${pct}%</span>`;
}

function renderFollowupTable(open) {
  const tbody = document.getElementById('followup-tbody');
  const filtered = applyColFilters(open);
  const sorted = sortRows(filtered);
  if (!sorted.length) {
    tbody.innerHTML = '<tr><td colspan="23" class="empty-msg">No opportunities found for the selected filters.</td></tr>';
    return;
  }
  let alt = 0;
  tbody.innerHTML = sorted.map(r => {
    const ov = isOverdue(r.Date_Next_Action);
    const ds = isDueSoon(r.Date_Next_Action);
    const rowCls = ov ? 'overdue' : ds ? 'due-soon' : (alt++%2===0?'':'alt');
    const dateCls = ov ? 'date-overdue' : ds ? 'date-soon' : '';
    return `<tr class="${rowCls}">
      <td data-col="ID"><span class="opp-id-link" onclick="showOpportunity(${r.ID_Opportunity})">${r.ID_Opportunity||''}</span></td>
      <td data-col="Company"><strong>${r.Company||''}</strong></td>
      <td data-col="Seller">${r.Seller||'â€”'}</td>
      <td data-col="Stage"><span class="badge badge-stage">${r.Funnel_Stage||'â€”'}</span></td>
      <td data-col="EstValue">${fmtBRL(r.Estimated_Value)}</td>
      <td data-col="Forecast"><strong>${fmtBRL(r.Forecast_Deal_Value)}</strong></td>
      <td data-col="Prob">${probBadge(r.Probability)}</td>
      <td data-col="NextAction" class="${dateCls}">${fmtDate(r.Date_Next_Action)}</td>
      <td data-col="Notes" title="${r.OBS||''}">${r.OBS||'â€”'}</td>
      <td data-col="Urgency">${urgBadge(r.Urgency)}</td>
      <td data-col="TechFit" style="color:var(--gray-mid)">${r.Technical_Fit||'â€”'}</td>
      <td data-col="Budget" style="color:var(--gray-mid)">${r.Budget||'â€”'}</td>
      <td data-col="Days" style="color:var(--gray-mid)">${r.Days_on_Stage||0}</td>
      <td data-col="Contact" style="color:var(--gray-mid)">${r.Contact_Company||'â€”'}</td>
      <td data-col="Relation" style="color:var(--gray-mid)">${r.RelationShip_With_Customer||'â€”'}</td>
      <td data-col="ServiceType" style="color:var(--gray-mid)">${r['Type of service']||'â€”'}</td>
      <td data-col="Segment" style="color:var(--gray-mid)">${r.Segment||'â€”'}</td>
      <td data-col="LeadSrc" style="color:var(--gray-mid)">${r.Source_Lead||'â€”'}</td>
      <td data-col="Office" style="color:var(--gray-mid)">${r.Office||'â€”'}</td>
      <td data-col="State" style="color:var(--gray-mid)">${r.Estate||'â€”'}</td>
      <td data-col="Created" style="color:var(--gray-mid)">${fmtDate(r.Date_Creation)}</td>
      <td data-col="StageSince" style="color:var(--gray-mid)">${fmtDate(r.Date_Actual_Stage)}</td>
      <td data-col="FcstQtr" style="color:var(--gray-mid)">${r['Forecast _Date']||'â€”'}</td>
    </tr>`;
  }).join('');
  applyColVisibility('followup');
}

// â”€â”€ CLOSED DEALS TABLE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function renderClosedTable(won, lost) {
  const tbody = document.getElementById('closed-tbody');
  const all = [...won.map(r=>({...r,_cls:'won-row'})), ...lost.map(r=>({...r,_cls:'lost-row'}))];
  if (!all.length) {
    tbody.innerHTML = '<tr><td colspan="8" class="empty-msg">No closed deals for the selected filters.</td></tr>';
    return;
  }
  tbody.innerHTML = all.map(r => `<tr class="${r._cls}">
    <td data-col="ID"><span class="opp-id-link" onclick="showOpportunity(${r.ID_Opportunity})">${r.ID_Opportunity||''}</span></td>
    <td data-col="Company"><strong>${r.Company||''}</strong></td>
    <td data-col="Seller">${r.Seller||'â€”'}</td>
    <td data-col="Status">${r.Status||'â€”'}</td>
    <td data-col="EstValue">${fmtBRL(r.Estimated_Value)}</td>
    <td data-col="ServiceType">${r['Type of service']||'â€”'}</td>
    <td data-col="Segment">${r.Segment||'â€”'}</td>
    <td data-col="LostReason" style="color:var(--red)">${r.Reason_Lost||'â€”'}</td>
  </tr>`).join('');
}

// â”€â”€ COLLAPSIBLE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function toggleClosed() {
  const body  = document.getElementById('closed-body');
  const arrow = document.getElementById('closed-arrow');
  const open  = body.classList.toggle('open');
  arrow.textContent = open ? 'â–¼' : 'â–¶';
}

// â”€â”€ OPPORTUNITY MODAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function showOpportunity(id) {
  const r = RAW_DATA.find(d => d.ID_Opportunity === id);
  if (!r) return;
  const f = (v) => (v === null || v === undefined || v === '') ? 'â€”' : v;
  const fv = (v) => (v === null || v === undefined || v === '') ? 'â€”' : fmtBRL(v);
  const fp = (v) => (v === null || v === undefined || v === '') ? 'â€”' : Math.round(v*100)+'%';
  const fd = (v) => v ? fmtDate(v) : 'â€”';
  document.getElementById('opp-modal-body').innerHTML = `
    <div class="opp-modal-title">${f(r.Company)} <span style="color:#555;font-weight:400;font-size:14px">Â· #${r.ID_Opportunity}</span></div>
    <div class="opp-modal-sub">${f(r.Funnel_Stage)} Â· ${f(r.Status)}</div>
    <div class="opp-fields-grid">
      <div class="opp-field"><div class="opp-field-label">Seller</div><div class="opp-field-value">${f(r.Seller)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Contact</div><div class="opp-field-value">${f(r.Contact_Company)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Forecast Value</div><div class="opp-field-value highlight">${fv(r.Forecast_Deal_Value)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Estimated Value</div><div class="opp-field-value">${fv(r.Estimated_Value)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Probability</div><div class="opp-field-value">${fp(r.Probability)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Days on Stage</div><div class="opp-field-value">${f(r.Days_on_Stage)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Urgency</div><div class="opp-field-value">${f(r.Urgency)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Budget</div><div class="opp-field-value">${f(r.Budget)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Technical Fit</div><div class="opp-field-value">${f(r.Technical_Fit)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Relationship</div><div class="opp-field-value">${f(r.RelationShip_With_Customer)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Service Type</div><div class="opp-field-value">${f(r['Type of service'])}</div></div>
      <div class="opp-field"><div class="opp-field-label">Segment</div><div class="opp-field-value">${f(r.Segment)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Lead Source</div><div class="opp-field-value">${f(r.Source_Lead)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Office</div><div class="opp-field-value">${f(r.Office)}</div></div>
      <div class="opp-field"><div class="opp-field-label">State</div><div class="opp-field-value">${f(r.Estate)} / ${f(r.City)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Next Action</div><div class="opp-field-value" style="color:${isOverdue(r.Date_Next_Action)?'var(--red)':isDueSoon(r.Date_Next_Action)?'var(--orange)':'#f0f0f0'}">${fd(r.Date_Next_Action)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Forecast Quarter</div><div class="opp-field-value">${f(r['Forecast _Date'])}</div></div>
      <div class="opp-field"><div class="opp-field-label">Created</div><div class="opp-field-value">${fd(r.Date_Creation)}</div></div>
      <div class="opp-field"><div class="opp-field-label">Stage Since</div><div class="opp-field-value">${fd(r.Date_Actual_Stage)}</div></div>
      ${r.Reason_Lost ? `<div class="opp-field"><div class="opp-field-label">Lost Reason</div><div class="opp-field-value" style="color:var(--red)">${r.Reason_Lost}</div></div>` : ''}
      <div class="opp-field full-width"><div class="opp-field-label">Notes / Next Step</div><div class="opp-field-value" style="white-space:pre-wrap;color:#ccc">${f(r.OBS)}</div></div>
    </div>`;
  document.getElementById('opp-modal').classList.add('open');
  document.getElementById('opp-modal').style.display = 'flex';
}
function closeModal() {
  document.getElementById('opp-modal').classList.remove('open');
  document.getElementById('opp-modal').style.display = 'none';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// â”€â”€ CLEAR FILTERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function selectAll(name, allChecked) {
  document.querySelectorAll(`input[name="${name}"]`).forEach(cb => cb.checked = allChecked);
  applyFilters();
}

function toggleFilterValue(name, value) {
  const checkboxes = [...document.querySelectorAll(`input[name="${name}"]`)];
  const checked = checkboxes.filter(cb => cb.checked).map(cb => cb.value);
  // If only this value is already selected â†’ select all (deactivate filter)
  if (checked.length === 1 && checked[0] === value) {
    checkboxes.forEach(cb => cb.checked = true);
  } else {
    checkboxes.forEach(cb => cb.checked = cb.value === value);
  }
  applyFilters();
}

function clearFilters() {
  document.querySelectorAll('.filter-checkbox').forEach(cb => cb.checked = true);
  document.getElementById('date-from').value = '';
  document.getElementById('date-to').value   = '';
  document.querySelectorAll('#dynamic-filter-groups input').forEach(i => {
    if (i.type === 'checkbox') i.checked = true; else i.value = '';
  });
  applyFilters();
}

// â”€â”€ COLUMN VISIBILITY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const COL_VIS_DEFS = {
  followup: [
    {col:'ID',          label:'ID',            def:true},
    {col:'Company',     label:'Company',       def:true},
    {col:'Seller',      label:'Seller',        def:true},
    {col:'Stage',       label:'Stage',         def:true},
    {col:'EstValue',    label:'Est. Value',    def:true},
    {col:'Forecast',    label:'Forecast',      def:true},
    {col:'Prob',        label:'Probability',   def:true},
    {col:'NextAction',  label:'Next Action',   def:true},
    {col:'Notes',       label:'Notes',         def:false},
    {col:'Urgency',     label:'Urgency',       def:false},
    {col:'TechFit',     label:'Tech Fit',      def:false},
    {col:'Budget',      label:'Budget',        def:false},
    {col:'Days',        label:'Days',          def:true},
    {col:'Contact',     label:'Contact',       def:false},
    {col:'Relation',    label:'Relationship',  def:false},
    {col:'ServiceType', label:'Service Type',  def:false},
    {col:'Segment',     label:'Segment',       def:false},
    {col:'LeadSrc',     label:'Lead Source',   def:false},
    {col:'Office',      label:'Office',        def:false},
    {col:'State',       label:'State',         def:false},
    {col:'Created',     label:'Created',       def:false},
    {col:'StageSince',  label:'Stage Since',   def:false},
    {col:'FcstQtr',     label:'Fcst Quarter',  def:false},
  ],
  closed: [
    {col:'ID',          label:'ID',           def:true},
    {col:'Company',     label:'Company',      def:true},
    {col:'Seller',      label:'Seller',       def:true},
    {col:'Status',      label:'Status',       def:true},
    {col:'EstValue',    label:'Est. Value',   def:true},
    {col:'ServiceType', label:'Service Type', def:true},
    {col:'Segment',     label:'Segment',      def:true},
    {col:'LostReason',  label:'Lost Reason',  def:true},
  ]
};

const colVisState = {
  followup: Object.fromEntries(COL_VIS_DEFS.followup.map(c=>[c.col,c.def])),
  closed:   Object.fromEntries(COL_VIS_DEFS.closed.map(c=>[c.col,c.def])),
};

function initColVisDropdown(tableId) {
  const panel = document.getElementById('col-vis-'+tableId);
  if (!panel || panel.dataset.built) return;
  panel.dataset.built = '1';
  COL_VIS_DEFS[tableId].forEach(def => {
    const item = document.createElement('label');
    item.className = 'col-vis-item';
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.checked = colVisState[tableId][def.col];
    cb.addEventListener('change', () => {
      colVisState[tableId][def.col] = cb.checked;
      applyColVisibility(tableId);
    });
    item.appendChild(cb);
    item.appendChild(document.createTextNode(def.label));
    panel.appendChild(item);
  });
}

function applyColVisibility(tableId) {
  const tableEl = tableId === 'followup'
    ? document.getElementById('followup-table')
    : document.querySelector('#closed-body table');
  if (!tableEl) return;
  tableEl.querySelectorAll('[data-col]').forEach(el => {
    const col = el.getAttribute('data-col');
    if (colVisState[tableId][col] === false) el.classList.add('hidden-col');
    else el.classList.remove('hidden-col');
  });
}

function toggleColVis(tableId, evt) {
  evt && evt.stopPropagation();
  initColVisDropdown(tableId);
  const panel = document.getElementById('col-vis-'+tableId);
  const wasOpen = panel.classList.contains('open');
  // Close all
  document.querySelectorAll('.col-vis-dropdown.open').forEach(p=>p.classList.remove('open'));
  if (!wasOpen) panel.classList.add('open');
}

document.addEventListener('click', () => {
  document.querySelectorAll('.col-vis-dropdown.open').forEach(p=>p.classList.remove('open'));
});

// â”€â”€ PREFERENCES (localStorage) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const PREFS_KEY = 'apeiron_dashboard_prefs';

function savePrefs() {
  const prefs = { filterGroupState: { ...filterGroupState }, inputs: {}, forecastPeriod,
                  tableSort: { ...tableSort }, chartSel: {},
                  colVisibility: JSON.parse(JSON.stringify(colVisState)) };

  // Sidebar filter checkboxes
  document.querySelectorAll('input[type="checkbox"].filter-checkbox').forEach(cb => {
    if (!cb.checked) prefs.inputs[cb.name + '::' + cb.value] = false;
  });
  // Date/range/text inputs
  ['date-from','date-to'].forEach(id => {
    const el = document.getElementById(id);
    if (el && el.value) prefs.inputs[id] = el.value;
  });
  document.querySelectorAll('#dynamic-filter-groups input').forEach(i => {
    if (i.id && i.value && i.type !== 'checkbox') prefs.inputs[i.id] = i.value;
    else if (i.type === 'checkbox' && !i.checked) prefs.inputs[i.name+'::'+i.value] = false;
  });

  // Chart click selections (Set â†’ Array)
  Object.entries(chartHighlightState).forEach(([key, sel]) => {
    if (sel && sel.size > 0) prefs.chartSel[key] = [...sel];
  });

  // Column inline filters
  prefs.colFilters = { ...colFilters };
  prefs.colFiltersVisible = colFiltersVisible;

  localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
  document.getElementById('btn-save-prefs').classList.add('has-prefs');
  showToast('âœ“ Preferences saved');
}

function loadPrefs() {
  const raw = localStorage.getItem(PREFS_KEY);
  if (!raw) return;
  try {
    const prefs = JSON.parse(raw);

    // Restore filter group visibility
    if (prefs.filterGroupState) {
      Object.entries(prefs.filterGroupState).forEach(([key, val]) => {
        if (filterGroupState[key] !== undefined && filterGroupState[key] !== val) {
          setFilterGroup(key, val);
        }
      });
    }
    // Restore sidebar inputs
    if (prefs.inputs) {
      Object.entries(prefs.inputs).forEach(([key, val]) => {
        if (key.includes('::')) {
          const [name, value] = key.split('::');
          document.querySelectorAll(`input[name="${name}"][value="${value}"]`).forEach(cb => { cb.checked = val; });
        } else {
          const el = document.getElementById(key);
          if (el) el.value = val;
        }
      });
    }
    // Restore column sort
    if (prefs.tableSort) {
      tableSort.col = prefs.tableSort.col;
      tableSort.dir = prefs.tableSort.dir;
      updateSortIndicators();
    }
    // Restore chart selections (Array â†’ Set; re-apply highlight colors after charts render)
    if (prefs.chartSel) {
      Object.entries(prefs.chartSel).forEach(([key, arr]) => {
        chartHighlightState[key] = new Set(arr);
      });
      // Defer color application until after charts are built by applyFilters below
      setTimeout(() => {
        Object.entries(chartHighlightState).forEach(([key, sel]) => {
          if (!sel || !sel.size || !charts[key]) return;
          const bc = chartBaseColors[key];
          if (!bc) return;
          charts[key].data.datasets[bc.dsIdx].backgroundColor = dimColors(bc.colors, sel);
          charts[key].update('none');
        });
        renderTablesWithFilter();
      }, 50);
    }

    if (prefs.colVisibility) {
      ['followup','closed'].forEach(tid => {
        if (prefs.colVisibility[tid]) {
          Object.assign(colVisState[tid], prefs.colVisibility[tid]);
        }
      });
      setTimeout(() => { ['followup','closed'].forEach(applyColVisibility); }, 60);
    }
    if (prefs.forecastPeriod) setPeriod(prefs.forecastPeriod);

    // Restore column inline filters
    if (prefs.colFilters && Object.keys(prefs.colFilters).length) {
      colFilters = { ...prefs.colFilters };
      document.querySelectorAll('#col-filter-row input[data-filtercol]').forEach(input => {
        const fc = input.getAttribute('data-filtercol');
        if (colFilters[fc]) input.value = colFilters[fc];
      });
    }
    if (prefs.colFiltersVisible) {
      colFiltersVisible = true;
      const cfRow = document.getElementById('col-filter-row');
      if (cfRow) cfRow.style.display = '';
      const btn = document.getElementById('col-filter-btn');
      if (btn) { btn.classList.add('active'); btn.textContent = 'âŠ¡ Column Filters'; }
    }

    document.getElementById('btn-save-prefs').classList.add('has-prefs');
    applyFilters();
  } catch(e) { console.warn('Failed to load prefs', e); }
}

let _toastTimer = null;
function showToast(msg) {
  const t = document.getElementById('pref-toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

// â”€â”€ INIT CHECKBOXES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function buildCheckboxes(containerId, name, items) {
  const el = document.getElementById(containerId);
  el.innerHTML =
    `<div class="select-all-row">
       <span class="select-toggle" onclick="selectAll('${name}', true)">All</span>
       <span class="select-all-sep">|</span>
       <span class="select-toggle" onclick="selectAll('${name}', false)">None</span>
     </div>` +
    items.map(v => `
    <div class="checkbox-item">
      <input type="checkbox" class="filter-checkbox" name="${name}" value="${v}" id="${name}-${v}" checked>
      <label for="${name}-${v}">${v}</label>
    </div>`).join('');
  el.querySelectorAll('input').forEach(cb => cb.addEventListener('change', applyFilters));
}

// â”€â”€ INIT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
document.addEventListener('DOMContentLoaded', () => {
  // Date label
  document.getElementById('todayLabel').textContent = fmtDate(TODAY);

  // Build filters
  buildCheckboxes('filter-stage',  'stage',  STAGES);
  buildCheckboxes('filter-status', 'status', STATUS_LIST);
  buildCheckboxes('filter-source', 'source', SOURCE_LIST);

  // Date inputs
  document.getElementById('date-from').addEventListener('change', applyFilters);
  document.getElementById('date-to').addEventListener('change', applyFilters);

  // Build default-enabled dynamic filter groups
  initDynamicGroups();

  // Init sort indicator
  updateSortIndicators();

  // First render â€” then restore saved preferences
  applyFilters();
  loadPrefs();
});

// â”€â”€ DATA IMPORT (SheetJS + CSV) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function triggerDataImport() {
  document.getElementById('data-file-input').click();
}

function importDataFile(input) {
  const file = input.files[0];
  if (!file) return;
  const ext = file.name.split('.').pop().toLowerCase();
  const reader = new FileReader();

  reader.onload = function(e) {
    try {
      let rows;
      if (ext === 'csv') {
        rows = parseCSV(e.target.result);
      } else {
        // xlsx via SheetJS
        const wb = XLSX.read(e.target.result, { type: 'array', cellDates: true });
        const ws = wb.Sheets[wb.SheetNames[0]];
        rows = XLSX.utils.sheet_to_json(ws, { defval: null });
      }
      if (!rows || !rows.length) { showToast('âš  No data found'); return; }
      // Normalize numeric + date fields
      rows.forEach(r => {
        ['Estimated_Value','Forecast_Deal_Value','Probability','Days_on_Stage'].forEach(f => {
          if (r[f] != null) r[f] = parseFloat(r[f]) || 0;
        });
        ['Date_Next_Action','Date_Creation','Date_Actual_Stage','Forecast_Date','Forecast _Date'].forEach(f => {
          if (r[f] instanceof Date) {
            r[f] = r[f].toISOString().slice(0,10);
          }
        });
      });
      // Replace in-memory data
      RAW_DATA.length = 0;
      rows.forEach(r => RAW_DATA.push(r));
      // Update record count display
      document.querySelector('.record-count').innerHTML =
        `Showing <span id="countDisplay">â€”</span> of ${RAW_DATA.length} records`;
      applyFilters();
      showToast(`âœ“ ${RAW_DATA.length} records loaded`);
    } catch(err) {
      console.error(err);
      showToast('âš  Import failed: ' + err.message);
    }
    // Reset so same file can be re-selected
    input.value = '';
  };

  if (ext === 'csv') reader.readAsText(file);
  else               reader.readAsArrayBuffer(file);
}

function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  if (lines.length < 2) return [];
  const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g,''));
  return lines.slice(1).map(line => {
    // Simple CSV parse (handles quoted fields)
    const vals = []; let cur = ''; let inQ = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === '"') { inQ = !inQ; }
      else if (c === ',' && !inQ) { vals.push(cur.trim()); cur = ''; }
      else { cur += c; }
    }
    vals.push(cur.trim());
    const row = {};
    headers.forEach((h, i) => { row[h] = vals[i] !== undefined ? vals[i] : null; });
    return row;
  });
}
