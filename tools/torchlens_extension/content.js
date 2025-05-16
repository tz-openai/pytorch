// Simplified content script implementing core behaviors.

function showTooltip(element, text) {
  const tip = document.createElement('div');
  tip.className = 'torchlens-tooltip';
  tip.textContent = text;
  tip.style.position = 'absolute';
  tip.style.background = '#ffc';
  tip.style.border = '1px solid #ccc';
  tip.style.padding = '2px 4px';
  tip.style.zIndex = 10000;
  document.body.appendChild(tip);
  const rect = element.getBoundingClientRect();
  tip.style.left = rect.right + 'px';
  tip.style.top = rect.top + 'px';
  element.addEventListener('mouseleave', () => tip.remove(), {once: true});
}

// Fetch summary from backend placeholder
async function fetchSummary(symbol) {
  // In real implementation this calls backend API.
  return `Summary for ${symbol}`;
}

// Hover handler for summaries
function handleHover(event) {
  const target = event.target;
  if (!target || !target.textContent) return;
  fetchSummary(target.textContent.trim()).then(text => showTooltip(target, text));
}

document.addEventListener('mouseover', handleHover);

// Ctrl+Click navigation placeholder
function handleClick(event) {
  if (event.ctrlKey) {
    const symbol = event.target.textContent.trim();
    // Real implementation would look up symbol location
    console.log('Navigate to definition of', symbol);
  }
}

document.addEventListener('click', handleClick);

// Inject graph visualization button on traced model pages
function maybeAddGraphButton() {
  if (document.querySelector('.torchlens-graph-btn')) return;
  if (!document.body.innerText.includes('torch.fx')) return;
  const btn = document.createElement('button');
  btn.textContent = 'Visualize Graph';
  btn.className = 'torchlens-graph-btn';
  btn.style.position = 'fixed';
  btn.style.bottom = '20px';
  btn.style.right = '20px';
  btn.onclick = () => alert('Graph visualization would appear');
  document.body.appendChild(btn);
}

document.addEventListener('DOMContentLoaded', maybeAddGraphButton);

// PR insights panel placeholder
function injectPrInsights() {
  if (!location.pathname.includes('/pull/')) return;
  const panel = document.createElement('div');
  panel.textContent = 'PR insights would be shown here';
  panel.style.background = '#eef';
  panel.style.padding = '4px';
  panel.style.marginBottom = '8px';
  const container = document.querySelector('#discussion_bucket');
  if (container) container.prepend(panel);
}

document.addEventListener('DOMContentLoaded', injectPrInsights);
