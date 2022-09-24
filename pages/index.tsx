import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Posts from '../components/Posts';
import { sanityClient } from '../sanity';
import { Post } from '../typing';

interface Prop {
	posts: [Post];
}

const Home = ({ posts }: Prop) => {
	return (
		<div className='max-w-7xl mx-auto'>
			<Head>
				<title>Medium Clone</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<Banner />
			<Posts posts={posts} />
		</div>
	);
};

export default Home;

export const getServerSideProps = async () => {
	const query = `*[_type=='post']{
	_id,
	title,
	slug,
	mainImage,
	description,
  author-> {
    name,
    image
  }
    
  }`;

	const posts = await sanityClient.fetch(query);
	return {
		props: {
			posts,
		},
	};
};
