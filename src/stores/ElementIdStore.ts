import { writable } from 'svelte/store';

let elementId = writable(0);

//Сгенерировать id
// Сгенерировать новый id
const generateIdElement = () => {
    // Получаем текущее значение, увеличиваем на 1 и обновляем store
    elementId.update(n => n + 1);

    // Возвращаем текущее значение (которое было обновлено)
    let id: number = 0;
    elementId.subscribe(value => {
        id = value;
    })();
    return id;
};

// Экспортируем все необходимые элементы
export { elementId, generateIdElement };
