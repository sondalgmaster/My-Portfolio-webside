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

// Tiping animation
document.addEventListener('DOMContentLoaded', function() {
    const textName1 = "Hi, I'm";
    const textName2 = "{Patryk Ryszard Posluszny}";
    const textRole = "Junior Developer";

    const nameElement1 = document.getElementById('name1');
    const nameElement2 = document.getElementById('name2');
    const roleElement = document.getElementById('role');

    let index1 = 0;
    let index2 = 0;
    let index3 = 0;

    function typeText(element, text, index, callback) {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            setTimeout(() => typeText(element, text, index + 1, callback), 100);
        } else if (callback) {
            setTimeout(callback, 500);  // Delay before starting the next typing effect
        }
    }

    typeText(nameElement1, textName1, index1, () => {
        typeText(nameElement2, textName2, index2, () => {
            typeText(roleElement, textRole, index3);
        });
    });
});

