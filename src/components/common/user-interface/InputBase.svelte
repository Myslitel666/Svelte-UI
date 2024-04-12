<input 
    class = 'input-base' 
    type='text'
    placeholder='Outlined'
/>

<style>
    .input-base {
        height: 3rem;                       /* Высота поя */
        border-radius: 4.5px;               /* Радиус скругления углов */
        border-style: solid;                /* Тип обводки */
        border-color: #c4c4c4;            /* Цвет обводки */
        border-width: 1px;                  /* Толщина обводки */
        transition: border-color 1s ease;   /* Плавная смена цвета обводки */
        padding-left: 0.6rem;               /* Отступ от левой границы до курсора */
        padding-right: 0.6rem;              /* Отступ до правой границы */
        font-size: 1.25rem;                 /* Размер шрифта */
        outline: none;                      /* Убираем стандартную обводку при нажатии, чтобы сделать её смену плавной */
    }

    .input-base::placeholder {
        color: #c4c4c4;                   /* Цвет текста placeholder */
        transition: color 1s ease;
    }

    .input-base:focus {
        border-color: black;              /* Изменение цвета рамки при фокусе */
    }

    .input-base:focus::placeholder {
        color: transparent;                 /* Скрываем текст placeholder при фокусировке */
    }
</style>