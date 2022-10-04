import Link from 'next/link';
import { Post } from '../typing';
import { urlFor } from '../sanity';

interface Prop {
	posts: [Post];
}

const Posts = ({ posts }: Prop) => {
	console.log(posts);
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:p-6 font-openSans'>
			{posts.map((post, i) => (
				<div
					key={post._id}
					className='flex items-start justify-start w-full'
				>
					<div className='font-palaquin text-4xl text-gray-400/50 font-bold'>
						0{1 + i}
					</div>
					<div className='flex justify-start flex-col p-4 ml-3 space-y-2'>
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
						<p className='text-sm text-gray-500'>
							{new Date(post._createdAt).toLocaleDateString()}
							<span>
								{' . '}
								{'5 min read'}
							</span>
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Posts;

{
	/* <div className='border rounded-xl group cursor-pointer overflow-hidden'>
	<img
		src={urlFor(post.mainImage).url()!}
		alt={post.description}
		className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out'
	/>
	<div className='flex justify-between items-center p-5 bg-white'>
		<div>
			<p className='text-lg font-bold'>{post.title}</p>
			<p className='text-sm'>
				{post.description} by{' '}
				<span className='text-green-400'>{post.author.name}</span>
			</p>
		</div>
		<img
			src={urlFor(post.author.image).url()!}
			alt={post.author.name}
			className='w-12 h-12 rounded-full'
		/>
	</div> 
</div>;*/
}
