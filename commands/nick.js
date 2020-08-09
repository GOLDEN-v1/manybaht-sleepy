exports.run = async (client, message, args) => {
	
    if (!message.member.hasPermission(['ADMINISTRATOR'])) {
			return message.channel.send("คุณไม่มีอำนาจในการเปลี่ยนชื่อเล่น");
	}
	
	let membermention = message.mentions.members.first();
	if (!membermention) return message.channel.send("ระบุคนที่ต้องการเปลี่ยนชื่อเล่น");
	
	if (!(args[1])) {
            return message.channel.send('กรุณาระบุชื่อเล่นที่ต้องการเปลี่ยน');
    }
	
	membermention.setNickname(`${args[1]}`)
		.then(async () => message.channel.send("เปลี่ยนชื่อสำเร็จ"))
		.catch(error => message.channel.send("เปลี่ยนชื่อไม่สำเร็จ"));
	
}