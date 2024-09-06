<div 
	class="app"
>
	<main>
		<slot />
	</main>
</div>

<script lang="ts">
	import { type IColorThemeStore } from '../interfaces/color-theme/IColorThemeStore';
    import { themeStore } from '../stores/ColorThemeStore';
	import { onMount } from 'svelte';
	import { initialCSSVariables } from '../utils/initialCSSVariables';
	import './font.css';
	import './app.css';

	export const prerender = true;

	let theme: IColorThemeStore;

	// Подписываемся на изменения темы
	themeStore.subscribe(value => {
		theme = value;
	});

  onMount(() => {
    initialCSSVariables(); // Применяем тему при запуске приложения
  });
</script>