function alertinfo(){
    swal("Purpose!", "This web page is only made for Educational Purpose and no commercial act is involved. It was given as a task to me.");
}

// navbar js

var CheckBox = document.getElementById("check");
function modal() {

    if (CheckBox.checked == true) {
        document.getElementById("main").style.right = "0%";
        document.getElementById("body_").style.overflow = "hidden";
    }
    else {
        document.getElementById("main").style.right = "-100%";
        document.getElementById("body_").style.overflow = "scroll";
    }
}

// end of navbar js

// stars js
        function createstars() {
            const section = document.querySelector('section')
            const createElement = document.createElement('span')
            var size = Math.random();

            createElement.style.width = 2 + size + 'px';
            createElement.style.height = 1 + size + 'px';
            createElement.style.left = Math.random() * innerWidth + "px";
            section.appendChild(createElement);
            setTimeout(() => {
                createElement.remove()
            }, 20000)
        }

        setInterval(createstars, 50)

        function createstars1() {
            const section = document.getElementById('section')
            const createElements = document.createElement('span')
            var size = Math.random();

            createElements.style.width = 2 + size + 'px';
            createElements.style.height = 1 + size + 'px';
            createElements.style.left = Math.random() * innerWidth + "px";
            section.appendChild(createElements);
            setTimeout(() => {
                createElements.remove()
            }, 20000)
        }

        setInterval(createstars1, 50)

// end of star js

// cards js
const wrapper = document.querySelector(".cover");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".cover i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }

    else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    clearTimeout(timeoutId);
    if (!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if (window.innerWidth < 300 || !isAutoPlay) return;
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2000);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);