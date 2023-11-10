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

const certificationsWrapper = document.querySelector(
    "#certifications .wrapper"
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
        name: "WOW WRAPS ADMIN V2",
        img: "./asset/image/wow-wraps-admin-v2.png",
        time: "9/2023",
        languages: [
            "ReactJs",
            "Typescript",
            "NodeJs",
            "ExpressJs",
            "MongoDB",
            "SocketIO",
            "...",
        ],
        desc: "This is a the version 2 of the wow wraps' admin. I updated the UI to make my web more consistence and also I built the chat box for both admin and client!",
        liveLink: "https://wow-wrap-admin-v2.vercel.app",
        sourceCode: "https://github.com/huydayne168/wow-wrap-admin.v2",
    },
    {
        name: "WOW WRAPS",
        img: "./asset/image/wow-wraps.png",
        time: "9/2023",
        languages: [
            "ReactJs",
            "Typescript",
            "NodeJs",
            "ExpressJs",
            "MongoDB",
            "...",
        ],
        desc: "This is a food ordering website.It has client and admin website .Allow customer to order food, search for foods, read blogs.Allow admin to manage users, foods, flashsales, vouchers,...",
        liveLink: "https://client-wow-wraps-tsx.vercel.app",
        sourceCode: "https://github.com/huydayne168/client-wow-wraps-tsx",
    },
    {
        name: "WOW WRAPS ADMIN",
        img: "./asset/image/wow-wraps-admin.png",
        time: "9/2023",
        languages: [
            "ReactJs",
            "Typescript",
            "NodeJs",
            "ExpressJs",
            "MongoDB",
            "...",
        ],
        desc: "This is a food ordering website.It has client and admin website .Allow customer to order food, search for foods, read blogs.Allow admin to manage users, foods, flashsales, vouchers,...",
        liveLink: "https://admin-wow-wraps-tsx.vercel.app",
        sourceCode: "https://github.com/huydayne168/admin-wow-wraps-tsx",
    },
    {
        name: "Booking",
        img: "./asset/image/booking.png",
        time: "9/2023",
        languages: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB", "..."],
        desc: "Hotel booking application with admin and client pages. This application allows admin users to manage hotel rooms and checkouts. Allow customers to log in and book hotel rooms",
        liveLink: "https://booking-web-fe.web.app",
        sourceCode: "https://github.com/huydayne168/booking-website-fe",
    },
    {
        name: "Boutique",
        img: "./asset/image/BoutiqueShop.png",
        time: "7/2023",
        languages: ["ReactJs"],
        desc: "This is a sales website with shopping cart functions, user login...",
        liveLink: "https://web-botique-reactjs.vercel.app/sign-up",
        sourceCode: "https://github.com/huydayne168/web-botique",
    },
    {
        name: "Netflex",
        img: "./asset/image/Netflex.png",
        time: "6/2023",
        languages: ["ReactJs"],
        desc: "This is a website about watching movies like Netflix",
        liveLink: "https://netflex-filmwebsite.web.app",
        sourceCode: "https://github.com/huydayne168/Netflex-filmWebsite",
    },
    {
        name: "News",
        img: "./asset/image/NewsAppImg.jpg",
        time: "5/2023",
        languages: ["HTML", "CSS", "Javascript"],
        desc: "This is a website about reading news, with functions such as getting articles from API, filtering newspapers, todo list, registration, user login",
        sourceCode: "https://github.com/huydayne168/NewsApp",
        liveLink: " https://huydayne168.github.io/NewsApp/",
    },
    {
        name: "Pets",

        img: "./asset/image/pet-manager-app.png",
        time: "4/2023",
        languages: ["HTML", "CSS", "Javascript"],
        desc: "This is a pet management website that mainly focuses on the javascript language.",
        sourceCode: "https://github.com/huydayne168/pet-management-app",
        liveLink: "https://huydayne168.github.io/pet-management-app/",
    },
    {
        name: "Instagram",

        img: "./asset/image/instagram-clone.png",
        time: "2/2023",
        languages: ["HTML", "CSS", "Javascript"],
        desc: "This is a website that clones the interface of the famous social networking site Instagram.",
        sourceCode: "https://github.com/huydayne168/instagarm",
        liveLink: "https://huydayne168.github.io/instagarm/",
    },
    {
        name: "Chill Clock",

        img: "./asset/image/chill-clock.png",
        time: "2/2023",
        languages: ["HTML", "CSS", "Javascript"],
        desc: "This is a website that can be used as a clock with some theme to change and it also can play some music.",
        sourceCode: "https://github.com/huydayne168/online-clock",
        liveLink: "https://huydayne168.github.io/online-clock/",
    },
    {
        name: "Trà xanh Bách Diệp",
        img: "./asset/image/tra-xanh-bach-diep.png",
        time: "4/2023",
        languages: ["HTML", "CSS", "Javascript"],
        desc: "This is a website about introducing teas in Hanoi",
        sourceCode: "https://github.com/huydayne168/tra-xanh-bach-diep",
        liveLink: "https://huydayne168.github.io/tra-xanh-bach-diep/",
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
                ${project.name}
            </div>
            <div >
                Techstacks: <span class= "tech-stacks">${project.languages.join(
                    ", "
                )}</span>
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

//////////////////////////////////
// Rendering Certifications
const certificationArr = [
    {
        imgPath: "./asset/image/htmlcssCertification.jpg",
        name: "HTML CSS certification at Funix",
    },
    {
        imgPath: "./asset/image/javascript.jpg",
        name: "Javascript certification at Funix",
    },
    {
        imgPath: "./asset/image/reactjsCertification.jpg",
        name: "ReactJS certification at Funix",
    },
    {
        imgPath: "./asset/image/toeic.jpg",
        name: "Toeic 2 skills: Listening and Reading | 810 points",
    },
];

certificationArr.forEach((item, index) => {
    certificationsWrapper.innerHTML += `
    <div class="certification-list__items" data-img=${item.imgPath}>
        <img
            src=${item.imgPath}
            alt="chill-clock"
        />
        <div class = "name">${item.name}</div>
    </div>  
    `;
});

const certificationItems = document.querySelectorAll(
    ".certification-list__items"
);

// certification image pops up:
certificationsWrapper.addEventListener("click", (e) => {
    // if(e.target.className)
    console.log(e.target.parentNode.className);
});

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
