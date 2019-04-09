$(document).ready(function() {
    $(".chat-button").on('click', function(e){
        e.preventDefault();
        $(".chat-content").slideToggle('fast');
  });
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 40,
        backSpeed: 40,
        startDelay: 1000,
        loop: true,
        loopCount: Infinity,
        onComplete: function(self) { prettyLog('onComplete ' + self) },
        preStringTyped: function(pos, self) { prettyLog('preStringTyped ' + pos + ' ' + self); },
        onStringTyped: function(pos, self) { prettyLog('onStringTyped ' + pos + ' ' + self) },
        onLastStringBackspaced: function(self) { prettyLog('onLastStringBackspaced ' + self) },
        onTypingPaused: function(pos, self) { prettyLog('onTypingPaused ' + pos + ' ' + self) },
        onTypingResumed: function(pos, self) { prettyLog('onTypingResumed ' + pos + ' ' + self) },
        onReset: function(self) { prettyLog('onReset ' + self) },
        onStop: function(pos, self) { prettyLog('onStop ' + pos + ' ' + self) },
        onStart: function(pos, self) { prettyLog('onStart ' + pos + ' ' + self) },
        onDestroy: function(self) { prettyLog('onDestroy ' + self) }
      });

  $('#mc-embedded-subscribe-form').validate({
      errorElement: 'span', //default input error message container
      errorClass: 'help-block help-block-error', // default input error message class
      focusInvalid: true, // do not focus the last invalid input
      ignore: ":hidden", // ignore hidden elements when validating
      rules: {
        FNAME: { required: true },
        EMAIL: { required: true, email: true },
        PHONE: { required: true },
        MENSAJE: { required: true }
      },
      highlight: function (element) {
          $(element).closest('#mc-embedded-subscribe-form').addClass('has-error');
      },
      unhighlight: function (element) { // revert the change done by hightlight
          $(element)
              .closest('').removeClass('has-error'); // set error class to the control group
      },
      success: function (label) {
          label
              .closest('#mc-embedded-subscribe-form').removeClass('has-error'); // set success class to the control group
      },
      submitHandler: function () {
          submitForm();
      }
  });
//   var $txtSlide = $('.gsSlide'),
//       mySplitText = new SplitText($txtSlide, {type:"words"}),
//       splitTextTimeline = new TimelineMax({delay:0.4, repeat:-1});
//   TweenLite.set($txtSlide, {perspective:400});

// executeSplit(mySplitText,splitTextTimeline);
$('.phone').mask('000-0000-000');
$('#learn').click(function() {
  var $position = $($(this).attr('href')).offset().top;
  $('html, body').stop().animate({
      scrollTop: $position - 0
  }, 600);
 
});
$('#creaRenueva').click(function() {
  var $position = $($(this).attr('href')).offset().top;
  $('html, body').stop().animate({
      scrollTop: $position - 0
  }, 600);
 
});
$('#underConstruction').click(function() {
  var $position = $($(this).attr('href')).offset().top;
  $('html, body').stop().animate({
      scrollTop: $position - 0
  }, 600);
 
});

});

//kill any animations and set text back to its pre-split state
function kill(mySplitText, splitTextTimeline){
  splitTextTimeline.clear().time(1);
  mySplitText.revert();
}
function allDone(mySplitText) {
  mySplitText.revert();
}

function executeSplit(mySplitText,splitTextTimeline) {
kill(mySplitText, splitTextTimeline);
mySplitText.split({type:"chars, words, lines"})
splitTextTimeline.staggerFrom(mySplitText.chars, 0.2, {autoAlpha:0, scale:4, force3D:true}, 0.05, 0.5)
  .staggerTo(mySplitText.words, 0.1, {color:"#7ad20d", scale:0.9}, 0.2, "words")
  .staggerTo(mySplitText.words, 0.2, {color:"white", scale:1}, 0.2, "words+=0.1")
  .staggerTo(mySplitText.lines, 0.5, {x:100, autoAlpha:0}, 0.3)
}

function submitForm() {
   var $listID = '2f3f6f2160';
     WaitMeShow('#body');
    $.ajax({
        url: 'https://alangtz.us17.list-manage.com/subscribe/post-json?u=d39cbcbad763855ab053258d2&amp;id=2f3f6f2160',
        data: $('#mc-embedded-subscribe-form').serialize(),
        contentType: "application/json; charset=utf-8",
        dataType: 'jsonp',
        jsonp : 'c',
        success: function (data) {
            swal({
                    title: "¡Bien hecho!",
                    text: "¡Mensaje enviado correctamente!",
                    type: "success",
                    closeOnConfirm: true,
                    allowOutSideClick: false
              
              });
            cleanTxt();
           WaitMeHide('#body');
        },
        error: function (data) {
            swal({
                title: "¡Upsss!",
                text: "¡Algo salio mal!",
                type: "error",
                closeOnConfirm: true,
                allowOutSideClick: false
          
          });
           WaitMeHide('#body');
        }
    });
}


function cleanTxt() {
    //$('#form1')[0].reset();
    $("#mc-embedded-subscribe-form").trigger('reset')
}
function WaitMeShow(idForm) {
    $(idForm).waitMe(
    {
        effect: 'stretch',
        text: '...Cargando...',
        bg: 'rgba(255,255,255,0.7)',
        color: '#4B02DF',
        sizeW: '',
        sizeH: '',
        source: ''
    });
};
function WaitMeHide(idForm) {
    $(idForm).waitMe('hide');
}
function prettyLog(str) {
    // console.log('%c ' + str, 'color: green; font-weight: bold;');
  }
  
  function toggleLoop(typed) {
    if (typed.loop) {
      typed.loop = false;
    } else {
      typed.loop = true;
    }
  }
