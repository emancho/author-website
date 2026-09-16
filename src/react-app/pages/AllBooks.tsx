import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Eyebrow from '../components/Eyebrow';
import BookCard from '../components/BookCard';
import { books } from '../data/books';
import { tokens } from '../theme';

export default function AllBooks() {
	return (
		<Box sx={{ maxWidth: 1200, mx: 'auto', px: 3, py: 'clamp(48px, 6vw, 88px)' }}>
			<Box sx={{ maxWidth: 640, mb: 6 }}>
				<Eyebrow>All Books</Eyebrow>
				<Typography
					component="h1"
					sx={{
						fontFamily: "'Cormorant Garamond', serif",
						fontSize: 'clamp(40px, 6vw, 72px)',
						fontWeight: 500,
						color: tokens.ink,
						mt: 1,
					}}
				>
					Current Novels:
				</Typography>
				<Typography
					sx={{ fontFamily: "'Manrope', sans-serif", fontSize: 16, lineHeight: 1.7, color: tokens.body, mt: 2 }}
				>
					Every book Eliara has written, from her luminous debut to the new novel.
				</Typography>
			</Box>

			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
					gap: 'clamp(32px, 4vw, 56px)',
				}}
			>
				{books.map((book) => (
					<BookCard key={book.title} book={book} variant="detailed" />
				))}
			</Box>
		</Box>
	);
}
