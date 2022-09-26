import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormInputs {
	_id: string;
	name: string;
	email: string;
	comment: string;
}
interface PostId {
	post: string;
}
const Comment = ({ post }: PostId) => {
	const [submitted, setSubmitted] = useState(false);
	// Connect to form
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputs>();

	const onSubmit: SubmitHandler<FormInputs> = async (data) => {
		try {
			const submitData = await fetch('/api/createComment', {
				method: 'POST',
				body: JSON.stringify(data),
			});
			setSubmitted(true);
			console.log(submitData);
		} catch (error) {
			setSubmitted(false);
			console.log(error);
		}
	};

	return (
		<>
			{submitted ? (
				<div className='flex flex-col p-5 my-5 bg-yellow-500 text-white max-w-2xl mx-auto'>
					<h3 className='text-3xl font-bold'>
						Thank you for Submitting
					</h3>
					<p>Comments will appear on approval</p>
				</div>
			) : (
				<form
					className='flex flex-col p-5 max-w-2xl mx-auto mb-10'
					onSubmit={handleSubmit(onSubmit)}
				>
					<h3 className='text-sm text-yellow-500'>
						Enjoy the article
					</h3>
					<h4 className='text-2xl font-bold'>
						Leave a comment below
					</h4>
					<hr className='mt-2' />

					<input
						{...register('_id')}
						type='hidden'
						name='_id'
						value={post}
					/>

					<label className='block mb-5'>
						<span className='text-gray-600'>Name</span>
						<input
							{...register('name', { required: true })}
							type='text'
							placeholder='something called anything'
							className='shadow border py-2 px-3 form-input block w-full  focus:outline-yellow-500 '
						/>
					</label>
					<label className='block mb-5'>
						<span className='text-gray-600'>Email</span>
						<input
							{...register('email', { required: true })}
							type='text'
							placeholder='something called anything'
							className='shadow border py-2 px-3  block w-full focus:outline-yellow-500'
						/>
					</label>
					<label className='block mb-5'>
						<span className='text-gray-600'>Comment</span>
						<textarea
							{...register('comment', { required: true })}
							rows={8}
							className='shadow border rounded py-2 px-3 form-textarea block w-full focus:outline-yellow-500'
						/>
					</label>
					{/* {Errors will be returned when the validation fails} */}
					<div className='flex flex-col p-5'>
						{errors.name && (
							<span className='text-red-500'>
								The Name Field is Required
							</span>
						)}
						{errors.email && (
							<span className='text-red-500'>
								The Email Field is Required
							</span>
						)}
						{errors.comment && (
							<span className='text-red-500'>
								The Comment Field is Required
							</span>
						)}
					</div>
					<button
						type='submit'
						className='bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer'
					>
						Submit
					</button>
				</form>
			)}
		</>
	);
};

export default Comment;
