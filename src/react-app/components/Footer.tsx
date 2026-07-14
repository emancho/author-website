import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router';
import { tokens } from '../theme';

const NAV_ITEMS = [
	{ label: 'Home', to: '/' },
	{ label: 'All Books', to: '/books' },
	{ label: 'Events', to: '/events' },
	{ label: 'About', to: '/about' },
];

function ColumnLabel({ children }: { children: ReactNode }) {
	return (
		<Typography
			sx={{
				fontFamily: "'Manrope', sans-serif",
				fontSize: 10,
				fontWeight: 600,
				letterSpacing: '0.22em',
				textTransform: 'uppercase',
				color: tokens.footerMuted,
				mb: 2,
			}}
		>
			{children}
		</Typography>
	);
}

function SocialButton({ children, label }: { children: ReactNode; label: string }) {
	return (
		<IconButton
			aria-label={label}
			sx={{
				width: 42,
				height: 42,
				border: '1px solid rgba(231,225,214,0.22)',
				borderRadius: '50%',
				color: tokens.footerText,
				'&:hover': { borderColor: tokens.ivory },
			}}
		>
			{children}
		</IconButton>
	);
}

export default function Footer() {
	return (
		<Box component="footer" sx={{ bgcolor: tokens.footerBg, color: tokens.footerText }}>
			<Box sx={{ maxWidth: 1200, mx: 'auto', px: 3, py: 'clamp(48px, 5vw, 72px)' }}>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
						gap: '40px',
					}}
				>
					{/* Brand */}
					<Box>
						<Typography
							sx={{
								fontFamily: "'Cormorant Garamond', serif",
								fontSize: 30,
								fontWeight: 600,
								color: tokens.ivory,
							}}
						>
							Eleanor Vance
						</Typography>
						<Typography
							sx={{
								fontFamily: "'Manrope', sans-serif",
								fontSize: 10,
								fontWeight: 600,
								letterSpacing: '0.32em',
								textTransform: 'uppercase',
								color: tokens.footerMuted,
								mb: 2,
							}}
						>
							Novelist
						</Typography>
						<Typography sx={{ fontFamily: "'Manrope', sans-serif", fontSize: 13.5, color: tokens.footerMutedLight }}>
							New novel <em>Northlight</em> available now wherever books are sold.
						</Typography>
					</Box>

					{/* Explore */}
					<Box>
						<ColumnLabel>Explore</ColumnLabel>
						<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
							{NAV_ITEMS.map((item) => (
								<Box
									key={item.to}
									component={Link}
									to={item.to}
									sx={{
										fontFamily: "'Manrope', sans-serif",
										fontSize: 14,
										color: tokens.footerText,
										textDecoration: 'none',
										'&:hover': { color: tokens.ivory },
									}}
								>
									{item.label}
								</Box>
							))}
						</Box>
					</Box>

					{/* Follow */}
					<Box>
						<ColumnLabel>Follow</ColumnLabel>
						<Box sx={{ display: 'flex', gap: 1.5 }}>
							<SocialButton label="Instagram">
								<InstagramIcon fontSize="small" />
							</SocialButton>
							<SocialButton label="X">
								<Typography sx={{ fontFamily: "'Manrope', sans-serif", fontSize: 15, fontWeight: 600 }}>
									X
								</Typography>
							</SocialButton>
							<SocialButton label="Facebook">
								<FacebookIcon fontSize="small" />
							</SocialButton>
							<SocialButton label="Goodreads">
								<Typography sx={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: 18 }}>
									g
								</Typography>
							</SocialButton>
						</Box>
					</Box>
				</Box>

				<Box
					sx={{
						mt: 5,
						pt: 3,
						borderTop: '1px solid rgba(231,225,214,0.14)',
						display: 'flex',
						justifyContent: 'space-between',
						flexWrap: 'wrap',
						gap: 1,
					}}
				>
					<Typography sx={{ fontFamily: "'Manrope', sans-serif", fontSize: 12, color: tokens.footerMuted }}>
						© 2025 Eleanor Vance. All rights reserved.
					</Typography>
					<Typography sx={{ fontFamily: "'Manrope', sans-serif", fontSize: 12, color: tokens.footerMuted }}>
						Site by design handoff
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}
