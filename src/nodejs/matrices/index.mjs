import { sumarMatrices } from './operaciones.mjs';
const primera_matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const segunda_matriz = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];
const result = sumarMatrices(primera_matriz, segunda_matriz);
console.log(result);