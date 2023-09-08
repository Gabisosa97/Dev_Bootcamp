<script lang="ts">
	import Routes from '../routes.svelte';
	import Menu from './Menu.svelte';

	let shellBarTitle = 'UI5 + Svelte';
	let user = { name: 'Gabriel Sosa', role: 'Admin' };
	let menu: any = [
		{
			name: 'Todo',
			route: '/Todo/Todo',
		},
		{
			name: 'Chau',
			route: '/Chau/Chau',
		},
	];
</script>

<div class="main">
	<Menu {user} {shellBarTitle} {menu}/>
	<!-- <Routes /> -->
</div>

<style>
	.main {
		margin: auto;
		color: aliceblue;
	}
</style>
