import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import type { TourEvent } from '../data/events';
import { tokens } from '../theme';

export default function EventRow({ event }: { event: TourEvent }) {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				flexWrap: 'wrap',
				gap: { xs: '20px', md: '44px' },
				py: { xs: 3, md: 4.25 },
				borderTop: `1px solid ${tokens.borderDivider}`,
			}}
		>
			<Box sx={{ minWidth: 64, textAlign: 'center' }}>
				<Typography
					sx={{
						fontFamily: "'Manrope', sans-serif",
						fontSize: 12,
						fontWeight: 600,
						letterSpacing: '0.14em',
						textTransform: 'uppercase',
						color: tokens.accent,
					}}
				>
					{event.month}
				</Typography>
				<Typography
					sx={{
						fontFamily: "'Cormorant Garamond', serif",
						fontSize: 44,
						fontWeight: 500,
						lineHeight: 0.9,
						color: tokens.ink,
					}}
				>
					{event.day}
				</Typography>
			</Box>

			<Box sx={{ flex: 1, minWidth: 200 }}>
				<Typography
					sx={{
						fontFamily: "'Cormorant Garamond', serif",
						fontSize: 26,
						fontWeight: 600,
						color: tokens.ink,
					}}
				>
					{event.title}
				</Typography>
				<Typography sx={{ fontFamily: "'Manrope', sans-serif", fontSize: 14.5, color: tokens.body }}>
					{event.venue} · {event.city}
				</Typography>
				<Typography sx={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, color: tokens.muted }}>
					{event.time}
				</Typography>
			</Box>

			<Button
				variant="outlined"
				sx={{
					px: '22px',
					py: '11px',
					fontSize: 12.5,
					'&:hover': { color: tokens.accent, borderColor: tokens.accent },
				}}
			>
				Details
			</Button>
		</Box>
	);
}
