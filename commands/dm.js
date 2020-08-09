const cooldown = new Set();

exports.run = async (client, message, args) => {
	
	if (cooldown.has(message.author.id)) {
            message.channel.send("<@" + message.author.id + ">" + " กรุณารอ 1 นาทีก่อนพิมพ์คำสั่งใหม่อีกรอบ");
    } else {
	
    if (!(args[0])) {
            return message.channel.send('กรุณาระบุ ID ผู้ใข้งาน');
    }
	
	if (!(args[1])) {
            return message.channel.send('กรุณาระบุข้อความที่ต้องการส่ง');
    }
	
	let user = client.users.cache.get(`${args[0]}`);
	user.send(`${args[1]}`)
	    .then(async () => message.channel.send("ส่งข้อความสำเร็จ"))
		.catch(error => message.channel.send("ส่งข้อความไม่สำเร็จ"));
	
	cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 60000);
    }
	
}