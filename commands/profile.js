const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
	
      let user = message.mentions.users.first() || message.author;
	  
	  let money = await db.fetch(`money_${user.id}`)
	  if (money === null) money = 0;
	  
	  let bank = await db.fetch(`bank_${user.id}`)
	  if (bank === null) bank = 0;
	  
	  let roulettewin = await db.fetch(`roulette_win_${user.id}`)
	  if (roulettewin === null) roulettewin = 0;
	  
	  let roulettelose = await db.fetch(`roulette_lose_${user.id}`)
	  if (roulettelose === null) roulettelose = 0;
	  
	  let proembed = new Discord.MessageEmbed()
	  .setColor(0xffb73b)
	  .setThumbnail(user.avatarURL() + "?size=512")
	  .setDescription(`**โปรไฟล์ ${user}**\n\nกระเป๋าตังค์ : ${money}\nธนาคาร : ${bank}\nชนะ Roulette : ${roulettewin}\nแพ้ Roulette : ${roulettelose}`);
	  message.channel.send(proembed)
	  
}