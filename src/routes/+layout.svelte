<script>
	import ColorThemeProvider from '../lib/elegant/customization/ColorThemeProvider.svelte';
</script>

<ColorThemeProvider>
	<div>
		<main>
			<slot />
		</main>
	</div>
</ColorThemeProvider>