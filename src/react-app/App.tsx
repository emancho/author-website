import { Routes, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import AllBooks from './pages/AllBooks';
import Events from './pages/Events';
import About from './pages/About';

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="books" element={<AllBooks />} />
				<Route path="events" element={<Events />} />
				<Route path="about" element={<About />} />
			</Route>
		</Routes>
	);
}
