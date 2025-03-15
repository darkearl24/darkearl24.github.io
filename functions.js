document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".menu a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });

     const readMoreBtn = document.getElementById("readMoreBtn");
     const moreText = document.getElementById("moreText");

     readMoreBtn.addEventListener("click", function () {
        if (moreText.style.display === "none" || moreText.style.display === "") {
            moreText.style.display = "inline";
            readMoreBtn.innerText = "Read Less";
        } else {
            moreText.style.display = "none";
            readMoreBtn.innerText = "Read More";
        }
    });

    let menu = document.querySelector('#menu');
    let navbar = document.querySelector('.menu')

    menu.onclick = () =>{
        menu.classList.toggle('fa-times')
        navbar.classList.toggle('active')
    }
    document.querySelectorAll(".skill-box").forEach((box) => {
        box.addEventListener("click", function () {
            this.querySelector(".skillbbox_layer").classList.toggle("active");
        });
    });
    document.querySelectorAll('.proj-box').forEach((box) => {
        box.addEventListener('click', function (){
            this.querySelector(".proj-layer").classList.toggle("active")
        });
    });

});
