export function findMax(arr) {
    return Math.max(...arr);
}

export function reverseArray(arr) {
    return arr.slice().reverse();
}

// extra: format array to uppercase string
export function arrayToLoudString(arr) {
    return arr.join(', ').toUpperCase();
}
