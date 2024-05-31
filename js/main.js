// ハンバーガーメニュー
$(function () {
  $('#js-hamburger').on('click', function () {
    $('.header__navItems').slideToggle(100)
    $('.header__hamburger').toggleClass('header__hamburger-open')
  });
});

// 費用コースタブ切り替え
$('.course__tabBtn').click(function() {
  var index = $('.course__tabBtn').index(this);
  $('.course__tabBtn, .course__contents .course__tabPanel').removeClass('active');
  $(this).addClass('active');
  $('.course__contents .course__tabPanel').eq(index).addClass('active');
});



// $(function(){
//   $('a[href^="#"]').click(function(){
//     var speed = 500;
//     var href= $(this).attr("href");
//     var target = $(href == "#" || href == "" ? 'html' : href);
//     var position = target.offset().top;
//     $("html, body").animate({scrollTop:position}, speed, "swing");
//     return false;
//   });
// });

// $('.animated').waypoint({
//   handler (direction) {
//     if (direction === 'down') {
//       $(this.element).addClass('fadeIn');
//       this.destroy();
//     }
//   },
//   offset: '50%',
// });