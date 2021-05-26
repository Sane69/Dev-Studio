$(document).ready(function() {
  $('.slider').slick({
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '35px',
          slidesToShow: 1,
        }
      }
    ]
  })

  $('input[type="radio"]').on('change', function() {
    $('input[type="radio"]').not(this).prop('checked', false);
 });

 $('.faq__item--question').click(function() {
  if ($(this).next('.faq__item--content').hasClass('show')) {
    $(this).next('.faq__item--content').removeClass('show').slideUp();
  } else {
    $('.faq__item--content').removeClass('show').slideUp();
    $(this).next('.faq__item--content').addClass('show').slideDown();
  }
})
 

 $('.header__burger').click(function() {
  $('body').toggleClass('lock')
  $('.header__burger, .header__mobile').toggleClass('active')
})
})