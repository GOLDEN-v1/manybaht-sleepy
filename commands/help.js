const Discord = require("discord.js");
const cooldown = new Set();

exports.run = async (client, message, args) => {
  if (cooldown.has(message.author.id)) {
            message.channel.send("<@" + message.author.id + ">" + " กรุณารอ 1 นาทีก่อนพิมพ์คำสั่งใหม่อีกรอบ");
  } else {
    let inline = true
    let bothelp = new Discord.MessageEmbed()
    .setColor("#ffb73b")
  .addField(`${client.config.prefix}` + "help", "ดูคำสั่งทั้งหมด", inline)
    .addField(`${client.config.prefix}` + "avatar", "ดูโปรไฟล์", inline )
    .addField(`${client.config.prefix}` + "ban", "แบนผู้ใช้งาน", inline)
    .addField(`${client.config.prefix}` + "kick", "เตะผู้ใช้งาน", inline)
    .addField(`${client.config.prefix}` + "purge", "ล้างข้อความ", inline)
    .addField(`${client.config.prefix}` + "say", "ส่งข้อความ", inline)
    .addField(`${client.config.prefix}` + "unknow", "กำลังคิด", inline)
    message.channel.send(bothelp);
  cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 60000);
    }
}