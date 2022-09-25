import Link from 'next/link';

const Header = () => {
	return (
		<header className='flex justify-between p-5 max-w-7xl mx-auto'>
			<div className='flex items-center space-x-5'>
				<Link href={'/'}>
					<img
						src='/mediumLogo.png'
						alt='Logo'
						className='w-24 md:w-44 object-contain cursor-pointer'
					/>
				</Link>
				<div className='hidden md:inline-flex items-center space-x-5'>
					<p>About</p>
					<p>Contact</p>
					<p className='bg-green-600 py-1 px-4 rounded-full text-white'>
						Follow
					</p>
				</div>
			</div>
			<div className='flex items-center text-sm space-x-3 md:space-x-5 text-green-600'>
				<h3>Sign In</h3>
				<h3 className='border px-2 md:px-4 rounded-full border-green-400 py-1'>
					Get Started
				</h3>
			</div>
		</header>
	);
};

export default Header;
