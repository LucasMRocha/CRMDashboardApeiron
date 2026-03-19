import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('APEIRON BRASIL - Commercial Leads Hub.html','r',encoding='utf-8') as f:
    html = f.read()

# ── Fix renderHeaders inline JS (oninput single quotes) ──────────────────────
# The fRow.innerHTML line has broken escaping - replace the whole renderHeaders body
OLD_RENDER_HEADERS = """function renderHeaders() {
  const visOrder = colOrder.filter(c => colVis[c] !== false);
  ['followup','closed'].forEach(tid => {
    const hRow = document.getElementById(tid==='followup'?'sort-header-row':'closed-sort-header-row');
    const fRow = document.getElementById(tid==='followup'?'col-filter-row':'closed-col-filter-row');
    if (!hRow || !fRow) return;
    const sortFn = tid==='followup' ? 'sortBy' : 'sortClosedBy';
    const siPfx  = tid==='followup' ? 'si-'    : 'csi-';
    const sState = tid==='followup' ? tableSort : closedSort;
    hRow.innerHTML = visOrder.map(col => {
      const def = COLUMN_DEFS.find(d=>d.col===col); if(!def) return '';
      const sf  = def.field.replace(/\\\\/g,'\\\\\\\\').replace(/'/g,"\\\\'");
      const sk  = (SORT_IND_ID && SORT_IND_ID[def.field]) || def.field;
      const act = sState.col===def.field?' sort-active':'';
      const dir = sState.col===def.field?(sState.dir==='asc'?'&#9650;':'&#9660;'):'&#9650;';
      return '<th class="sortable'+act+'" data-col="'+col+'" draggable="true" onclick="'+sortFn+"('"+sf+"')\">"+def.label+'<span class="sort-ind" id="'+siPfx+sk+'">'+dir+'</span></th>';
    }).join('');
    fRow.innerHTML = visOrder.map(col => {
      const def = COLUMN_DEFS.find(d=>d.col===col); if(!def) return '<td></td>';
      const ff = def.field.replace(/'/g,"\\\\'");
      return '<td><input data-filtercol="'+def.field+'" placeholder="'+def.label+'" oninput="setColFilter(\\''+ff+'\\',this.value)"></td>';
    }).join('');
    fRow.querySelectorAll('input[data-filtercol]').forEach(inp => {
      const fc = inp.getAttribute('data-filtercol');
      if (colFilters[fc]) inp.value = colFilters[fc];
    });
    hRow.querySelectorAll('th[data-col]').forEach(th => initDrag(th, th.getAttribute('data-col')));
  });
}"""

NEW_RENDER_HEADERS = r"""function renderHeaders() {
  const visOrder = colOrder.filter(c => colVis[c] !== false);
  ['followup','closed'].forEach(tid => {
    const hRow = document.getElementById(tid==='followup'?'sort-header-row':'closed-sort-header-row');
    const fRow = document.getElementById(tid==='followup'?'col-filter-row':'closed-col-filter-row');
    if (!hRow || !fRow) return;
    const sortFn = tid==='followup' ? 'sortBy' : 'sortClosedBy';
    const siPfx  = tid==='followup' ? 'si-'    : 'csi-';
    const sState = tid==='followup' ? tableSort : closedSort;
    hRow.innerHTML = visOrder.map(col => {
      const def = COLUMN_DEFS.find(d=>d.col===col); if(!def) return '';
      const sf  = def.field.replace(/\\/g,'\\\\').replace(/'/g,"\\'");
      const sk  = (typeof SORT_IND_ID!=='undefined' && SORT_IND_ID[def.field]) || def.field;
      const act = sState.col===def.field ? ' sort-active' : '';
      const dir = sState.col===def.field ? (sState.dir==='asc'?'\u25b2':'\u25bc') : '\u25b2';
      return `<th class="sortable${act}" data-col="${col}" draggable="true" onclick="${sortFn}('${sf}')">${def.label}<span class="sort-ind" id="${siPfx}${sk}">${dir}</span></th>`;
    }).join('');
    fRow.innerHTML = visOrder.map(col => {
      const def = COLUMN_DEFS.find(d=>d.col===col); if(!def) return '<td></td>';
      return `<td><input data-filtercol="${def.field}" placeholder="${def.label}" oninput="setColFilter(this.getAttribute('data-filtercol'),this.value)"></td>`;
    }).join('');
    fRow.querySelectorAll('input[data-filtercol]').forEach(inp => {
      const fc = inp.getAttribute('data-filtercol');
      if (colFilters[fc]) inp.value = colFilters[fc];
    });
    hRow.querySelectorAll('th[data-col]').forEach(th => initDrag(th, th.getAttribute('data-col')));
  });
}"""

if OLD_RENDER_HEADERS in html:
    html = html.replace(OLD_RENDER_HEADERS, NEW_RENDER_HEADERS, 1)
    print('renderHeaders fixed OK')
else:
    print('ERROR: renderHeaders old block not found')
    # show what's there
    idx = html.find('function renderHeaders')
    print(repr(html[idx:idx+200]))

# ── Fix setColFilter to use field key directly (since oninput now uses data-filtercol) ──
# setColFilter already works with field key, no change needed

# ── Replace renderFollowupTable ───────────────────────────────────────────────
old_rft_start = 'function renderFollowupTable(open) {'
old_rft_end   = '  applyColVisibility(\'followup\');\n}'

idx_s = html.index(old_rft_start)
idx_e = html.index(old_rft_end, idx_s) + len(old_rft_end)

NEW_RFT = r"""function renderFollowupTable(open) {
  const tbody = document.getElementById('followup-tbody');
  const filtered = applyColFilters(open);
  const sorted = sortRows(filtered);
  const visOrder = colOrder.filter(c => colVis[c] !== false);
  if (!sorted.length) {
    tbody.innerHTML = `<tr><td colspan="${visOrder.length}" class="empty-msg">No opportunities found for the selected filters.</td></tr>`;
    return;
  }
  let alt = 0;
  tbody.innerHTML = sorted.map(r => {
    const ov = isOverdue(r.Date_Next_Action), ds = isDueSoon(r.Date_Next_Action);
    const rowCls = ov?'overdue':ds?'due-soon':(alt++%2===0?'':'alt');
    return `<tr class="${rowCls}">${visOrder.map(col=>renderCell(r,col)).join('')}</tr>`;
  }).join('');
}"""

html = html[:idx_s] + NEW_RFT + html[idx_e:]
print('renderFollowupTable replaced OK')

# ── Replace renderClosedTable ─────────────────────────────────────────────────
old_rct_start = 'function renderClosedTable(won, lost) {'
old_rct_end   = '  applyColVisibility(\'closed\');\n}'

idx_s2 = html.index(old_rct_start)
idx_e2 = html.index(old_rct_end, idx_s2) + len(old_rct_end)

NEW_RCT = r"""function renderClosedTable(won, lost) {
  const tbody = document.getElementById('closed-tbody');
  const all = [...won.map(r=>({...r,_cls:'won-row'})), ...lost.map(r=>({...r,_cls:'lost-row'}))];
  const visOrder = colOrder.filter(c => colVis[c] !== false);
  if (!all.length) {
    tbody.innerHTML = `<tr><td colspan="${visOrder.length}" class="empty-msg">No closed deals for the selected filters.</td></tr>`;
    return;
  }
  const filtered = applyColFilters(all);
  const sorted   = sortClosedRows(filtered);
  tbody.innerHTML = sorted.map(r =>
    `<tr class="${r._cls}">${visOrder.map(col=>renderCell(r,col)).join('')}</tr>`
  ).join('');
}"""

html = html[:idx_s2] + NEW_RCT + html[idx_e2:]
print('renderClosedTable replaced OK')

# ── Add renderCell function (insert before renderFollowupTable) ───────────────
RENDER_CELL = r"""// ── CELL RENDERER ─────────────────────────────────────────────────────────────
function renderCell(r, col) {
  const def = COLUMN_DEFS.find(d=>d.col===col);
  if (!def) return '<td>—</td>';
  const g = 'color:var(--gray-mid)';
  switch(col) {
    case 'ID':
      return `<td data-col="ID"><span class="opp-id-link" onclick="showOpportunity(${r.ID_Opportunity})">${r.ID_Opportunity||''}</span></td>`;
    case 'Company':
      return `<td data-col="Company"><strong>${r.Company||''}</strong></td>`;
    case 'Stage':
      return `<td data-col="Stage"><span class="badge badge-stage">${r.Funnel_Stage||'—'}</span></td>`;
    case 'EstValue':
      return `<td data-col="EstValue">${fmtBRL(r.Estimated_Value)}</td>`;
    case 'Forecast':
      return `<td data-col="Forecast"><strong>${fmtBRL(r.Forecast_Deal_Value)}</strong></td>`;
    case 'Prob':
      return `<td data-col="Prob">${probBadge(r.Probability)}</td>`;
    case 'NextAction': {
      const ov=isOverdue(r.Date_Next_Action), ds=isDueSoon(r.Date_Next_Action);
      const cls=ov?'date-overdue':ds?'date-soon':'';
      return `<td data-col="NextAction" class="${cls}">${fmtDate(r.Date_Next_Action)}</td>`;
    }
    case 'Notes':
      return `<td data-col="Notes" style="max-width:200px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="${(r.OBS||'').replace(/"/g,'&quot;')}">${r.OBS||'—'}</td>`;
    case 'Urgency':
      return `<td data-col="Urgency">${urgBadge(r.Urgency)}</td>`;
    case 'LostReason':
      return `<td data-col="LostReason" style="color:var(--red)">${r.Reason_Lost||'—'}</td>`;
    case 'Description':
      return `<td data-col="Description" style="max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;${g}" title="${(r.Description||'').replace(/"/g,'&quot;')}">${r.Description||'—'}</td>`;
    case 'Created':    return `<td data-col="Created" style="${g}">${fmtDate(r.Date_Creation)}</td>`;
    case 'StageSince': return `<td data-col="StageSince" style="${g}">${fmtDate(r.Date_Actual_Stage)}</td>`;
    case 'LastContact':return `<td data-col="LastContact" style="${g}">${fmtDate(r.Date_Last_Contact)}</td>`;
    default: {
      const v = r[def.field];
      return `<td data-col="${col}" style="${g}">${(v!==null&&v!==undefined&&v!=='')?String(v):'—'}</td>`;
    }
  }
}

"""

idx_rft = html.index('function renderFollowupTable(open) {')
html = html[:idx_rft] + RENDER_CELL + html[idx_rft:]
print('renderCell added OK')

# ── Unify toggleColFilters (shared for both tables) ───────────────────────────
OLD_TCF = """function toggleColFilters() {
  colFiltersVisible = !colFiltersVisible;
  document.getElementById('col-filter-row').style.display = colFiltersVisible ? '' : 'none';
  const btn = document.getElementById('col-filter-btn');
  btn.classList.toggle('active', colFiltersVisible);
  btn.textContent = colFiltersVisible ? '\u229f Column Filters' : '\u22df Column Filters';
  if (!colFiltersVisible) {
    // clear col filters on hide
    colFilters = {};
    document.querySelectorAll('#col-filter-row input').forEach(i => i.value='');
    applyFilters();
  }
}"""

NEW_TCF = """function toggleColFilters() {
  colFiltersVisible = !colFiltersVisible;
  ['col-filter-row','closed-col-filter-row'].forEach(id => {
    const el = document.getElementById(id); if(el) el.style.display = colFiltersVisible?'':'none';
  });
  const btn = document.getElementById('col-filter-btn');
  if (btn) { btn.classList.toggle('active', colFiltersVisible); btn.textContent = colFiltersVisible?'\u229f Column Filters':'\u22df Column Filters'; }
  if (!colFiltersVisible) {
    colFilters = {};
    document.querySelectorAll('#col-filter-row input, #closed-col-filter-row input').forEach(i => i.value='');
    applyFilters();
  }
}"""

if OLD_TCF in html:
    html = html.replace(OLD_TCF, NEW_TCF, 1)
    print('toggleColFilters unified OK')
else:
    print('WARN: toggleColFilters old not found - checking...')
    idx = html.find('function toggleColFilters')
    print(repr(html[idx:idx+300]))

with open('APEIRON BRASIL - Commercial Leads Hub.html','w',encoding='utf-8') as f:
    f.write(html)
print('All render patches done')
