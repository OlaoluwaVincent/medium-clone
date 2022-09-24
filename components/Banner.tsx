import React from 'react';

const Banner = () => {
	return (
		<div className='bg-yellow-200'>
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
			<img src='/mediumM.png' alt='medium banner logo' />
		</div>
	);
};

export default Banner;
