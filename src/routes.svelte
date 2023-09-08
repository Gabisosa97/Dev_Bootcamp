<script lang="ts">
	import Todo from '@/Todo/main.svelte';
	import Fotos from '@/Fotos/main.svelte';
	import Cards from '@/Cards/main.svelte';
	import Odata from '@/Odata/main.svelte';
</script>

<Odata prefix="/Odata" />

<Cards prefix="/Cards" />

<Fotos prefix="/Fotos" />

<Todo prefix="/Todo" />
