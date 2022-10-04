import React from 'react';
import Button from './Button';

const Banner = () => {
	return (
		<div className='flex justify-between items-center h-[80vh] bg-yellow-400 border-y border-black px-5 py-10 lg:py-0'>
			<div className='space-y-5 lg:space-y-10 max-w-2xl'>
				<h1 className='text-7xl max-w-xl font-palaquin font-semibold lg:text-8xl'>
					Stay curious.
				</h1>
				<h2 className='text-[22px] text-gray-800 leading-5 font-openSans max-w-md px]'>
					Discover stories, thinking, and expertise from writers on
					any topic.
				</h2>
				<Button
					text='start reading'
					type='button'
					className='bg-gray-900 font-openSans font-medium px-10'
				/>
			</div>
			<img
				src='https://cdn-icons-png.flaticon.com/512/2582/2582607.png'
				alt='medium banner logo'
				className='hidden  md:flex md:h-[250px] md:w-[250px] flex-shrink-0 lg:h-[400px] lg:w-[400px]'
			/>
		</div>
	);
};

export default Banner;
