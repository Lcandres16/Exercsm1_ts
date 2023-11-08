const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const decodedValue = (colors: string[]): number => +colors

  .map((color) => COLORS.indexOf(color))
  .join('');

const selectedColors = ['red', 'white']; 
const result = decodedValue(selectedColors);
console.log(`El valor decodificado para los colores ${selectedColors.join(', ')} es: ${result}`);
