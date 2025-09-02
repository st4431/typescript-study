var userA = {
    name: '田中',
    age: 35,
    isPremiumNumber: true
};
//以下はisPrimeNumberが欠けているのでエラーになります
// const userB: User = {
//   name: '田中',
//   age: 35,
// }
function createWelcomeMessage(user) {
    if (user.isPremiumNumber) {
        return "\u3088\u3046\u3053\u305D\u3001\u30D7\u30EC\u30DF\u30A2\u30E0\u4F1A\u54E1\u306E".concat(user.name, "\u3055\u3093!");
    }
    else {
        return "\u3088\u3046\u3053\u305D\u3001".concat(user.name, "\u3055\u3093\uFF01");
    }
}
console.log(createWelcomeMessage(userA));
