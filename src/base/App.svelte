<script lang="ts">
	import Routes from '../routes.svelte';
	import Layout from './Layout.svelte';

	let shellBarTitle = 'UI5 + Svelte';
	let user = { name: 'Gabriel Sosa', role: 'Admin' };
	let menu: any = [
		{
			name: 'Tareas',
			route: '/Todo/Todo',
			icon: 'activities',
			sub: [],
		},
		{
			name: 'Fotos',
			route: '/Fotos/Fotos',
			icon: 'background',
			sub: [],
		},
		{
			name: 'Cards',
			route: '/Cards/Cards',
			icon: 'course-book',
			sub: [{ name: 'Fotos', route: '/Fotos/Fotos', icon: 'background' }],
		},
		{
			name: 'ODATA',
			route: '/Odata/Odata',
			icon: 'cloud',
			sub: [],
		},
	];
</script>

<div class="main">
	<Layout {user} {shellBarTitle} {menu} />
</div>

<style>
	.main {
		margin: auto;
		color: aliceblue;
	}
</style>
