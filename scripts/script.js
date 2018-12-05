// Datepicker

var dateControl = document.querySelector('input[type="date"]');
dateControl.value = '2017-06-01';


// on pageload run JS
document.addEventListener("DOMContentLoaded", function () {

    var sections = document.querySelectorAll(".section");
    var navigation = document.querySelector("nav");
    var links = navigation.querySelectorAll("a");



    // Map
    var headquarters = L.map('map').setView([51.505, -0.09], 13);







    // navigation
    var toggle = document.querySelector('#toggle');
    var menu = document.querySelector('#menu');

    toggle.addEventListener('click', function () {
        if (menu.classList.contains('is-active')) {
            this.setAttribute('aria-expanded', 'false');
            menu.classList.remove('is-active');
        } else {
            menu.classList.add('is-active');
            this.setAttribute('aria-expanded', 'true');
        }
    });

}, false);