// JavaScript for glowing effect around mouse cursor

document.addEventListener('DOMContentLoaded', function() {
    const glow = document.createElement('div');
    glow.classList.add('glow');
    document.body.appendChild(glow);

    document.addEventListener('mousemove', function(e) {
        glow.style.left = `${e.pageX}px`;
        glow.style.top = `${e.pageY}px`;
    });
});
