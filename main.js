const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    navDisplay();
})

navToggle.addEventListener('focus', () => {
    navDisplay();
})


function navDisplay() {
    const navContainer = document.querySelector('.nav-list')
    const navHamburgerPic = document.querySelector('.nav-toggle-pic');
    const navLinks = document.querySelectorAll('.nav-link');

    navContainer.classList.toggle('nav-list-open');

    if (navContainer.classList.contains('nav-list-open')) {
        navHamburgerPic.src = './images/icon-close.svg';
        navLinks.forEach(navLink => {
            navLink.style.transitionDelay = '300ms';
        })
    } else {
        navHamburgerPic.src = './images/icon-hamburger.svg';
        navLinks.forEach(navLink => {
            navLink.style.transitionDelay = '0ms';
        })
    }
}

// SCROLL REVEAL
window.addEventListener('scroll', revealMainText);

function revealMainText () {
    var reveals = document.querySelectorAll('.main-text');

    for (let i = 0; i < reveals.length; i++) {
        const delay = (i * 100) + 'ms';
        reveals[i].style.transitionDelay = delay;
    }

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('main-text-display');
        } 
    }
}

window.addEventListener('scroll', revealArticleLinks);

function revealArticleLinks () {
    var reveals = document.querySelectorAll('.article-link');

    for (let i = 0; i < reveals.length; i++) {
        const delay = (i * 100) + 'ms';
        reveals[i].style.transitionDelay = delay;
    }

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('article-container-display');
        } 
    }
}

// STICKY NAV
window.addEventListener('scroll', scrollNavigation);

function scrollNavigation () {
    const nav = document.querySelector('.nav-container');
    if(window.pageYOffset > nav.offsetTop) {
        nav.classList.add('nav-sticky')
    } else {
        nav.classList.remove('nav-sticky');
    }
}