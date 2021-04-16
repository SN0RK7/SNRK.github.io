$(function () {
	$(window).scroll(function() {
	    $('#learn .sec-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("puffIn");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.skills').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("boingInUp");
	        }
	    });
	});
    $(window).scroll(function() {
	    $('#mail .sec-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("jackInTheBox");
	        }
	    });
	});
    $(window).scroll(function() {
	    $('#mail .input').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("jackInTheBox");
	        }
	    });
	});
})
const btn=document.querySelector('.btn')
const showMessage=() =>{
	alert('Я лью Cristal & МОЁТ');
}
btn.onclick=showMessage;
 