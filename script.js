function Rang(nom,niveau){
	this.nom = nom;
	this.niveau = niveau;
}

function Membre(id){
	this.id = id; // ID Discord
	this.rang = new Rang("",0);
	this.titres = "";
	this.ordre = "";
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



