import Category from './Category';

type Props = {
	categories?: string[];
};

const Categories = ({ categories }: Props) => {
	const category = [
		'self',
		'Relationships',
		'Data Science',
		'Programming',
		'Productivity',
		'Javascript',
		'Machine Learning',
		'Politics',
		'Health',
	];
	return (
		<div className='font-semibold font-openSans uppercase text-xs md:text-md'>
			Discover More of What Matters to You
			<div className='flex flex-wrap items-center gap-3 mt-4'>
				{category.map((cat, i) => (
					<Category key={i} cat={cat} />
				))}
			</div>
		</div>
	);
};

export default Categories;
