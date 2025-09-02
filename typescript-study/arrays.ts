const techStack: string[] = ['Java', 'Spring Boot', 'TypeScript'];

const scores: number[] = [80, 95, 72];

// 配列の末尾に新しい要素を追加します
techStack.push('React');

// for ...of ループ（Javaで言う拡張for文
console.log('--- 私の技術スタック ---');
for (const tech of techStack) {
  console.log(`- ${tech}`);
}

// mapメソッド
// 配列の各要素を加工して、新しい配列を作り直す
const updatedScores: number[] = scores.map(score => score + 5);

console.log('--- 調整後の点数 ---');
console.log(updatedScores);
