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
					}}
				/>
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
						"I write toward the coastline I grew up on — the fog, the ferries, the houses that
						hold more than they let on."
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
							Her debut, <em>A Map of Small Rooms</em>, was named a Best Book of the Year by three
							national publications and established the quiet, luminous style that has become her
							signature. Five novels later, her work has been translated into eighteen languages.
						</Typography>
						<Typography
							sx={{ fontFamily: "'Manrope', sans-serif", fontSize: 16, lineHeight: 1.8, color: tokens.bodyDark }}
						>
							She lives on a small island off the coast, where she writes in a converted boathouse
							and, when the tide allows, walks.
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
