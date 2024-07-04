import { writable, derived } from 'svelte/store';

// Начальный режим темы
const themeMode = writable('light');

// Определение цветов на основе текущей темы с использованием тернарных операторов
const theme = derived(themeMode, $themeMode => ({
    backgroundColor: $themeMode === 'light' ? 'white' : 'black',
    primaryColor: $themeMode === 'light' ? '#5bb056' : '#f21919',
    labelColor: $themeMode === 'light' ? '#c8c8c8' : '#484848',
    borderColor: $themeMode === 'light' ? '#c4c4c4' : '#444444',
    fillColor: $themeMode === 'light' ? '#e4e4e4' : '#888888',
    textColor: $themeMode === 'light' ? '#000000' : '#ffffff',
    buttonColor: $themeMode === 'light' ? '#007bff' : '#1e90ff',
    themeMode: $themeMode // добавляем режим темы, чтобы отслеживать его изменения
}));

// Функция, которая возвращает противоположную тему
const getOppositeTheme = (theme: string) => {
    if (theme === 'light') {
        return 'dark';
    }

    return 'light';
};

// Функция для переключения режима темы
const toggleThemeMode = () => {
    themeMode.update(current => getOppositeTheme(current));

    themeMode.subscribe(value => {
        window.document.body.classList.remove(getOppositeTheme(value));
		window.document.body.classList.toggle(value)
	});
};

// Экспортируем все необходимые элементы
export { theme as themeStore, themeMode, toggleThemeMode };
