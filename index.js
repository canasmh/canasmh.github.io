// Wrap every letter in a span
var textWrapper = document.querySelector('.welcome-header');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


$('.welcome-header').hide();
$('.welcome-paragraph').hide();
$('img.main-image').hide();

anime.timeline()
  .add({
    targets: '.welcome-header .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1200,
    delay: (el, i) => 100 * (i+1)
  });

setTimeout(function(){
    $('.trans--grow').addClass('main-hr');
}, 100);

setTimeout(function() {
    $('.welcome-paragraph').fadeToggle(1800);
}, 1700);

setTimeout(function() {
    $('img.main-image').fadeToggle(1800);
}, 1700);


