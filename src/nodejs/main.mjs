import {init} from './base/hola_mundo.mjs'
const startTime = Date.now();
init()
const endTime = Date.now();
const executionTime = (endTime - startTime);
console.log(`Tiempo de Ejecución: ${executionTime}ms`);