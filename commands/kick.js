exports.run = async (client, message, args) => {
	
	let member = message.mentions.members.first();
	if (!member) return message.channel.send("ระบุคนที่ต้องการเตะ")
    member.kick().then((member) => {
        message.channel.send(`${member.displayName} ได้ถูกเตะออกดิสแล้ว`);
    }).catch(() => {
        if (!message.member.hasPermission(['KICK_MEMBERS', 'ADMINISTRATOR'])) {
            message.reply("คุณไม่มีอำนาจในการเตะสมาชิกในดิสนี้");
        } else if (member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR'])) {
            message.reply("คุณไม่สามารถเตะคนที่ระบุได้ได้");
        }
    })

}