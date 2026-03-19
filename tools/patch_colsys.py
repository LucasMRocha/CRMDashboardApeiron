import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('APEIRON BRASIL - Opportunities Leads Hub.html','r',encoding='utf-8') as f:
    html = f.read()

old_start = 'const COL_VIS_DEFS = {'
old_end   = "document.addEventListener('click', () => {\n  document.querySelectorAll('.col-vis-dropdown.open').forEach(p=>p.classList.remove('open'));\n});"

idx_start = html.index(old_start)
idx_end   = html.index(old_end) + len(old_end)

NEW = """// â”€â”€ COLUMN DEFINITIONS (database order) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const COLUMN_DEFS = [
  {col:'ID',          field:'ID_Opportunity',             label:'ID',              defVis:true },
  {col:'Description', field:'Description',                label:'Description',     defVis:false},
  {col:'Created',     field:'Date_Creation',              label:'Created',         defVis:false},
  {col:'Week',        field:'Week',                       label:'Week',            defVis:false},
  {col:'LeadSrc',     field:'Source_Lead',                label:'Lead Source',     defVis:false},
  {col:'Company',     field:'Company',                    label:'Company',         defVis:true },
  {col:'SizeCompany', field:'Size_Company',               label:'Co. Size',        defVis:false},
  {col:'Contact',     field:'Contact_Company',            label:'Contact',         defVis:false},
  {col:'TaxID',       field:'Tax_ID',                     label:'Tax ID',          defVis:false},
  {col:'Segment',     field:'Segment',                    label:'Segment',         defVis:false},
  {col:'Country',     field:'Country',                    label:'Country',         defVis:false},
  {col:'State',       field:'Estate',                     label:'State',           defVis:false},
  {col:'Seller',      field:'Seller',                     label:'Seller',          defVis:true },
  {col:'Office',      field:'Office',                     label:'Office',          defVis:false},
  {col:'Stage',       field:'Funnel_Stage',               label:'Stage',           defVis:true },
  {col:'Status',      field:'Status',                     label:'Status',          defVis:false},
  {col:'LostReason',  field:'Reason_Lost',                label:'Lost Reason',     defVis:false},
  {col:'StageSince',  field:'Date_Actual_Stage',          label:'Stage Since',     defVis:false},
  {col:'Days',        field:'Days_on_Stage',              label:'Days',            defVis:true },
  {col:'LastContact', field:'Date_Last_Contact',          label:'Last Contact',    defVis:false},
  {col:'DaysSinceLast',field:'Days_Since_Last_Contact',   label:'Days Since Last', defVis:false},
  {col:'NextAction',  field:'Date_Next_Action',           label:'Next Action',     defVis:true },
  {col:'Notes',       field:'OBS',                        label:'Notes',           defVis:false},
  {col:'Relation',    field:'RelationShip_With_Customer', label:'Relation',        defVis:false},
  {col:'Urgency',     field:'Urgency',                    label:'Urgency',         defVis:false},
  {col:'TechFit',     field:'Technical_Fit',              label:'Tech Fit',        defVis:false},
  {col:'Budget',      field:'Budget',                     label:'Budget',          defVis:false},
  {col:'Prob',        field:'Probability',                label:'Probability',     defVis:true },
  {col:'ServiceType', field:'Type of service',            label:'Service Type',    defVis:false},
  {col:'Currency',    field:'Currency',                   label:'Currency',        defVis:false},
  {col:'FcstQtr',     field:'Forecast _Date',             label:'Fcst Quarter',    defVis:false},
  {col:'EstValue',    field:'Estimated_Value',            label:'Est. Value',      defVis:true },
  {col:'Forecast',    field:'Forecast_Deal_Value',        label:'Forecast',        defVis:true },
];

let colOrder = COLUMN_DEFS.map(d => d.col);
const colVis  = Object.fromEntries(COLUMN_DEFS.map(d => [d.col, d.defVis]));

// â”€â”€ RENDER HEADERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function renderHeaders() {
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
}

function initDrag(th, col) {
  th.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', col);
    e.dataTransfer.effectAllowed = 'move';
    th.classList.add('dragging');
  });
  th.addEventListener('dragend', () => th.classList.remove('dragging'));
  th.addEventListener('dragover', e => { e.preventDefault(); th.classList.add('drag-over'); });
  th.addEventListener('dragleave', () => th.classList.remove('drag-over'));
  th.addEventListener('drop', e => {
    e.preventDefault(); th.classList.remove('drag-over');
    const from = e.dataTransfer.getData('text/plain'), to = col;
    if (from===to) return;
    const fi=colOrder.indexOf(from), ti=colOrder.indexOf(to);
    if (fi<0||ti<0) return;
    colOrder.splice(fi,1); colOrder.splice(ti,0,from);
    renderHeaders(); applyFilters();
  });
}

// â”€â”€ SHARED COLS PANEL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function initColVisPanel() {
  const panel = document.getElementById('col-vis-panel');
  if (!panel || panel.dataset.built) return;
  panel.dataset.built = '1';
  const btnRow = document.createElement('div');
  btnRow.style.cssText = 'display:flex;gap:6px;margin-bottom:8px;';
  ['All','None'].forEach(mode => {
    const btn = document.createElement('button');
    btn.textContent = mode==='All' ? '\u2611 All' : '\u2610 None';
    btn.style.cssText = 'flex:1;background:#222;border:1px solid #333;border-radius:4px;color:#ccc;font-size:10px;font-family:Inter,sans-serif;padding:3px 0;cursor:pointer;';
    btn.onmouseover = ()=>btn.style.borderColor='var(--green)';
    btn.onmouseout  = ()=>btn.style.borderColor='#333';
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const val = mode==='All';
      COLUMN_DEFS.forEach(d=>{ colVis[d.col]=val; });
      panel.querySelectorAll('input[type="checkbox"]').forEach(cb=>cb.checked=val);
      renderHeaders(); applyFilters();
    });
    btnRow.appendChild(btn);
  });
  panel.appendChild(btnRow);
  [...COLUMN_DEFS].sort((a,b)=>a.label.localeCompare(b.label)).forEach(def => {
    const item = document.createElement('label');
    item.className = 'col-vis-item';
    const cb = document.createElement('input');
    cb.type='checkbox'; cb.checked=colVis[def.col]!==false;
    cb.addEventListener('change', ()=>{ colVis[def.col]=cb.checked; renderHeaders(); applyFilters(); });
    item.appendChild(cb); item.appendChild(document.createTextNode(def.label));
    panel.appendChild(item);
  });
}

function toggleColVisPanel(evt) {
  evt && evt.stopPropagation();
  initColVisPanel();
  const panel = document.getElementById('col-vis-panel');
  const wasOpen = panel.classList.contains('open');
  document.querySelectorAll('.col-vis-dropdown.open').forEach(p=>p.classList.remove('open'));
  if (!wasOpen) panel.classList.add('open');
}

document.addEventListener('click', ()=>{
  document.querySelectorAll('.col-vis-dropdown.open').forEach(p=>p.classList.remove('open'));
});"""

html = html[:idx_start] + NEW + html[idx_end:]

with open('APEIRON BRASIL - Opportunities Leads Hub.html','w',encoding='utf-8') as f:
    f.write(html)
print('Column system replaced OK')

