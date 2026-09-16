import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router';
import Eyebrow from '../components/Eyebrow';
// import BookCard from '../components/BookCard';
// import { featuredBooks } from '../data/books';
import { tokens, fadeUp } from '../theme';
import { books } from '../data/books';

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
					aria-label="Eliara  Lee author photo"
					sx={{
						aspectRatio: '4 / 5',
						background: `linear-gradient(155deg, ${tokens.band} 0%, ${tokens.muted} 140%)`,
						boxShadow: '0 30px 60px -30px rgba(28,26,23,0.4)',
					}}>
						<img 
							src="https://pub-456cb52783e5414b8d29402fb3af5b5c.r2.dev/AuthorFolder/author_img.jpeg" 
							alt="Eliara Lee portrait" 
							style={{ 
								width: '100%', 
								height: '100%', 
								objectFit: 'cover', 
								borderRadius: 0 
								}}/>	
					</Box>
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
						Eliara Lee, Storyteller and Novelist
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
						Eliara Lee’s love of storytelling started at a young age. Growing up in the Midwest-Akron, Ohio, her fondest memories was getting her first library card and eagerly awaiting for the Book Mobile. 
						Starting with her first audience, her younger siblings; she honed her imaginative talents bentertaining a crowd with her tales. Never losing her passion for storytelling, Eliara now brings her stories to life in the books she writes.
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
						More about Eliara  →
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
					<Eyebrow>One of their works</Eyebrow>
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
						Body and Soul
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
						Zyana Reynolds is a successful writer, who has built a fanbase of readers. With her recent book being critized by her devoted 
						readers for being inauthentic , she is compelled to experience a life that she protected herself from in the form of a dangerous 
						man named Atlas Porter
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
					{books[0].img && (
					<Box
						component="img"
						src={books[0].img}
						alt={`${books[0].title} cover`}
					/>
				)}
				</Box>
			</Box>
		</Box>
	);
}

// function CollectionBand() {
// 	return (
// 		<Box
// 			sx={{
// 				bgcolor: tokens.band,
// 				borderTop: `1px solid ${tokens.borderFaint}`,
// 				borderBottom: `1px solid ${tokens.borderFaint}`,
// 			}}
// 		>
// 			<Box sx={{ maxWidth: 1200, mx: 'auto', px: 3, py: 'clamp(52px, 6vw, 84px)' }}>
// 				<Box
// 					sx={{
// 						display: 'flex',
// 						justifyContent: 'space-between',
// 						flexWrap: 'wrap',
// 						gap: 2,
// 						mb: 5,
// 					}}
// 				>
// 					<Box>
// 						<Eyebrow>The Collection</Eyebrow>
// 						<Typography
// 							sx={{
// 								fontFamily: "'Cormorant Garamond', serif",
// 								fontSize: 'clamp(32px, 4.5vw, 52px)',
// 								fontWeight: 500,
// 								color: tokens.ink,
// 								mt: 1,
// 							}}
// 						>
// 							More to read
// 						</Typography>
// 					</Box>
// 					<Box
// 						component={Link}
// 						to="/books"
// 						sx={{
// 							alignSelf: 'flex-end',
// 							fontFamily: "'Manrope', sans-serif",
// 							fontSize: 12.5,
// 							fontWeight: 600,
// 							textTransform: 'uppercase',
// 							color: tokens.accent,
// 							textDecoration: 'none',
// 						}}
// 					>
// 						View All Books →
// 					</Box>
// 				</Box>
// 				<Box
// 					sx={{
// 						display: 'grid',
// 						gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
// 						gap: 'clamp(28px, 4vw, 44px)',
// 					}}
// 				>
// 					{featuredBooks.map((book) => (
// 						<BookCard key={book.title} book={book} variant="compact" />
// 					))}
// 				</Box>
// 			</Box>
// 		</Box>
// 	);
// }

export default function Home() {
	return (
		<>
			<AboutTeaser />
			<NewNovelHero />
			{/* <CollectionBand /> */}
		</>
	);
}
