const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    let inline = true
    let bothelp = new Discord.MessageEmbed()
    .setColor("#ffb73b")
    .addField(`${client.config.prefix}` + "help", "ดูคำสั่งทั้งหมด", inline)
    .addField(`${client.config.prefix}` + "avatar", "ดูโปรไฟล์", inline )
    .addField(`${client.config.prefix}` + "ban", "แบนผู้ใช้งาน", inline)
    .addField(`${client.config.prefix}` + "kick", "เตะผู้ใช้งาน", inline)
    .addField(`${client.config.prefix}` + "purge", "ล้างข้อความ", inline)
    .addField(`${client.config.prefix}` + "say", "ส่งข้อความ", inline)
    .addField(`${client.config.prefix}` + "reload", "รีโหลดคำสั่ง", inline)
    .addField(`${client.config.prefix}` + "nick", "เปลี่ยนชื่อเล่น", inline)
    .addField(`${client.config.prefix}` + "unknow", "กำลังคิด", inline)	
    message.channel.send(bothelp);
	
}