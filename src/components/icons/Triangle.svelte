<div
	style:background-color = {backgroundColor}
	style:width={size}
>
	<svg 
		fill = {fill !== '' ? fill : theme.disabled.expressed} 
		viewBox='0 -3 25 25' 
	>
		<path d='M6.5,8.5l6,7l6-7H6.5z'/>
	</svg>
</div>

<script lang='ts'>
    import { type IColorThemeStore } from "../../interfaces/color-theme/IColorThemeStore";
    import { themeStore } from '../../stores/ColorThemeStore';

	export let backgroundColor = ''; 
    export let fill = '';                                 
    export let size = '1.1rem';

    let theme: IColorThemeStore;

    // Подписываемся на изменения темы
    themeStore.subscribe(value => {
        theme = value;
    });
</script>

<style>
	div:hover {
		cursor: pointer;
	}
</style>