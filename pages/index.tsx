import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Medium Clone</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<Banner />
		</div>
	);
};

export default Home;
