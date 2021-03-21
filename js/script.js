$(document).ready(function(){

$(".btn").click(function(){
  $(".back_fixed").fadeIn();
});

$(".close_form").click(function(){
  $(".back_fixed").fadeOut();
});




  $('.js-form-lw').formsLw({
    'color-error-default' : 'white',
    'color-error': 'tomato',
    'number-of-parents': 0,
    'post-file' : 'post.php',
    'emails' : 'email@mail.ru',
    'from' : 'umberto0007@mail.ru',
  });



});
