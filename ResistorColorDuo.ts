const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const decodedValue = (colors: string[]): number => +colors
  .slice(0, 2)
  .map((color) => COLORS.indexOf(color))
  .join('');

const colorArray: string[] = ['brown', 'red']; 
const resistanceValue: number = decodedValue(colorArray);
console.log(`El valor de la resistencia es: ${resistanceValue}`);
