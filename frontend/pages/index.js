import Link from 'next/link';
const Home = props => {
	return (
		<dev>
			<p>Hey</p>
			<Link href="/sell">
				<a>Sell</a>
			</Link>
		</dev>
	);
};
export default Home;
