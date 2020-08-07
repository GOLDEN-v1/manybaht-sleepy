exports.run = async (client, message, args) => {

        if (!message.member.hasPermission(["MANAGE_MESSAGES"], ["ADMINISTRATOR"]))
			return message.channel.send("คุณไม่มีอำนาจในการล้างข้อความในดิสนี้");

        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply('กรุณาระบุจำนวนข้อความที่ต้องการลบ');
        }

        else if (amount < 1 || amount > 99) {
            return message.reply('ต้องระบุเลขระหว่าง 1 ถึง 99');
        }

        message.channel.bulkDelete(amount, true).catch(err => {
            console.log(err);
            message.channel.send('เกิดปัญหาขณะพยายามล้างข้อความ');
        });
		
}