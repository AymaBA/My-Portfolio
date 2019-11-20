let background;
let particle;
let initiated = false;

function update(timestamp) {
    particle.update(timestamp);
    window.requestAnimationFrame(update);
}

function resize() {
    background.width = window.innerWidth;
    background.height = window.innerHeight;
}

window.onresize = resize;

function init() {
    try {
        background = document.getElementById("background");
        resize();
        particle = new Particle(background);
        window.requestAnimationFrame(update);
        initiated = true;
    } catch (err) {
        setTimeout(init, 100);
    }
}

setTimeout(init, 0);

function loadend() {
    if (!initiated) {
        setTimeout(loadend, 0);
        return;
    }
}

window.onload = loadend;