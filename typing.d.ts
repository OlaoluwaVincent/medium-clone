export interface Post {
	_id: string;
	_createdAt: string;
	title: string;
	slug: {
		current: string;
	};
	mainImage: {
		asset: {
			url: string;
		};
	};
	comments: Comment[];
	description: string;
	author: {
		name: string;
		image: string;
	};
	body: [object];
}

export interface Comment {
	approved: boolean;
	comment: string;
	email: string;
	name: string;
	post: {
		_ref: string;
		_type: string;
	};
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
}

export interface Button {
	text: string;
	icon?: any;
	type?: 'submit' | 'button';
	className?: string;
}
