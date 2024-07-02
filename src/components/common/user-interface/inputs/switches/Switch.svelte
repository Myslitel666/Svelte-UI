<span 
    class="track"
    style:background-color= {`${checked ? primaryColor : '#e4e4e4'}`}
    style:--Xl-border-radius = {borderRadius}
>
</span>
<span 
    class="switch"
    style:transform = {`translate(${checked ? '1.76rem' : '0.26rem'}, 0.26rem)`}
    style:--Xl-border-radius = {borderRadius}
>
</span>
<input 
    type="checkbox" 
    bind:checked 
    on:click={toggleSwitch} 
/>

<script>
    export let borderRadius = '1rem';                      /* Радиус скругления углов */
    export let primaryColor = '#5bb056';                   /* Основной цвет*/
    let checked = false; // начальное состояние переключателя

    function toggleSwitch() {
        checked = !checked; // изменение состояния при клике
        console.log(checked)
    }
</script>

<style>
    input {
        opacity: 0;
        margin: 0;
        position: absolute;
        width: 4rem;
        height: 2rem;
        cursor: pointer;
    }
    .track {
        position: absolute;
        width: 3.55rem;
        height: 2rem;
        border-radius: var(--Xl-border-radius);
        transition: .3s;
    }
    .switch {
        position: absolute;
        background-color: #ffffff;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: var(--Xl-border-radius);
        transition: .3s;
    }
</style>