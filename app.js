// Main imports
import multiply, { add, subtract, addAndLogUpper } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray, arrayToLoudString } from './arrayModule.js';

// Core demos
console.log("💻 Yo, here's the math:");
console.log('Add:', add(7, 2));
console.log('Subtract:', subtract(9, 5));
console.log('Multiply:', multiply(3, 6));

console.log("🗣️ Now some string flips:");
console.log('Upper:', toUpperCase('demar daveon'));
console.log('Lower:', toLowerCase('JAVASCRIPT'));

console.log("🧮 Array stuff:");
console.log('Max:', findMax([1, 4, 9, 2]));
console.log('Reversed:', reverseArray([10, 20, 30]));
console.log('Array as LOUD string:', arrayToLoudString(['yo', 'check', 'this']));

// Use the imported combo function
addAndLogUpper(15, 35);

// Final challenge - custom remix
const trackNumbers = [11, 22, 7, 99, 45];
const topBar = findMax(trackNumbers);
const boosted = multiply(topBar, 3);
const output = toUpperCase(`Boosted Max: ${boosted}`);
console.log('🎧 Final Challenge – Rap Mix:', output);
