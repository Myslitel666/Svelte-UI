<div 
    class="input-container"
    style:width = {width}
>
    <button 
        id = 'text-field'
        placeholder = ''
        style:outline = {theme?.themeMode === 'light' ? `${outlineWidth} solid ${textColor}` : 'none'}
        style:border = none
        style:border-radius = {borderRadius}
        style:padding-left = {paddingLeft}
        style:padding-right = {paddingRight}
        style:font-size = {fontSize}
        style:font-width = 0.5rem
        style:--Xl-border-color = {borderColor}
        style:--Xl-color = {primaryColor}
        style:--Xl-height = {height}
        style:--Xl-secondaryColor = {secondaryColor}
        style:--Xl-hoverBorderColor = {textColor}
        style:--Xl-textColor = {textColor}
    >
    </button>
</div>

<script lang='ts'>
	import { type IColorThemeStore } from '../../../interfaces/color-theme/IColorThemeStore';
    import { themeStore } from '../../../store/ColorThemeStore';

    export let borderColor = '';                         /* Цвет обводки */
    export let borderRadius = '';                        /* Радиус скругления углов */
    export let fontSize = '16px';                        /* Размер шрифта */
    export let height = '';                              /* Высота поля */
    export let labelColor ='';                           /* Цвет надписи */
    export let outlineWidth ='';                         /* Толщина обводки */
    export let paddingLeft = '';                         /* Отступ от левой границы до курсора */
    export let paddingRight = '';                        /* Отступ от правой границы */
    export let primaryColor = '';                        /* Основной цвет */
    export let secondaryColor = '';                      /* Вторичный цвет */
    export let textColor = '';                           /* Цвет текста */
    export let width = '';                               /* Ширина поля */

    let theme: IColorThemeStore | undefined;

    // Подписываемся на изменения темы
    themeStore.subscribe(value => {
        theme = value; //Инициализация объекта темы

        // Устанавливаем значения цветов при смене темы
        borderColor = theme.themeMode === 'light' ? theme.colors.text.primary : theme.colors.primary;
        labelColor = theme.colors.text.label;
        primaryColor = theme.colors.primary;
        secondaryColor = theme.colors.secondary;
        textColor = theme.colors.text.primary;
    });

    //Устанавливаем значения стилей после инициализации темы
    if (theme) {
        borderRadius = theme.border.borderRadius;
        height = theme.controls.height;
        outlineWidth = theme.border.disabled.width;
        paddingLeft = theme.controls.textField.padding;
        paddingRight = paddingLeft;
        width = theme.controls.textField.minWidth;
    }

</script>

<style>
    button {
        height: var(--Xl-height);
        color: var(--Xl-textColor);
        background-color: var(--Xl-color);
        transition: outline-color var(--Xl-effectsTimeCode), background-color var(--Xl-effectsTimeCode);
    }

    .input-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    button:hover {
        cursor: pointer;
        background-color: var(--Xl-secondaryColor);
    }
</style>