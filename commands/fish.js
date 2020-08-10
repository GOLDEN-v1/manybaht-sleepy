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
	
    let author = await db.fetch(`fish_${user.id}`)
	
	let timeout = 600000;
	
	if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
		
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#ffb73b")
        .setDescription(`คุณเพิ่งตกปลาไป\n\nลองใหม่อีกครั้งใน ${time.minutes} นาที ${time.seconds} วิ`);
        message.channel.send(timeEmbed)
      } else {

        let replies = ['<:1_:742413101265059911>','<:2_:742414967919345726>','<:3_:742414968015683726>','<:4_:742414968867258411>','<:5_:742414967957094412>','<:6_:742414968590172320>']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 3) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("#ffb73b")
        .setDescription(`คุณตกปลาได้ ${replies[result]} จำนวน ${amount} ตัว`);
        message.channel.send(embed1)
        
		db.add(`inv_space_${user.id}`, amount)
        db.add(`inv_${replies[result]}_${user.id}`, amount)
        db.set(`fish_${user.id}`, Date.now())
    };
		
}