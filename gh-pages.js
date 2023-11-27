const ghpages = require('gh-pages');

ghpages.publish(
	'out', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/LeonardoBevilacqua/nextjs-static-export-poc.git',
		user: {
			name: 'Leonardo Bevilacqua',
			email: 'leonardo_bevilacqua@hotmail.com'
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
