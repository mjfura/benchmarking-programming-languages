import {init} from './base/hola_mundo.mjs'
console.log('----------------------')
console.log('NODEJS')
console.log('----------------------')
const startTime = process.hrtime();
init()
const [seconds, nanoseconds] = process.hrtime(startTime);
const executionTime = (seconds * 1e3) + (nanoseconds / 1e6); 

console.log(`Tiempo de Ejecución: ${executionTime}ms`);