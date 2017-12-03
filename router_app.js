var express = require("express");
var Imagen = require("./models/imagenes");
var Video = require("./models/video");
var router = express.Router();
var imagen_find = require("./middlewares/find_imagen");
var fs = require("fs");
var nodemailer = require("nodemailer");
var User = require("./models/user").User;
var cookiSession = require("cookie-session");
var redis = require("redis");
var client =redis.createClient();
var url = require('url');
var MongoClient = require('mongodb').MongoClient;	
var bodyParser = require("body-parser");
var fsp = require('fs-promise');
// app.com/app


router.get("/", function(req,res,next){	
	Imagen.find({})
		.populate("creator")
		.exec(function(err,imagenes){
			if(err) {console.log(err);	
			}else{
					res.render("home2",{imagenes:imagenes});}
		})
});
router.get("/imagenes/new",function(req,res){
	res.render("imagenes/new")
});


router.get("/imagenes/newpromo",function(req,res){
	res.render("imagenes/queofresco")
});

router.get("/imagenes/perfil",function(req,res){
	res.render("imagenes/perfil")
});
router.all("/imagenes/:id*",imagen_find);
router.use(bodyParser.json({limit: '1000mb'}));
router.use(bodyParser.urlencoded({limit: '1000mb', extended: true}));

router.get("/imagenes/:id/edit",function(req,res){
	res.render("imagenes/edit");
});


router.route("/imagenes/:id")
	.get(function(req,res){
	res.render("imagenes/show");
})
.put(function(req,res){
						console.log("cesar")
						res.locals.imagen.dlugar = req.body.dlugar,
						res.locals.imagen.creator = res.locals.user._id,
						res.locals.imagen.extension = ext,
						res.locals.imagen.extension1 = ext1,
						res.locals.imagen.extension2 = ext2,
						res.locals.imagen.extension3 = ext3,
						res.locals.imagen.extension4 = ext4,
						res.locals.imagen.precio = req.body.precio,
						res.locals.imagen.preriodo = req.body.preriodo,
						res.locals.imagen.precio1 = req.body.precio1,
						res.locals.imagen.preriodo1 = req.body.preriodo1,
						res.locals.imagen.precio2 = req.body.precio2,
						res.locals.imagen.preriodo2 = req.body.preriodo2,
						res.locals.imagen.precio3 = req.body.precio3,
						res.locals.imagen.preriodo3 = req.body.preriodo3,
						res.locals.imagen.precio4 = req.body.precio4,
						res.locals.imagen.preriodo4 = req.body.preriodo4,
						res.locals.imagen.radio1 = req.body.radio1,
						res.locals.imagen.radio2 = req.body.radio2,
						res.locals.imagen.radio3 = req.body.radio3,
						res.locals.imagen.radio4 = req.body.radio4,
						res.locals.imagen.radio5 = req.body.radio5,
						res.locals.imagen.radio6 = req.body.radio6,
						res.locals.imagen.radio7 = req.body.radio7,
						res.locals.imagen.radio8 = req.body.radio8,
						res.locals.imagen.radio9 = req.body.radio9,
						res.locals.imagen.radio10 = req.body.radio10,
						res.locals.imagen.radio11 = req.body.radio11,
						res.locals.imagen.radio12 = req.body.radio12,
						res.locals.imagen.radio13 = req.body.radio13,
						res.locals.imagen.radio14 = req.body.radio14,
						res.locals.imagen.radio15 = req.body.radio15,
						res.locals.imagen.radio16 = req.body.radio16,
						res.locals.imagen.radio17 = req.body.radio15,
						res.locals.imagen.radio18 = req.body.radio18,
						res.locals.imagen.radio19 = req.body.radio19,
						res.locals.imagen.radio20 = req.body.radio20,
						res.locals.imagen.radio21 = req.body.radio21,
						res.locals.imagen.radio22 = req.body.radio22,
						res.locals.imagen.radio23 = req.body.radio23,
						res.locals.imagen.radio24 = req.body.radio24,
						res.locals.imagen.radio25 = req.body.radio25,
						res.locals.imagen.radio26 = req.body.radio26,
						res.locals.imagen.radio27 = req.body.radio27,
						res.locals.imagen.tipo = req.body.tipo,
						res.locals.imagen.dir = req.body.dir,
	res.locals.imagen.save(function(err){
				if (!err) {
					res.render("imagenes/show");			
				}else{
 				res.render("Imagenes/"+req.params.id+"/edit",{imagenes: imagenes});
		}
	})
})
	.delete(function(req,res){
	var query = url.parse(req.url).pathname;
		query = query.split("/").pop()
	var filtro = query
	console.log(query)

		Imagen.findOne(req.params.id, function(err,imagen){ 
			console.log(imagen)
			 		console.log("aca va ")
			 		fs.unlink("public/imagenes/"+imagen._id+'.'+imagen.extension,function(err){
					console.log(err)
					})
			 		fs.unlink("public/imagenes/"+imagen._id+"s"+'.'+imagen.extension1,function(err){
					console.log(err)
					})
			 		fs.unlink("public/imagenes/"+imagen._id+"t"+'.'+imagen.extension2,function(err){
					console.log(err)
					})
			 		fs.unlink("public/imagenes/"+imagen._id+"u"+'.'+imagen.extension3,function(err){
					console.log(err)
					})
			 		fs.unlink("public/imagenes/"+imagen._id+"v"+'.'+imagen.extension4,function(err){
					console.log(err)
					})
		})
		Imagen.findOneAndRemove({_id:req.params.id}, function(err){
			 if (!err) {
				res.redirect("/app/imagenes")
			 }else {
				 		console.log("aca no va ")
			 	console.log(err);
			 	res.redirect("/app/imagenes"+req.params.id);
			 }
		})
})	
router.route("/imagenes")
	.get(function(req,res){
	Imagen.find({creator:res.locals.user._id},function(err,imagenes){
		if (err) {res.redirect("/app");return;}
	res.render("imagenes/index1",{imagenes: imagenes});
	})
})
	.post(function(req,res){
				// string generated by canvas.toDataURL()
				var img = req.body.imgs22;
				var img1 = req.body.imgs11;
				var img2 = req.body.imgs12;
				var img3 = req.body.imgs13;
				var img4 = req.body.imgs14;
				// Grab the extension to resolve any image error

				if (img == "1") {
					var ext = "noesta"
				}else{var ext = img.split(';')[0].match(/jpeg|png|gif/)[0];}

				if (img1 == "1" ) {
					var ext1 = "noesta"
				} else{	var ext1 = img1.split(';')[0].match(/jpeg|png|gif/)[0];}
					var ext1 = "noesta"
				if (img2 == "1") {
					var ext2 = "noesta"
				} else{var ext2 = img2.split(';')[0].match(/jpeg|png|gif/)[0]; }
				if (img3 == "1" ) {
					 var ext3 = "noesta"
				}	else{var ext3 = img3.split(';')[0].match(/jpeg|png|gif/)[0];  }
				if (img4 == "1" ) {
					var ext4 = "noesta" 
				}	else{var ext4 = img4.split(';')[0].match(/jpeg|png|gif/)[0];}


				// strip off the data: url prefix to get just the base64-encoded bytes
				

				var data = img.replace(/^data:image\/\w+;base64,/, "");
				var data1 = img1.replace(/^data:image\/\w+;base64,/, "");
				var data2 = img2.replace(/^data:image\/\w+;base64,/, "");
				var data3 = img3.replace(/^data:image\/\w+;base64,/, "");
				var data4 = img4.replace(/^data:image\/\w+;base64,/, "");
				
				var buf = new Buffer(img,'base64');
				var buf1 = new Buffer(img1,'base64');
				var buf2 = new Buffer(img2,'base64');
				var buf3 = new Buffer(img3,'base64');
				var buf4 = new Buffer(img4,'base64');
				var datas = {
						Localidad: req.body.Localidad,
						dlugar: req.body.dlugar,
						creator: res.locals.user._id,
						extension: ext,
						extension1: ext1,
						extension2: ext2,
						extension3: ext3,
						extension4: ext4,
						precio: req.body.precio,
						preriodo: req.body.preriodo,
						precio1: req.body.precio1,
						preriodo1: req.body.preriodo1,
						precio2: req.body.precio2,
						preriodo2: req.body.preriodo2,
						precio3: req.body.precio3,
						preriodo3: req.body.preriodo3,
						precio4: req.body.precio4,
						preriodo4: req.body.preriodo4,
						radio1: req.body.radio1,
						radio2: req.body.radio2,
						radio3: req.body.radio3,
						radio4: req.body.radio4,
						radio5: req.body.radio5,
						radio6: req.body.radio6,
						radio7: req.body.radio7,
						radio8: req.body.radio8,
						radio9: req.body.radio9,
						radio10: req.body.radio10,
						radio11: req.body.radio11,
						radio12: req.body.radio12,
						radio13: req.body.radio13,
						radio14: req.body.radio14,
						radio15: req.body.radio15,
						radio16: req.body.radio16,
						radio17: req.body.radio15,
						radio18: req.body.radio18,
						radio19: req.body.radio19,
						radio20: req.body.radio20,
						radio21: req.body.radio21,
						radio22: req.body.radio22,
						radio23: req.body.radio23,
						radio24: req.body.radio24,
						radio25: req.body.radio25,
						radio26: req.body.radio26,
						radio27: req.body.radio27,
						tipo: req.body.tipo,
						dir: req.body.dir,
					}
				var imagen = new Imagen(datas);
					imagen.save(function(err){
						if (!err) {
						client.publish("images",imagen.toString());
						fs.writeFile("public/imagenes/"+imagen._id+'.'+ext, data, {encoding: 'base64'}, function(err){
						console.log(err)
						})
						fs.writeFile("public/imagenes/"+imagen._id+"s"+'.'+ext1, data1, {encoding: 'base64'}, function(err){
						console.log(err)
						})
						fs.writeFile("public/imagenes/"+imagen._id+"t"+'.'+ext2, data2, {encoding: 'base64'}, function(err){
						console.log(err)
						})
						fs.writeFile("public/imagenes/"+imagen._id+"u"+'.'+ext3, data3, {encoding: 'base64'}, function(err){
						console.log(err)
						})
						fs.writeFile("public/imagenes/"+imagen._id+"v"+'.'+ext4, data4, {encoding: 'base64'}, function(err){
						console.log(err)
						})
						res.redirect("/detalle/"+imagen._id); 
					}else{
						res.render(err);
						}
			
		});
	})


/*				var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
				response = {};
				try{
				if (matches.length !== 3) {
				return new Error('Invalid input string');
				}
				response.type = matches[1];
				response.data = new Buffer(matches[2], 'base64');
				return response;
				}
				catch(e){
				return false
				}
				}
				let imageBuffer = decodeBase64Image(req.body.imgs22);
				fsp.emptyDir('public/imagenes/s.jpg', imageBuffer.data)
				.then(function(data){
				return data;
					})
				res.redirect("/");
*/

					/*var datas = {
						title: req.body.title,
						uso: req.body.uso,
						creator: res.locals.user._id,
						extension: res.locals.user._id,
						foto: req.body.foto,
						nombre1: req.body.nombre1
					}
					var imagen = new Imagen(datas);
					
					imagen.save(function(err){
						if (!err) {
						client.publish("images",imagen.toString());
						let imageBuffer = decodeBase64Image(req.body.imgs22);
						fs.writeFile("public/imagenes/"+imagen._id+'.jpg', imageBuffer.data)
						res.redirect("/app/imagenes/"+imagen._id); 
					}else{
						res.render(err);
						}*/

			//})
		//var extension = req.body.archivo.name.split(".").pop();



router.get("/imagenes/:id/envio", function(req,res){
	User.findOne({user:res.locals.user},(function(err,user){
			res.render("envio")
	}))
});


router.post("/envio2",function(req,res){
//coleccion areglo de coumentos que cumplen la condicion 
//queri

	User.findOne({},(function(err,user){
		var data = {
			nombre: req.body.name,
			email2: req.body.email2,
			email: req.body.email,
			direccion: req.body.direccion,
			tel: req.body.celular,
			mensaje: req.body.mensaje,
		}
		var transporter = nodemailer.createTransport('smtps://antesde.com%40gmail.com:elbarbas01@smtp.gmail.com');
		var mailOptions = {
	    from: '"Onlipets.com 👥" <cigarzon8@gmail.com>'+'<'+data.email+'>', // sender address
	    to:"cigarzon8@misena.edu.co", //req.body.correocliente, //, // list of receivers
	    subject: 'Pedido ✔', // Subject line
	    text: 'Tiene in pedido nuevo 🐴', // plaintext body
	    html: '<b>Hola Onlipent </b>'+ res.locals.user.username +
	    "<p>El usuario  " + res.locals.user.username +"<p> esta interesado en la oficina " +data.mensaje+"<p>, Comunicate con el " +
	    "<p>Datos del usuario: </p>"+ "<p>Nombre "+ res.locals.user.username +"<p> telefono  "+res.locals.user.telefono+
	    "<p> Correo " + res.locals.user.email + "<p></p>"+"<b>Datos de la oficina</b>"+"<p> Localidad  " + data.ciudad
	    +"<p> Precio "+ data.tel+" link de oficina "+data.mensaje ,
	};
		transporter.sendMail(mailOptions, function(error, info){
			if(error){
		       return console.log(error);
		    }else{
		    console.log('Message sent:'  );
				}
		});
		res.redirect("/app/enviamosdatos");
		
	}));
});
router.get("/enviamosdatos",function(req,res){
	res.render("enviamosdatos")
});

///video
///user



router.get("/delet/delett",function(req,res){
	res.render("imagenes/delett");}		
);
router.get("/delet/elegido",function(req,res){
	res.render("imagenes/edituser3");}		
);
router.get("/delett/editt/:id",function(req,res){
	res.render("imagenes/edituser2");}		
);
router.get("/vip/vip/:id",function(req,res){
	res.render("imagenes/vip");}		
);
router.route("/delet/edit/:id")
	.get(function(req,res){	
	res.render("imagenes/edituser");
})
.put(function(req,res){
	User.findById({_id:req.params.id},function(err,user){
		console.log(user)
		if(err){
	        res.send('Error al intentar modificar el usuario.');
	     }else{


				// string generated by canvas.toDataURL()
				var img = req.body.imgs22;
				// Grab the extension to resolve any image error

				if (img == "1") {
					var ext = "noesta"
				}else{
				var ext = img.split(';')[0].match(/jpeg|png|gif/)[0];}
				var data = img.replace(/^data:image\/\w+;base64,/, "");
				var buf = new Buffer(img,'base64');

				var actualizaciondeusuario = {
						dlugar: req.body.dlugar,
						extension: ext,
						radio1: req.body.radio1,
						radio2: req.body.radio2,
						radio3: req.body.radio3,
						radio4: req.body.radio4,
						radio5: req.body.radio5,
						radio6: req.body.radio6,
						radio8: req.body.radio8,
						radio9: req.body.radio9,
						radio10: req.body.radio10,
						radio11: req.body.radio11,
						radio12: req.body.radio12,
						radio13: req.body.radio13,
						radio14: req.body.radio14,
						radio15: req.body.radio15,
						radio16: req.body.radio16,
						radio17: req.body.radio15,
						radio18: req.body.radio18,
						radio19: req.body.radio19,
						radio20: req.body.radio20,
						radio21: req.body.radio21,
						radio22: req.body.radio22,
						radio23: req.body.radio23,
						radio24: req.body.radio24,
						radio25: req.body.radio25,
						radio26: req.body.radio26,
						radio27: req.body.radio27,
						radio28: req.body.radio28,
						radio29: req.body.radio29,
						radio30: req.body.radio30,
						radio31: req.body.radio31,
						radio32: req.body.radio32,
						imgs22:req.body.imgs22,
						lat:req.body.lat,
						long:req.body.long,
					}

			user.update({
						dlugar: actualizaciondeusuario.dlugar,
						extension: actualizaciondeusuario.ext,
						radio1: actualizaciondeusuario.radio1,
						radio2: actualizaciondeusuario.radio2,
						radio3: actualizaciondeusuario.radio3,
						radio4: actualizaciondeusuario.radio4,
						radio5: actualizaciondeusuario.radio5,
						radio6: actualizaciondeusuario.radio6,
						radio8: actualizaciondeusuario.radio8,
						radio9: actualizaciondeusuario.radio9,
						radio10: actualizaciondeusuario.radio10,
						radio11: actualizaciondeusuario.radio11,
						radio12: actualizaciondeusuario.radio12,
						radio13: actualizaciondeusuario.radio13,
						radio14: actualizaciondeusuario.radio14,
						radio15: actualizaciondeusuario.radio15,
						radio16: actualizaciondeusuario.radio16,
						radio17: actualizaciondeusuario.radio15,
						radio18: actualizaciondeusuario.radio18,
						radio19: actualizaciondeusuario.radio19,
						radio20: actualizaciondeusuario.radio20,
						radio21: actualizaciondeusuario.radio21,
						radio22: actualizaciondeusuario.radio22,
						radio23: actualizaciondeusuario.radio23,
						radio24: actualizaciondeusuario.radio24,
						radio25: actualizaciondeusuario.radio25,
						radio26: actualizaciondeusuario.radio26,
						radio27: actualizaciondeusuario.radio27,
						radio28: actualizaciondeusuario.radio28,
						radio29: actualizaciondeusuario.radio29,
						radio30: actualizaciondeusuario.radio30,
						radio31: actualizaciondeusuario.radio31,
						radio32: actualizaciondeusuario.radio32,
						imgs22: actualizaciondeusuario.imgs22,
						lat: actualizaciondeusuario.lat,
						long: actualizaciondeusuario.long,
			}
			,function(err){

						res.redirect("/perfil/"+user.username+"/"+user._id);
				})
		     }

		 
		})
	})

.delete(function(req,res){
   User.remove({_id: req.params.id}, function(error){
      if(error){
         res.send('Error al intentar eliminar el personaje.');
      }else{ 
         res.redirect('/perfil');
      }
   });
})
router.put("/delet/user/:id",function(req,res){
	User.findById({_id:req.params.id},function(err,user){
		console.log(user)
		if(err){
	        res.send('Error al intentar modificar el usuario.');
	     }else{

	     	var actua ={
			emailup:req.body.emailup,
			usernameup:req.body.usernameup,
			telefonoup:req.body.telefonoup,
			nitup:req.body.nitup
			}
			user.update({email:actua.emailup,usernamep:actua.usernameup,telefono:actua.telefonoup,nit:actua.nitup},function(err){

						res.redirect("/app/delett/editt/"+req.params.id);
					
				})
			






		     
		     }
		})

})
/*exports.update = function(req, res){


   Personaje.findById(req.params.id, function(error, documento){
         var personaje = documento;
         personaje.nombre = req.body.nombre;
         personaje.apellido = req.body.apellido;
         personaje.biografia = req.body.biografia;
         personaje.save(function(error,documento){
            if(error){
               res.send('Error al intentar guardar el personaje.');
            }else{ 
               res.redirect('/personajes');
            }
         });
      
   });




};*/


router.route('/deslogear') 
  .get(function(req, res) { 
      delete req.session.user_id; 
      res.redirect('/')  
  })

router.get("/paypal", function(req,res,next){
	User.find(function(err,users){
		Imagen.find({})
			.populate("creator")
			.exec(function(err,imagenes){
				if(err) {console.log(err);
				}else{
					res.render("compras",{imagenes:imagenes, users:users});}
		})
	})

});
router.get("/success", function(req,res,next){
	User.find(function(err,users){
		Imagen.find({})
			.populate("creator")
			.exec(function(err,imagenes){
				if(err) {console.log(err);
				}else{
					res.render("imagenes/success",{imagenes:imagenes, users:users});}
		})
	})

});

router.post("/success",function(req,res){
//coleccion areglo de coumentos que cumplen la condicion 
//queri
	User.findOne({},(function(err,user){
		var datas1 = {
			nombre: req.body.name,
			tel: req.body.telefono,
			mensaje: req.body.mensaje,
			email2: req.body.email2,
			emaiID: req.body.emaiID

		}
		console.log(datas1)

		var transporter = nodemailer.createTransport('smtps://antesde.com%40gmail.com:elbarbas01@smtp.gmail.com');
		var mailOptions = {
	    from: '"Antes-de.com 👥" <#{res.locals.user.email}>', // sender address
	    to:req.body.email2, //req.body.correocliente, //, // list of receivers
	    subject: 'Pedido ✔', // Subject line
	    text: 'Tiene in pedido nuevo 🐴', // plaintext body
	    html: '<b>Hola tines una nuevo cliente VIP o pago  su id </b>'+ req.body.emaiID +"<p> Confirmacion de correo </p>"+ req.body.name +"<p> confirmacion de telefono </p>"+req.body.telefono +"<p> lo que solicita </p>" + req.body.mensaje,
	};
	console.log(mailOptions)
		transporter.sendMail(mailOptions, function(error, info){
			if(error){
		       return console.log(error);
		    }else{
		    console.log('Message sent:'  );
				}
		});
		res.redirect("/app/enviamosdatos");
		
	}));
});


router.get("/noproduc", function(req,res,next){
	User.find(function(err,users){
		Imagen.find({})
			.populate("creator")
			.exec(function(err,imagenes){
				if(err) {console.log(err);
				}else{
					res.render("imagenes/noproduc",{imagenes:imagenes, users:users});}
		})
	})

});

router.get("/Hosts", function(req,res,next){
User.find(function(err,users){
	Imagen.find({})
		.populate("creator")
		.exec(function(err,imagenes){
			if(err) {console.log(err);
			}else{
					res.render("llamativo2",{imagenes:imagenes, users:users});}
		})
	})

});

//router.route("/envio ")
module.exports = router;

/*
get solicitar y motrar
rout actualizar
delete eliminar 
post crear
taimanin yukikaze
*/
/*
REST
error  cuando se carga una umagen  http://127.0.0.1:8081/app/imagenes/imagenes
*/

//1670438mon
