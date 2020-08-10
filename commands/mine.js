const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {
	
	let user = message.author;
	let bpspace = await db.fetch(`inv_space_${user.id}`)
	if (bpspace > 100) {
		let bpmax = new Discord.MessageEmbed()
		.setColor(0xffb73b)
		.setDescription("กระเป๋าเต็มแล้วกรุณาขายของก่อน");
		return message.channel.send(bpmax)
		}
	
    let author = await db.fetch(`mine_${user.id}`)
	
	let timeout = 60000;
	
	if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
		
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#ffb73b")
        .setDescription(`คุณเพิ่งขุดแร่ไป\n\nลองใหม่อีกครั้งใน ${time.minutes} นาที ${time.seconds} วิ`);
        message.channel.send(timeEmbed)
      } else {

        let replies = ['<:ore1:742456866197602435>','<:ore2:742456867145515028>','<:ore3:742456867221143613>','<:ore4:742456867472670821>']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 3) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("#ffb73b")
        .setDescription(`คุณขุดแร่ได้ ${replies[result]} จำนวน ${amount} อัน`);
        message.channel.send(embed1)
        
		db.add(`inv_space_${user.id}`, amount)
        db.add(`inv_${replies[result]}_${user.id}`, amount)
        db.set(`mine_${user.id}`, Date.now())
    };
		
}