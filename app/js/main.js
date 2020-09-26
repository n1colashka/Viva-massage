document.addEventListener('DOMContentLoaded', function() {
    
    var windowWidth = window.innerWidth;
    
    const menuBtn = document.querySelector('.mobile-menu__btn');
    const menuCloseBtn = document.querySelector('.menu-close');
    const navigation = document.querySelector('.header__navigation');
    const navigationList = document.querySelector('.navigation__list');
    const mobileMenu = document.querySelector('.mobile-menu');
    const main = document.querySelector('.main');
    const asideMenu = document.querySelector('.menu');
    
    // Открытие меню на мобильных устройствах
    function openMenu() {
        navigation.classList.add('navigation--active');
        document.body.classList.add('wrapper');
    }
    
    // Закрытие меню на мобильных устройствах
    function closeMenu() {
        navigation.classList.remove('navigation--active');
        document.body.classList.remove('wrapper');
    }

    // Открытие выпадающих списков на мобильных устройствах
    function openList(event) {

        // Проверяем, чтобы меню открывалось только на мобильных устройствах
        if (windowWidth <= 768) {
            const target = event.target;
            const parent = target.closest('.navigation__item');
            if (parent.querySelector('.navigation__sublist')) {
                parent.classList.toggle('navigation__item--open');
            }
        }
    }

    // Открытие выпадающих списков Gender, Treatment, City на мобильных устройствах
    function openListMain(event) {
    
        // Проверяем, чтобы меню открывалось только на мобильных устройствах
        if (windowWidth <= 768) {
            const target = event.target;
            const parent = target.closest('.mobile-menu__item');
            const menuItems = document.querySelectorAll('.mobile-menu__item');
    
            menuItems.forEach(item => {
                item.classList.remove('mobile-menu__item--open')  ;
            });
            if (parent && parent.querySelector('.mobile-menu__sublist')) {
                event.preventDefault();
                parent.classList.add('mobile-menu__item--open');
            }  
        }
    }

    // Показать полный номер при клике
    function showNumber(event) {
        const target = event.target;

        if (target.classList.contains('card__phone-btn')) {
            event.preventDefault();
            target.closest('.card__phone').classList.add('card__phone--show');
            target.style.display = 'none';
        }
    }

    // Выбор страны, города, района
    function chooseCity(event) {
        const target = event.target;
        if (target && target.closest('li')) {
            const parent = target.closest('li');

            parent.closest('ul').querySelectorAll('li').forEach(item => {
                item.classList.remove('menu__item--active');
            });
            
            parent.classList.toggle('menu__item--active');
        }
    }


    menuBtn.addEventListener('click', openMenu);
    menuCloseBtn.addEventListener('click', closeMenu);

    navigationList.addEventListener('click', openList);
    
    // Проверяем, чтобы меню открывалось только на мобильных устройствах
    if (windowWidth <= 768) mobileMenu.addEventListener('click', openListMain);

    // Чтобы меню корректно работали при изменении разрешения экрана в реальном времени
    window.addEventListener('resize', function() {
        windowWidth = window.innerWidth;
    });

    main.addEventListener('click', showNumber);


    asideMenu.addEventListener('click', chooseCity);
});