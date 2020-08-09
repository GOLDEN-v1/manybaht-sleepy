exports.run = async (client, message, args) => {
	
      if (!message.member.hasPermission(['MANAGE_MESSAGES'])) {
     	  return message.channel.send("คุณไม่มีอำนาจในการใช้คำสั่งนี้");
	  }
	
	  if (message.mentions.channels.size == 0) {
          message.reply("กรุณาระบุห้องที่ต้องการส่งคำพูดเช่น #ชื่อห้อง");
      }
      else {
          let targetChannel = message.mentions.channels.first();

          const args = message.content.split(" ").slice(2);
          let saytext = args.join(" ");
          targetChannel.send(saytext);
          message.delete();
      }
	  
}