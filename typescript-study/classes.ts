class Developer {
  public developerName: string;
  private salary: number;

  constructor(developerName: string, salary: number) {
  this.developerName = developerName;
  this.salary = salary;
  }
  
  // functionとメソッドは異なる
  // thisを持てるか持てないか
  // 何かしらのクラスに属しているか
  public introduce(): string {
    return `私はエンジニアの${this.developerName}です。`;
  }
}

const dev = new Developer('高橋', 5000000);

console.log(dev.introduce());


