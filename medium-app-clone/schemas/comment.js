export default {
	name: 'comment',
	type: 'document',
	title: 'Comment',
	fields: [
		{ name: 'name', type: 'string' },
		{
			title: 'Approved',
			name: 'approved',
			type: 'boolean',
			description: 'Unapproved comments will not be visible to all users',
		},
		{ name: 'email', type: 'string' },
		{ name: 'comment', type: 'string' },
		{ name: 'post', type: 'reference', to: [{ type: 'post' }] },
	],
};
