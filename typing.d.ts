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
	description: string;
	author: {
		name: string;
		image: string;
	};
	body: [object];
}
