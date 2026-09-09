export interface Book {
	title: string;
	year: string;
	blurb: string;
	description?: string;
}

export const books: Book[] = [
	{
		title: 'Body and Soul',
		year: '2026',
		blurb: 'A lighthouse keeper’s daughter returns to the island that shaped her.',
		description: 'A lighthouse keeper’s daughter returns to the island that shaped her, confronting the past and discovering the secrets that bind her family together.',
	},
	{
		title: 'If I Had My Way',
		year: '2026',
		blurb: 'Three generations of women bound by a single stretch of coastline.',
		description: 'Three generations of women',
	},
];

// Home page "More to read" band excludes the hero title (Northlight) and the debut.
export const featuredBooks = books.slice(1, 5);
