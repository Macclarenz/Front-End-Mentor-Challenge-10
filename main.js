const navToggle = document.querySelector('.nav-hamburger-btn');

const navDisplay = (navToggle) => {
    const navHamburger = document.getElementById('nav-hamburger-img');
    const navContainer = document.querySelector('nav');

    navToggle.addEventListener('click', () => {
        navContainer.classList.toggle('nav-active');

        if (navContainer.classList.contains('nav-active')) {
            navHamburger.src = './images/icon-close.svg';
        } else {
            navHamburger.src = './images/icon-hamburger.svg';
        }
    })
}

navDisplay(navToggle);

const navDropdownToggle = document.querySelectorAll('.nav-dropdown-btn');
navDropdownToggle.forEach(dropdown => dropdown.addEventListener('click', navDropdownDisplay))

function navDropdownDisplay () {
    navDropdownToggle.forEach((dropdown, index) => {
        if (this === navDropdownToggle[index]) {
            dropdown.classList.toggle('nav-dropdown-active');
        } else {
            dropdown.classList.remove('nav-dropdown-active');
        }
    })
}



// SCROLL REVEAL
window.addEventListener('scroll', reveal);

function reveal () {
    var reveals = document.querySelectorAll('.main-text');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}


// SLIDER ANIMATION
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.fromTo('.slider-h2', {opacity: 0,}, {opacity: 1.5, delay: .35, duration: .8, stagger: .25})
tl.to('.slider', { opacity: 0, duration: .5, delay: .8, zIndex: -1});
tl.fromTo('.header-container', {opacity: 0}, {opacity: 1, duration: .3});
tl.fromTo('main', {opacity: 0}, {opacity: 1, duration: .3}, '-=0.3');
tl.fromTo('footer .container', {opacity: 0}, {opacity: 1, duration: .3}, '-=0.3');


