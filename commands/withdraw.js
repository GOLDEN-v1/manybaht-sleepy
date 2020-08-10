const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
	
      let user = message.author;
	  
	  let member = db.fetch(`money_${user.id}`)
      let member2 = db.fetch(`bank_${user.id}`)
	  
	  if (args[0] == 'all') {
        let money = await db.fetch(`bank_${user.id}`)
		
		let nomoneyinbank = new Discord.MessageEmbed()
		.setColor(0xffb73b)
		.setDescription("คุณไม่มีเงินให้ถอน")
		
		if(money === 0) return message.channel.send(nomoneyinbank)
		
		db.subtract(`bank_${user.id}`, money)
        db.add(`money_${user.id}`, money)
			
		let withdrawallmoney = new Discord.MessageEmbed()
		.setColor(0xffb73b)
        .setDescription("ถอนเงินทั้งหมดเรียบร้อยแล้ว");
        message.channel.send(withdrawallmoney)
		
		} else {
			
		let moneydabank = parseInt(args[0])
			
		let noamount = new Discord.MessageEmbed()
		.setColor(0xffb73b)
		.setDescription("กรุณาระบุจำนวนเงิน");
		
		if (!moneydabank) {
			return message.channel.send(noamount);
		}
		
		let negativemoney = new Discord.MessageEmbed()
		.setColor(0xffb73b)
		.setDescription("คุณไม่สามารถถอนเงินติดลบได้");
		
		if (message.content.includes('-')) { 
		    return message.channel.send(negativemoney)
		}
		
		let donthavethatmuch = new Discord.MessageEmbed()
		.setColor(0xffb73b)
		.setDescription("คุณไม่มีเงินจำนวนที่ว่า");
		
		if (member2 < moneydabank) {
			return message.channel.send(donthavethatmuch)
		}
	    
		let moneywithdrawed = new Discord.MessageEmbed()
		.setColor(0xffb73b)
		.setDescription(`คุณได้ถอนเงินจำนวน ${moneydabank} จากธนาคารแล้ว`);
		
		db.subtract(`bank_${user.id}`, moneydabank)
		db.add(`money_${user.id}`, moneydabank)
		message.channel.send(moneywithdrawed)
		}
		
}