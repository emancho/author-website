import type { ReactNode } from 'react';
import Typography from '@mui/material/Typography';
import { tokens } from '../theme';

export default function Eyebrow({ children }: { children: ReactNode }) {
	return (
		<Typography
			sx={{
				fontFamily: "'Manrope', sans-serif",
				fontSize: 12,
				fontWeight: 600,
				letterSpacing: '0.24em',
				textTransform: 'uppercase',
				color: tokens.accent,
			}}
		>
			{children}
		</Typography>
	);
}
