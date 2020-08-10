const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
	
if (!args[1]) {
	return message.channel.send("กรุณาใส่ไอดีดิสที่ต้องการยืนยัน\n\nตัวอย่าง .verify โค้ด ไอดีห้องดิส");
}

let that_discord = (args[1])

let user = message.author;
	
let verify_code = await db.fetch(`verify_codes_${that_discord}_${user.id}`)

if (verify_code == null) {
	let verifyCodenull = new Discord.MessageEmbed()
    .setColor(0xffb73b)
    .setDescription(`กรุณารับรหัสยืนยันก่อน\n\nพิมพ์คำสั่ง .getverify`);
    return message.channel.send(verifyCodenull)
}

if (!args[0]) {
	return message.channel.send("กรุณาใส่รหัสยืนยัน");
}

if (args[0] !== verify_code) {
	let verifyCodewrong = new Discord.MessageEmbed()
    .setColor(0xffb73b)
    .setDescription(`รหัสยืนยันตัวตนไม่ถูกต้อง`);
    return message.channel.send(verifyCodewrong)
}

let guild = client.guilds.cache.get(that_discord);
let dmUser = message.author.id;
let isMember = guild.members.cache.get(dmUser)

await db.delete(`verify_codes_${that_discord}_${user.id}`)
let verify_role = await db.fetch(`verify_role_${that_discord}`)
isMember.roles.add(verify_role)
let verifycomplete = new Discord.MessageEmbed()
.setColor(0xffb73b)
.setDescription("ยืนยันสำเร็จ");
return message.channel.send(verifycomplete)

}