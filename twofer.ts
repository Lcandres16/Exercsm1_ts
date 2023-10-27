export function twoFer(name: string = 'you'): string {
    return `One for ${name}, one for me.`;
  }
  

  const recipient: string = 'Alice'; 
  const result: string = twoFer(recipient);
  console.log(result);
  