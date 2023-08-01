"use strict";

///////////////////////////////////////////
///////////////////////////////////////////
///// Declare variables:

const timeTreeItems = document.querySelectorAll(
    ".education__time-tree .list-items .wrapper"
);

const prevBtn = document.querySelector(
    ".projects-list .fa-circle-chevron-left"
);
const nextBtn = document.querySelector(
    ".projects-list .fa-circle-chevron-right"
);

const projectsListWrapper = document.querySelector(
    ".projects-list__slider .wrapper"
);

///////////////////////////////////////////
///////////////////////////////////////////
///// Main things:

////////// Observe time tree items:
function loadItemCallback(entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.add("load-done");

    // observer.unobserve(entry.target);
}

const loadItem = new IntersectionObserver(loadItemCallback, {
    root: null,
    threshold: 0.5,
});

timeTreeItems.forEach((item) => loadItem.observe(item));

////////// Render Projects List:
const projectsList = [
    {
        img: "./asset/image/tra-xanh-bach-diep.png",
        time: "4/2023",
        languages: "HTML/CSS/Javascript",
        desc: "Đây là một trang web giới thiệu về loại trà tại Hà Nội",
        sourceCode: "https://github.com/huydayne168/tra-xanh-bach-diep",
        liveLink: "https://huydayne168.github.io/tra-xanh-bach-diep/",
    },

    {
        img: "./asset/image/chill-clock.png",
        time: "2/2023",
        languages: "HTML/CSS/Javascript",
        desc: "Đây là một trang web hiện thị giờ cùngvới một vài tính năng như nghe nhạc bình thường hay chuyển màu trang web.",
        sourceCode: "https://github.com/huydayne168/online-clock",
        liveLink: "https://huydayne168.github.io/online-clock/",
    },

    {
        img: "./asset/image/instagram-clone.png",
        time: "2/2023",
        languages: "HTML/CSS/Javascript",
        desc: "Đây là một trang web clone lại giao diện của trang mạng xã hội nổi tiếng Instagram.",
        sourceCode: "https://github.com/huydayne168/instagarm",
        liveLink: "https://huydayne168.github.io/instagarm/",
    },

    {
        img: "./asset/image/pet-manager-app.png",
        time: "4/2023",
        languages: "HTML/CSS/Javascript",
        desc: "Đây là một trang web quản lí thú cưng, trang web chủ yếu tập trung vào ngôn ngữ javascript.",
        sourceCode: "https://github.com/huydayne168/pet-management-app",
        liveLink: "https://huydayne168.github.io/pet-management-app/",
    },

    {
        img: "./asset/image/NewsAppImg.jpg",
        time: "5/2023",
        languages: "HTML/CSS/Javascript",
        desc: "Đây là một trang web về đọc tin tức, có các chức năng như lấy các bài báo từ API, lọc báo, todo list, đăng kí, đăng nhập người dùng",
        sourceCode: "https://github.com/huydayne168/NewsApp",
        liveLink: " https://huydayne168.github.io/NewsApp/",
    },

    {
        img: "./asset/image/Netflex.png",
        time: "6/2023",
        languages: "ReactJS",
        desc: "Đây là một trang web về giao diện xem phim giống Netflix",
        liveLink: "https://netflex-filmwebsite.web.app",
        sourceCode: "https://github.com/huydayne168/Netflex-filmWebsite",
    },
    {
        img: "./asset/image/BoutiqueShop.png",
        time: "7/2023",
        languages: "ReactJS",
        desc: "Đây là một trang web bán hàng với các chức năng giỏ hàng, đăng nhập người dùng...",
        liveLink: "https://boutique-asm03.web.app/",
        sourceCode: "https://github.com/huydayne168/web-botique",
    },
];

console.log(projectsList);

projectsList.forEach((project, index) => {
    projectsListWrapper.insertAdjacentHTML(
        "beforeend",
        `
    <div class="projects-list__items ${index === 0 ? "" : "scale-sm"}">
        <img
            src=${project.img}
            alt="chill-clock"
        />
        <div class="details">
            <div class="time">
                <i
                    class="fa-solid fa-calendar-days"
                ></i>
                ${project.time}
            </div>
            <div class="language">
                ${project.languages}
            </div>
            <p class="desc">
                ${project.desc}
            </p>
            <div class="buttons">
                <a
                    href=${project.sourceCode}
                    target=blank
                    >Source Code</a
                >
                <a
                    href=${project.liveLink}
                    target=blank
                    >Go Live</a
                >
            </div>
        </div>
    </div>
    `
    );
});
// declare projectsItems after rendering
const projectsListItems = document.querySelectorAll(".projects-list__items");
console.log(projectsListItems);

////////// Slider:
const sliderObject = {
    slideCount: 0,
    slidePositionX: 0,

    nextSlide: function () {
        nextBtn.addEventListener("click", () => {
            this.handleChangeSlide(-1);
        });
    },

    prevSlide: function () {
        prevBtn.addEventListener("click", () => {
            this.handleChangeSlide(1);
        });
    },

    handleChangeSlide: function (i) {
        const projectsListWrapperWidth = projectsListWrapper.offsetWidth;
        const projectsItemsLength = projectsListItems.length;
        if (i === -1) {
            if (
                this.slideCount >= 0 &&
                this.slideCount < projectsItemsLength - 1
            ) {
                this.slideCount++;
                projectsListWrapper.style.transform = `translateX(-${
                    (projectsListWrapperWidth + 40) * this.slideCount
                }px)`;
                console.log(this.slideCount);
                projectsListItems[this.slideCount - 1].classList.toggle(
                    "scale-sm"
                );
                projectsListItems[this.slideCount].classList.toggle("scale-sm");
            }
        } else if (i === 1) {
            if (
                this.slideCount > 0 &&
                this.slideCount <= projectsItemsLength - 1
            ) {
                this.slideCount--;
                projectsListWrapper.style.transform = `translateX(-${
                    (projectsListWrapperWidth + 40) * this.slideCount
                }px)`;
                console.log(this.slideCount);
                projectsListItems[this.slideCount + 1].classList.toggle(
                    "scale-sm"
                );
                projectsListItems[this.slideCount].classList.toggle("scale-sm");
            }
        }
    },

    start: function () {
        this.nextSlide();
        this.prevSlide();
    },
};

sliderObject.start();
