<script>
	import ColorThemeProvider from '../lib/elegant/customization/ThemeProvider.svelte';
</script>
<ColorThemeProvider>
	<div>
		<main>
			<slot />
		</main>
	</div>
</ColorThemeProvider>