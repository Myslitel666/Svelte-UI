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
	import { initialIdElement } from '../utils/elementIdUtils';
	import './font.css';
	import './app.css';

	let theme: IColorThemeStore;

	// Подписываемся на изменения темы
	themeStore.subscribe(value => {
		theme = value;
	});

  onMount(() => {
    initialCSSVariables(); // Применяем тему при запуске приложения
	initialIdElement(); //Задаём начальное значение для id элемента.
  });
</script>