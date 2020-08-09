const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
	
	if (message.author.id !== client.config.ownerid) {
	    return message.channel.send("เฉพาะเจ้าของบอทเท่านั้นที่ใช้คำสั่งนี้ได้");
	}
	
    let user = message.mentions.members.first() || message.author;
	  
	if (isNaN(args[1])) return;
    db.add(`money_${user.id}`, args[1])
    let bal = await db.fetch(`money_${user.id}`)
	  
	let moneyEmbed = new Discord.MessageEmbed()
    .setColor(0xffb73b)
    .setDescription(`เพิ่มเงินจำนวน ${args[1]} เรียบร้อยแล้ว\n\nจำนวนเงินใหม่ : ${bal}`);
    message.channel.send(moneyEmbed)
	  
}