//SCROLL ANIMATE
var scroll = window.requestAnimationFrame ||
    function (callback) { window.setTimeout(callback, 1000 / 60) };
var elementsToShow = document.querySelectorAll('.show-on-scroll');
function loop() {

    Array.prototype.forEach.call(elementsToShow, function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        }
    });

    scroll(loop);
}
loop();

// function isElementInViewport(el) {
//     // special bonus for those using jQuery
//     if (typeof jQuery === "function" && el instanceof jQuery) {
//         el = el[0];
//     }
//     var rect = el.getBoundingClientRect();
//     return (
//         (rect.top <= 0
//             && rect.bottom >= 0)
//         ||
//         (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
//             rect.top <= (window.innerHeight || document.documentElement.clientHeight))
//         ||
//         (rect.top >= 0 &&
//             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
//     );
// }




//SCROLL ANIMATE
var scroll2 = window.requestAnimationFrame ||
    function (callback2) { window.setTimeout(callback2, 1000 / 60) };
var elementsToShow2 = document.querySelectorAll('.show-on-scroll2');
function loop2() {

    Array.prototype.forEach.call(elementsToShow2, function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible2');
        }
    });

    scroll2(loop2);
}
loop2();

// function isElementInViewport(el) {
//     // special bonus for those using jQuery
//     if (typeof jQuery === "function" && el instanceof jQuery) {
//         el = el[0];
//     }
//     var rect2 = el.getBoundingClientRect();
//     return (
//         (rect2.top <= 0
//             && rect2.bottom >= 0)
//         ||
//         (rect2.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
//             rect2.top <= (window.innerHeight || document.documentElement.clientHeight))
//         ||
//         (rect2.top >= 0 &&
//             rect2.bottom <= (window.innerHeight || document.documentElement.clientHeight))
//     );
// }



//SCROLL ANIMATE
// var scroll3 = window.requestAnimationFrame ||
//     function (callback3) { window.setTimeout(callback3, 1000 / 60) };
// var elementsToShow3 = document.querySelectorAll('.show-on-scroll3');
// function loop3() {

//     Array.prototype.forEach.call(elementsToShow3, function (element) {
//         if (isElementInViewport(element)) {
//             element.classList.add('is-visible3');
//         }
//     });

//     scroll3(loop3);
// }
// loop3();

function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect3 = el.getBoundingClientRect();
    return (
        (rect3.top <= 0
            && rect3.bottom >= 0)
        ||
        (rect3.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect3.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect3.top >= 0 &&
            rect3.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}



//TOP NAVIGATION
function NavBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("myTopnav").style.width = "100%";
        document.getElementById("myTopnav").style.backgroundColor = "rgba(1, 42, 74, 1)";
        document.getElementById("header").style.position = "fixed";
        document.getElementById("header").style.top = "0%";
        document.getElementById("roll_back").style.display = "flex";
    } else {
        document.getElementById("myTopnav").style.width = "80%";
        document.getElementById("myTopnav").style.backgroundColor = "rgba(1, 42, 74, 0.6)";
        document.getElementById("header").style.position = "fixed";
        document.getElementById("header").style.top = "2rem";
        document.getElementById("roll_back").style.display = "none";
    }
}
















//STAT COUNTER
// $.fn.jQuerySimpleCounter = function (options) {
//     var settings = $.extend({
//         start: 0,
//         end: 100,
//         easing: 'swing',
//         duration: 400,
//         complete: ''
//     }, options);
//     var thisElement = $(this);
//     $({ count: settings.start }).animate({ count: settings.end }, {
//         duration: settings.duration,
//         easing: settings.easing,
//         step: function () {
//             var mathCount = Math.ceil(this.count);
//             thisElement.text(mathCount);
//         },
//         complete: settings.complete
//     });
// };
// $('#number1').jQuerySimpleCounter({ end: 52, duration: 3000 });
// $('#number2').jQuerySimpleCounter({ end: 50, duration: 3000 });
// $('#number3').jQuerySimpleCounter({ end: 5, duration: 2000 });
// $('#number4').jQuerySimpleCounter({ end: 3, duration: 2500 });










//SLIDER
let slide_data = [
    {
        'src': './assets/img/slider.jpg',
        'title': 'به سایت <em>کجا بریم </em> خوش آمدید',
        'copy': ''
    },

    {
        'src': './assets/img/slider2.jpg',
        'title': 'به سایت <em>کجا بریم </em> خوش آمدید'
    },

    {
        'src': './assets/img/slider3.jpg',
        'title': 'به سایت <em>کجا بریم </em> خوش آمدید',
        'copy': ''
    }
];



let slides = [],
    captions = [];

let autoplay = setInterval(function () {
    nextSlide();
}, 5000);
let container = document.getElementById('container');
let leftSlider = document.getElementById('left-col');
// console.log(leftSlider);
let down_button = document.getElementById('down_button');
// let caption = document.getElementById('slider-caption');
// let caption_heading = caption.querySelector('caption-heading');

down_button.addEventListener('click', function (e) {
    e.preventDefault();
    clearInterval(autoplay);
    nextSlide();
    autoplay;
});

for (let i = 0; i < slide_data.length; i++) {
    let slide = document.createElement('div'),
        caption = document.createElement('div'),
        slide_title = document.createElement('div');

    slide.classList.add('slide');
    slide.setAttribute('style', 'background:url(' + slide_data[i].src + ')');
    caption.classList.add('caption');
    slide_title.classList.add('caption-heading');
    slide_title.innerHTML = '<h1>' + slide_data[i].title + '</h1>';

    switch (i) {
        case 0:
            slide.classList.add('current');
            caption.classList.add('current-caption');
            break;
        case 1:
            slide.classList.add('next');
            caption.classList.add('next-caption');
            break;
        case slide_data.length - 1:
            slide.classList.add('previous');
            caption.classList.add('previous-caption');
            break;
        default:
            break;
    }

    caption.appendChild(slide_title);
    caption.insertAdjacentHTML('beforeend', '<div class="caption-subhead"></div>');
    slides.push(slide);
    captions.push(caption);
    leftSlider.appendChild(slide);
    container.appendChild(caption);
}
// console.log(slides);

function nextSlide() {
    // caption.classList.add('offscreen');

    slides[0].classList.remove('current');
    slides[0].classList.add('previous', 'change');
    slides[1].classList.remove('next');
    slides[1].classList.add('current');
    slides[2].classList.add('next');
    let last = slides.length - 1;
    slides[last].classList.remove('previous');

    captions[0].classList.remove('current-caption');
    captions[0].classList.add('previous-caption', 'change');
    captions[1].classList.remove('next-caption');
    captions[1].classList.add('current-caption');
    captions[2].classList.add('next-caption');
    let last_caption = captions.length - 1;

    // console.log(last);
    captions[last].classList.remove('previous-caption');

    let placeholder = slides.shift();
    let captions_placeholder = captions.shift();
    slides.push(placeholder);
    captions.push(captions_placeholder);
}

let heading = document.querySelector('.caption-heading');


function whichTransitionEvent() {
    var t,
        el = document.createElement("fakeelement");

    var transitions = {
        "transition": "transitionend",
        "OTransition": "oTransitionEnd",
        "MozTransition": "transitionend",
        "WebkitTransition": "webkitTransitionEnd"
    };


    for (t in transitions) {
        if (el.style[t] !== undefined) {
            return transitions[t];
        }
    }
}

var transitionEvent = whichTransitionEvent();
caption.addEventListener(transitionEvent, customFunction);

function customFunction(event) {
    caption.removeEventListener(transitionEvent, customFunction);
    console.log('animation ended');

    // Do something when the transition ends
}