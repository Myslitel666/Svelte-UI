<div 
    class="input-container"
    style:width = {width}
>
    <input 
        id = 'text-field'
        type = 'text'
        autocomplete='off'
        placeholder = ''
        style:outline = none
        style:border-radius = {borderRadius}
        style:padding-left = {paddingLeft}
        style:padding-right = {paddingRight}
        style:font-size = {fontSize}
        style:font-width = 0.5rem
        style:--Xl-border-color = {borderColor}
        style:--Xl-color = {primaryColor}
        style:--Xl-height = {height}
        style:--Xl-activeborderWidth = {activedborderWidth}
        style:--Xl-disabledborderWidth = {disabledborderWidth}
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

    export let activedborderWidth = '';                  /* Толщина обводки в активном состоянии */
    export let borderColor = '';                         /* Цвет обводки */
    export let borderRadius = '';                        /* Радиус скругления углов */
    export let disabledborderWidth = '';                 /* Толщина обводки в неактивном состоянии */
    export let fontSize = '16px';                        /* Размер шрифта */
    export let height = '';                              /* Высота поля */
    export let label = 'Text Field'                      /* Надпись */
    export let labelColor ='';                           /* Цвет надписи */
    export let paddingLeft = '';                         /* Отступ от левой границы до курсора */
    export let paddingRight = '';                        /* Отступ от правой границы */
    export let primaryColor = '';                        /* Основной цвет */
    export let textColor = '';                           /* Цвет текста */
    export let width = '';                               /* Ширина поля */

    // Флаги для отслеживания, передал ли пользователь значение извне
    let isTextColorFromUser = textColor !== '';
    let isBorderColorFromUser = borderColor !== '';
    let isLabelColorFromUser = labelColor !== '';
    let isPrimaryColorFromUser = primaryColor !== '';

    let theme: IColorThemeStore | undefined;

    // Подписываемся на изменения темы
    themeStore.subscribe(value => {
        theme = value; //Инициализация объекта темы

        // Устанавливаем значения цветов при смене темы
        if (!isBorderColorFromUser) borderColor = theme.border.disabled.color;
        if (!isLabelColorFromUser) labelColor = theme.colors.text.label;
        if (!isPrimaryColorFromUser) primaryColor = theme.colors.primary;
        if (!isTextColorFromUser) textColor = theme.colors.text.primary;
    });

    //Устанавливаем значения стилей после инициализации темы с проверкой не передавал ли пользователь в компонент свои значения стилей
    if (theme) {
        if (!activedborderWidth) activedborderWidth = theme.border.active.width;
        if (!borderRadius) borderRadius = theme.border.borderRadius;
        if (!height) height = theme.controls.height;
        if (!disabledborderWidth) disabledborderWidth = theme.border.disabled.width;
        if (!paddingLeft) paddingLeft = theme.controls.textField.padding;
        if (!paddingRight) paddingRight = paddingLeft;
        if (!width) width = theme.controls.textField.minWidth;
    }

</script>

<style>
    input {
        background-color: var(--Xl-background-color);
        color: var(--Xl-textColor);
        height: var(--Xl-height);
        border-color: var(--Xl-border-color);
        border-style: solid;
        border-width: var(--Xl-disabledborderWidth);
        transition: border-color var(--Xl-effectsTimeCode), background-color var(--Xl-effectsTimeCode);

        box-sizing: border-box; /* Включаем border и padding в размеры элемента */
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
        border-color: var(--Xl-hoverBorderColor);
    }

    input:focus {
        border-color: var(--Xl-color);
        border-width: var(--Xl-activeborderWidth);
    }

    label:hover {
        cursor: text;
    }

    input:focus + label {
        color: var(--Xl-color); /* Изменяем цвет на основной цвет */
    }

    input:focus + label, input:not(:placeholder-shown) + label {
        transform: translate(-0.26rem, calc(-1 * var(--Xl-liftingHeight)/2)); /* Сдвигаем метку влево и вверх */
        font-size: 13px; /* Уменьшаем размер шрифта */
        background-color: var(--Xl-background-color);
        padding: 0 0.26rem 0 0.26rem;
        transition: all var(--Xl-effectsTimeCode);
    }
</style>