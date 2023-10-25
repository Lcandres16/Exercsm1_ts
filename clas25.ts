/*  
let sumarArray = (array: number[]): number => {
  if (!Array.isArray(array)) {
    return 0;
  }

  return array.reduce((acumulador, elemento) => acumulador + elemento, 0);
};

let miArray: number[] = [1, 2, 3, 4, 5];
let resultado: number = sumarArray(miArray);
console.log(resultado); / 

/* Funcion flecha
let sumarArray = (array: number[]): number => {
  if (!Array.isArray(array)) {
    return 0;
  }

  return array.reduce((acumulador, elemento) => acumulador + elemento, 0);
};
Funcion Flecha
let miArray: number[] = [1, 2, 3, 4, 5];
let resultado: number = sumarArray(miArray);
console.log(resultado);*/
/*
function displayAlert(mesasge){
  alert(´The message is + message´)
} 
let displayMessage = function (message: string): void {
  console.log(`The message is ${message}`);
};

const mensaje: string = "Hello";
displayMessage(mensaje); 

Funcion Anonima

let displayAlert = function (message: string): void {
console.log(`The message is ${message}`);
};

const mensaje: string = "Hello";
displayAlert(mensaje);

function addNumbers (x: number,y: number): number { 
  return x + y;
}
addNumbers(1, 2)
addNumbers(1);

function addNumbers (x:  number, y = 25 ): number { 
  return x + y;
}
console.log (addNumbers(1, 2 ));
console.log(addNumbers(1));


let addNumbers = (firstNumbers: number,... restOfNumbers: number[]): number =>{ 
  let total: number = firstNumber;
  for (let counter= 0; counter < restOfNumbers. longht; counter++)0{ 

  }
}
*/
let addThreeNumbers= (x?:number, y?: number, z?:number): number => {
  
  if (x === undefined){
  x=0;
}
if (y=== undefined) {
y=0;
}
if (z===undefined){
  z=0;
}
return x+y+z;
};

console.log(addThreeNumbers(8,9));
console.log(addThreeNumbers(1,4));
console.log(addThreeNumbers(3,5));