var TelegramBot = require('node-telegram-bot-api');

var token ='xxxxxxxxxxxxxxxxxxxx';

var bot=new TelegramBot(token,{polling:true});

bot.onText(/\/echo(.+)/,function (msg,match){

	var chatId=msg.chat.id;
	var resp=match[1];
	bot.sendMessage(chatId,resp);
});

bot.on('message',function(msg){
	 console.log(msg);
  	var chatId = msg.chat.id;
  	var text = msg.text;
	if (text.indexOf('mert') >= 0 || text.indexOf('MERT') >= 0 || text.indexOf('Mert') >= 0) {
      // meraba yazanda varmış :S :)
      bot.sendMessage(chatId, 'Mert Öngengil ', { disable_notification:true, reply_to_message_id:msg.message_id } );
    }
    if (text.indexOf('Tolga') >= 0 || text.indexOf('TOLGA') >= 0 || text.indexOf('tolga') >= 0) {
      // meraba yazanda varmış :S :)
      bot.sendMessage(chatId, 'Tolga Murat Öztomurcuk ', { disable_notification:true, reply_to_message_id:msg.message_id } );
    }
});