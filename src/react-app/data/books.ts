export interface Book {
	title: string;
	year: string;
	blurb: string;
	description?: string;
	img: string;
}

export const books: Book[] = [
	{
		title: 'Body and Soul',
		year: '2026',
		blurb: "Zyana Reynolds is a successful writer, who has built a fanbase of readers. With her recent book being critized by her devoted readers for being inauthentic , she is compelled to experience a life that she protected herself from in the form of a dangerous man named Atlas Porter",
		description: 'A lighthouse keeper’s daughter returns to the island that shaped her, confronting the past and discovering the secrets that bind her family together.',
		img: 'https://pub-456cb52783e5414b8d29402fb3af5b5c.r2.dev/AuthorFolder/Body%20and%20Soul.JPEG'
	},
	{
		title: 'If I Had My Way',
		year: '2026',
		blurb: "Zion Reynolds is a high-powered attorney in Seattle, who has built a life where nothing—and no one—can destabilize her. That is until, Jaxson Warren, the man who once shattered her heart, reappears and shakes the very world Zion created for herself.",
		description: 'Three generations of women',
		img: 'https://pub-456cb52783e5414b8d29402fb3af5b5c.r2.dev/AuthorFolder/If%20I%20Had%20My%20Way%20Cover.jpg',
	},
];

// Home page "More to read" band excludes the hero title (Northlight) and the debut.
export const featuredBooks = books.slice(1, 5);
