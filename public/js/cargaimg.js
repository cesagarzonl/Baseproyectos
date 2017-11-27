function cargaaa(){
	document.getElementById('sectionnn').style.display = "block";
}
function preload(){
	document.getElementById('ciudades').style.display = "block";
}	
function cargaaa1(){
	document.getElementById('sectionnn').style.display = "block";
}
function cargaaa2(){
	document.getElementById('sectionnn').style.display = "block";
}
function cargaaa3(){
	document.getElementById('sectionnn').style.display = "block";
}
function cargaaa4(){
	document.getElementById('sectionnn').style.display = "block";
}
function nocargaaa(){
	document.getElementById('sectionnn').style.display = "none";
}


$(document).ready(function() {
	$('input[id="Localidad"],input[id="dir"],input[id="precio"],input[id="precio1"],input[id="precio2"],input[id="precio3"],input[id="precio4"]').keydown(function(){
		type = $(this).attr('id');
	if ($(this).val().length == 0 | $(this).val().length == 1  ) {
		$("#"+type).addClass("nopass")
		$("#"+type).removeClass("pass")
	}
	else{
		$("#"+type).removeClass("pass")
		$("#"+type).removeClass("nopass")
	}
})
});

$(document).ready(function() {
	$('.send3').click(function() {





			$('#envok').addClass('envokss')

			$('.envok').html('<div id="fox" class="fox"> <div  style="z-index:1000;" class="window-container2 rrr window-container-visible2"><div style="z-index:1000;" class="sesions"><p style="color:#fff;" id="creacu">¡OFICINA PUBLICADA!<span class="close">X</span><div id="for" class="for" stylw="background-color:#fff;"></p><h2 style="width: 100%;font-size: 30px; color: #666; margin-left: 20%;">¡GRACIAS POR ELEGIRNOS!</h2> <p style="font-size: 25px; width: 100%; color: #666; margin: 2%; padding: 2%;" >Actualizamos tu prfil aca puedes verlo </p> <input value="ver oficina" style="width: auto; " name="subirimg" id="send" class="send" type="submit" style="margin: 10px 10px 10px 30%;" ></div></div></div>')
			$('#envok').removeClass('envok')
		    $('html,body').animate({
		        scrollTop: $(".colorarriba").offset().top
		    }, 2);
					$('.close').click(function() {
						$('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');
						$('#envok').addClass('envok')
						$('#envok').removeClass('envokss')
					});
	});
});