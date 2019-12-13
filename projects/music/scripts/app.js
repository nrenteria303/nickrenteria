const body = document.body; // Safari
const html = document.documentElement;
const burgerTop = document.getElementsByClassName('nav__bar')[0];
const burgerMid1 = document.getElementsByClassName('nav__bar')[1];
const burgerMid2 = document.getElementsByClassName('nav__bar')[2];
const burgerBot = document.getElementsByClassName('nav__bar')[3];
const navContent = document.getElementById('nav__content');
const header = document.getElementById('header__wrapper');
const homeHeading1 = document.getElementById('banner__heading--1');
const homeHeading2 = document.getElementById('banner__heading--2');
var navShowing = false;

function navTransform() {
    if (!navShowing) {
        burgerTop.classList.add('disappear');
        burgerBot.classList.add('disappear');
        burgerMid1.classList.add('x-1');
        burgerMid2.classList.add('x-2');
        navContent.style.right = '0';
    } else {
        burgerTop.classList.remove('disappear');
        burgerBot.classList.remove('disappear');
        burgerMid1.classList.remove('x-1');
        burgerMid2.classList.remove('x-2');
        navContent.style.right = '100vw';
    }
    navShowing = !navShowing;
}

function scrollDetect() {
    if (body.scrollTop > 30 || html.scrollTop > 30) {
      header.classList.add("header--fixed");
    } else {
        header.classList.remove("header--fixed");
    }
  }

  function showHeadings() {
    homeHeading1.classList.add("showing");
    homeHeading2.classList.add("showing");
  }

  window.onscroll = function() {scrollDetect()};