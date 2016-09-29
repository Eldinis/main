// VARIABLES

function Rang(nom,niveau){
	this.nom = nom;
	this.niveau = niveau;
}

// rangs possibles uniquement
var rangs = [
	new Rang("Hérétique",0),
	new Rang("Séminariste Unum",1),
	new Rang("Séminariste Duum",1),
	new Rang("Séminariste Trium",1),
	new Rang("Séminariste Quartum",1),
	new Rang("Séminariste Quinqum",1),
	new Rang("Séminariste Hexaltum",1),
	new Rang("Prêtre",2),
	new Rang("Évêque",3),
	new Rang("Archevêque",4),
	new Rang("Cardinal",5),
	new Rang("Pape",6),
	new Rang("Kami",7)
];

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

function Def(key,value,id){
	// mot à définir
	this.key = key;
	// définition
	this.value = value;
	// auteur de la définition
	this.id = id;
}

var dico = [];

// AUXILIAIRES

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

function defExiste(key){
	for(var i=0;i<dico.length;i++){
		if( dico[i].key.toLowerCase() == key.toLowerCase() )
			return true;
	}
	return false;
}

// FONCTIONS APPEL

function infoSur(id,pseudo){
	var ord = {
		"Sang Vermeil": "du *Sang Vermeil*", "Fontaine Bleutée": "de la *Fontaine Bleutée*", "Branche Verte": "de la *Branche Verte*", "Autel Doré": "de l'*Autel Doré*"
	}
	var m = getMembre(id);
	var str = p+","+r+" de l'ordre "+ord[m.ordre]+"\nRang' "+m.rang+"\nTitres' "+m.titres;
	return str;
}

function addDef(param,id,sender){
	var key = firstWord(param);
	var value = "";
	if( defExists() && def.author != id ){
		return "";
	} else {
		dico.push( new Def(key,value,id) );	
		return sender + "a défini " + key;
	}
}
