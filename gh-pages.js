import { publish } from 'gh-pages';

publish(
	'build',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/a-zyk/echo-svelte.git',
		user: {
			name: 'Austėja Zykutė',
			email: 'austejazykute@gmail.com'
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
