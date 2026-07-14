import { createTheme } from '@mui/material/styles';
import { keyframes } from '@emotion/react';

export const tokens = {
	ivory: '#F7F4EF',
	band: '#EFEAE1',
	ink: '#1C1A17',
	body: '#57503F',
	bodyDark: '#3E3930',
	muted: '#9A8E7E',
	accent: '#6B2D4E',
	accentHover: '#4A1E36',
	footerBg: '#1C1A17',
	footerText: '#E7E1D6',
	footerMuted: '#8A8172',
	footerMutedLight: '#A79E8E',
	borderFaint: 'rgba(28,26,23,0.10)',
	borderDivider: 'rgba(28,26,23,0.14)',
	borderOutline: 'rgba(28,26,23,0.28)',
};

export const fadeUp = keyframes`
	from {
		opacity: 0;
		transform: translateY(16px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

const headingFont = "'Cormorant Garamond', serif";
const bodyFont = "'Manrope', sans-serif";

const theme = createTheme({
	palette: {
		primary: {
			main: tokens.accent,
			dark: tokens.accentHover,
			contrastText: tokens.ivory,
		},
		background: {
			default: tokens.ivory,
		},
		text: {
			primary: tokens.ink,
			secondary: tokens.body,
		},
	},
	typography: {
		fontFamily: bodyFont,
		h1: { fontFamily: headingFont },
		h2: { fontFamily: headingFont },
		h3: { fontFamily: headingFont },
		h4: { fontFamily: headingFont },
		h5: { fontFamily: headingFont },
		h6: { fontFamily: headingFont },
		button: { fontFamily: bodyFont, textTransform: 'none' },
	},
	shape: {
		borderRadius: 2,
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundColor: tokens.ivory,
					color: tokens.ink,
				},
			},
		},
		MuiButton: {
			defaultProps: {
				disableRipple: true,
				disableElevation: true,
			},
			styleOverrides: {
				root: {
					borderRadius: 2,
					fontFamily: bodyFont,
					fontWeight: 600,
					letterSpacing: '0.04em',
					textTransform: 'uppercase',
				},
				outlined: {
					borderColor: tokens.borderOutline,
					color: tokens.ink,
					'&:hover': {
						borderColor: tokens.ink,
						backgroundColor: 'transparent',
					},
				},
			},
			variants: [
				{
					props: { variant: 'contained', color: 'primary' },
					style: {
						backgroundColor: tokens.accent,
						color: tokens.ivory,
						'&:hover': {
							backgroundColor: tokens.accentHover,
						},
					},
				},
			],
		},
	},
});

export default theme;
