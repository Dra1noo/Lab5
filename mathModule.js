import { toUpperCase } from './stringModule.js';

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// default export: multiply
export default function multiply(a, b) {
    return a * b;
}

// extra: log uppercase result of sum
export function addAndLogUpper(a, b) {
    const result = add(a, b);
    console.log("Sum, loud and clear:", toUpperCase(result.toString()));
}
