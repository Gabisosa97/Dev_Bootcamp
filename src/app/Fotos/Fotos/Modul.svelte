<script lang="ts">
	import '@ui5/webcomponents/dist/Carousel.js';
</script>

<div id="car">
	<ui5-carousel cyclic>
		<img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Accenture_Argentina.jpg" alt="Landscape 1" />
		<img src="https://www.cronista.com/files/image/317/317603/6002252497e72.jpg" alt="Landscape 2" />
	</ui5-carousel>
</div>

<style>
	#car {
		max-height: 100%;
		max-width: 50rem;
	}

	img {
		max-height: 30rem;
		max-width: 100%;
	}
</style>
