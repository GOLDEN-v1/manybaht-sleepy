const Discord = require('discord.js');
const cooldown = new Set();

exports.run = async (client, message, args) => {
	
	if (cooldown.has(message.author.id)) {
            message.channel.send("<@" + message.author.id + ">" + " กรุณารอ 1 นาทีก่อนพิมพ์คำสั่งใหม่อีกรอบ");
    } else {
	
	let patimg = await client.nekoslife.sfw.pat();
	
	let usermention = message.mentions.members.first();
	let patembed;
	
	if (!usermention) return message.channel.send("ระบุคนที่ต้องการลูกหัว");
	
	if (usermention) {
	patembed = new Discord.MessageEmbed()
	.setTitle(message.author.username + " ลูกหัว " + usermention.user.username)
	.setColor(0xffb73b)
	.setImage(patimg.url)
	message.channel.send(patembed)
	    .catch(error => message.channel.send("เกิดข้อผิดพลาด"));
	}
	
	cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 60000);
    }
	
}