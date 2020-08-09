const Discord = require('discord.js');
const cooldown = new Set();

exports.run = async (client, message, args) => {
	
	if (cooldown.has(message.author.id)) {
            message.channel.send("<@" + message.author.id + ">" + " กรุณารอ 1 นาทีก่อนพิมพ์คำสั่งใหม่อีกรอบ");
    } else {
	
	let slapimg = await client.nekoslife.sfw.slap();
	
	let usermention = message.mentions.members.first();
	let slapembed;
	
	if (!usermention) return message.channel.send("ระบุคนที่ต้องการตบ");
	
	if (usermention) {
	slapembed = new Discord.MessageEmbed()
	.setTitle(message.author.username + " ตบ " + usermention.user.username)
	.setColor(0xffb73b)
	.setImage(slapimg.url)
	message.channel.send(slapembed)
	    .catch(error => message.channel.send("เกิดข้อผิดพลาด"));
	}
	
	cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 60000);
    }
	
}