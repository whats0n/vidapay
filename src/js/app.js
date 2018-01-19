import 'slick-carousel';

const getSliderArrow = (className, direction) => `<button class="${className}__arrow ${className}__${direction}"><i class="icon icon-${direction}"></i></button>`;

$('.js-slider').slick({
  prevArrow: getSliderArrow('v-help', 'prev'),
  nextArrow: getSliderArrow('v-help', 'next'),
  dots: false,
  fade: true
});
