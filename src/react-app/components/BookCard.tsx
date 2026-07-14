import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router';
import type { Book } from '../data/books';
import { tokens } from '../theme';

const coverSx = (shadow: string) => ({
	aspectRatio: '2 / 3',
	borderRadius: 0,
	background: `linear-gradient(155deg, ${tokens.band} 0%, ${tokens.muted} 140%)`,
	boxShadow: shadow,
	transition: 'transform .3s ease',
});

interface BookCardProps {
	book: Book;
	variant: 'compact' | 'detailed';
}

export default function BookCard({ book, variant }: BookCardProps) {
	if (variant === 'compact') {
		return (
			<Box
				component={Link}
				to="/books"
				sx={{
					textDecoration: 'none',
					color: 'inherit',
					display: 'block',
					'&:hover .book-cover': { transform: 'translateY(-6px)' },
				}}
			>
				<Box className="book-cover" sx={coverSx('0 22px 42px -22px rgba(28,26,23,0.45)')} />
				<Typography
					sx={{
						fontFamily: "'Cormorant Garamond', serif",
						fontSize: 23,
						fontWeight: 600,
						mt: 2,
						color: tokens.ink,
					}}
				>
					{book.title}
				</Typography>
				<Typography
					sx={{
						fontFamily: "'Manrope', sans-serif",
						fontSize: 12,
						letterSpacing: '0.06em',
						color: tokens.muted,
					}}
				>
					{book.year}
				</Typography>
			</Box>
		);
	}

	return (
		<Box
			sx={{
				'&:hover .book-cover': { transform: 'translateY(-6px)' },
			}}
		>
			<Box className="book-cover" sx={coverSx('0 24px 46px -24px rgba(28,26,23,0.45)')} />
			<Typography
				sx={{
					fontFamily: "'Cormorant Garamond', serif",
					fontSize: 26,
					fontWeight: 600,
					mt: 2.5,
					color: tokens.ink,
				}}
			>
				{book.title}{' '}
				<Typography
					component="span"
					sx={{ fontFamily: "'Manrope', sans-serif", fontSize: 12, color: tokens.muted }}
				>
					{book.year}
				</Typography>
			</Typography>
			<Typography
				sx={{
					fontFamily: "'Manrope', sans-serif",
					fontSize: 14.5,
					lineHeight: 1.65,
					color: tokens.body,
					mt: 1,
				}}
			>
				{book.blurb}
			</Typography>
			<Box
				component="a"
				href="#"
				sx={{
					display: 'inline-block',
					mt: 1.5,
					fontFamily: "'Manrope', sans-serif",
					fontSize: 12,
					fontWeight: 600,
					letterSpacing: '0.04em',
					textTransform: 'uppercase',
					color: tokens.accent,
					textDecoration: 'none',
					borderBottom: `1px solid ${tokens.accent}`,
				}}
			>
				Buy the book →
			</Box>
		</Box>
	);
}
