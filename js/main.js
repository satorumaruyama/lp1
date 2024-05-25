// const swiper = new Swiper('.swiper', {
//     loop: true,
//     autoplay: {
//       delay: 5000,
//     },
//     speed: 1000,
// });


$(function () {
  $('#js-hamburger').on('click', function () {
    $('.header__navItems').slideToggle(100)
    $('.header__hamburger').toggleClass('header__hamburger-open')
  });
});

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

$('.animated').waypoint({
  handler (direction) {
    if (direction === 'down') {
      $(this.element).addClass('fadeIn');
      this.destroy();
    }
  },
  offset: '50%',
});

$('.faq__answer').hide();
$('.faq__question').on('click', (e) => {
  if($(e.target).hasClass('active')) {
    $(e.target).removeClass('active');
    $(e.target).next().hide();
  } else {
    $(e.target).addClass('active');
    $(e.target).next().show();
  }
});