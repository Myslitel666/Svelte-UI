<script lang="ts">
    export let options: string[] = []; // Входной список опций
  
    let query = ""; // Текущий запрос пользователя
    let filteredOptions: string[] = options; // Отфильтрованные опции на основе запроса
    let showDropdown = false; // Флаг для отображения выпадающего списка
    let selectedIndex = -1; // Индекс выбранной опции (для клавиатурной навигации)
  
    // Обновление списка предложений при вводе текста
    function updateOptions() {
      if (query) {
        filteredOptions = options.filter(option =>
          option.toLowerCase().includes(query.toLowerCase())
        );
      } else {
        filteredOptions = options; // Если нет запроса, показать все опции
      }
      showDropdown = filteredOptions.length > 0;
    }
  
    // Обработка выбора опции
    function selectOption(option: string) {
      query = option;
      showDropdown = false; // Закрытие выпадающего списка
    }
  
    // Обработка клавиш для навигации и выбора
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "ArrowDown" && selectedIndex < filteredOptions.length - 1) {
        selectedIndex++;
      } else if (event.key === "ArrowUp" && selectedIndex > 0) {
        selectedIndex--;
      } else if (event.key === "Enter" && selectedIndex >= 0) {
        selectOption(filteredOptions[selectedIndex]);
      }
    }
  
    // Отображение полного списка при фокусе на поле
    function handleFocus() {
      filteredOptions = options;
      showDropdown = filteredOptions.length > 0;
    }
  
    // Скрыть выпадающий список при клике вне компонента
    function handleBlur() {
      setTimeout(() => {
        showDropdown = false;
      }, 200);
    }
  </script>
  
  <style>
    .autocomplete-container {
      position: relative;
      width: 300px;
    }
  
    input {
      width: 100%;
      padding: 0.5rem;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  
    .dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      border: 1px solid #ccc;
      background-color: white;
      z-index: 100;
      max-height: 150px;
      overflow-y: auto;
    }
  
    .dropdown-item {
      padding: 0.5rem;
      cursor: pointer;
    }
  
    .dropdown-item:hover, .dropdown-item.selected {
      background-color: #f0f0f0;
    }
  </style>
  
  <div class="autocomplete-container">
    <input 
      type="text" 
      bind:value={query} 
      on:input={updateOptions} 
      on:keydown={handleKeydown} 
      on:focus={handleFocus}
      on:blur={handleBlur}
      placeholder="Start typing..."
    />
  
    {#if showDropdown}
      <div class="dropdown">
        {#each filteredOptions as option, index}
          <div 
            class="dropdown-item {index === selectedIndex ? 'selected' : ''}" 
            on:click={() => selectOption(option)}
            on:mouseover={() => selectedIndex = index}
          >
            {option}
          </div>
        {/each}
      </div>
    {/if}
  </div>
  