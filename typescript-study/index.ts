// "" と '' はどちらでも文法的には変わらない
// ただ、'' を使う人が多いのでそっちのがいいかも 
let message: string = "TypeScriptの学習を開始！";
let version: number = 5.3;

console.log(message);
// 以下はテンプレートリテラル
// Javaでは + で文字列を繋いでいたが、可読性が低いのでjs、tsでは
// 以下の書き方をして表現する
// Javaと同じ書き方でも文法的には問題ない
console.log(`現在のバージョンは${version}です。);

// 以下の書き方だと型が違うのでエラー
// jsだとエラーにならない
// message = 123;