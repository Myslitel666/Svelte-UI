<div 
    class="input-container"
    style:width = {width}
>
    <TextField 
        {label}
        width = '100%'
    />

</div>
<Triangle 
    size = 1.5rem
/>

<script lang='ts'>
	import { type IColorThemeStore } from '../../../interfaces/color-theme/IColorThemeStore';
    import { themeStore } from '../../../stores/ColorThemeStore';
    import TextField from '../text-fields/TextField.svelte';
    import Triangle from '../../icons/Triangle.svelte';

    export let label = 'Auto Complete';                  /* Надпись */
    export let width = '';                               /* Ширина */
    export let activedborderWidth = '';                  /* Толщина обводки в активном состоянии */

    // Флаги для отслеживания, передал ли пользователь значение извне
    let isTextColorFromUser = activedborderWidth !== '';

    let theme: IColorThemeStore | undefined;

    // Подписываемся на изменения темы
    themeStore.subscribe(value => {
        theme = value; //Инициализация объекта темы

        // Устанавливаем значения цветов при смене темы
        if (!isTextColorFromUser) activedborderWidth = theme.border.disabled.color;
    });

    //Устанавливаем значения стилей после инициализации темы с проверкой не передавал ли пользователь в компонент свои значения стилей
    if (theme) {
        if (!width) width = theme.controls.width;
    }

</script>

<style>

</style>