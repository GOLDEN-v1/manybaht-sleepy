const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
	
      let user = message.author;
	  
	  let member = db.fetch(`money_${user.id}`)
      let member2 = db.fetch(`bank_${user.id}`)
	  
	  if (args[0] == 'all') {
        let money = await db.fetch(`money_${user.id}`)
        let bank = await db.fetch(`bank_${user.id}`)
		
		let embedbank = new Discord.MessageEmbed()
		.setColor(0xffb73b)
		.setDescription("คุณไม่มีเงินให้ฝาก")
		
		if(money === 0) return message.channel.send(embedbank)
			
		db.add(`bank_${user.id}`, money)
		db.subtract(`money_${user.id}`, money)
		let depositallmoney = new Discord.MessageEmbed()
		.setColor(0xffb73b)
        .setDescription("ฝากเงินทั้งหมดเรียบร้อยแล้ว");
        message.channel.send(depositallmoney)
		
		} else {
			
		let moneypocket = parseInt(args[0])
			
		let noamount = new Discord.MessageEmbed()
		.setColor(0xffb73b)
		.setDescription("กรุณาระบุจำนวนเงิน");
		
		if (!moneypocket) {
			return message.channel.send(noamount);
		}
		
		let negativemoney = new Discord.MessageEmbed()
		.setColor(0xffb73b)
		.setDescription("คุณไม่สามารถฝากเงินติดลบได้");
		
		if (message.content.includes('-')) { 
		    return message.channel.send(negativemoney)
		}
		
		let donthavethatmuch = new Discord.MessageEmbed()
		.setColor(0xffb73b)
		.setDescription("คุณไม่มีเงินจำนวนที่ว่า");
		
		if (member < moneypocket) {
			return message.channel.send(donthavethatmuch)
		}
	    
		let moneydeposited = new Discord.MessageEmbed()
		.setColor(0xffb73b)
		.setDescription(`คุณได้ฝากเงินจำนวน ${moneypocket} เข้าธนาคารแล้ว`);
		
		db.add(`bank_${user.id}`, moneypocket)
		db.subtract(`money_${user.id}`, moneypocket)
		message.channel.send(moneydeposited)
		}
		
}