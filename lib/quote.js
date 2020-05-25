import quotes from '../public/quotes.json';

export function getRandomQuote() {
	const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	return randomQuote;
}
