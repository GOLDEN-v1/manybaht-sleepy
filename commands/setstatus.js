const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
	   
	  let user = message.author;
	  
	  if (args[0].length > 20) {
		  return message.reply('สถานะต้องไม่เกิน 20 ตัวอักษร');
	  }
	  
	  if (args[0] == 'reset') {
		  db.set(`profile_status_${user.id}`, 'ไม่ได้ระบุ')
		  let prostatus = await db.fetch(`profile_status_${user.id}`)
		  let statusreset = new Discord.MessageEmbed()
	      .setColor(0xffb73b)
	      .setDescription(`ลบสถานะเรียบร้อย`);
	      message.channel.send(statusreset)
		  
	  } else {
	  if (!(args[0]))
		  return message.channel.send("กรุณาระบุสถานะที่ต้องการตั้ง\n\nเช่น `.setstatus รักใครสักคน`");
	  db.set(`profile_status_${user.id}`, args[0])
	  let prostatus = await db.fetch(`profile_status_${user.id}`)
	  
	  let statusembed = new Discord.MessageEmbed()
	  .setColor(0xffb73b)
	  .setDescription(`ตั้งสถานะเป็น : ${prostatus}`);
	  message.channel.send(statusembed)
	  }
	  
}