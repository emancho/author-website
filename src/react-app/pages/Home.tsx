import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router';
import Eyebrow from '../components/Eyebrow';
import BookCard from '../components/BookCard';
import { featuredBooks } from '../data/books';
import { tokens, fadeUp } from '../theme';

function AboutTeaser() {
	return (
		<Box
			sx={{
				maxWidth: 1200,
				mx: 'auto',
				px: 3,
				pt: 'clamp(48px, 7vw, 88px)',
				pb: 'clamp(56px, 7vw, 96px)',
			}}
		>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
					gap: 'clamp(40px, 6vw, 80px)',
					alignItems: 'center',
				}}
			>
				<Box
					role="img"
					aria-label="Eleanor Vance author photo"
					sx={{
						aspectRatio: '4 / 5',
						background: `linear-gradient(155deg, ${tokens.band} 0%, ${tokens.muted} 140%)`,
						boxShadow: '0 30px 60px -30px rgba(28,26,23,0.4)',
					}}
				/>
				<Box>
					<Eyebrow>About the Author</Eyebrow>
					<Typography
						sx={{
							fontFamily: "'Cormorant Garamond', serif",
							fontSize: 'clamp(24px, 2.6vw, 32px)',
							fontWeight: 400,
							lineHeight: 1.35,
							color: tokens.ink,
							mt: 2,
						}}
					>
						Eleanor Vance writes about the places we come from and the people we become when we
						finally return to them.
					</Typography>
					<Typography
						sx={{
							fontFamily: "'Manrope', sans-serif",
							fontSize: 15.5,
							lineHeight: 1.75,
							color: tokens.body,
							maxWidth: '46ch',
							mt: 2.5,
						}}
					>
						Raised on the coast of Maine, she spent a decade as a documentary researcher before
						turning to fiction. <em>Northlight</em> is her sixth novel.
					</Typography>
					<Box
						component={Link}
						to="/about"
						sx={{
							display: 'inline-block',
							mt: 3,
							fontFamily: "'Manrope', sans-serif",
							fontSize: 12.5,
							fontWeight: 600,
							textTransform: 'uppercase',
							color: tokens.accent,
							textDecoration: 'none',
							borderBottom: `1.5px solid ${tokens.accent}`,
						}}
					>
						More about Eleanor →
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

function NewNovelHero() {
	return (
		<Box
			sx={{
				maxWidth: 1200,
				mx: 'auto',
				px: 3,
				pt: 'clamp(48px, 7vw, 96px)',
				pb: 'clamp(56px, 7vw, 104px)',
				animation: `${fadeUp} 0.55s ease`,
			}}
		>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
					gap: 'clamp(40px, 6vw, 88px)',
					alignItems: 'center',
				}}
			>
				<Box>
					<Eyebrow>The New Novel · 2025</Eyebrow>
					<Typography
						sx={{
							fontFamily: "'Cormorant Garamond', serif",
							fontSize: 'clamp(48px, 7.5vw, 88px)',
							fontWeight: 500,
							lineHeight: 1.02,
							letterSpacing: '-0.01em',
							color: tokens.ink,
							mt: 1,
						}}
					>
						Northlight
					</Typography>
					<Typography
						sx={{
							fontFamily: "'Manrope', sans-serif",
							fontSize: 'clamp(15px, 1.4vw, 17px)',
							lineHeight: 1.7,
							color: tokens.body,
							maxWidth: '34ch',
							mt: 2.5,
						}}
					>
						A lighthouse keeper's daughter returns to the island that shaped her — and to the
						secret the tide keeps pulling back to shore.
					</Typography>
					<Box sx={{ display: 'flex', gap: 2, mt: 4, flexWrap: 'wrap' }}>
						<Button variant="contained" color="primary" sx={{ px: '30px', py: '15px', fontSize: 13 }}>
							Buy the Book
						</Button>
						<Button variant="outlined" sx={{ px: '26px', py: '15px', fontSize: 13 }}>
							Read an Excerpt
						</Button>
					</Box>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
					<Box
						role="img"
						aria-label="Northlight book cover"
						sx={{
							width: 'min(320px, 80%)',
							aspectRatio: '2 / 3',
							background: `linear-gradient(155deg, ${tokens.band} 0%, ${tokens.accent} 140%)`,
							boxShadow:
								'0 40px 80px -30px rgba(28,26,23,0.5), 0 8px 24px -12px rgba(28,26,23,0.3)',
						}}
					/>
				</Box>
			</Box>
		</Box>
	);
}

function CollectionBand() {
	return (
		<Box
			sx={{
				bgcolor: tokens.band,
				borderTop: `1px solid ${tokens.borderFaint}`,
				borderBottom: `1px solid ${tokens.borderFaint}`,
			}}
		>
			<Box sx={{ maxWidth: 1200, mx: 'auto', px: 3, py: 'clamp(52px, 6vw, 84px)' }}>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						flexWrap: 'wrap',
						gap: 2,
						mb: 5,
					}}
				>
					<Box>
						<Eyebrow>The Collection</Eyebrow>
						<Typography
							sx={{
								fontFamily: "'Cormorant Garamond', serif",
								fontSize: 'clamp(32px, 4.5vw, 52px)',
								fontWeight: 500,
								color: tokens.ink,
								mt: 1,
							}}
						>
							More to read
						</Typography>
					</Box>
					<Box
						component={Link}
						to="/books"
						sx={{
							alignSelf: 'flex-end',
							fontFamily: "'Manrope', sans-serif",
							fontSize: 12.5,
							fontWeight: 600,
							textTransform: 'uppercase',
							color: tokens.accent,
							textDecoration: 'none',
						}}
					>
						View All Books →
					</Box>
				</Box>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
						gap: 'clamp(28px, 4vw, 44px)',
					}}
				>
					{featuredBooks.map((book) => (
						<BookCard key={book.title} book={book} variant="compact" />
					))}
				</Box>
			</Box>
		</Box>
	);
}

export default function Home() {
	return (
		<>
			<AboutTeaser />
			<NewNovelHero />
			<CollectionBand />
		</>
	);
}
