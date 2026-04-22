import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import Header from './components/Header';
import NotFoundPage from './pages/not-found';
import CoinDetailsPage from './pages/coins-details';
import Spinner from './components/Spinner';

const API_URL = import.meta.env.VITE_COINS_API_URL;

// 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=mrket_cap_desc&per_page=10';

function App() {
	const [coins, setCoins] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [limit, setLimit] = useState(10);
	const [filter, setFilter] = useState('');
	const [sortBy, setSortBy] = useState('market_cap_desc');

	useEffect(() => {
		const fetchCoins = async () => {
			try {
				const response = await fetch(
					`${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`,
				);
				if (!response.ok) throw new Error('Network response was not ok');
				const data = await response.json();
				setCoins(data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchCoins();
	}, [limit, sortBy]);

	if (loading) return <Spinner />;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<>
			<Header />

			<Routes>
				<Route
					path="/"
					element={
						<HomePage
							coins={coins}
							filter={filter}
							setFilter={setFilter}
							limit={limit}
							setLimit={setLimit}
							sortBy={sortBy}
							setSortBy={setSortBy}
							loading={loading}
							error={error}
						/>
					}
				/>
				<Route path="/about" element={<AboutPage />} />
				<Route path="/coin/:id" element={<CoinDetailsPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</>
	);
}

export default App;
