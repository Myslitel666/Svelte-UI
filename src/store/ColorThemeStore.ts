import { writable, derived } from 'svelte/store';

// Начальный режим темы
const themeMode = writable('light');

// Определение цветов на основе текущей темы с использованием тернарных операторов
const theme = derived(themeMode, $themeMode => ({
    backgroundColor: $themeMode === 'light' ? 'white' : 'black',
    primaryColor: $themeMode === 'light' ? '#5bb056' : '#f41c1c',
    labelColor: $themeMode === 'light' ? '#b3b3b3' : '#808080',
    borderColor: $themeMode === 'light' ? '#c3c3c3' : '#606060',
    fillColor: $themeMode === 'light' ? '#e2e2e2' : '#424242',
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
    themeMode.update(current => {
        const newTheme = getOppositeTheme(current);
        
        // Удаляем текущую тему
        document.body.classList.remove(current);
        
        // Добавляем новую тему
        document.body.classList.add(newTheme);
        
        return newTheme;
    });
};

// Подписываемся один раз
themeMode.subscribe(value => {
    console.log(`Current theme: ${value}`);
});
// Экспортируем все необходимые элементы
export { theme as themeStore, themeMode, toggleThemeMode };
