"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var windowWidth = window.innerWidth;
  var menuBtn = document.querySelector('.mobile-menu__btn');
  var menuCloseBtn = document.querySelector('.menu-close');
  var navigation = document.querySelector('.header__navigation');
  var navigationList = document.querySelector('.navigation__list');
  var mobileMenu = document.querySelector('.mobile-menu');

  function openMenu() {
    navigation.classList.add('navigation--active');
    document.body.classList.add('wrapper');
  }

  function closeMenu() {
    navigation.classList.remove('navigation--active');
    document.body.classList.remove('wrapper');
  }

  function openList(event) {
    if (windowWidth <= 768) {
      var target = event.target;
      var parent = target.closest('.navigation__item');

      if (parent.querySelector('.navigation__sublist')) {
        parent.classList.toggle('navigation__item--open');
      }
    }
  }

  function openListMain(event) {
    if (windowWidth <= 768) {
      var target = event.target;
      var parent = target.closest('.mobile-menu__item');
      var menuItems = document.querySelectorAll('.mobile-menu__item');
      menuItems.forEach(function (item) {
        item.classList.remove('mobile-menu__item--open');
      });

      if (parent && parent.querySelector('.mobile-menu__sublist')) {
        parent.classList.add('mobile-menu__item--open');
      }
    }
  }

  menuBtn.addEventListener('click', openMenu);
  menuCloseBtn.addEventListener('click', closeMenu);
  navigationList.addEventListener('click', openList);
  if (windowWidth <= 768) mobileMenu.addEventListener('click', openListMain);
  window.addEventListener('resize', function () {
    windowWidth = window.innerWidth;
  });
});