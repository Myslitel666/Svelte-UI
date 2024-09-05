<div 
    class = 'data-grid border'
    style:--Xl-border-color = {borderColor}
>
    <div class = 'row border'>
        <div class = 'cell border'>
        </div>
        <div class = 'cell border'>
        </div>
        <div class = 'cell border'>
        </div>
        <div class = 'cell border'>
        </div>
    </div>
    <div class = 'row border'>
        <div class = 'cell border'>
        </div>
        <div class = 'cell border'>
        </div>
        <div class = 'cell border'>
        </div>
        <div class = 'cell border'>
        </div>
    </div>
    <div class = 'row border'>
        <div class = 'cell border'>
        </div>
        <div class = 'cell border'>
        </div>
        <div class = 'cell border'>
        </div>
        <div class = 'cell border'>
        </div>
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
    .border {
        border: 1px solid; /* Толщина и цвет обводки таблицы */
        border-color: var(--Xl-border-color);
        transition: border-color var(--Xl-effectsTimeCode), background-color var(--Xl-effectsTimeCode);
    }

    .data-grid {
        border-radius: 4px;
        width: 100%;
    }

    .row {
        height: 3rem;
        border-left: none;
        border-right: none;
        border-top: none;
        display: flex; /* Горизонтальная ориентация для ячеек */
        flex: 1; /* Ячейки растягиваются на всю ширину строки */
    }

    .cell {
        border-top: none;
        border-bottom: none;
        border-left: none;
        flex: 1; /* Ячейки растягиваются на всю ширину строки */
        border-top: none;
        border-bottom: none;
        display: flex; /* Используем Flexbox для вертикального выравнивания */
        align-items: center; /* Центрируем содержимое по вертикали */
        justify-content: center; /* Центрируем содержимое по горизонтали */
    }

    .row:last-child {
        border-bottom: none; /* Убираем нижнюю границу у последней строки */
    }

    .cell:last-child {
        border: none;
    }
</style>