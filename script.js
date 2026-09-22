const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveNavigation);

const resumeModal = document.getElementById("resumeModal");

function openResume() {

    resumeModal.classList.add("show");

    document.body.style.overflow = "hidden";

}

function closeResume() {

    resumeModal.classList.remove("show");

    document.body.style.overflow = "";

}

const videoModal = document.getElementById("videoModal");

const projectVideo = document.getElementById("projectVideo");

const videoSource = document.getElementById("videoSource");

function openVideo(videoPath) {

    videoSource.src = videoPath;

    projectVideo.load();

    videoModal.classList.add("show");

    document.body.style.overflow = "hidden";

    projectVideo.play().catch(() => {

        console.log("Autoplay was prevented by the browser.");

    });

}

function closeVideo() {

    projectVideo.pause();

    projectVideo.currentTime = 0;

    videoSource.src = "";

    projectVideo.load();

    videoModal.classList.remove("show");

    document.body.style.overflow = "";

}

const sourceModal = document.getElementById("sourceModal");

const sourceImage = document.getElementById("sourceImage");


function openSource(imagePath) {

    sourceImage.src = imagePath;

    sourceModal.classList.add("show");

    document.body.style.overflow = "hidden";

}

function closeSource() {

    sourceImage.src = "";

    sourceModal.classList.remove("show");

    document.body.style.overflow = "";

}

window.addEventListener("click", function(event) {

    if (event.target === resumeModal) {
        closeResume();
    }

    if (event.target === videoModal) {
        closeVideo();
    }

    if (event.target === sourceModal) {
        closeSource();
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeResume();

        closeVideo();

        closeSource();

    }

});