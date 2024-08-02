const startTime = Date.now();

console.log("Hola Mundo desde NodeJs")

const endTime = Date.now();
const executionTime = endTime - startTime;
console.log(`Tiempo de Ejecución: ${executionTime}ms`);