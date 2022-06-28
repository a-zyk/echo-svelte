<script>
	import { page } from '$app/stores';

	let navItems = [
		{ name: 'Apie', link: '/' },
		{ name: 'Aprašymas', link: '/description' },
		{ name: 'Dažnesnių patologijų aprašymai', link: '/pathologies' }
	];

	const ACTIVE_CLASSES = 'border-black border-b-2 font-bold';
</script>

<nav class="mb-2">
	<ul class="flex justify-evenly">
		{#each navItems as navItem}
			<li class="py-3 text-black {$page.url.pathname == navItem.link ? ACTIVE_CLASSES : ''}">
				<a href={navItem.link}>{navItem.name}</a>
			</li>
		{/each}
	</ul>
</nav>
