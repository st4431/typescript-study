function greet(name) {
    console.log("\u3053\u3093\u306B\u3061\u306F\u3001".concat(name, "\u3055\u3093\uFF01"));
}
function sum(a, b) {
    return a + b;
}
greet('佐藤');
var result = sum(15, 28);
console.log("15 + 28 = ".concat(result));
//アロー関数
var multiply = function (a, b) {
    return a * b;
};
console.log("15 * 28 = ".concat(multiply(15, 28)));
