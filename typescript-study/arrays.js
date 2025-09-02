var techStack = ['Java', 'Spring Boot', 'TypeScript'];
var scores = [80, 95, 72];
// 配列の末尾に新しい要素を追加します
techStack.push('React');
// for ...of ループ（Javaで言う拡張for文
console.log('--- 私の技術スタック ---');
for (var _i = 0, techStack_1 = techStack; _i < techStack_1.length; _i++) {
    var tech = techStack_1[_i];
    console.log("- ".concat(tech));
}
// mapメソッド
// 配列の各要素を加工して、新しい配列を作り直す
var updatedScores = scores.map(function (score) { return score + 5; });
console.log('--- 調整後の点数 ---');
console.log(updatedScores);
