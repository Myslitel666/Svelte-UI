<script>
    export let height = '3rem'                             /* Высота поля */
    export let width = '15rem'                             /* Ширина поля */
    export let borderRadius = '0.28rem';                   /* Радиус скругления углов */
    export let transition = 'border-color 0.3s ease';      /* Тайм-код для применения того или иного эффекта */
    export let paddingLeft = '0.85rem';                    /* Отступ от левой границы до курсора */
    export let paddingRight = '0.85rem';                   /* Отступ до правой границы */
    export let fontSize = '1.12rem';                       /* Размер шрифта */
    export let labelColor = '#c8c8c8';                     /* Цвет надписи по умолчанию*/
    export let primaryColor = '#5bb056';                   /* Основной цвет*/
    export let borderColor = '#c4c4c4';                    /* Цвет обводки */
    export let cursor = 'text';                            /* Курсор */
    export let borderWidth = '1px';                        /* Толщина обводки */
    export let borderStyle = 'solid';                      /* Тип обводки */
    export let hoverBorderColor = 'black';                 /* Цвет обводки при наведении */
    export let focusBorderWidth = '10px';                   /* Толщина обводки при нажатии */
    export let labelFontSizeActive = '0.81rem';            /* Размер шрифта надписи при нажатии */
    export let backgroundColor = 'white';                  /* Цвет фона */
</script>

<div 
    class="input-container"
    style:width = {width}
>
    <input 
        type = 'text'
        id = 'input-base'
        style:height = {height}
        style:border-radius = {borderRadius}
        style:border-style = {borderStyle}
        style:transition = {transition}
        style:padding-left = {paddingLeft}
        style:padding-right = {paddingRight}
        style:font-size = {fontSize}
		style:border-width = {borderWidth}
        style:outline-color = {primaryColor}
        style:outline-width = {focusBorderWidth}
        style:font-width = 0.5rem
        style:--primaryColor = {primaryColor}
        style:--borderColor = {borderColor}
        style:--hoverBorderColor = {hoverBorderColor}
    />
    <label 
        for='input-base'
        style:position = 'absolute'
        style:margin-left = {paddingLeft}
        style:--primaryColor = {primaryColor}
        style:--font-size = {fontSize}
        style:--color = {labelColor}
        style:--hover-cursor = {cursor}
        style:--labelFontSizeActive = {labelFontSizeActive}
        style:--labelBgColor = {backgroundColor}
    >
        Course
    </label>
</div>

<style>
    input {
        border-color: var(--borderColor);
    }

    label {
        font-size: var(--font-size);
        color: var(--color);
    }

    .input-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    input:hover {
        border-color: var(--hoverBorderColor);
    }

    label:hover {
        cursor: var(--hover-cursor);
    }

    input:focus + label {
        transform: translate(-0.26rem, -1.55rem); /* Сдвигаем метку влево и вверх */
        font-size: var(--labelFontSizeActive); /* Уменьшаем размер шрифта */
        color: var(--primaryColor); /* Изменяем цвет на основной цвет */
        background-color: var(--labelBgColor);
        padding: 0.26rem;
    }
</style>