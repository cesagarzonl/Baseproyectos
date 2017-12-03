var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var User = require("./models/user").User;
//var User2 = require("./models/user2").User2;
var session = require("express-session");
var router_app = require("./router_app")
var session_middleware = require("./middlewares/session")
var methodOverride = require("method-override");
var formidable = require("express-formidable");
var RedisStore = require("connect-redis")(session);
var http = require("http");
var realtime = require("./realtime")
var imagen_find = require("./middlewares/find_imagen");
var video_find = require("./middlewares/find_video");
var Imagen = require("./models/imagenes");
var Video = require("./models/video");
var Contacto = require("./models/contacto");
var app = express();
var router = express.Router();
var fs = require("fs");
var nodemailer = require('nodemailer');
var url = require('url');
var cookiSession = require("cookie-session");
var redis = require("redis");
var client =redis.createClient();
var app = express();
var path = require("path")
var passport = require('passport');
//var Cropper = require('cropperjs')
require('./passport')(passport);

/*var Twitter = require('twitter');

var clientrrr = new Twitter({
  consumer_key: 'kdxALOO3LM4d4AVNw3VvDDTYZ',
  consumer_secret: 'BUP7mxS9hGbeDOVvlj1ADAIYZtEf0xYwWzY3hjMuVnA1oHeCvn',
  access_token_key: 'BRos9T0CP9hiwBpD0hAs3l6DdrgL1YpesfxqCBuA',
  access_token_secret: 'jJNmW1ZzaZC37BvB5uYz2Go0MyLzfuuepr1kvsU0aFaAf'
});


app.get('/favorites/list', function(error, tweets, response, clientrrr, res, req) {
  if(error) throw error;
  console.log(tweets);  // The favorites. 
  console.log(response);  // Raw response object. 
	res.render("llamativo");
});*/


var server = http.Server(app);
var sessionMiddleware = session({
	store: new RedisStore({}),
	    proxy: true,
    resave: true,
    saveUninitialized: true,
	secret:"super ultra secre world"
})
realtime(server,sessionMiddleware)
app.use("/public", express.static('public'));
app.use(bodyParser.urlencoded({extended: true, uploadDir:"public"}));
app.use("/robots.txt", express.static("robots.txt"));
app.use("/sistemap.txt", express.static("sistemap.txt"));
app.use(bodyParser.json()); // para peticiones  aplication/json
 //lee parametros de ptiiones 
app.use(methodOverride("_method"))
app.use(sessionMiddleware);
	/*secret:"123456789abcd",
	resave: false,
	saveUninitialized: false*/
	//genid: function(req){	}
app.use(formidable.parse({ keepExtensions: true, maxFieldsSize : 50 * 1024 * 1024 }));
app.set("view engine","jade");
app.all("/index",imagen_find);

app.get("/", function(req,res,next){
User.find(function(err,users){
	Imagen.find({})
		.populate("creator")
		.exec(function(err,imagenes){
			if(err) {console.log(err);
			}else{
					res.render("llamativo",{imagenes:imagenes, users:users});}
		})
	})

});

app.use(bodyParser.json({limit: '1000mb'}));
app.use(bodyParser.urlencoded({limit: '1000mb', extended: true}));
//Fuente: https://www.enmimaquinafunciona.com/pregunta/12776/nodejs-no-es-accesible-desde-ips-externas-en-ubuntu	
app.all("/perfil/:username/:id",video_find);
app.get("/perfil/:username/:id", function(req,res,next){
	var query = url.parse(req.url).pathname;
		query = query.split("/").pop()
	var filtro = query
	Imagen.find(User)
		.populate("creator")
		.exec(function(err,imagenes){
			if(err) {console.log(err);
			}else{
				User.findById(filtro,function(err,user){
					Video.find(function(err,videos){
						var fff = req.session.user_id
										User.findById(fff,function(err,user2){
						res.locals = { user:user };
						res.render("cliente",{imagenes:imagenes,filtro: filtro,videos: videos,user2:user2});}
						)}
					)}
				)
			}

		})
});
app.get("/detalle/:id", function(req,res,next){
	var query = url.parse(req.url).pathname;
		query = query.split("/").pop()
	var filtro = query
	
	console.log(filtro)
	Imagen.find(User)
		.populate("creator")
		.exec(function(err,imagenes){
			if(err) {console.log(err);
			}else{
				User.findById(filtro,function(err,user){
					Video.find(function(err,videos){	
						res.locals = { user:user };
						res.render("offcina",{imagenes:imagenes,filtro: filtro,videos: videos});}
					)}
				)
			}

		})
});
app.get("/login",function(req,res){
		res.render("login");
	});
// verbos httpp => Get / post se alteran los encabezados de la peticion 
app.get("/signup",function(req,res){
	User.find(function(err,docs) {	
		res.render("signup");
	});
});
app.get("/loginclie",function(req,res){
	res.render("loginclie")
})	
app.post("/Contacto", function(req,res){
	var contactos = new Contacto({
			nombre: req.body.nombre,
			email: req.body.email,
			ciudad: req.body.ciudad,
			telefono: req.body.telefono,
			mensaje: req.body.mensaje})
contactos.save().then(function(us){
		console.log("Guardamos tus datos ")
		res.redirect("/");
	},function(err){	
		console.log(String(err));
		res.redirect("/usco");			
	});	

});


app.post("/users", function(req,res){
		var user = new User({email: req.body.email,
				password: req.body.password,
				password_confirmation: req.body.password_confirmation,
				username: req.body.username,
				telefono: req.body.telefono,
				nit: req.body.nit,
				whatsapp: req.body.whatsapp,
				subirinfo: true,
				});

	user.save().then(function(err){
			User.findOne({email:req.body.email,password:req.body.password},function(err,user){
				req.session.user_id=user._id;
				res.redirect("/app/imagenes/newpromo");
					});
	},function(err){	
		console.log(String(err));
		res.redirect("/usco");			
	});	
});
app.get("/usco", function(req,res,next){
User.find(function(err,users){
	Imagen.find({})
		.populate("creator")
		.exec(function(err,imagenes){
			if(err) {console.log(err);
			}else{
					res.render("usco",{imagenes:imagenes, users:users});}
		})
	})

});

app.post("/session", function(req,res){
	User.findOne({email:req.body.email,password:req.body.password},function(err,user){
		
		if (user == null) {
				var obj = "2"
				res.send(obj);
		}
		else{
			var ir = "/perfil/"+user.name+"/"+user.id
			req.session.user_id=user._id;
				res.send(ir);
		}
	});
});
app.use("/app",session_middleware);
app.use("/app", router_app);
app.all("/imagenes/:username*",imagen_find);


app.get("/nosotros",function(req,res){
	res.render("nosotros")
})	

app.get("/nada", function(req,res,next){
User.find(function(err,users){
	Imagen.find({})
		.populate("creator")
		.exec(function(err,imagenes){
			if(err) {console.log(err);
			}else{
					res.render("nada2",{imagenes:imagenes, users:users});}
		})
	})

});

app.post("/nada", function(req,res,next){
User.find(function(err,users){
	Imagen.find({})
		.populate("creator")
		.exec(function(err,imagenes){
			if(err) {console.log(err);
			}else{
			contr = req.body.contr
				if (contr == "andrea") {
					User.find(function(err,users){
					res.render("nada",{users:users,imagenes:imagenes});
					});
				}else{
					res.redirect("nada");
				}
					;}
		})
	})

});

app.get("/politicas", function(req,res,next){
User.find(function(err,users){
	Imagen.find({})
		.populate("creator")
		.exec(function(err,imagenes){
			if(err) {console.log(err);
			}else{
					res.render("politicas",{imagenes:imagenes, users:users});}
		})
	})

});	


app.post("/buscabusca", function(req,res){
	busca = req.body.busca
	console.log(busca)
	   var query = url.parse(req.url,true).query;
	   var variableget = query.variableget;
	   			res.redirect("/busca/"+busca);
});
app.post('/endpoint', function(req, res){
	var obj = {};
	console.log('body: ' + JSON.stringify(req.body));
	res.send(obj);
});


app.post("/envio3",function(req,res){
//coleccion areglo de coumentos que cumplen la condicion 
//queri
		var data = {
			nombre: req.body.name,
			email: req.body.correo2,
			asunto: req.body.asunto,
			tel: req.body.tel,
			mensaje: req.body.mess
		}
		console.log(data)
	var transporter = nodemailer.createTransport('smtps://antesde.com%40gmail.com:elbarbas01@smtp.gmail.com');

	let mailOptions = {
	    from: '"xxxxxx.com.co 👥" ', // sender address
	    to:"cigarzon8@misena.edu.co", //req.body.correocliente, //, // list of receivers
	    subject: req.body.asunto+'✔', // Subject line
	    text: 'Tienes una duda de un usuario 🐴', // plaintext body
	    html: '<b>Hola!</b> <b>El usuario  </b>'+ req.body.name +"<p>Tiene una duda repondela pronto:  </p>"+"</p> - nombre " + req.body.name +"</p> - telefono - " + req.body.tel +"<p>- correo - " + req.body.correo2 +"<p> - mensaje del usuario " + req.body.mess,
	};

    // create reusable transporter object using the default SMTP transport
		transporter.sendMail(mailOptions, function(error, info){
		    if(error){
		        return console.log(error);
		    }
		    console.log('Message sent: ' + info.response);
		});
	var obj = "2"
	res.send(obj);
		
});
app.get("/envio/ok",function(req,res){
	res.render("enviamosdatos")
});

app.get("/index/*", function(req,res,next){
	var query = url.parse(req.url).pathname;
		query = query.split("/").pop()
	var filtro = query
User.find(function(err,users){
	Imagen.find({})
		.populate("creator")
		.exec(function(err,imagenes){
			if(err) {console.log(err);
			}else{
					res.render("indexbogo",{users:users,imagenes:imagenes});
					;}
		})
	})

});


app.post("/filtross", function(req,res){
	var data = {
			buscain: req.body.mysearch3,
			tipoin: req.body.tipoin,
			preriodin: req.body.preriodin,
			rangoin: req.body.rangoin,
		}
		console.log(data)
		if (data.buscain == '') {
			if (data.tipoin == '') {
				if (data.preriodin == '') {
					if (data.rangoin == '') {
//								res.redirect("/filtr/"+data.buscain+"/"+data.tipoin+"/"+data.preriodin+"/"+data.rangoin)
						res.redirect("index/bogota")
					}else {
						res.redirect("index/"+data.rangoin)
					}

				}
				else{
					if (data.rangoin == '') {
//								res.redirect("/filtr/"+data.buscain+"/"+data.tipoin+"/"+data.preriodin+"/"+data.rangoin)
						res.redirect("index/"+data.preriodin)
					}else {
						res.redirect("filtr2/"+data.preriodin+"/"+data.rangoin)
					}
				}

			}
			else{
				if (data.preriodin == '') {
					if (data.rangoin == '') {
//								res.redirect("/filtr/"+data.buscain+"/"+data.tipoin+"/"+data.preriodin+"/"+data.rangoin)
						res.redirect("index/"+data.tipoin)
					}else {
						res.redirect("filtr2/"+data.tipoin+"/"+data.rangoin)
					}
				}
				else{
					if (data.rangoin == '') {
//								res.redirect("/filtr/"+data.buscain+"/"+data.tipoin+"/"+data.preriodin+"/"+data.rangoin)
						res.redirect("filtr2/"+data.tipoin+"/"+data.preriodin)
					}else {
						res.redirect("index3/"+data.tipoin+"/"+data.preriodin+"/"+data.rangoin)
					}
				}

			}

			}




		else{
			if (data.tipoin == '') {
				if (data.preriodin == '') {
					if (data.rangoin == '') {
//								res.redirect("/filtr/"+data.buscain+"/"+data.tipoin+"/"+data.preriodin+"/"+data.rangoin)
						res.redirect("index/"+data.buscain)
					}else {
						res.redirect("filtr2/"+data.buscain+"/"+data.rangoin)
					}

				}
				else{
					if (data.rangoin == '') {
//								res.redirect("/filtr/"+data.buscain+"/"+data.tipoin+"/"+data.preriodin+"/"+data.rangoin)
						res.redirect("filtr2/"+data.buscain+"/"+data.preriodin)
					}else {
						res.redirect("filtr2/"+data.buscain+"/"+data.preriodin+"/"+data.rangoin)
					}
				}

			}

			else{
				if (data.preriodin == '') {
					if (data.rangoin == '') {
//								res.redirect("/filtr/"+data.buscain+"/"+data.tipoin+"/"+data.preriodin+"/"+data.rangoin)
						res.redirect("filtr2/"+data.buscain+"/"+data.tipoin)
					}else {
						res.redirect("index3/"+data.buscain+"/"+data.tipoin+"/"+data.rangoin)
					}

				}
				else{
					if (data.rangoin == '') {
//								res.redirect("/filtr/"+data.buscain+"/"+data.tipoin+"/"+data.preriodin+"/"+data.rangoin)
						res.redirect("index3/"+data.buscain+"/"+data.tipoin+"/"+data.preriodin)
					}else {
								res.redirect("filtr/"+data.buscain+"/"+data.tipoin+"/"+data.preriodin+"/"+data.rangoin)
					}
				}

			}

			}
		

});
app.get("/index3/*/*/*", function(req,res,next){
	var queryy = url.parse(req.url).pathname;
		queryy = queryy.split("/")
	var filtro = queryy
	console.log(filtro[2])

	Imagen.find({})
			.populate("creator")
			.exec(function(err,imagenes){
				if(err) {console.log(err);
				}else{
		User.findOne({},function(err,user){
			res.render("index3",{imagenes:imagenes, filtro:filtro, user:user});}
			)
			}
		})
})
app.get("/filtr2/*/*", function(req,res,next){
	var queryy = url.parse(req.url).pathname;
		console.log(queryy)
		queryy = queryy.split("/")
	var filtro = queryy

	Imagen.find({})
			.populate("creator")
			.exec(function(err,imagenes){
				if(err) {console.log(err);
				}else{
		User.findOne({},function(err,user){
			res.render("index2",{imagenes:imagenes, filtro:filtro, user:user});}
			)
			}
		})
})
app.get("/filtr/*/*/*/*", function(req,res,next){
	var queryy =  url.parse(req.url).pathname;
		queryy = queryy.split("/")
	var filtro = queryy
	var filtros = queryy[1]
	var filtros1 = queryy[2]
	var filtros2 = queryy[3]
	var filtros3 = queryy[4]
	console.log(filtros)
	console.log(filtros1)
	console.log(filtros2)
	console.log(filtros3)
var dd = url.parse(req.url)

console.log(dd.path)

	Imagen.find({})
			.populate("creator")
			.exec(function(err,imagenes){
				if(err) {console.log(err);
				}else{
		User.findOne({},function(err,user){
			res.render("indexx",{imagenes:imagenes, filtro:filtro, user:user});}
			)
			}
		})
})





app.post("/extencion", function(req,res){
	mysearch = req.body.mysearch
	mysearch.toLowerCase()
	User.findOne({username:mysearch},function(err,user){
			if (user != null) {
					res.redirect("/perfil/"+user.username+"/"+user.id);}				
			if (user == null) {
					if (mysearch == "perros") {
						res.redirect("/index/"+mysearch)
					}
					else if (mysearch == "Escritorio compartido") {
						res.redirect("/Compratido/undefined")
					}
					else if (mysearch == "Escritorio dedicado") {
						res.redirect("Dedicado/undefined")
					}
					else if (mysearch == "Auditorio") {
						res.redirect("/auditorio/undefined")
					}
					else if (mysearch == "sala de Juntas") {
						res.redirect("/Sala/undefined")
					}
					else if (mysearch == "bogota") {
						res.redirect("/index/"+mysearch)
					}
					else if (mysearch == "") {
						res.redirect("/index/"+mysearch)
					}
					else {
						res.redirect("/index/"+mysearch)
					}
			}

		})	
});


//recibe buscador de host
app.post("/hosts", function(req,res){
	busca = req.body.busca
	console.log(busca)
	   var query = url.parse(req.url,true).query;
	   var variableget = query.variableget;
	   			res.redirect("/app/imagenes/newpromo");
});
//recibe buscador de hosts rediccionado a 


//informacion del publicador
app.post("/creates", function(req,res){
	res.redirect("/loginclie");
});




//pagina host
app.get("/Host", function(req,res,next){
User.find(function(err,users){
	Imagen.find({})
		.populate("creator")
		.exec(function(err,imagenes){
			if(err) {console.log(err);
			}else{
					res.render("indexx",{imagenes:imagenes, users:users});}
		})
	})

});


var passport = require('passport');
require('./models/user');
require('./passport')(passport);

// Configuración de Express
app.use(passport.initialize());
app.use(passport.session());
// Rutas de Passport

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});



app.get('/auth/twitter', passport.authenticate('twitter'));
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/twitter/callback', passport.authenticate('twitter',
  { successRedirect: '/', 
    failureRedirect: '/login' }));
app.get('/auth/facebook/callback', passport.authenticate('facebook',
  { successRedirect: '/', 
    failureRedirect: '/login' }));



server.listen(5002);

//server.listen(80, "54.232.249.181" ); 
//escuchar por amazon
