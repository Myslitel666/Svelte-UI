import { writable } from 'svelte/store';

let elementId = writable(0);

//Сгенерировать id
const generateIdElement = () => {
    // Получаем текущее значение, увеличиваем на 1 и обновляем store
    elementId.update(n => n + 1);

    // Возвращаем текущее значение (которое было обновлено)
    let currentId;
    elementId.subscribe(value => {
        currentId = value;
    })();
    return currentId;
};

// Экспортируем все необходимые элементы
export { elementId, generateIdElement };
