const Discord = require('discord.js');
const cooldown = new Set();

exports.run = async (client, message, args) => {
	
	if (cooldown.has(message.author.id)) {
            message.channel.send("<@" + message.author.id + ">" + " กรุณารอ 1 นาทีก่อนพิมพ์คำสั่งใหม่อีกรอบ");
    } else {
	
	let smugimg = await client.nekoslife.sfw.smug();
	
	let smugembed;
	
	smugembed = new Discord.MessageEmbed()
	.setTitle(message.author.username + " รู้สึกพอใจ")
	.setColor(0xffb73b)
	.setImage(smugimg.url)
	message.channel.send(smugembed)
	    .catch(error => message.channel.send("เกิดข้อผิดพลาด"));
	
	cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 60000);
    }
	
}