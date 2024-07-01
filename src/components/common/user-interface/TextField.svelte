<script>
    export let height = '3rem'                             /* Высота поля */
    export let width = '15rem'                             /* Ширина поля */
    export let label = 'Course'                            /* Надпись */
    export let borderRadius = '0.28rem';                   /* Радиус скругления углов */
    export let effectsTimeCode = '0.3s';                   /* Тайм-код для применения того или иного эффекта */
    export let paddingLeft = '0.85rem';                    /* Отступ от левой границы до курсора */
    export let paddingRight = '0.85rem';                   /* Отступ до правой границы */
    export let fontSize = '1.12rem';                       /* Размер шрифта */
    export let labelColor = '#c8c8c8';                     /* Цвет надписи по умолчанию*/
    export let primaryColor = '#5bb056';                   /* Основной цвет*/
    export let borderColor = '#c4c4c4';                    /* Цвет обводки */
    export let hoverBorderColor = 'black';                 /* Цвет обводки при наведении */
    export let backgroundColor = 'white';                  /* Цвет фона */
</script>

<div 
    class="input-container"
    style:width = {width}
>
    <input 
        type = 'text'
        id = 'input-base'
        placeholder = ''
        style:height = {height}
        style:border-radius = {borderRadius}
        style:transition = 'border-color {effectsTimeCode} ease'
        style:padding-left = {paddingLeft}
        style:padding-right = {paddingRight}
        style:font-size = {fontSize}
        style:outline-color = {primaryColor}
        style:font-width = 0.5rem
        style:--Xl-primaryColor = {primaryColor}
        style:--Xl-borderColor = {borderColor}
        style:--Xl-hoverBorderColor = {hoverBorderColor}
    />
    <label 
        for='input-base'
        style:position = 'absolute'
        style:margin-left = {paddingLeft}
        style:transition = 'all {effectsTimeCode} ease'
        style:--Xl-liftingHeight = {height}
        style:--Xl-primaryColor = {primaryColor}
        style:--Xl-font-size = {fontSize}
        style:--Xl-color = {labelColor}
        style:--Xl-labelBgColor = {backgroundColor}
    >
        {label}
    </label>
</div>

<style>
    input {
        border-color: var(--Xl-borderColor);
        border-width: 1px;
        border-style: solid;
    }

    label {
        font-size: var(--Xl-font-size);
        color: var(--Xl-color);
    }

    .input-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    input:hover {
        border-color: var(--Xl-hoverBorderColor);
    }

    label:hover {
        cursor: text;
    }

    input:focus + label {
        color: var(--Xl-primaryColor); /* Изменяем цвет на основной цвет */
    }

    input:focus + label, input:not(:placeholder-shown) + label {
        transform: translate(-0.26rem, calc(-1 * var(--Xl-liftingHeight)/2 - 0.16rem)); /* Сдвигаем метку влево и вверх */
        font-size: 0.81rem; /* Уменьшаем размер шрифта */
        background-color: var(--Xl-labelBgColor);
        padding: 0 0.26rem 0 0.26rem;
    }
</style>