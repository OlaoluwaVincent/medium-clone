import React from 'react';
import { Button } from '../typing';

const Button = ({
	text = 'click',
	icon,
	type = 'submit',
	className,
}: Button) => {
	return (
		<button
			type={type}
			className={` text-white px-4 py-2 rounded-full capitalize cursor-pointer text-sm ${className} transition-all ease-in duration-300 hover:bg-black`}
		>
			{icon ? (
				<p className='flex items-center gap-2 '>
					{icon} {text}
				</p>
			) : (
				text
			)}
		</button>
	);
};

export default Button;
