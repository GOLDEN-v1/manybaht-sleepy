const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
	   
	  let user = message.author;
	  
	  if (args[0].length > 10) {
		  return message.reply('ระบุเพศไม่เกิน 10 ตัวอักษร');
	  }
	  
	  if (args[0] == 'reset') {
		  db.set(`profile_gender_${user.id}`, 'ไม่ได้ระบุ')
		  let gender = await db.fetch(`profile_gender_${user.id}`)
		  let genderreset = new Discord.MessageEmbed()
	      .setColor(0xffb73b)
	      .setDescription(`ลบเพศเรียบร้อย`);
	      message.channel.send(genderreset)
		  
	  } else {
	  if (!(args[0]))
		  return message.channel.send("กรุณาระบุเพศที่ต้องการตั้ง\n\nเช่น `.setgender ชาย`");
	  db.set(`profile_gender_${user.id}`, args[0])
	  let gender = await db.fetch(`profile_gender_${user.id}`)
	  
	  let genderembed = new Discord.MessageEmbed()
	  .setColor(0xffb73b)
	  .setDescription(`ตั้งเพศเป็น : ${gender}`);
	  message.channel.send(genderembed)
	  }
	  
}