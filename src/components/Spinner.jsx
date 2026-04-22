import { BarLoader } from 'react-spinners';

const override = {
	display: 'block',
	margin: '0 auto',
};

function Spinner({ color = '#36d7b7', size = 150 }) {
	return (
		<div className="spinner">
			<BarLoader
				color={color}
				size={size}
				cssOverride={override}
				aria-label="Loading Spinner"
			/>
		</div>
	);
}

export default Spinner;
