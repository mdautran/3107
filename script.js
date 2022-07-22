/*-----
Spanizer
- Wraps letters with spans, for css animations
-----*/
(function($) {
  var s,
  spanizeLetters = {
    settings: {
      letters: $('.js-spanize'),
    },
    init: function(hide_function) {
      s = this.settings;
      this.bindEvents();
    },
    bindEvents: function(){
      s.letters.html(function (i, el) {
        //spanizeLetters.joinChars();
        var spanizer = $.trim(el).split("");
        return '<span>' + spanizer.join('</span><span>') + '</span>';
      });
    },
  };
  spanizeLetters.init(action_continue());
  document.getElementById("second_section").style.display="none";
})(jQuery);


function action_continue(){
    var handlePress = true
	setTimeout(function(){

		document.addEventListener("keypress", function(event) {
		if (!handlePress) return;
		document.getElementById("first_section").remove();
		handlePress = false
        document.getElementById("myAudio").play();
		load_letter()
		});		
	},23000)	
	
}

function load_letter(){
	var letter = document.querySelector("#letter_context")
	var speed = 50;
	document.getElementById("second_section").style.display="block";
	//letter.style.display = "inline-block";
	typeEffect(letter, speed);
	
}

function typeEffect(element, speed) {
	var text = element.innerHTML;
	element.innerHTML = "";
	
	var i = 0;
	var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
	  window.scrollTo(0, document.body.scrollHeight);
    } else {
      clearInterval(timer);
    }
  }, speed);
}