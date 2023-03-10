export const firstCase = (value: string, lower?: boolean) => {
    if (value) {
        if (lower) {
            return value[0].toLocaleLowerCase() + value.slice(1);
        } else { 
            return value[0].toUpperCase() + value.slice(1);
        }
    } else {
        return value;
    }
}