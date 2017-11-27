// inicalizar base 
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/fotos");
mongoose.Promise = global.Promise;

var posible_valor = ["M","F"];
var email_mathc = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ , "Coloca un email valido"];  

var password_validation = {
	validator: function(p){
			return this.password_confirmation == p;
		},
		message: "Las contraseñas no son iguales "
}

var user_Schema = new Schema( {
	email: {type: String, require:"es obliugatorio un correo", match:  email_mathc},
	password:{type:String,minleng:[6,"por favor adjunta una contraseña mas larga"], 
	validate: password_validation},
	username:{type:String,require:true,maxleng:[50,"username muy largo"]},
	telefono:{type:String,require:true,maxleng:[20]},
	nit:{type:String,require:true},	
	whatsapp:{type:Number,require:true},	
	subirinfo:{type:Boolean,require:true},

	dlugar: {type:String,require:true},
	extension:{type:String,require:true},
	radio1: {type:String,require:true},
	radio2: {type:String,require:true},
	radio3: {type:String,require:true},
	radio4: {type:String,require:true},
	radio5: {type:String,require:true},
	radio6: {type:String,require:true},
	radio8: {type:String,require:true},
	radio9: {type:String,require:true},
	radio10: {type:String,require:true},
	radio11: {type:String,require:true},
	radio12: {type:String,require:true},
	radio13: {type:String,require:true},
	radio14: {type:String,require:true},
	radio15: {type:String,require:true},
	radio16: {type:String,require:true},
	radio17: {type:String,require:true},
	radio18: {type:String,require:true},
	radio19: {type:String,require:true},
	radio20: {type:String,require:true},
	radio21: {type:String,require:true},
	radio22: {type:String,require:true},
	radio23: {type:String,require:true},
	radio24: {type:String,require:true},
	radio25: {type:String,require:true},
	radio26: {type:String,require:true},
	radio27: {type:String,require:true},
	radio28: {type:String,require:true},
	radio29: {type:String,require:true},
	radio30: {type:String,require:true},
	radio31: {type:String,require:true},
	radio32: {type:String,require:true},
	imgs22:{type:String,require:true},
	lat:{type:String,require:true},
	long:{type:String,require:true},

//	sex: {type:String,enum:{values: posible_valor,message:"opcion no valida "}}
});

user_Schema.virtual("password_confirmation").get(function(){
		return this.p_c;
	}).set(function(password){
		this.p_c = password;
});



var User = mongoose.model("User", user_Schema);
//modelo de conexiones
module.exports.User = User;
