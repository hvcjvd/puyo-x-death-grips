const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	bot.sendMessage('pong');
  	}
});

client.on('message', message => {
    if (message.content === 'FUCK') {
    	bot.sendMessage('WEAK, NO RESPECT');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
