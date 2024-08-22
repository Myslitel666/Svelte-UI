export function getInputValue(e: Event) {
    const target = e.target as HTMLInputElement;
    return target.value;
}