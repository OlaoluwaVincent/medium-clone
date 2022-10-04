type Props = {
	cat: string;
};

const Category = ({ cat }: Props) => {
	return (
		<div className='border border-grey-300 inline-flex px-4 py-2 rounded-md text-gray-600 font-medium font-openSans capitalize cursor-pointer'>
			{cat}
		</div>
	);
};

export default Category;
