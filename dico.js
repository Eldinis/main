var adminID = "0";

function getUser(id){
	for(var k=0;k<bot.users.length;k++){
	if( bot.users[k].id == id )
	    return bot.users[k];
    }
    return null;
}

function Def(key,value,id){
	this.key = key;
	this.value = value;
	this.id = id;
	this.toString = function(){
		var u = getUser(id);
		if( u != null )
			return this.key + ": " + this.value + " -par " + u.username;
		else
			return "Erreur - il semblerait que " + this.id + " n'existe plus.";
	}
}

var dico = [];

function getDef(key){
    for(var k=0;k<dico.length;k++){
	if( dico[k].key.toLowerCase() == key.toLowerCase() )
	    return dico[k];
    }
    return null;
}

function decompose(str){
	var i = str.indexOf(' ');
	var cmd = param.substr(0,i);
	var args = param.substr(i+1);
	return [cmd,args];
}

// appel écriture
function addDef(param,id,sender){
	var keyvalue = decompose(param);
    var key = keyvalue[0];
    var value = keyvalue[1];
    var def = getDef(key);
    if( def != null ){
		if( def.id == id ){
			def.value = value;
			return sender + " a changé la définition de " + def.key;
		} 
		else if( id == adminID ){
			def.value = value;
			return sender + " a changé la définition de " + def.key;
		}
		else {
			return sender + " n'est pas l'auteur de " + key + "; accès refusé";
		}
    } else {
		dico.push( new Def(key,value,id) );	
		return sender + "a défini " + key;
    }
}

// appel lecture
function seeDef(param){
	if( param == null )
		return "Il manque le mot cherché.";
	var def = getDef(param);
	if( def != null ){
		return def.toString();
	} else {
		return param + " n'est pas enregistré.";
	}
}