import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<Stack direction="column" sx={{ minHeight: '100vh' }}>
			<Header />
			<Box component="main" sx={{ flexGrow: 1 }}>
				<Outlet />
			</Box>
			<Footer />
		</Stack>
	);
}
