function greet(name: string): void {
  console.log(`こんにちは、${name}さん！`);
}

function sum(a: number, b: number): number {
  return a + b;
}

greet('佐藤');
const result: number = sum(15, 28);
console.log(`15 + 28 = ${result}`);
// console.log(`15 + 28 = ${sum(15, 28)}`);

//アロー関数
const multiply = (a: number, b: number): number =>  a * b;

console.log(`15 * 28 = ${multiply(15, 28)}`);