export function getInputValue(e: Event): string {
    const target = e.target as HTMLInputElement;
    return target.value;
}