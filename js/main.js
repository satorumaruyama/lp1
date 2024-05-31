// ハンバーガーメニュー
$(function () {
  $('#js-hamburger').on('click', function () {
    $('.header__navItems').slideToggle(100)
    $('.header__hamburger').toggleClass('header__hamburger-open')
  });
});

// 費用コースタブ切り替え
$('.tab_box .tab_btn').click(function() {
  var index = $('.tab_box .tab_btn').index(this);
  $('.tab_box .tab_btn, .tab_box .tab_panel').removeClass('active');
  $(this).addClass('active');
  $('.tab_box .tab_panel').eq(index).addClass('active');
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