import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router';
import Spinner from '../components/Spinner';
import CoinChart from '../components/CoinChart';

const API_URL = import.meta.env.VITE_COIN_API_URL;

function CoinDetailsPage() {
	const { id } = useParams({});
	const [coin, setCoin] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCoinDetails = async () => {
			try {
				const response = await fetch(`${API_URL}/${id}`);
				if (!response.ok) throw new Error('Network response was not ok');
				const data = await response.json();
				setCoin(data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchCoinDetails();
	}, [id]);

	return (
		<div className="coin-details-container">
			<Link to="/">Back to Home</Link>
			<h1 className="coin-details-title">
				{coin ? `${coin.name} (${coin.symbol})` : 'Coin Details'}
			</h1>
			{loading && <Spinner />}
			{error && <div className="error">Error: {error.message}</div>}

			{!loading && !error && (
				<>
					<img
						src={coin.image.large}
						alt={coin.name}
						className="coin-details-image"
					/>
					<p>{coin.description.en.split('.')[0] + '...'}</p>

					<div className="coins-details-info">
						<h3>Rank: #{coin.market_cap_rank}</h3>
						<h3>
							Current Price: $
							{coin.market_data.current_price.usd.toLocaleString()}
						</h3>
						<h4>
							Market Cap: ${coin.market_data.market_cap.usd.toLocaleString()}
						</h4>
						<h4>
							Price Change (24h): {coin.market_data.price_change_percentage_24h}
							%
						</h4>
						<h4>
							Total Supply: ${coin.market_data.total_supply.toLocaleString()}
						</h4>
						<h4>
							Total Time Hight: ${coin.market_data.ath.usd.toLocaleString()} on{' '}
							{new Date(coin.market_data.ath_date.usd).toLocaleDateString()}
						</h4>
						<h4>
							Total Time Low: ${coin.market_data.atl.usd.toLocaleString()} on{' '}
							{new Date(coin.market_data.atl_date.usd).toLocaleDateString()}
						</h4>
						<h4>
							Last Updated: {new Date(coin.last_updated).toLocaleString()}
						</h4>
					</div>

					<div>
						<CoinChart coinId={id} />
					</div>

					<div className="coin-details-links">
						{coin.links.homepage[0] && (
							<a
								href={coin.links.homepage[0]}
								target="_blank"
								rel="noopener noreferrer"
							>
								Website
							</a>
						)}
						{coin.links.blockchain_site[0] && (
							<p>
								<a
									href={coin.links.blockchain_site[0]}
									target="_blank"
									rel="noopener noreferrer"
								>
									Block Explorer
								</a>
							</p>
						)}
						{coin.categories.length > 0 && (
							<p>Categories: {coin.categories.join(', ')}</p>
						)}

						{!loading && !error && !coin && (
							<p>Coin details not found. Please try again later.</p>
						)}
					</div>
				</>
			)}
		</div>
	);
}

export default CoinDetailsPage;
