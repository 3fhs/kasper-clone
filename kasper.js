let sliderContainer = document.querySelector(".landing");
let arraySlider = document.querySelectorAll(".landing-img img");
let buletsLink = document.querySelectorAll(".bulets li");
let clickRight =document.querySelector(".click-right");
let clickLeft =document.querySelector(".click-left");
let current = 1;

clickRight.onclick = nextPhoto;
clickLeft.onclick = prevPhoto;

function nextPhoto() {
    if(current == 3) {
        return false;
    }else {
        deleteActive()
        current++;
        handel();
    }
}

function prevPhoto() {
    if(current == 1) {
        return false;
    }else {
        deleteActive()
        current--;
        handel();
    }
}

function handel(){
    arraySlider[current - 1].classList.add("active");
    buletsLink[current - 1].classList.add("active");
}

function deleteActive() {
    arraySlider.forEach(function (img) {
        img.classList.remove("active");
    })
    buletsLink.forEach(function (bulit) {
        bulit.classList.remove("active");
    })
}
// end landing in header 
let close = document.querySelector(".close");

function openStart (){
    close.classList.toggle("open");
}
let ioggleMinu = document.querySelector(".toggle-menu").onclick = function eventOpen(){
    openStart ();
}
// end header toggle
// starts scroling 
let scrollingup = document.querySelector(".scrolling-top");
// start about us
let num = document.querySelectorAll(".nums .num");
let section = document.querySelector(".about-us");
let start = false; //function started no


window.onscroll = function () {
    if(this.scrollY >= 885) { 
        scrollingup.classList.add("scrolling-up"); 
    } else {
        scrollingup.classList.remove("scrolling-up");
    }

// start about us
    if(window.scrollY >= section.offsetTop){
        if(!start){
            num.forEach((num) => counterGoal(num))
        }
        start = true;
    }
}
scrollingup.onclick = function (){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

// start about us
function counterGoal(el) {
    let gool = el.dataset.goal;
    let counter = setInterval(() => {
        el.textContent++;
        if(el.textContent == gool){
            clearInterval(counter);
        }
    }, 5000 / gool);
}


// end scroll up 
// start portfolio
let choose = document.querySelectorAll(".choose li");
choose.forEach(item => {
    item.addEventListener("click", clickAdd);
})

function clickAdd() {
    deletAllActivity();
    this.classList.add("activity");
}
function deletAllActivity(){
    choose.forEach(function(activity) {
        activity.classList.remove("activity");
    })
}
// end portfolio 