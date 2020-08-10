const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    let bothelp = new Discord.MessageEmbed()
    .setColor("#ffb73b")
    .addField("คำสั่งทั่วไป", "`.avatar` `.dm` `.help` `.info` `.nick` `.say`")
    .addField("คำโปรไฟล์", "`.profile` `.setnickname` `.setgender` `.setstatus`")
    .addField("คำสั่งสนุก ๆ", "`.bet` `.slap` `.smug` `.pat` `.unknow`")
    .addField("คำสั่งเงิน", "`.bal` `.work` `.deposit` `.withdraw`")
    .addField("คำสั่งพนัน", "`.roulette`")
    .addField("คำสั่งแอดมิน", "`.ban` `.kick` `.purge`")
    message.channel.send(bothelp);
	
}