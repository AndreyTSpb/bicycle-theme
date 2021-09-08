"use strict";

;
document.addEventListener('DOMContentLoaded', function () {
  // Слайдер для блока отзывов

  /**
   * 1) находим обертку
   * 2) получаем все блоки, внутри обертки
   * 3) Скрываем их добавляя всем класс -- fade
   * 4) Первому добавляем класс -- active
   * 5) Получаем все точки, и на первую навешиваем класс active
   * 6) При нажатии на точку открываем блок который соответствует точке ( номер точки в массииве и номер блока в массиве)
   */
  var slider = document.querySelector('.slider__wrapper');

  if (slider != null) {
    //это первый активный элемент

    /**
     * Скрываем все слайды,
     * Показываем слайд соответствующий индексу
     */
    var hideSlides = function hideSlides(index) {
      for (var i = 0; i < items.length; i++) {
        if (i !== index) {
          /**
           * Если не индекс и нет fade то прячем
           */
          if (!items[i].classList.contains('fade')) items[i].classList.add('fade');
          /**
           * Если есть класс active, но это не индекс убираем
           */

          if (items[i].classList.contains('active')) items[i].classList.remove('active');
        } else {
          /**
           * Если есть класс fade, убрать его
           */
          if (items[i].classList.contains('fade')) items[i].classList.remove('fade');
          /**
           * Если нет класса active, добавить его
           */

          if (!items[i].classList.contains('active')) items[i].classList.add('active');
        }
      }
    };
    /**
     * Убираем класс активности у всех точек,
     * Отмечаем точку соответствующию индексу
     */


    var activeDot = function activeDot(index) {
      for (var i = 0; i < dots.length; i++) {
        if (index == i) {
          if (!dots[i].classList.contains('active')) {
            dots[i].classList.add('active');
          }
        } else {
          if (dots[i].classList.contains('active')) {
            dots[i].classList.remove('active');
          }
        }
      }
    };

    /**
     * Получаем элементы с страницы
     */
    var items = document.querySelectorAll('.slider__wrapper>div'),
        dots = document.querySelectorAll('.slider-dots>div'),
        index = 0;
    hideSlides(index);
    activeDot(index);
    /**
     * Навешиваем слушателя на каждую точку
     */

    dots.forEach(function (dot, i, arr) {
      dot.addEventListener('click', function () {
        if (index != i) {
          index = i;
          activeDot(index);
          hideSlides(index);
        }
      });
    });
  }
}, false);
;