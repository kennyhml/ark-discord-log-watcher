import { config, drachenlordQuotes } from './config';
import { Client, GatewayIntentBits, Message, TextChannel } from 'discord.js';

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

client.on('messageCreate', async (msg: Message) => {
	if (msg.guildId !== config.GUILD_ID || msg.channelId != config.CHANNEL_ID) {
		return;
	}

	const log = msg.content.toLowerCase();
	if (!config.ALERT_TERMS.some((term) => log.includes(term))) {
		return;
	}

	const quoteIdx = Math.floor(Math.random() * drachenlordQuotes.length);
	const quote = drachenlordQuotes[quoteIdx];
	await msg.reply({
		content: `**${quote}**\n${config.ALERT_PING}`,
		allowedMentions: { parse: ['everyone', 'users', 'roles'] },
	});
});

client.once('clientReady', () => {
	console.log('Bot is ready.');

	setInterval(
		async () => {
			console.log('Executing special task...');
			try {
				const channel = (await client.channels.fetch(
					'1455548898247577742',
				)) as TextChannel;
				console.log(channel);

				if (channel) {
					const sentMessage = await channel.send(
						`<@764141889225883660> DU HURENSOHN`,
					);
					await sentMessage.delete();
				}
			} catch (error) {
				console.error('Error in interval task:', error);
			}
		},
		10 * 60 * 1000,
	);
});

client.login(config.BOT_TOKEN);
