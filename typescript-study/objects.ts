interface User {
  name: string;
  age: number;
  isPremiumNumber: boolean;
}

const userA: User = {
  name: '田中',
  age: 35,
  isPremiumNumber: true
}

//以下はisPrimeNumberが欠けているのでエラーになります
// const userB: User = {
//   name: '田中',
//   age: 35,
// }

function createWelcomeMessage(user: User): string {
  if (user.isPremiumNumber) {
    return `ようこそ、プレミアム会員の${user.name}さん!`;
  } else {
    return `ようこそ、${user.name}さん！`;
  }
}

console.log(createWelcomeMessage(userA));