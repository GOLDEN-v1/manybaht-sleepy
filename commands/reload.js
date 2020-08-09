exports.run = async (client, message, args) => {

    if (message.author.id !== client.config.ownerid) {
			return message.channel.send("เฉพาะเจ้าของบอทเท่านั้นที่ใช้คำสั่งนี้ได้");
	}
	
	else if (!(args[0])) {
            return message.channel.send('กรุณาระบุคำสั่งที่ต้องการรีโหลด');
    }
	
	const cmdjs = args[0];
	
    if (!client.commands.has(cmdjs)) {
			return message.channel.send("ไม่มีคำสั่งที่ว่า");
	}
	
    delete require.cache[require.resolve(`./${cmdjs}.js`)];
	client.commands.delete(cmdjs);
	const props = require(`./${cmdjs}.js`);
	 client.commands.set(cmdjs, props);
	
	message.channel.send(`รีโหลดคำสั่ง : ${cmdjs} สำเร็จ`);

}