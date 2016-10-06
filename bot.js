var Discord = require("discord.js");
var bot = new Discord.Client();
var signe = '!';

// Prend un string et renvoie t = [ 1er mot, reste de la chaîne tronquée du 1er mot ]
function cmd_args( str ){
	var i = str.indexOf(' ');
	return ( i != -1 ) ? [ str.substr(0,i), str.substr(i+1) ] : [ str, '' ];
}

function commandes( message, cmd, args ){
	
}

bot.on('message', message => {
	var input = message.content;
	if( input.starsWith(signe) && message.author.bot == false ){
		var arr = cmd_args[ input.substr(1) ];
		var cmd = arr[0];
		var args = arr[1];
		commandes( message, cmd, args );
	}
});

bot.on('error', e => { console.error(e); });
bot.login('MjA2NzMwOTQwNjkxNjQ0NDE2.CtfC5Q.AK9_fLeuSbDRR7qK8o6HW9LRGkA');