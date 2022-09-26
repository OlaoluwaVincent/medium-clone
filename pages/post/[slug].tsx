import { GetStaticProps } from 'next';
import Header from '../../components/Header';
import { sanityClient, urlFor } from '../../sanity';
import { Post } from '../../typing';
import PortableText from 'react-portable-text';
import Comment from '../../components/Comment';
import CommentContainer from '../../components/CommentContainer';

interface Props {
	post: Post;
}

const Post = ({ post }: Props) => {
	console.log(post);
	return (
		<>
			<Header />
			<main>
				<img
					src={urlFor(post.mainImage).url()!}
					alt={post.description}
					className='w-full h-40 object-cover'
				/>

				<article className='max-w-3xl mx-auto p-5'>
					<h1 className='text-3xl mb-3 mt-10'>{post.title}</h1>
					<h2 className='text-xl font-light text-gray-500 mb-3 capitalize'>
						{post.description}
					</h2>
					<div className='flex items-center space-x-3'>
						<img
							src={urlFor(post.author.image).url()!}
							alt={post.description}
							className='w-10 h-10 rounded-full'
						/>
						<p className='font-extralight text-sm'>
							Blog post by:{' '}
							<span className='text-green-600'>
								{post.author.name}
							</span>{' '}
							- Published at{' '}
							{new Date(post._createdAt).toLocaleString()}
						</p>
					</div>
					<div className='mt-10'>
						<PortableText
							content={post.body}
							projectId={process.env.NEXT_PUBLIC_SANITY_DATASET}
							dataset={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
							className=''
							serializers={{
								image: (props: any) => (
									<img
										src={urlFor(props.asset).url()!}
										className='w-full h-auto mx-auto my-4'
									/>
								),
								h1: (props: any) => (
									<h1
										className='text-2xl font-bold my-3'
										{...props}
									/>
								),
								normal: (props: any) => (
									<p className='text-1xl my-5' {...props} />
								),
								blockquote: (props: any) => (
									<p
										className='m-3 border-l-2 border-black p-2'
										{...props}
									/>
								),
							}}
						/>
					</div>
					<hr className='max-w-lg my-5 mx-auto border border-yellow-500' />
				</article>

				<Comment post={post._id} />

				<div className='flex flex-col max-w-2xl my-5 mx-auto shadow shadow-yellow-400 space-y-2'>
					<h3 className='text-4xl p-4'>Comments</h3>
					<hr className='p-2' />
					{post.comments.length > 0 ? (
						post.comments.map((comment) => (
							<CommentContainer
								key={comment._id}
								comment={comment}
							/>
						))
					) : (
						<p>Be the first to comment</p>
					)}
				</div>
			</main>
		</>
	);
};

export default Post;

// NextJs goea ahead and prepares this pages for us
export const getStaticPaths = async () => {
	const query = `*[_type=='post']{
  _id,
  slug{
     current
  }
}`;

	const posts = await sanityClient.fetch(query);
	const paths = posts.map((post: Post) => ({
		params: {
			slug: post.slug.current,
		},
	}));
	// Return the paths for available slugs
	// Slugs that are not available will return a 404 page
	return {
		paths,
		fallback: 'blocking',
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const query = `*[_type == 'post' && slug.current == $slug][0]{
  _id,
  _createdAt,
  title,
  author->{
  name,
  image
},
 "comments":*[
   _type == "comment" &&
   post._ref == ^._id &&
   approved==true
 ],
description,
mainImage,
slug,
 body,
}
 `;

	const post = await sanityClient.fetch(query, {
		slug: params?.slug,
	});

	if (!post) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			post,
			revalidate: 60, //This will refetch the data after 60seconds
		},
	};
};
