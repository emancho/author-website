import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router';
import Eyebrow from '../components/Eyebrow';
import { tokens } from '../theme';

export default function About() {
	return (
		<Box sx={{ maxWidth: 1080, mx: 'auto', px: 3, py: 'clamp(48px, 6vw, 88px)' }}>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
					gap: 'clamp(40px, 6vw, 80px)',
					alignItems: 'start',
				}}
			>
				<Box
					role="img"
					aria-label="Eliara  Lee portrait"
					sx={{
						aspectRatio: '4 / 5',
						background: `linear-gradient(155deg, ${tokens.band} 0%, ${tokens.muted} 140%)`,
						boxShadow: '0 34px 64px -30px rgba(28,26,23,0.45)',
						position: 'sticky',
						top: 100,
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
					<Eyebrow>About</Eyebrow>
					<Typography
						component="h1"
						sx={{
							fontFamily: "'Cormorant Garamond', serif",
							fontSize: 'clamp(38px, 5vw, 64px)',
							fontWeight: 500,
							color: tokens.ink,
							mt: 1,
						}}
					>
						Eliara Lee
					</Typography>
					<Typography
						sx={{
							fontFamily: "'Cormorant Garamond', serif",
							fontSize: 'clamp(22px, 2.4vw, 28px)',
							lineHeight: 1.4,
							color: tokens.ink,
							mt: 3,
						}}
					>
						"<em>crafting stories that reflect her experience with love, family and magic</em>"
					</Typography>

					<Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
						<Typography
							sx={{ fontFamily: "'Manrope', sans-serif", fontSize: 16, lineHeight: 1.8, color: tokens.bodyDark }}
						>
							Eliara  Lee was born and raised on the coast of Maine. Before turning to fiction,
							she spent nearly a decade as a documentary researcher, work that took her from
							fishing towns to national archives and taught her to listen for the story
							underneath the story.
						</Typography>
						<Typography
							sx={{ fontFamily: "'Manrope', sans-serif", fontSize: 16, lineHeight: 1.8, color: tokens.bodyDark }}
						>
							Married to her high school sweetheart <strong>her real-life “Book Bae”</strong> whose military career took their family to some of the most 
							beautiful places in the US. Eliára is a devoted mother of two <strong>plus a fur baby</strong> and a proud “Gamma” to her grandson, Bam. 
							Though she has filled countless notebooks and flash drives with stories over the years, 2026 marked a special milestone as 
							she officially became a published author. 
						</Typography>
						<Typography
							sx={{ fontFamily: "'Manrope', sans-serif", fontSize: 16, lineHeight: 1.8, color: tokens.bodyDark }}
						>
							Eliára continues to write with the same passion she discovered as a child, crafting stories that reflect her love of “love”, family 
							and the magic found within the pages of a good book. 
						</Typography>
					</Box>

					<Button
						component={Link}
						to="/events"
						variant="contained"
						color="primary"
						sx={{ mt: 4, px: '30px', py: '15px', fontSize: 13 }}
					>
						See Upcoming Events
					</Button>
				</Box>
			</Box>
		</Box>
	);
}
