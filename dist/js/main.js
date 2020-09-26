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
  var mobileFilter = document.querySelector('.mobile-filter');
  var mobileSelects = document.querySelectorAll('.mobile-filter__select select');
  var mobileSelectCountry = document.querySelector('.mobile-filter__select--country select');
  var mobileSelectCity = document.querySelector('.mobile-filter__select--city select');
  var mobileSelectCityPart = document.querySelector('.mobile-filter__select--city-part select');
  var mobileSelectArea = document.querySelector('.mobile-filter__select--area select'); // Открытие меню на мобильных устройствах

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
      var menuItems = document.querySelectorAll('.mobile-menu__item'); // Закрываем все окна

      menuItems.forEach(function (item) {
        item.classList.remove('mobile-menu__item--open');
      });
      mobileFilter.classList.remove('mobile-filter--active');

      if (parent && parent.classList.contains('mobile-menu__filter')) {
        event.preventDefault();
        mobileFilter.classList.add('mobile-filter--active');
      } else if (parent && parent.querySelector('.mobile-menu__sublist')) {
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
  } // Скрываем неподходящие города


  function changeOptionsCity() {
    mobileSelectCity.querySelectorAll('option').forEach(function (item) {
      if (item.dataset.city !== mobileSelectCountry.value) {
        item.classList.add('hidden');
      }
    });
  } // Скрываем неподходящие части города


  function changeOptionsCityPart() {
    mobileSelectCityPart.querySelectorAll('option').forEach(function (item) {
      if (item.dataset.cityPart !== mobileSelectCity.value) {
        item.classList.add('hidden');
      }
    });
  } // Скрываем неподходящие районы


  function changeOptionsArea() {
    mobileSelectArea.querySelectorAll('option').forEach(function (item) {
      if (item.dataset.area !== mobileSelectCityPart.value) {
        item.classList.add('hidden');
      }
    });
  } // При загрузке устанавливаем значения, которые вводил пользователь раньше


  function getSelectValues() {
    mobileSelectCountry.value = sessionStorage.getItem('country') || 'Select a country';
    mobileSelectCity.value = sessionStorage.getItem('city') || 'Select a city';
    mobileSelectCityPart.value = sessionStorage.getItem('cityPart') || 'Select part of the city';
    mobileSelectArea.value = sessionStorage.getItem('area') || 'Select area';

    if (sessionStorage.getItem('cityVisible')) {
      mobileFilter.classList.add('mobile-filter--active');
      mobileSelectCity.closest('.mobile-filter__item').classList.add('mobile-filter__item--active');
      changeOptionsCity();
    }

    if (sessionStorage.getItem('cityPartVisible')) {
      mobileFilter.classList.add('mobile-filter--active');
      mobileSelectCityPart.closest('.mobile-filter__item').classList.add('mobile-filter__item--active');
      changeOptionsCityPart();
    }

    if (sessionStorage.getItem('areaVisible')) {
      mobileFilter.classList.add('mobile-filter--active');
      mobileSelectArea.closest('.mobile-filter__item').classList.add('mobile-filter__item--active');
      changeOptionsArea();
    }
  } // Сохраняем значение страны


  function setSelectValues(event) {
    var target = event.target;

    if (target.closest('.mobile-filter__select--country')) {
      sessionStorage.setItem('country', target.value);
      sessionStorage.setItem('cityVisible', 'true');
      mobileSelectCity.closest('.mobile-filter__item').classList.add('mobile-filter__item--active');

      if (target.value !== 'Select a country') {
        location.reload(); // Если мы меняем страну, остальные селекты очищаютяс

        sessionStorage.removeItem('cityPartVisible');
        sessionStorage.removeItem('areaVisible');
        sessionStorage.removeItem('cityPart');
        sessionStorage.removeItem('area');
        sessionStorage.removeItem('city');
      }
    } else if (target.closest('.mobile-filter__select--city')) {
      sessionStorage.setItem('city', target.value);
      sessionStorage.setItem('cityPartVisible', 'true');
      mobileSelectCityPart.closest('.mobile-filter__item').classList.add('mobile-filter__item--active');

      if (target.value !== 'Select a city') {
        location.reload(); // Если мы меняем страну, остальные селекты очищаютяс

        sessionStorage.removeItem('areaVisible');
        sessionStorage.removeItem('cityPart');
        sessionStorage.removeItem('area');
      }
    } else if (target.closest('.mobile-filter__select--city-part')) {
      sessionStorage.setItem('cityPart', target.value);
      sessionStorage.setItem('areaVisible', 'true');
      mobileSelectArea.closest('.mobile-filter__item').classList.add('mobile-filter__item--active');

      if (target.value !== 'Select part of the city') {
        location.reload();
      }
    } else if (target.closest('.mobile-filter__select--area')) {
      sessionStorage.setItem('area', target.value);
      mobileSelectArea.closest('.mobile-filter__item').classList.add('mobile-filter__item--active');

      if (target.value !== 'Select area') {
        location.reload();
      }
    }
  }

  getSelectValues();
  mobileFilter.addEventListener('change', setSelectValues);
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