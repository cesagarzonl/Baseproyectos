

function sacamas(){
 document.getElementById('mas1').style.display = "none";
document.getElementById('mas2').style.display = "none";
document.getElementById('mas3').style.display = "none";
document.getElementById('mas4').style.display = "none";
}

function nobus() {
		$("#nobus").removeClass("active2")
		$("#sibus").addClass("active2")
		$("#enlis").addClass("active")
		$("#busss").removeClass("active")
}
function sibuss() {
		$("#nobus").addClass("active2")
		$("#sibus").removeClass("active2")
		$("#busss").addClass("active")
		$("#enlis").removeClass("active")
}



function mas() {
	document.getElementById('mas1').style.display = "block";
}
function mas2() {
	document.getElementById('mas2').style.display = "block";
}
function mas3() {
	document.getElementById('mas3').style.display = "block";
}
function mas4() {
	document.getElementById('mas4').style.display = "block";
}

$( document.body )
  .ready(function() {
    $( document.body ).append( $( "<div .ubicacion2>" ) );
    var n = $( ".ubicacion2" ).length;
 	if (n==0) {
	$('.nomestra').html('<div><p>Ups, no encontramos resúltados a tu busqueda </p></div><div><img src="/public/imagenes/img/icon/Iconos-04.png"></div><div><p>Intenta cambiando alguno de los filtros y volvamos a intentarlo</p></div><div><img src="/public/imagenes/img/icon/Iconos-05.png"></div>');	
 	}
   
   })
  // Trigger the click to start
			//$('.nomestra').html('<div><p>Ups, no encontramos resúltados a tu busqueda </p></div><div><img src="/public/imagenes/img/icon/Iconos-04.png"></div><div><p>Intenta cambiando alguno de los filtros y volvamos a intentarlo</p></div><div><img src="/public/imagenes/img/icon/Iconos-05.png"></div>');


$(document).ready(function() {
	$('input[list="datos"]').keydown(function(){
		if ($(this).val().length >= 2 && $(this).val().length <= 2) {
			$('datalist.datos').html('<option value="perros"></option><option value="gatos"></option><option value="hamsters"></option><option value="pajaros"></option><option value="peces"></option><option value="peluqueria"></option><option value="guarderia"></option><option value="paseos"></option><option value="domicilios"></option><option value="adopcion"></option><option value="veterinario"></option>')
			//console.log($(this))
		}
	});
});

$(document).ready(function() {
	$('input[list="datos2"]').keydown(function(){
		if ($(this).val().length >= 2 && $(this).val().length <= 2) {
			$('datalist.datos2').html('<option value="perros"></option><option value="gatos"></option><option value="hamsters"></option><option value="pajaros"></option><option value="peces"></option><option value="peluqueria"></option><option value="guarderia"></option><option value="paseos"></option><option value="domicilios"></option><option value="adopcion"></option><option value="veterinario"></option>')
			//console.log($(this))
		}
		if ($(this).val().length < 2 && $(this).val().length >= 0) {
			//console.log($(this))
			$( "option").remove();
		}
	});
	$('input[list="datos1"]').keydown(function(){
		if ($(this).val().length >= 2 && $(this).val().length <= 2) {
			$('datalist.datos1').html('<option value="perros"></option><option value="gatos"></option><option value="hamsters"></option><option value="pajaros"></option><option value="peces"></option><option value="peluqueria"></option><option value="guarderia"></option><option value="paseos"></option><option value="domicilios"></option><option value="adopcion"></option><option value="veterinario"></option>')
			//console.log($(this))
		}
		if ($(this).val().length < 2 && $(this).val().length >= 0) {
			//console.log($(this))
			$(".datos1.option").remove();
		}
	});
});
$(document).ready(function() {
	$('.close').click(function(){
			$('.for input[type="text"],input[type="password"],.for textarea').val("");
			$('.fors input[type="text"],input[type="password"],input[type="email"],.for textarea').val("");
	});
});

//rxjs angular
// popup


//popup Contacto
$(document).ready(function() {
	$('.button').click(function() {
		type = $(this).attr('data-type');
		$('.overlay-container').fadeIn(function() {
		$('div.overlay-container').html('<div style="z-index:1000;" class="window-container zoomout window-container-visible"><div style="z-index:1000;" class="sesions"><p style="color:#fff;" id="creacu">Contacto<span class="close">X</span></p><form action="envio3" method="POST" id="for" class="for"><div><label for="name">Nombre Local</label><input name="name" id="name" autocomplete="off" type="text"></div><div> <label for="correo2">Correo</label><input name="correo2" id="correo2" autocomplete="off" type="text"></div><div> <label for="tel">Teléfono</label><input name="tel" id="tel" autocomplete="off" type="text"></div><div> <label for="asunto">Asunto</label><select type="text" name="asunto" placehoder="" id="asunto"> <option value="Busco" selected=" Busco">Busco oficina  </option><option value="Publicar" selected="Publicar">Publicar oficina</option><option value="Otro" selected="Otro"> Otro</option><option value="" selected="" style="display:none;"> --Selecciona--</option></select></div><div> <label for="mess">Mensaje</label><textarea type="text" name="mess" id="mess" style="	" autocomplete="off"></textarea></div> <div id="envok1" name="envok1" class="envok1" ></div> <div> <input value="Enviar" id="send" class="send probe" type="button"></div></form></div></div>');
			 $(".probe").click(function(e){
			 	//var data= $('.for input[type="text"],input[type="password"],.for textarea').val();
			 	//alert("Tus datos se han eviado")
			        e.preventDefault();
                    console.log('select_link clicked');
                    
                     /*$.ajax({
                        dataType: 'jsonp',
                        data: "data=yeah",						
                        jsonp: 'callback',
                        url: 'http://localhost:3000/endpoint?callback=?',						
                        success: function(data) {
                            console.log('success');
                            console.log(JSON.stringify(data));
                        }
                    });*/
					var data={}

					data.name = $("#name").val();
					data.correo2 = $("#correo2").val();
					data.tel = $("#tel").val();
					data.asunto = $("#asunto").val();
					data.mess = $("#mess").val();
					//= $('.for input[type="text"],input[type="password"],.for textarea').val();
					$.ajax({
						type: 'POST',
						data: JSON.stringify(data),
				        contentType: 'application/json',
                        url: '/envio3',
                          success: function(data){
                          	console.log(JSON.stringify(data))
                          	if (data == "2" ) {
            					$('#envok1').html('<p style="color: #666;">Tus datos se enviaron con éxito!</p>')
							}else{
								alert("hay un error intentalo de nuevo")
							}                       
                         }
                    });
			 });
			$('.close').click(function() {
				$('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');
				$( ".window-container" ).remove();
			});
			
		});
	});
});
//popup login y creacion de
$(document).ready(function() {
	$('.buttons').click(function() {
		type = $(this).attr('data-type');
		$('.overlay-containers').fadeIn(function() {
				$('div.overlay-containers').html('<div style="z-index:1000;" class="window-containers zoomin window-container-visibles"><div style="z-index:1000;" class="sesions"><p style="color:#fff;" id="creacu">Ingresar<span class="close">X</span></p><form action="session" method="POST" id="for" class="for"><div style="padding-top: 30px; " class="form-group"><label for="email">Correo</label><input name="email" id="email" class"form-control="" autocomplete="off required" type="text"></div><div> <label for="password">Contraseña</label><input name="password" id="password" class"form-control"autocomplete="off" type="password" required></div><div> <input value="Ingresar" id="send" clas="send login" autocomplete="off" type="button"></div><div><p style="padding-left: 25%">Nuevo en workey? <input value="Crea una cuenta" data-type="rrr" autocomplete="off" class="rrs"></p></div></form></div></div>');
				$('input#send').click(function(e){
					        e.preventDefault();
							var data={}
							data.email = $("#email").val();
							data.password = $("#password").val();
							data.urls = window.location;
							console.log(data)
							$.ajax({
								type: 'POST',
								data: JSON.stringify(data),
						        contentType: 'application/json',
		                        url: '/session',
		                          success: function(data){
		                          	if (data == "2" ) {
										alert("hay un error intentalo de nuevo")
									}else{
										window.location.href = data;
									}                       
						}
                    });	
				});
			$('.close').click(function() {
				$('.overlay-containers').fadeOut().end().find('.window-containers').removeClass('window-container-visibles');
				$("." ).remove();
				$('div.organiza').html('<div class="overlay-containers"></div>');
			});
			$('.rrs').click(function() {
				type = $(this).attr('data-type');
				$('.overlay-container2').fadeIn(function() {
						$('.overlay-containers').fadeOut().end().find('.window-containers').removeClass('window-container-visibles');
						$( ".window-containers" ).remove();
				$('div.overlay-container2').html('<div style="z-index:1000;" class="window-container2 rrr window-container-visible2"><div style="z-index:1000;" class="sesions"><p style="color:#fff;" id="creacu">INSCRIBIRSE<span class="close">X</span></p><form action="users" method="POST" name="fors" id="fors" class="fors"><div><label for="username">Nombre Local</label><input name="username" id="username" class"form-control="" required="" autocomplete="off" type="text"></div><div> <label for="telefono">teléfono</label><input name="telefono" id="telefono" class"form-control="" required="" autocomplete="off" type="text"></div><div> <label for="whatsapp">whatsapp</label><input name="whatsapp" id="whatsapp" class"form-control="" required="" autocomplete="off" type="text" min="0"  ></div><div> <label for="email">Correo</label><input name="email" id="email" class"form-control="" title="por el correo" required="" autocomplete="off" type="email"></div><div> <label for="nit">Dirección</label><input name="nit" id="nit" class"form-control="" required="" autocomplete="off" type="text"></div><div> <label for="password"> Contraseña</label><input name="password" id="password" class"form-control="" required="" autocomplete="off" type="password"></div><div> <label for="password">Confirma tu Contraseña</label><input name="password_confirmation" id="password" class"form-control="" required="" autocomplete="off" type="password"></div><div> <input value="Inscribete" id="send" clas="send" class="btn btn-info" type="submit"></div></form></div></div>');
					$('.close').click(function() {
						$('.overlay-container2').fadeOut().end().find('.window-container2').removeClass('window-container-visible2');
						$( ".window-container2" ).remove();
					});
					
				});
			});



		});
	});
});
$(document).ready(function() {
			$('.close').click(function() {
				$('.overlay-containers').fadeOut().end().find('.window-containers').removeClass('window-container-visibles');
				$( ".window-containers" ).remove();
			});
			$('.rrs').click(function() {
				type = $(this).attr('data-type');
				$('.overlay-container2').fadeIn(function() {
				$('div.overlay-container2').html('<div  style="z-index:1000;" class="window-container2 rrr window-container-visible2"><div style="z-index:1000;" class="sesions"><p style="color:#fff;" id="creacu">INSCRIBIRSE<span class="close">X</span></p><form action="users" method="POST" name="fors" id="fors" class="fors"><div><label for="username">Nombre Local</label><input name="username" id="username" class"form-control="" required="" autocomplete="off" type="text"></div><div> <label for="telefono">teléfono</label><input name="telefono" id="telefono" class"form-control="" required="" autocomplete="off" type="text"></div><div> <label for="email">Correo</label><input name="email" id="email" class"form-control="" title="por el correo" required="" autocomplete="off" type="email"></div><div> <label for="nit">Dirección</label><input name="nit" id="nit" class"form-control="" required="" autocomplete="off" type="text"></div><div> <label for="password"> Contraseña</label><input name="password" id="password" class"form-control="" required="" autocomplete="off" type="password"></div><div> <label for="password">Confirma tu Contraseña</label><input name="password_confirmation" id="password" class"form-control="" required="" autocomplete="off" type="password"></div><div> <input value="Inscribete" id="send" clas="send" class="btn btn-info" type="submit"></div></form></div></div>');
					$('.close').click(function() {
						$('.overlay-container2').fadeOut().end().find('.window-container2').removeClass('window-container-visible2');
						$( ".window-container2" ).remove();
						$('.overlay-containers').fadeOut().end().find('.window-containers').removeClass('window-container-visibles');
						$( ".window-containers" ).remove();
					});
					
				});
			});
		});
$(document).ready(function() {
			 $(".agendarvisi").click(function(e){
			 	//var data= $('.for input[type="text"],input[type="password"],.for textarea').val();
			 	//alert("Tus datos se han eviado")
			        e.preventDefault();
                    console.log('select_link clicked');
                  
					var data={}

					data.name = $("#name").val();
					data.ciudad = $("#ciudad").val();
					data.telefono = $("#telefono").val();
					data.mensaje = $("#mensaje").val();
					data.mess = $("#mess").val();
					//= $('.for input[type="text"],input[type="password"],.for textarea').val();
					console.log(data)
					$.ajax({
						type: 'POST',
						data: JSON.stringify(data),
				        contentType: 'application/json',
                        url: '/app/envio2',						
                        success: function(data) {
							$('#envok').addClass('envokss')
            				$('#envok').html('<div id="forx" class="forx"> <div  style="z-index:1000;" class="window-container2 rrr window-container-visible2"><div style="z-index:1000;" class="sesions"><p style="color:#fff;" id="creacu">AGENDAMIENTO<span class="close">X</span><div id="for" class="for" style="background-color:#fff;"></p><h2 style="width: 100%;font-size: 30px; color: #666; margin-left: 20%;">¡GRACIAS POR ELEGIRNOS!</h2> <p style="font-size: 25px;width: 100%; color: #999;margin: 2%;padding-right: 15%;padding-left: 15%;;" >Nos comunicaremos contigo para concretar tu visita en el espacio de trabajo que te gustó</p><img style="width: 100%;" src="/public/imagenes/img/logos-02.png" id="logop" name="logop" class="logop"> </div></div></div>')
							$('#envok').removeClass('envok')
						    $('html,body').animate({
						        scrollTop: $(".colorarriba").offset().top
						    }, 2);
					$('.close').click(function() {
						$('.overlay-container').fadeOut().end().find('.window-container').removeClass('window-container-visible');
						$('#envok').addClass('envok')
						$('#envok').removeClass('envokss')
					});
						}
                    });

			 });
			
		});


$(document).ready(function() {
				$('input#send').click(function(e){
					        e.preventDefault();
							var data={}
							data.email = $("#email").val();
							data.password = $("#password").val();
							data.urls = window.location;
							console.log(data)
							$.ajax({
								type: 'POST',
								data: JSON.stringify(data),
						        contentType: 'application/json',
		                        url: '/session',
		                          success: function(data){
		                          	if (data == "2" ) {
										alert("hay un error intentalo de nuevo")
									}else if( data = "signup"){
											window.location.href = "/";
										}
									else{
										window.location.href = data;	
										}
						}
                    });	
				});
	});