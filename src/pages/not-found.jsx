import { Link } from 'react-router';

function NotFoundPage() {
	const styles = {
		container: {
			padding: '80px 20px',
			color: '#fff',
			textAlign: 'center',
		},
		title: {
			fontSize: '72px',
			marginBottom: '20px',
		},
		message: {
			fontSize: '18px',
			marginBottom: '30px',
		},
		link: {
			textDecoration: 'none',
			color: '#007bff',
			fontWeight: 'bold',
		},
	};

	return (
		<div style={styles.container}>
			<h1 style={styles.title}>Page Not Found</h1>
			<p style={styles.message}>
				Sorry, the page you are looking for does not exist.
			</p>
			<Link to="/" style={styles.link}>
				Go back to Home
			</Link>
		</div>
	);
}

export default NotFoundPage;
