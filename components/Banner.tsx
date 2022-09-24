import React from 'react';

const Banner = () => {
	return (
		<div className='flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0'>
			<div className='p-10 space-y-5'>
				<h1 className='text-6xl max-w-xl font-serif'>
					<span className='underline decoration-black decoration-4'>
						Medium
					</span>{' '}
					is a place to write, read, and connect
				</h1>
				<h2>
					It's easy and free to post your thinking on any topic and
					connect with milions of readers.
				</h2>
			</div>
			<img
				src='/mediumM.png'
				alt='medium banner logo'
				className='hidden md:inline-flex h-32 lg:h-full'
			/>
		</div>
	);
};

export default Banner;
