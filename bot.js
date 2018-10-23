'(remove this and apostorphes to reactivate bot) const Discord = require('discord.js');' 
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === 'FUCK') {
    	message.reply('WEAK, NO RESPECT');
  	}
});

client.on('message', message => {
    if (message.content === 'sex') {
    	message.reply('YESU FUCK ME HARDER');
  	}
});

client.on('message', message => {
    if (message.content === 'fat yoshi sent you a fuck request') {
    	message.reply('tell him to smash my 10 inch deep pussy with his ginormous dinosaur cock');
  	}
});

client.on('message', message => {
    if (message.content === 'epic') {
    	message.reply('meme');
  	}
});

client.on('message', message => {
    if (message.content === 'a') {
    	message.reply('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  	}
});

client.on('message', message => {
    if (message.content === '@everyone') {
    	message.reply('stop youre not funny');
  	}
});

client.on('message', message => {
    if (message.content === '@everyone') {
    	message.reply('stop youre not funny');
  	}
});

client.on('message', message => {
    if (message.content === 'uwu') {
    	message.reply('uwu!!');
  	}
});

client.on('message', message => {
    if (message.content === 'luna') {
    	message.reply('lunyyyyy~ bofa jeff');
  	}
});

client.on('message', message => {
    if (message.content === 'lesbians') {
    	message.reply('hot!');
  	}
});


client.on('message', message => {
    if (message.content === 'slottest') {
    	message.reply('this shit is too hard just use miki');
  	}
});

client.on('message', message => {
    if (message.content === 'banana') {
    	message.reply('PLEASE DON\'T EVER PUT ME BACK IN THERE');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
