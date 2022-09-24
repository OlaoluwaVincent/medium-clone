import Link from 'next/link';
import { Post } from '../typing';
import { urlFor } from '../sanity';
import { url } from 'inspector';

interface Prop {
	posts: [Post];
}

const Posts = ({ posts }: Prop) => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-2 md:gap-6 lg:p-6'>
			{posts.map((post) => (
				<Link key={post._id} href={`/post/${post.slug.current}`}>
					<div className='border rounded-xl group cursor-pointer overflow-hidden'>
						<img
							src={urlFor(post.mainImage).url()!}
							alt={post.description}
							className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out'
						/>
						<div className='flex justify-between items-center p-5 bg-white'>
							<div>
								<p className='text-lg font-bold'>
									{post.title}
								</p>
								<p className='text-sm'>
									{post.description} by{' '}
									<span className='text-green-400'>
										{post.author.name}
									</span>
								</p>
							</div>
							<img
								src={urlFor(post.author.image).url()!}
								alt={post.author.name}
								className='w-12 h-12 rounded-full'
							/>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Posts;
