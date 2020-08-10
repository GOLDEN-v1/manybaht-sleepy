const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
	
      let user = message.mentions.users.first() || message.author;
	  
	  let bal = db.fetch(`money_${user.id}`)
	  
	  if (bal === null) bal = 0;
	  
	  let bank = await db.fetch(`bank_${user.id}`)
	  
	  if (bank === null) bank = 0;
	  
	  let moneyEmbed = new Discord.MessageEmbed()
      .setColor(0xffb73b)
	  .setThumbnail(user.avatarURL() + "?size=512")
      .setDescription(`**จำนวนเงินของ ${user}**\n\nในกระเป๋า : ${bal}\nในธนาคาร : ${bank}`);
      message.channel.send(moneyEmbed);
	  
}