import {getRandomColor} from './components/utils';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
console.log(innerHeight);
console.log(innerWidth);
let x = Math.random() * canvas.width;
let y = Math.random() * canvas.height;
let dx = 2;
let dy = 5;
let radius = 30;
let strokeStyle = getRandomColor();
const animate = () => {

    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = strokeStyle;
    ctx.stroke();

    if (x + radius > canvas.width || x - radius < 0) {
        dx = -dx;
        strokeStyle = getRandomColor();
    }
    if (y + radius > canvas.height || y - radius < 0) {
        dy = -dy;
        strokeStyle = getRandomColor();

    }

    x += dx;
    y += dy;
};

animate();
