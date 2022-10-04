import Link from 'next/link';
import { Post } from '../typing';
import { urlFor } from '../sanity';
import { BsBookmarks } from 'react-icons/bs';

interface Prop {
	posts: [Post];
}

const PostImg = ({ posts }: Prop) => {
	console.log(posts);
	return (
		<div className='space-y-2 font-openSans'>
			{posts.map((post, i) => (
				<div key={post._id} className='flex items-end justify-between'>
					<div className='flex justify-start flex-col   space-y-2 w-full'>
						<div className='flex items-center space-x-2'>
							<img
								src={urlFor(post.mainImage).url()!}
								alt={post.description}
								className='h-5 w-5 object-cover  rounded-full'
							/>
							<span className='text-sm font-normal'>
								{post.author.name}
							</span>
						</div>
						<Link href={`/post/${post.slug.current}`}>
							<p className='text-md font-bold cursor-pointer md:text-lg'>
								{post.title}
							</p>
						</Link>
						<p className='hidden md:block text-md text-gray-500 '>
							{post.description}
						</p>
						<div className='flex items-center justify-between mr-6'>
							<div className='text-sm text-gray-500 '>
								{new Date(post._createdAt).toLocaleDateString()}
								{' . '}
								{'5 min'}
								{/* This should be a link */}
								<p className='hidden bg-gray-200 p-1 ml-2 sm:inline-flex rounded-full text-xs md:text-sm'>
									Category
								</p>
							</div>
							<BsBookmarks className='h-5 w-5 cursor-pointer' />
						</div>
					</div>
					<img
						src={urlFor(post.mainImage).url()!}
						alt={post.description}
						className='h-24 w-24 sm:h-28 sm:w-28 object-cover md:h-28 md:w-40'
					/>
				</div>
			))}
		</div>
	);
};

export default PostImg;
