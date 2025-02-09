document.getElementById('generateBtn').addEventListener('click', () => {
    let text = document.getElementById('textInput').value;
    let textColor = document.getElementById('textColor').value;
    let neonColor = document.getElementById('neonColor').value;
    let font = document.getElementById('fontSelect').value;
    let neonEffect = document.getElementById('neonToggle').checked;

    let container = document.getElementById('logoContainer');
    container.innerHTML = '';

    let span = document.createElement('span');
    span.classList.add('logo');
    span.textContent = text;
    span.style.color = textColor;
    span.style.fontFamily = font;

    if (neonEffect) {
        span.style.textShadow = `0 0 15px ${neonColor}, 0 0 30px ${neonColor}`;
    } else {
        span.style.textShadow = 'none';
    }

    container.appendChild(span);

    generateImage(text, textColor, neonColor, font, neonEffect);
});

document.getElementById('downloadBtn').addEventListener('click', () => {
    let canvas = document.getElementById('canvas');
    let link = document.createElement('a');
    link.download = 'neon_nickname.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
});

function generateImage(text, textColor, neonColor, font, neonEffect) {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#080808';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = `bold 60px ${font}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    if (neonEffect) {
        ctx.shadowColor = neonColor;
        ctx.shadowBlur = 20;
    } else {
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
    }

    ctx.fillStyle = textColor;
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
}
