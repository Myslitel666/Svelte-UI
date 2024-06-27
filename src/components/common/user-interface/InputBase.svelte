<script>
    export let height = '3rem'                             /* Высота поля */
    export let width = '15rem'                             /* Ширина поля */
    export let borderRadius = '4.5px';                     /* Радиус скругления углов */
    export let borderStyle = 'solid';                      /* Тип обводки */
    export let borderColor = '#c4c4c4';                    /* Цвет обводки */
    export let borderWidth = '1px';                        /* Толщина обводки */
    export let transition = 'border-color 0.5s ease';      /* Тайм-код для применения того или иного эффекта */
    export let paddingLeft = '0.6rem';                     /* Отступ от левой границы до курсора */
    export let paddingRight = '0.6rem';                    /* Отступ до правой границы */
    export let fontSize = '1.25rem';                       /* Размер шрифта */
    export let primaryColor = '#12ce0e';                   /* Основной цвет*/
    export let outline = 'none';       /* Обводка */
    export let cursor = 'text';                            /* Курсор */
    export let focusBorderWidth = '2px';                   /* Толщина обводки при нажатии*/

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
        style:--border-color = {borderColor}
        style:border-width = {borderWidth}
        style:transition = {transition}
        style:padding-left = {paddingLeft}
        style:padding-right = {paddingRight}
        style:font-size = {fontSize}
        style:outline = {outline}
        style:--focus-borderColor = {primaryColor}
        style:--focus-borderWidth = {focusBorderWidth}
    />
    <label 
        for='input-base'
        style:position = 'absolute'
        style:margin-left = {paddingLeft}
        style:font-size = {fontSize}
        style:color = '#b0b0b0'
        style:--hover-cursor = {cursor}
    >
        Do you like cheese?
    </label>
</div>

<style>
    .input-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    input {
        border-color: var(--border-color);
        border-width: var(--border-width);
        cursor: var(--hover-cursor);
    }

    label:hover {
        cursor: var(--hover-cursor);
    }

    input:focus {
        border-color: var(--focus-borderColor);
        border-width: var(--focus-borderWidth);
    }

    .input-container input {
    }

    input::placeholder {
        color:  var(--placeholder-color); 
        transition: var(--placeholder-transition);
    }

    input:focus::placeholder {
        color: transparent;
    }
</style>