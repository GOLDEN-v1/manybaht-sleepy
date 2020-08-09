const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    let bothelp = new Discord.MessageEmbed()
    .setColor("#ffb73b")
    .addField("คำทั่วไป", "`.avatar` `.dm` `.help` `.info` `.nick` `.say`")
    .addField("คำสนุก ๆ", "`.bet` `.unknow`")
    .addField("คำสั่งแอดมิน", "`.ban` `.kick` `.purge`")
    message.channel.send(bothelp);
	
}