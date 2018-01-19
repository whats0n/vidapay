import 'slick-carousel';

;(() => {
  const getSliderArrow = (className, direction) => `<button class="${className}__arrow ${className}__${direction}"><i class="icon icon-${direction}"></i></button>`;

  $('.js-slider').slick({
    prevArrow: getSliderArrow('v-help', 'prev'),
    nextArrow: getSliderArrow('v-help', 'next'),
    dots: false,
    fade: true
  });
})();

;(() => {
  const OPEN = 'is-open';

  const controls = $('[data-modal-control]');
  const modals = $('[data-modal]');

  controls.each((i, control) => {
    control = $(control);
    const id = control.data('modal-control');
    const modal = modals.filter(`[data-modal=${id}]`);
    const other = modals.not(`[data-modal=${id}]`);

    control.on('click', e => {
      e.preventDefault();
      other.removeClass(OPEN);
      modal.toggleClass(OPEN);
    });
  });

  modals.each((i, modal) => {
    modal = $(modal);
    const close = modal.find('[data-modal-close]');
    const container = modal.find('[data-modal-container]');

    modal.on('click', e => {
      if ($(e.target).closest(container).length) return;
      modal.removeClass(OPEN);
    });

    close.on('click', e => {
      e.preventDefault();
      modal.removeClass(OPEN);
    });
  });
})();


