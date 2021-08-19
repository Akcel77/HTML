$('#contact-form').submit(function(e) {
  e.preventDefault();
  $('.comments').empty();
  var postdata = $('#contact-form').serialize();

  $.ajax({
    type: 'POST',
    url: 'php/contact.php',
    data: postdata,
    dataType: 'json',
    success: function(json) {

      if(json.isSuccess)
      {
        $('#contact-form').append("<p class='thank-you'>Votre message a bien été envoyé. Merci de m'avoir contacté :)</p>");
        $('#contact-form')[0].reset();
      }
      else
      {
        $('#firstname + .comments').html(json.firstnameError);
        $('#name + .comments').html(json.nameError);
        $('#email + .comments').html(json.emailError);
        $('#phone + .comments').html(json.phoneError);
        $('#message + .comments').html(json.messageError);
      }
    }
  });
});


$(document).ready(function () {
  $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });
    $('.top-nav .nav-link .footer-link-menu').on('click', function () {
          $('.menu-toggler').removeClass('open');
          $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function () {
          $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
          },2000);
    });

    $('#up').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      },2000);
    });

    AOS.init({
      easing: 'ease',
      duration: 1800,
      once: true
    });
});

function typeEffect(element, speed) {
	var text = element.innerHTML;
	element.innerHTML = "";

	var i = 0;
	var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}


// application
var speed = 75;
var h1 = document.querySelector('h1');
var p = document.querySelector('p');
var delay = h1.innerHTML.length * speed + speed;

// type affect to header
typeEffect(h1, speed);


// type affect to body
setTimeout(function(){
  p.style.display = "inline-block";
  typeEffect(p, speed);
}, delay);
