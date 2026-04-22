function AboutPage() {
	return (
		<div className="about">
			<h1>About CryptoDash</h1>
			<p>
				CryptoDash is a simple React application that allows users to view and
				filter cryptocurrency data. It uses the CoinGecko API to fetch real-time
				market data for various cryptocurrencies.
			</p>
			<p>Features:</p>
			<ul>
				<li>Real-time cryptocurrency prices</li>
				<li>Market capitalization data</li>
				<li>24-hour price change percentage</li>
				<li>Filtering and sorting options</li>
			</ul>
		</div>
	);
}

export default AboutPage;
