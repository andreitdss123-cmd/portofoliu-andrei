window.onload = function () {
    let tema = localStorage.getItem("tema");
    if(tema === "light"){
        document.body.classList.add("light-mode");
        document.getElementById("mode").textContent = "🌞";
    }
}

const modeBtn = document.getElementById("mode");

modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        modeBtn.textContent = "🌞"
        localStorage.setItem("tema", "light");
    } else {
        modeBtn.textContent = "🌙";
        localStorage.setItem("tema", "dark")
    }
});

const resetBtn = document.querySelector('.reset');

resetBtn.addEventListener('click', () => {
    const progresBars = document.querySelectorAll('.progres');
    
    progresBars.forEach(bar => {
        bar.style.animation = 'none';
        void bar.offsetWidth;
        bar.style.animation = null;
    });
});

const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});