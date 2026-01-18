import dotenv from 'dotenv';

dotenv.config();

const {
	BOT_TOKEN,
	GUILD_ID,
	CHANNEL_ID,
	ALERT_TERMS,
	ALERT_PING,
	PING_COOLDOWN,
} = process.env;

if (!BOT_TOKEN || !GUILD_ID || !CHANNEL_ID || !ALERT_TERMS || !ALERT_PING) {
	throw new Error('Configuration missing.');
}

export const drachenlordQuotes: string[] = [
	'Etzala!',
	'Traut euch, kommt zu mir, Altschauerberg 8, 91448 Emskirchen!',
	'Die Haider raffen es einfach nicht.',
	'Ich hab die Schnauze voll etzala!',
	'Runter von meinem Grundstück!',
	'Verpisst euch!',
	'Hört mal auf mit der Scheiße!',
	"Was zitterst'n so?",
	'Ich hab die Bullen schon gerufen!',
	'Momentan gibt es ein Projekt das nennt sich Projekt Brot',
];

export const config = {
	BOT_TOKEN,
	GUILD_ID,
	CHANNEL_ID,
	ALERT_PING,
	PING_COOLDOWN: parseInt(PING_COOLDOWN ?? '5'),
	ALERT_TERMS: ALERT_TERMS.split(';')
		.map((v) => v.trim().toLowerCase())
		.filter((v) => v.length > 0),
};
