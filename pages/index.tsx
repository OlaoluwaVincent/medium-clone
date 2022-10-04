import Banner from '../components/Banner';
import Posts from '../components/Posts';
import { sanityClient } from '../sanity';
import { Post } from '../typing';
import { IoIosTrendingUp } from 'react-icons/io';
import Categories from '../components/Categories';
import PostImg from '../components/PostImg';

interface Prop {
	posts: [Post];
}

const Home = ({ posts }: Prop) => {
	return (
		<div>
			<Banner />
			{/* Post */}
			<section
				id='posts'
				className='py-10 px-5 lg:px-20 space-y-2 border-b'
			>
				<h2 className='flex items-center jusify-center gap-2 font-semibold font-openSans uppercase text-xs'>
					<span className='border rounded-full border-black/50 p-1'>
						<IoIosTrendingUp className=' h-4 w-4' />
					</span>
					Trending on Medium
				</h2>
				<Posts posts={posts} />
			</section>

			{/* Category and Post */}
			<section className='py-5 px-5 lg:px-20 border-b flex flex-col gap-5 md:flex-row-reverse md:justify-between'>
				<div className='border-b py-4 md:border-b-0'>
					<Categories />
				</div>
				<div className='w-full md:min-w-[500px] md:mr-8'>
					<PostImg posts={posts} />
				</div>
			</section>
		</div>
	);
};

export default Home;

export const getServerSideProps = async () => {
	const query = `*[_type=='post']{
	_id,
	_createdAt,
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
