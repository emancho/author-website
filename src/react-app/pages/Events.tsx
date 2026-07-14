import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Eyebrow from '../components/Eyebrow';
import EventRow from '../components/EventRow';
import { events } from '../data/events';
import { tokens } from '../theme';

export default function Events() {
	return (
		<Box sx={{ maxWidth: 920, mx: 'auto', px: 3, py: 'clamp(48px, 6vw, 88px)' }}>
			<Box sx={{ mb: 4 }}>
				<Eyebrow>Events</Eyebrow>
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
					On tour
				</Typography>
				<Typography
					sx={{
						fontFamily: "'Manrope', sans-serif",
						fontSize: 16,
						maxWidth: '52ch',
						color: tokens.body,
						mt: 2,
					}}
				>
					Catch Eleanor at a reading, signing, or festival this season. New dates are added
					regularly.
				</Typography>
			</Box>

			<Box sx={{ borderTop: `1px solid ${tokens.borderDivider}` }}>
				{events.map((event) => (
					<EventRow key={`${event.month}-${event.day}`} event={event} />
				))}
			</Box>
		</Box>
	);
}
