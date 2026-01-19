let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scroll naar beneden → verberg nav
        header.classList.add("poef");
    } else {
        // scroll naar boven → toon nav
        header.classList.remove("poef");
    }

    lastScrollY = currentScrollY;
});


const clickSound = document.querySelector("#uiClick");

document.querySelectorAll('a[href="product.html"]').forEach(link => {
    link.addEventListener("click", (e) => {
        if (!clickSound) return;

        e.preventDefault();
        clickSound.currentTime = 0;
        clickSound.play().catch(() => { });

        setTimeout(() => {
            window.location.href = link.href;
        }, 3000); // 150ms is genoeg voor een click sound
    });
});

