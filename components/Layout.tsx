import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: any) => {
	return (
		<div className='max-w-7xl mx-auto lg:max-w-full font-openSans'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='true'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&family=Palanquin:wght@500;600;700&display=swap'
					rel='stylesheet'
				></link>
				<title>Medium Clone</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
