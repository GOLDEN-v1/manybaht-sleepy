exports.run = async (client, message, args) => {
	
	let member = message.mentions.members.first();
	if (!member) return message.channel.send("ระบุคนที่ต้องการแบน")
    member.ban().then((member) => {
        message.channel.send(`${member.displayName} ได้ถูกแบนออกดิสแล้ว`);
    }).catch(() => {
        if (!message.member.hasPermission(['BAN_MEMBERS', 'ADMINISTRATOR'])) {
            message.reply("คุณไม่มีอำนาจในการแบนสมาชิกในดิสนี้");
        } else if (member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR'])) {
            message.reply("คุณไม่สามารถแบนคนที่ระบุได้ได้");
        }
    })

}