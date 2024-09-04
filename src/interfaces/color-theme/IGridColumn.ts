export interface GridColumn {
    /** Уникальное имя поля колонки */
    field: string;
  
    /** Заголовок, отображаемый в таблице */
    headerName: string;
  
    /** Ширина колонки (может быть числом в пикселях или строкой, например, '20%') */
    width?: number | string;
  
    /** Класс стиля для заголовка */
    headerClass?: string;
  
    /** Класс стиля для ячеек */
    cellClass?: string;
  
    /** Флаг, указывающий, редактируемы ли ячейки этой колонки */
    editable?: boolean;

  
    /** Флаг, указывающий, сортируется ли колонка */
    sortable?: boolean;
  
    /** Функция для кастомной сортировки */
    sortComparator?: (a: any, b: any) => number;
  
    /** Тип данных колонки (например, 'string', 'number', 'date') */
    type?: string | number | Date | boolean;
  
    /** Минимальная ширина колонки */
    minWidth?: number;
  
    /** Максимальная ширина колонки */
    maxWidth?: number;
  
    /** Текст подсказки для заголовка */
    headerTooltip?: string;
  
    /** Флаг, указывающий, скрыта ли колонка */
    hide?: boolean;
  
    /** Значение по умолчанию для пустых ячеек */
    defaultValue?: any;
}