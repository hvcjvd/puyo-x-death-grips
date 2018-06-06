const Discord = require('discord.js');
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

function slotEmote(SlotsPos) {
	if (SlotsPos === 0) {
		message.reply(`:tangerine:`);
	}
	if (SlotsPos === 1) {
		message.reply(`:poop:`);
	}
	if (SlotsPos === 2) {
		message.reply(`:apple:`);
	}
	if (SlotsPos === 3) {
		message.reply(`:lemon:`);
	}
	if (SlotsPos === 4) {
		message.reply(`:pineapple:`);
	}
}
client.on('message', message => {
    if (message.content === 'm!slots') {
		var Slot1 = Math.floor(Math.random() * 5);   
		var Slot2 = Math.floor(Math.random() * 5);
		var Slot3 = Math.floor(Math.random() * 5);  
		if (Slot1 === Slot2) {
  		if (Slot1 === Slot3) {
				message.reply('3-Match Win! Super Lucky! \n');
				slotEmote(Slot1);
				slotEmote(Slot2);
				slotEmote(Slot3);
				return;
				}
  		else {
  			message.reply('2-Match Win! Good Job! \n');
				slotEmote(Slot1);
				slotEmote(Slot2);
				slotEmote(Slot3);
				return;
		}
		if (Slot1 === Slot3) {
			message.reply('2-Match Win! Good Job! \n');
			slotEmote(Slot1);
			slotEmote(Slot2);
			slotEmote(Slot3);
			return;
		}
		if (Slot2 === Slot3) {
			message.reply('2-Match Win! Good Job! \n');
			slotEmote(Slot1);
			slotEmote(Slot2);
			slotEmote(Slot3);
			return;
    }
    if (Slot1 !== Slot2, Slot1 !== Slot2, Slot2 !== Slot3) {
			message.reply('You lose fucker!');
			slotEmote(Slot1);
			slotEmote(Slot2);
			slotEmote(Slot3);
			return;
  	}
}}});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
