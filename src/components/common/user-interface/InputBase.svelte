<script>
    export let height = '3rem'                             /* Высота поля */
    export let width = '15rem'                             /* Ширина поля */
    export let borderRadius = '4.5px';                     /* Радиус скругления углов */
    export let transition = 'border-color 0.3s ease, outline-color 0.3s ease';      /* Тайм-код для применения того или иного эффекта */
    export let paddingLeft = '0.6rem';                     /* Отступ от левой границы до курсора */
    export let paddingRight = '0.6rem';                    /* Отступ до правой границы */
    export let fontSize = '1.25rem';                       /* Размер шрифта */
    export let primaryColor = '#12ce0e';                   /* Основной цвет*/
    export let borderColor = '#c4c4c4';                    /* Цвет обводки */
    export let cursor = 'text';                            /* Курсор */
    export let borderWidth = '1px';                        /* Толщина обводки */
    export let borderStyle = 'solid';                      /* Тип обводки */
    export let hoverBorderColor = 'black';                 /* Цвет обводки при наведении*/
    export let focusBorderWidth = '4px';                   /* Толщина обводки при нажатии*/

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
        style:--borderColor = {borderColor}
        style:--hoverBorderColor = {hoverBorderColor}
    />
    <label 
        for='input-base'
        style:position = 'absolute'
        style:margin-left = {paddingLeft}
        style:font-size = {fontSize}
        style:color = '#c8c8c8'
        style:--hover-cursor = {cursor}
    >
        Course
    </label>
</div>

<style>
    .input-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    input {
        border-color: var(--borderColor);
        cursor: var(--hover-cursor);
    }

    input:hover {
        border-color: var(--hoverBorderColor);
    }

    label:hover {
        cursor: var(--hover-cursor);
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