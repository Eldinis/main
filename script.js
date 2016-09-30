// MEMBRES

function Rang(nom,niveau){this.nom = nom; this.niveau = niveau;}

// rangs possibles uniquement
var rangs = [new Rang("Hérétique",0), new Rang("Séminariste Unum",1), new Rang("Séminariste Duum",1), new Rang("Séminariste Trium",1), new Rang("Séminariste Quartum",1), new Rang("Séminariste Quinqum",1), new Rang("Séminariste Hexaltum",1), new Rang("Prêtre",2), new Rang("Évêque",3), new Rang("Archevêque",4), new Rang("Cardinal",5), new Rang("Pape",6), new Rang("Kami",7)];

// ordres possibles uniquement
var ordres = ["Sang Vermeil","Fontaine Bleutée","Branche Verte","Autel Doré"];

function Membre(id){
	this.id = id; // ID Discord
	this.rang = new Rang("",0);
	this.titres = "";
	this.ordre = "";
	this.role = "";
}

var membres = [];

function getMembre(id){
	for(var i=0;i<membres.length;i++){
		if( membres[i].id == id )
			return membres[i];
	}
	var m = new Membre(id);
	membres.push(m);
	return m;
}

function setRang(id,indice){
	getMembre(id).rang = rangs[indice];
}

function setTitres(id,str){
	getMembre(id).titres = str;
}

function setOrdre(id,indice){
	getMembre(id).ordre = ordres[indice];
}

// lis x pour un tab[x] t.q. 1 <= x <= longueur du tableau
// renvoie x-1
// renvoie la chaîne vide ou, s'il y a erreur, le message
function lireIndice(x){
	if(x == null)
		return "Argument manquant";
	var x = parseInt(x,10);
	if( x < 1 )
		return "Nombre trop petit";
	return x-1;
}

//appel
function infoSur(id,pseudo){
	var ord = {
		"Sang Vermeil": "du *Sang Vermeil*", "Fontaine Bleutée": "de la *Fontaine Bleutée*", "Branche Verte": "de la *Branche Verte*", "Autel Doré": "de l'*Autel Doré*"
	}
	var m = getMembre(id);
	var str = p+","+r+" de l'ordre "+ord[m.ordre]+"\nRang' "+m.rang+"\nTitres' "+m.titres;
	return str;
}

// DICO

function Def(key,value,id){
	this.key = key;
	this.value = value;
	this.id = id; // auteur de la définition
}

var dico = [];

function getDef(key){
    for(var k=0;k<dico.length;k++){
	if( dico[k].key.toLowerCase() == key.toLowerCase() )
	    return dico[k];
    }
    return null;
}

// appel
function addDef(param,id,sender){
    var key = (param.split(' '))[0];
    var value = "";
    var def = getDef(key);
    if( def != null  ){
	if( def.id == id ){
	    def.value = value;
	    return sender+" a changé la définition de "+def.key;
	} else {
	    return sender+" n'est pas l'auteur de "+key+"; accès refusé";
	}
    } else {
	dico.push( new Def(key,value,id) );	
	return sender + "a défini " + key;
    }
}
