<div 
	class="app"
>
	<main>
		<slot />
	</main>
</div>

<script lang="ts">
	import { type IColorThemeStore } from '../interfaces/color-theme/IColorThemeStore';
    import { themeStore } from '../store/ColorThemeStore';
	import './font.css';
	import './app.css';

	let theme: IColorThemeStore;

	// Подписываемся на изменения темы
	themeStore.subscribe(value => {
		theme = value;
	});
</script>