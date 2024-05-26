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

//scrol sections
document.addEventListener("DOMContentLoaded", function() {
    // Function to check section visibility
    function checkSectionVisibility() {
        let sections = document.querySelectorAll("section");
        sections.forEach(function(section) {
            let position = section.getBoundingClientRect();
            if (position.top < window.innerHeight && position.bottom >= 0) {
                section.classList.add("visible");
            } else {
                section.classList.remove("visible");
            }
        });
    }

    // Run visibility check on scroll
    window.addEventListener("scroll", checkSectionVisibility);

    // Initial run to check visibility on page load
    checkSectionVisibility();
});

document.addEventListener("DOMContentLoaded", function() {
    let footer = document.querySelector("footer");

    window.addEventListener("scroll", function() {
        // Calculate how far the user has scrolled from the top
        let scrollHeight = document.documentElement.scrollHeight;
        let clientHeight = window.innerHeight;
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let scrollBottom = scrollHeight - clientHeight - scrollTop;

        // If the user has scrolled to the bottom of the page, show the footer
        if (scrollBottom < 50) { // You can adjust the threshold value (50 in this case)
            footer.classList.add("visible");
        } else {
            footer.classList.remove("visible");
        }
    });
});

//slider for pictures at UnifrontAPP.ejs
const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let scrollAmount = 0;
const slideWidth = slides.scrollWidth / slides.children.length;

prevBtn.addEventListener('click', () => {
    scrollAmount -= slideWidth;
    if (scrollAmount < 0) scrollAmount = 0;
    slides.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
    });
});

nextBtn.addEventListener('click', () => {
    scrollAmount += slideWidth;
    if (scrollAmount > slides.scrollWidth - slides.clientWidth) {
        scrollAmount = slides.scrollWidth - slides.clientWidth;
    }
    slides.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
    });
});




