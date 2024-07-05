<div 
    class="input-container"
    style:width = {width}
>
    <input 
        id = 'text-field'
        type = 'text'
        placeholder = ''
        style:--Xl-height = {height}
        style:border = none
        style:border-radius = {borderRadius}
        style:padding-left = {paddingLeft}
        style:padding-right = {paddingRight}
        style:font-size = {fontSize}
        style:font-width = 0.5rem
        style:--Xl-color = {theme.primaryColor}
        style:--Xl-border-color = {theme.borderColor}
        style:--Xl-textColor = {theme.textColor}
        style:--Xl-hoverBorderColor = {theme.textColor}
    />
    <label 
        for='text-field'
        style:position = 'absolute'
        style:margin-left = {paddingLeft}
        style:--Xl-color = {theme.primaryColor}
        style:--Xl-font-size = {fontSize}
        style:--Xl-liftingHeight = {height}
        style:--Xl-labelColor = {theme.labelColor}
        style:--Xl-labelBgColor = {theme.backgroundColor}
    >
        {label}
    </label>
</div>

<script lang='ts'>
	import { type IColorThemeStore } from '../../../interfaces/color-theme/IColorThemeStore';
    import { themeStore } from '../../../store/ColorThemeStore';

    export let height: string = '3rem'                      /* Высота поля */
    export let width: string = '15rem'                      /* Ширина поля */
    export let label: string = 'Course'                     /* Надпись */
    export let borderRadius: string = '0.28rem';            /* Радиус скругления углов */
    export let paddingLeft: string = '0.85rem';             /* Отступ от левой границы до курсора */
    export let paddingRight: string = '0.85rem';            /* Отступ до правой границы */
    export let fontSize: string = '1.12rem';                /* Размер шрифта */

    let theme: IColorThemeStore;

    // Подписываемся на изменения темы
    themeStore.subscribe(value => {
        theme = value;
    });
</script>

<style>
    input {
        height: var(--Xl-height);
        outline-color: var(--Xl-border-color);
        outline-width: 1px;
        outline-style: solid;
        color: var(--Xl-textColor);
        background-color: var(--Xl-background-color);
        transition: outline-color var(--Xl-effectsTimeCode)
    }

    label {
        pointer-events: none; /* Нажатие на label не перекрывает не припятствует активации input */
        font-size: var(--Xl-font-size);
        color: var(--Xl-labelColor);
        transition: var(--Xl-effectsTimeCode)
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
        outline-width: 2px;
    }

    label:hover {
        cursor: text;
    }

    input:focus + label {
        color: var(--Xl-color); /* Изменяем цвет на основной цвет */
    }

    input:focus + label, input:not(:placeholder-shown) + label {
        transform: translate(-0.26rem, calc(-1 * var(--Xl-liftingHeight)/2 - 0.16rem)); /* Сдвигаем метку влево и вверх */
        font-size: 0.81rem; /* Уменьшаем размер шрифта */
        background-color: var(--Xl-background-color);
        padding: 0 0.26rem 0 0.26rem;
    }
</style>