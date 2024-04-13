<input 
    class = 'input-base' 
    type = 'text'
    {placeholder}
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
    style:--placeholder-color = {placeholderColor}
    style:--placeholder-transition = {placeholderTransition}
    style:--focus-borderColor = {focusBorderColor}
/>

<script>
    export let placeholder='Input Text'                    /* Текстовая подсказка */
    export let height = '3rem'                             /* Высота поля */
    export let borderRadius = '4.5px';                     /* Радиус скругления углов */
    export let borderStyle = 'solid';                      /* Тип обводки */
    export let borderColor = '#c4c4c4';                    /* Цвет обводки */
    export let borderWidth = '1px';                        /* Толщина обводки */
    export let transition = 'border-color 1s ease';        /* Тайм-код для применения того или иного эффекта */
    export let paddingLeft = '0.6rem';                     /* Отступ от левой границы до курсора */
    export let paddingRight = '0.6rem';                    /* Отступ до правой границы */
    export let fontSize = '1.25rem';                       /* Размер шрифта */
    export let outline = 'none';                           /* Отключение стандартной обводки для реализации плавной смены */
    export let placeholderColor = '#c4c4c4';               /* Цвет placeholder */
    export let placeholderTransition = 'color 0.75s ease'; /* Transition для placeholder */
    export let focusBorderColor = 'black';                 /* Цвет обводки при нажатии */
</script>

<style>
    .input-base {
        border-color: var(--border-color);
    }

    .input-base::placeholder {
        color:  var(--placeholder-color); 
        transition: var(--placeholder-transition);
    }

    .input-base:focus {
        border-color: var(--focus-borderColor);
    }

    .input-base:focus::placeholder {
        color: transparent;
    }
</style>