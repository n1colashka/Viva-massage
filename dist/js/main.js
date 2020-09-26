"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // Ширина экрана
  var windowWidth = window.innerWidth;
  var menuBtn = document.querySelector('.mobile-menu__btn');
  var menuCloseBtn = document.querySelector('.menu-close');
  var navigation = document.querySelector('.header__navigation');
  var navigationList = document.querySelector('.navigation__list');
  var mobileMenu = document.querySelector('.mobile-menu');
  var main = document.querySelector('.main');
  var asideMenu = document.querySelector('.menu');
  var mobileFilter = document.querySelector('.mobile-filter'); // Открытие меню на мобильных устройствах

  function openMenu() {
    navigation.classList.add('navigation--active');
    document.body.classList.add('wrapper');
  } // Закрытие меню на мобильных устройствах


  function closeMenu() {
    navigation.classList.remove('navigation--active');
    document.body.classList.remove('wrapper');
  } // Открытие выпадающих списков на мобильных устройствах


  function openList(event) {
    // Проверяем, чтобы меню открывалось только на мобильных устройствах
    if (windowWidth <= 768) {
      var target = event.target;
      var parent = target.closest('.navigation__item');

      if (parent.querySelector('.navigation__sublist')) {
        parent.classList.toggle('navigation__item--open');
      }
    }
  } // Открытие выпадающих списков Gender, Treatment, City на мобильных устройствах


  function openListMain(event) {
    // Проверяем, чтобы меню открывалось только на мобильных устройствах
    if (windowWidth <= 768) {
      var target = event.target;
      var parent = target.closest('.mobile-menu__item');
      var menuItems = document.querySelectorAll('.mobile-menu__item');
      menuItems.forEach(function (item) {
        item.classList.remove('mobile-menu__item--open');
      });

      if (parent && parent.querySelector('.mobile-menu__sublist')) {
        event.preventDefault();
        parent.classList.add('mobile-menu__item--open');
      }
    }
  } // Показать полный номер при клике


  function showNumber(event) {
    var target = event.target;

    if (target.classList.contains('card__phone-btn')) {
      event.preventDefault();
      target.closest('.card__phone').classList.add('card__phone--show');
      target.style.display = 'none';
    }
  } // Выбор страны, города, района


  function chooseCity(event) {
    var target = event.target;

    if (target && target.closest('li')) {
      var parent = target.closest('li');
      parent.closest('ul').querySelectorAll('li').forEach(function (item) {
        item.classList.remove('menu__item--active');
      });
      parent.classList.toggle('menu__item--active');
    }
  } // Выбор страны, города, района на мобильных устройствах


  function chooseCityMobile(event) {
    var target = event.target;

    if (target && target.closest('.mobile-filter__item')) {
      var parent = target.closest('.mobile-filter__item');
      parent.classList.toggle('mobile-filter__item--open');
    }
  }

  menuBtn.addEventListener('click', openMenu);
  menuCloseBtn.addEventListener('click', closeMenu);
  navigationList.addEventListener('click', openList); // Проверяем, чтобы меню открывались только на мобильных устройствах

  if (windowWidth <= 768) {
    mobileMenu.addEventListener('click', openListMain);
    mobileFilter.addEventListener('click', chooseCityMobile);
  } // Чтобы меню корректно работали при изменении разрешения экрана в реальном времени


  window.addEventListener('resize', function () {
    windowWidth = window.innerWidth;
  });
  main.addEventListener('click', showNumber);
  asideMenu.addEventListener('click', chooseCity);
});