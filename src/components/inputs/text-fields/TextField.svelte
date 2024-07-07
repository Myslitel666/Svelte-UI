<div 
    class="input-container"
    style:width = {width}
>
    <input 
        id = 'text-field'
        type = 'text'
        autocomplete='off'
        placeholder = ''
        style:border = none
        style:border-radius = {borderRadius}
        style:padding-left = {paddingLeft}
        style:padding-right = {paddingRight}
        style:font-size = {fontSize}
        style:font-width = 0.5rem
        style:--Xl-border-color = {borderColor}
        style:--Xl-color = {primaryColor}
        style:--Xl-height = {height}
        style:--Xl-activeOutlineWidth = {activedOutlineWidth}
        style:--Xl-disabledOutlineWidth = {disabledOutlineWidth}
        style:--Xl-hoverBorderColor = {textColor}
        style:--Xl-textColor = {textColor}
    />
    <label 
        for='text-field'
        style:position = 'absolute'
        style:margin-left = {paddingLeft}
        style:--Xl-color = {primaryColor}
        style:--Xl-font-size = {fontSize}
        style:--Xl-labelColor = {labelColor}
        style:--Xl-liftingHeight = {height}
    >
        {label}
    </label>
</div>

<script lang='ts'>
	import { type IColorThemeStore } from '../../../interfaces/color-theme/IColorThemeStore';
    import { themeStore } from '../../../store/ColorThemeStore';

    export let activedOutlineWidth = '';                 /* Толщина обводки в активном состоянии */
    export let borderColor = '';                         /* Цвет обводки */
    export let borderRadius = '';                        /* Радиус скругления углов */
    export let disabledOutlineWidth = '';                /* Толщина обводки в неактивном состоянии */
    export let fontSize = '16px';                        /* Размер шрифта */
    export let height = '';                              /* Высота поля */
    export let label = 'Text Field'                      /* Надпись */
    export let labelColor ='';                           /* Цвет надписи */
    export let paddingLeft = '';                         /* Отступ от левой границы до курсора */
    export let paddingRight = '';                        /* Отступ от правой границы */
    export let primaryColor = '';                        /* Основной цвет */
    export let textColor = '';                           /* Цвет текста */
    export let width = '';                               /* Ширина поля */

    let theme: IColorThemeStore | undefined;

    // Подписываемся на изменения темы
    themeStore.subscribe(value => {
        theme = value; //Инициализация объекта темы

        // Устанавливаем значения цветов при смене темы
        borderColor = theme.border.disabled.color;
        labelColor = theme.colors.text.label;
        primaryColor = theme.colors.primary;
        textColor = theme.colors.text.primary;
    });

    //Устанавливаем значения стилей после инициализации темы
    if (theme) {
        activedOutlineWidth = theme.border.active.width;
        borderRadius = theme.border.borderRadius;
        height = theme.controls.height;
        disabledOutlineWidth = theme.border.disabled.width;
        paddingLeft = theme.controls.textField.padding;
        paddingRight = paddingLeft;
        width = theme.controls.textField.minWidth;
    }

</script>

<style>
    input {
        background-color: var(--Xl-background-color);
        color: var(--Xl-textColor);
        height: var(--Xl-height);
        outline-color: var(--Xl-border-color);
        outline-style: solid;
        outline-width: var(--Xl-disabledOutlineWidth);
        transition: outline-color var(--Xl-effectsTimeCode), background-color var(--Xl-effectsTimeCode);
    }

    label {
        pointer-events: none; /* Нажатие на label не перекрывает не припятствует активации input */
        font-size: var(--Xl-font-size);
        color: var(--Xl-labelColor);
        transition: var(--Xl-effectsTimeCode);
    }

    .input-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    input:hover {
        outline-color: var(--Xl-hoverBorderColor);
    }

    input:focus {
        outline-color: var(--Xl-color);
        outline-width: var(--Xl-activeOutlineWidth);
    }

    label:hover {
        cursor: text;
    }

    input:focus + label {
        color: var(--Xl-color); /* Изменяем цвет на основной цвет */
    }

    input:focus + label, input:not(:placeholder-shown) + label {
        transform: translate(-0.26rem, calc(-1 * var(--Xl-liftingHeight)/2 - 0.16rem)); /* Сдвигаем метку влево и вверх */
        font-size: 13px; /* Уменьшаем размер шрифта */
        background-color: var(--Xl-background-color);
        padding: 0 0.26rem 0 0.26rem;
        transition: all var(--Xl-effectsTimeCode);
    }
</style>