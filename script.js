const flowerElement = document.getElementById('flower');
const roseMessage = document.getElementById('roseMessage');

const flowers = {
    'R': { emoji: '🌹', color: 'red', glow: '0 0 10px red, 0 0 20px pink, 0 0 40px crimson', message: true },
    'T': { emoji: '🌷', color: 'pink', glow: '0 0 10px pink, 0 0 20px fuchsia, 0 0 40px purple', message: false },
    'L': { emoji: '🌺', color: 'magenta', glow: '0 0 10px magenta, 0 0 20px violet, 0 0 40px purple', message: false },
    'D': { emoji: '🌼', color: 'yellow', glow: '0 0 10px yellow, 0 0 20px gold, 0 0 40px orange', message: false },
    'S': { emoji: '🌻', color: 'yellow', glow: '0 0 10px yellow, 0 0 20px orange, 0 0 40px red', message: false }
};

document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase();
    if (flowers[key]) {
        flowerElement.textContent = flowers[key].emoji;
        flowerElement.style.textShadow = flowers[key].glow;
        roseMessage.style.display = flowers[key].message ? 'block' : 'none';
    }
});
