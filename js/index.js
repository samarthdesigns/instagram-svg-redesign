/*images courtesy google images and pexels.com

all svg's self made
*/


jQuery(document).ready(function() {
  $('.home-screen').removeClass("scaller");
	$('.login').click(function() {
    $(this).fadeOut();
    $('.insta-intro-logo').addClass("insta-logo-bot");
    $('.loader').fadeIn();
    setTimeout(function() {
      $('.loader').fadeOut(300);
      $('.insta-circ').fadeIn(300);
      $('.bot-bar').css({
        'top': '256px'
      })
      $('.top-bar').css({
        'top': '0px'
      })
      $('.main-insta').fadeIn(600);
    }, 3000)
  })
	$('.st3 ,.st4').click(function() {
    $('.signin').addClass("scaller");
		$('.home-screen').removeClass("scaller");
  })
	$('.insta-icon').click(function() {
		$('.home-screen').addClass("scaller");
		$('.signin').fadeIn(100);
    $('.signin').removeClass("scaller");
  })
})