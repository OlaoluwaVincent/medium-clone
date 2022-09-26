import { Comment } from '../typing';

interface Props {
	comment: Comment;
}
const CommentContainer = ({ comment }: Props) => {
	return (
		<div>
			<p className='px-3 my-2'>
				<span className='text-yellow-500'>{comment.name}:</span>{' '}
				{comment.comment}
			</p>
		</div>
	);
};

export default CommentContainer;
