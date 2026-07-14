export interface Book {
	title: string;
	year: string;
	blurb: string;
}

export const books: Book[] = [
	{
		title: 'Northlight',
		year: '2025',
		blurb: 'A lighthouse keeper’s daughter returns to the island that shaped her.',
	},
	{
		title: 'The Tidewatchers',
		year: '2023',
		blurb: 'Three generations of women bound by a single stretch of coastline.',
	},
	{
		title: 'Ember Season',
		year: '2021',
		blurb: 'A wildfire, a small town, and the summer that changed everything.',
	},
	{
		title: 'Paper Cities',
		year: '2019',
		blurb: 'Two architects redraw a city — and the lives inside it.',
	},
	{
		title: 'The Quiet Hours',
		year: '2017',
		blurb: 'A night nurse collects the stories patients only tell at 3 a.m.',
	},
	{
		title: 'A Map of Small Rooms',
		year: '2015',
		blurb: 'The luminous, award-winning debut about the houses we carry with us.',
	},
];

// Home page "More to read" band excludes the hero title (Northlight) and the debut.
export const featuredBooks = books.slice(1, 5);
