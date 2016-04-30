/* Скрипт для popup */

    var link = document.querySelector('.login');
    var popup = document.querySelector('.modal-content');
    var close = popup.querySelector('.modal-content-close');
    var form = popup.querySelector('form');
    var login = form.querySelector('.modal-login');
    var password = form.querySelector('modal-password');
    var storage = localStorage.getItem('login');

    link.addEventListener('click', function(event) {
        event.preventDefault();
        popup.classList.add('modal-content-show');
        if (storage) {
            login.value = storage;
            email.focus();
        } else {
            login.focus();
        }
    }, false);

    close.addEventListener('click', function(event) {
        event.preventDefault();
        popup.classList.remove('modal-content-show');
    }, false);

    form.addEventListener('submit', function(event) {
        if (!login.value || !password.value) {
            event.preventDefault();
            popup.classList.add('login-popup-error');
        } else {
            localStorage.setItem('login', login.value);
        }
    }, false);
    window.addEventListener('keydown', function(event) {
        if (event.keyCode == 27 && popup.classList.contains('modal-content-show')) {
            popup.classList.remove('modal-content-show');
        }
    }, false);

/* Скрипт для карты */

    var linkMap = document.querySelector('.map-open');
    var popupMap = document.querySelector('.map');
    var closeMap = popupMap.querySelector('.map-close');

    linkMap.addEventListener('click', function(event) { event.preventDefault();
                popupMap.classList.add('map-show');
            });

            closeMap.addEventListener('click', function(event) {
                event.preventDefault();
                popupMap.classList.remove('map-show');
            }, false);

    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popupMap.classList.contains("map-show")) {
            popupMap.classList.remove("map-show");
          }
        }
      });