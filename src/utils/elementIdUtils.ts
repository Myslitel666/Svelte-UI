const idLocalStorage = 'Id';

/*Методы по работе с Id элементов*/

//Получить id
const getId = () => {
    const id = localStorage.getItem(idLocalStorage);
    return parseInt(id ? id : '-1');
};

//Изменить значение id
const setId = (id: number) => {
    localStorage.setItem(idLocalStorage, id.toString());
};

//Проинициализировать id
export const initialIdElement = () => {
    setId(0);
};

//Сгенерировать id
export const generateIdElement = () => {
    let id = getId();   // Получаем текущее значение id
    id++;               // Увеличиваем значение на единицу
    setId(id);          // Сохраняем обновлённое значение обратно в localStorage
    return id;          // Возвращаем новое значение
};