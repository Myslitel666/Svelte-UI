<div 
    class = 'cell data-grid'
    style:--Xl-border-color = {borderColor}
>
    <div class = 'cell row'>
    </div>
    <div class = 'cell row'>
    </div>
    <div class = 'cell row'>
    </div>
</div>

<script lang='ts'>
	import { type IColorThemeStore } from './../../../interfaces/color-theme/IColorThemeStore';
    import { themeStore } from '../../../stores/ColorThemeStore';

    // Свойства для управления CSS-стилями
    export let backgroundColor = '';                          /* Цвет заливки */
    export let borderColor = '';                              /* Цвет обводки */

    // Флаги для отслеживания, передал ли пользователь значение извне
    let isBackgroundColorFromUser = backgroundColor !== '';
    let isBorderColorFromUser = borderColor !== '';

    let theme: IColorThemeStore | undefined;

    // Подписываемся на изменения темы
    themeStore.subscribe(value => {
        theme = value; //Инициализация объекта темы

        // Устанавливаем значения цветов при смене темы
        if (!isBackgroundColorFromUser) backgroundColor = theme.disabled.touch;
        if (!isBorderColorFromUser) borderColor = theme.border.alegant.color;
    });

</script>

<style>
    .cell {
        border: 1px solid; /* Толщина и цвет обводки таблицы */
        border-color: var(--Xl-border-color);
    }

    .data-grid {
        border-radius: 4px;
        width: 100%;
    }

    .row {
        height: 2.5rem;
        border-left: none;
        border-right: none;
        border-top: none;
    }
</style>