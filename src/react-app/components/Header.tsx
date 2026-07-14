import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link, useLocation } from 'react-router';
import { tokens } from '../theme';

const NAV_ITEMS = [
	{ label: 'Home', to: '/' },
	{ label: 'All Books', to: '/books' },
	{ label: 'Events', to: '/events' },
	{ label: 'About', to: '/about' },
];

function BuyTheBookButton({ fullWidth = false }: { fullWidth?: boolean }) {
	return (
		<Button
			variant="contained"
			color="primary"
			fullWidth={fullWidth}
			sx={{ fontSize: 12.5, px: '22px', py: '11px' }}
		>
			Buy the Book
		</Button>
	);
}

function HamburgerIcon() {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
			{[0, 1, 2].map((i) => (
				<Box key={i} sx={{ width: 24, height: '1.5px', bgcolor: tokens.ink }} />
			))}
		</Box>
	);
}

export default function Header() {
	const isDesktop = useMediaQuery('(min-width:860px)');
	const location = useLocation();
	const [menuOpen, setMenuOpen] = useState(false);

	const closeMenu = () => setMenuOpen(false);

	return (
		<Box
			component="header"
			sx={{
				position: 'sticky',
				top: 0,
				zIndex: 50,
			}}
		>
			{/* backdrop-filter creates a new containing block for fixed descendants, so it
			    must live on a wrapper that does NOT also contain the fixed mobile overlay. */}
			<Box
				sx={{
					bgcolor: 'rgba(247,244,239,0.86)',
					backdropFilter: 'blur(12px)',
					borderBottom: `1px solid ${tokens.borderFaint}`,
				}}
			>
				<Box
					sx={{
						maxWidth: 1200,
						mx: 'auto',
						px: 3,
						height: 74,
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Box component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
						<Typography
							sx={{
								fontFamily: "'Cormorant Garamond', serif",
								fontSize: 26,
								fontWeight: 600,
								color: tokens.ink,
								lineHeight: 1,
							}}
						>
							Eleanor Vance
						</Typography>
						<Typography
							sx={{
								fontFamily: "'Manrope', sans-serif",
								fontSize: 9,
								fontWeight: 600,
								letterSpacing: '0.32em',
								textTransform: 'uppercase',
								color: tokens.muted,
							}}
						>
							Author
						</Typography>
					</Box>

					{isDesktop ? (
						<Box sx={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
							{NAV_ITEMS.map((item) => {
								const active = location.pathname === item.to;
								return (
									<Box
										key={item.to}
										component={Link}
										to={item.to}
										sx={{
											fontFamily: "'Manrope', sans-serif",
											fontSize: 13,
											fontWeight: active ? 600 : 500,
											color: active ? tokens.accent : tokens.ink,
											textDecoration: 'none',
											pb: '4px',
											borderBottom: active ? `1.5px solid ${tokens.accent}` : '1.5px solid transparent',
										}}
									>
										{item.label}
									</Box>
								);
							})}
							<BuyTheBookButton />
						</Box>
					) : (
						<IconButton onClick={() => setMenuOpen(true)} aria-label="Open menu">
							<HamburgerIcon />
						</IconButton>
					)}
				</Box>
			</Box>

			{!isDesktop && menuOpen && (
				<Box
					sx={{
						position: 'fixed',
						inset: '74px 0 0 0',
						bgcolor: tokens.ivory,
						p: 3,
						zIndex: 49,
						overflowY: 'auto',
					}}
				>
					{NAV_ITEMS.map((item) => {
						const active = location.pathname === item.to;
						return (
							<Box
								key={item.to}
								component={Link}
								to={item.to}
								onClick={closeMenu}
								sx={{
									display: 'block',
									fontFamily: "'Cormorant Garamond', serif",
									fontSize: 32,
									color: active ? tokens.accent : tokens.ink,
									textDecoration: 'none',
									py: 2,
									borderBottom: `1px solid ${tokens.borderFaint}`,
								}}
							>
								{item.label}
							</Box>
						);
					})}
					<Box sx={{ mt: 3 }}>
						<BuyTheBookButton fullWidth />
					</Box>
				</Box>
			)}
		</Box>
	);
}
