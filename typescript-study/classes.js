var Developer = /** @class */ (function () {
    function Developer(developerName, salary) {
        this.developerName = developerName;
        this.salary = salary;
    }
    // functionとメソッドは異なる
    // thisを持てるか持てないか
    // 何かしらのクラスに属しているか
    Developer.prototype.introduce = function () {
        return "\u79C1\u306F\u30A8\u30F3\u30B8\u30CB\u30A2\u306E".concat(this.developerName, "\u3067\u3059\u3002");
    };
    return Developer;
}());
var dev = new Developer('高橋', 5000000);
console.log(dev.introduce());
