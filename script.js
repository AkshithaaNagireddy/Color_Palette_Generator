const NUM_COLORS = 5;
let colorsState = Array(NUM_COLORS).fill(null).map(() => ({
  hex: '',
  locked: false
}));

const paletteContainer = document.getElementById('palette-container');
const toast = document.getElementById('toast');
function getRandomHex() {
  const chars = '0123456789ABCDEF';
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    hex += chars[Math.floor(Math.random() * 16)];
  }
  return hex;
}

function generatePalette() {
  colorsState = colorsState.map(item => {
    if (item.locked) return item;
    return { hex: getRandomHex(), locked: false };
  });
  renderPalette();
}

function toggleLock(index) {
  colorsState[index].locked = !colorsState[index].locked;
  renderPalette();
}

function copyToClipboard(hex) {
  navigator.clipboard.writeText(hex).then(() => {
    toast.textContent = `Copied ${hex} to clipboard!`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
  });
}

function renderPalette() {
  paletteContainer.innerHTML = '';
  colorsState.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'color-card';
    card.style.backgroundColor = item.hex;

    card.innerHTML = `
      <div class="card-top">
        <button class="lock-btn" onclick="toggleLock(${index})">
          ${item.locked ? '🔒 Locked' : '🔓 Lock'}
        </button>
      </div>
      <div class="card-bottom" onclick="copyToClipboard('${item.hex}')">
        <div class="hex-code">${item.hex}</div>
        <div class="copy-hint">Click to Copy</div>
      </div>
    `;
    paletteContainer.appendChild(card);
  });
}
document.getElementById('generate-btn').addEventListener('click', generatePalette);

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    generatePalette();
  }
});

// Initial Execution
generatePalette();
