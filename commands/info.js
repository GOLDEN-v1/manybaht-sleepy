const Discord = require("discord.js");
const cooldown = new Set();

exports.run = async (client, message, args) => {
	
  if (cooldown.has(message.author.id)) {
            message.channel.send("<@" + message.author.id + ">" + " กรุณารอ 1 นาทีก่อนพิมพ์คำสั่งใหม่อีกรอบ");
  } else {
    let inline = true
    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
	let uptime = `${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`;
    let boticon = client.user.avatarURL();
    let usersize = client.users.cache.size
    let chsize = client.channels.cache.size
    let serversize = client.guilds.cache.size
    let botinfo = new Discord.MessageEmbed()
    .setColor("#ffb73b")
    .setThumbnail(boticon)
    .addField("บอท", `${client.user.username}`, inline)
    .addField("เจ้าของ", "<@311364847826763776>", inline )
    .addField("จำนวนดิส", `${serversize}`, inline)
    .addField("จำนวนห้อง", `${chsize}`, inline)
    .addField("จำนวนผู้ใช้", `${usersize}`, inline)
    .addField("บอทเอพีไอ", "Discord.js", inline)
	.addField("ออนไลน์มาแล้ว", `${uptime}`)
    .addField("สร้างเมื่อ", client.user.createdAt)
    .setFooter(`${client.user.username} เขียนด้วยความเครียด : Nadeon`)
    message.channel.send(botinfo);
  cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 60000);
    }
}