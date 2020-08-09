const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    let bothelp = new Discord.MessageEmbed()
    .setColor("#ffb73b")
    .addField("คำสั่งทั่วไป", "`.avatar` `.dm` `.help` `.info` `.nick` `.say`")
    .addField("คำสั่งสนุก ๆ", "`.bet` `.slap` `.smug` `.pat` `.unknow`")
    .addField("คำสั่งการเงิน", "`.bal` `.work`")
    .addField("คำสั่งแอดมิน", "`.ban` `.kick` `.purge`")
    message.channel.send(bothelp);
	
}