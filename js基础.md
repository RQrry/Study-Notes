## 水平垂直居中

html
```
<div class="parent">
    <div class="item"></div>
</div>
```
css
1. 已知元素宽高
```
.item {
    position: absolute;
    width: WIDTH;
    height: HEIGHT;
    top: 50%;
    left: 50%;
    margin-left: -WIDTH/2;
    margin-top: -HEIGHT/2;
}
```
```
.item {
    position: absolute;
    width: WIDTH;
    height: HEIGHT;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
```
2. 未知元素宽高
```
.item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```
```
.parent {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

## 主流浏览器（内核）

IE(trident)

Chrome(webkit/blink)

firefox(Gecko)

Opera(presto)

Safari(webkit)

## 数据类型 

原始值（栈数据stack） 先进后出 (值)

`Number String Boolean undefined null`

引用值（堆数据heap） (地址)

`Array` `Object` `function` `data` `RegExp`

可正常计算的范围：小数点前16和后16位

1. 运算符
```
var a = (10 * 3 - 4 / 2 + 1) % 2,
    b = 3;
b %= a + 3;
document.write(a++);      // 1   
document.write("<br/>");   
document.write(--b);      // 2
```
2. 交换a、b的值
```
var a = 123,
    b = 234;
a = a + b;
b = a - b;
a = a - b;
```
3. 快速求幂
```
Math.pow(2, n);
2 << (n - 1);
2 ** n;
```

## 逻辑运算符 `&&` `||` `！`

`undefined null NaN "" 0 false ==> false`

`data && fn(data)`

```
div.onclick = function(e) {
    var event = e || window.event;
}
```

1. 计算2的n次幂，n可输入，n为自然数
```
function power2(n) {
    var pow = 1;
    for(var i=0; i<n; i++) {
        pow *= 2;
    }
    return pow;
}
```
2. 计算n的阶乘，n可输入
```
function factorial(n) {
    var fac = 1;
    for(; n>0; n--) {
        fac *= n;
    }
    return fac;
}

function factorial(n) {
    if(n <= 1) {
        return 1;
    }
    return n * factorial(n-1);
}
```
3. 著名的斐波那契数列 1 1 2 3 5 8 输出第n项
```
function fibonacci(n) {
    if(n <= 2) {
        return 1;
    }
    return fibonacci(n-2)+fibonacci(n-1);
}
```
4. 编写一程序，输入一个三位数的正整数，输出时反向输出，如：输入456，输出654
```
function reverseNum(n) {
    var a = n % 10,
        b = (n - a) / 10 % 10,
        c = (n - a - b * 10) / 100;
    return a * 100 + b * 10 + c;
}
```
5. 输入a,b,c三个数，打印出最大的
```
function max3(a, b, c) {
    var max = 0;
    if(a > max) {
        max = a;
    }
    if(b > max) {
        max = b;
    }
    if(c > max) {
        max = c;
    }
    return max;
}
```
6. 打印出100以内的质数
```
function prime(n) {
    for(var i=1; i<=n; i++) {
        for(var j=2; j<=i; j++) {
            if(i % j === 0 && j < i) {
                break;
            }
            if(i === j) {
                console.log(i);
            }
        }
    }
}

function prime(n) {
    for(var i=1; i<=n; i++) {
        var count = 0;
        for(var j=1; j<=i; j++) {
            if(i % j === 0) {
                count++;
            }
        }
        if(count === 2) {
            console.log(i);
        }
    }
}

function prime(n) {
    for(var i=2; i<=n; i++) {
        var count = 0;
        for(var j=1; j<=Math.sqrt(i); j++) {
            if(i % j === 0) {
                count++;
            }
        }
        if(count === 1) {
            console.log(i);
        }
    }
}
```
7. 反向输出数字
```
function reverseNum(n) {
    var len = String(n).length - 1,
        num = 0;
    while(len) {
        num += n % 10 * 10**len;
        n = n/10 | 0;if
        if(String(n).length == 1) {
            num += n;
        }
        len--;
    }
    return num;
}
```

## 类型转换

检测变量类型

`typeof: "number" "string" "boolean" "undefined" "object" "function"`

显示类型转换

`Number(mix) // Number(undefined) == NaN`

`parseInt(string, radix) // string 是 radix进制的`

`parseFloat(string)`

`toString(radix) // 将 num 转换为 radix 进制, Error: undefined.toString(), null.toString()`

`String(mix)`

`Boolean()`

隐示类型转换

`isNaN() // Number()`

`++/-- +/-(一元正负) // Number()`

`+ // String()`

`-*/% // Number()`

`&& || !`

`< > <= >=`

`== != // undefined == null, NaN != NaN`

`~ --> -n-1 // ~15=-16` 按位不运算符 `~~ --> -(-n-1)=n // ~~"15"=15`

不发生类型转化

`=== !==`

## 函数

函数声明，函数表达式

`arguments arguments.length // 形参列表`

`函数名 函数名.length // 实参列表`

实参与形参相映射
```
function myFun(a, b) {
    a = 2;
    console.log(arguments[0]); // 2
    arguments[0] = 3;
    console.log(a); // 3
    b = 3;
    console.log(arguments[1]); // undefined
}

myFun(1);
```

1. 实现加法计数器
```
function mySum() {
    var sum = 0;
    for(var i=0; i<arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
```
2. 定义一组函数，输入数字，逆转并输出汉字形式
```
function reverse() {
    var num = window.prompt("input");
    var str = "";
    for(var i=num.length-1; i>=0; i--) {
        str += transfer(num[i]);
    }
    return str;
}

function transfer(target) {
    switch(target) {
        case "1":
            return "壹";
        case "2":
            return "贰";
        case "3":
            return "叁";
        case "4":
            return "肆";
        case "5":
            return "伍";
        case "6":
            return "陆";
        case "7":
            return "柒";
        case "8":
            return "捌";
        case "9":
            return "玖";
    }
}
```

## 预编译

js运行三部曲

语法分析、预编译、解释执行

变量提升

1. 函数声明整体提升

2. 变量 声明提升

预编译（函数预编译发生在函数执行的前一刻）

1. 创建AO对象 Activation Object(执行期上下文) (GO对象===window Global Object)

2. 找形参和变量声明，将变量和形参名作为AO属性名，值为undefined

3. 将实参值和形参统一

4. 在函数体里面找函数声明，值赋予函数体

```
function fn(a) {
    console.log(a); // function a() {}
    var a = 123;
    console.log(a); // 123
    function a() {}
    console.log(a); // 123
    var b = function() {}
    console.log(b); // function() {}
    function d() {}
}
fn(1);

// 预编译
AO {
    a: undefined,
    b: undefined
} 
--->
AO {
    a: 1,
    b: undefined
}
--->
AO {
    a: function a() {},
    b: undefined,
    d: function d() {}
}
// 执行函数
AO {
    a: 123,
    b: function() {},
    d: function d() {}
}
```
```
function test(a, b) {
    console.log(a); // 1
    c = 0;
    var c;
    a = 3;
    b = 2;
    console.log(b); // 2
    function b() {}
    function d() {}
    console.log(b); // 2
} 
test(1);

// 预编译
AO {
    a: 1,
    b: undefined,
    c: undefined
}
--->
AO {
    a: 1,
    b: function b() {},
    c: undefined,
    d: function d() {}
}
// 执行函数
AO {
    a: 3,
    b: 2,
    c: 0,
    d: function d() {}
}
```
```
function bar() {
    return foo;
    foo = 10;
    function foo() {}
    var foo = 11;
}
console.log(bar()); // function foo() {}
```
```
console.log(bar()); // 11
function bar() {
    foo = 10;
    function foo() {}
    var foo = 11;
    return foo;
}
```
1. 
```
a = 100;
function demo(e) {
    function e() {}
    arguments[0] = 2;
    console.log(e); // 2
    if(a) {
        var b = 123;
        function c() {}
    }
    var c;
    a = 10;
    var a;
    console.log(b); // undefined
    f = 123;
    console.log(c); // undefined
    console.log(a); // 10
}
var a;
demo(1);
console.log(a); // 100
console.log(f); // 123

GO {
    a: undefined ---> 100
    demo: function demo(e) {...}
    f: 123
}
AO {
    a: undefined ---> 10
    b: undefined
    c: undefined // if里不能定义函数
    e: function e() {} ---> 2
}
```
2. 
```
var str = false + 1;
console.log(str); // 1
var demo = false == 1;
console.log(demo); // false
if(typeof a && -true + (+undefined) + "") { // "undefined" && "NaN"
    console.log("打印"); // 打印
}
if(11 + "11" * 2 == 33) {
    console.log("打印"); // 打印
}
!!" " + !!"" - !!false || console.log("打印"); // true + false - false
```

## 作用域

作用域链 `[[scope]]`

查找变量：从作用域链的顶端依次向下查找

```
function a() {
    function b() {
        function c() {

        }
        c();
    }
    b();
}
a();

// 作用域链
a defined a.[[scope]] --> 0: GO

a doing   a.[[scope]] --> 0: aAO
                          1: GO

b defined b.[[scope]] --> 0: aAO
                          1: GO

b doing   b.[[scope]] --> 0: bAO
                          1: aAO
                          2: GO

c defined c.[[scope]] --> 0: bAO
                          1: aAO
                          2: GO

c doing   c.[[scope]] --> 0: cAO
                          1: bAO
                          2: aAO
                          3: GO
```

## 立即执行函数(IIFE)

此类函数没有声明，在一次执行过后即释放。针对初始化功能的函数

```
(function () {})();

(function () {}());
```

只有表达式才能被执行符号执行

可执行表达式被执行，失去对函数名的索引

## 闭包

内部函数被保存到外部，生成闭包

闭包会导致原有作用域链不释放，造成内存泄漏（占用系统资源）

闭包的作用

1. 实现公有变量

2. 可以做缓存（存储结构）

3. 可以实现封装，属性私有化

4. 模块化开发，防止污染全局变量

```
// 不依赖外部变量，实现累加器
function add() {
    var count = 0;
    function a() {
        console.log(++count);
    }
    return a;
}
var counter = add();
counter(); // 1
```
```
function test() {
    var num = 100;
    function a() {
        num++;
        console.log(num);
    }
    function b() {
        num--;
        console.log(num);
    }
    return [a, b];
}
var myArr = test();
myArr[0](); // 101
myArr[1](); // 100
```
```
// 缓存
function eater() {
    var food = "apple";
    var obj = {
        eat: function() {
            if(food != "") {
                console.log("I am eating" + food);
                food: "";
            } else {
                console.log("There is nothing!")
            }
        },
        push: function(myFood) {
            food: myFood;
        }
    }
    return obj;
}
var eater1 = eater();
eater1.eat(); // I am eating apple
eater1.eat(); // There is nothing！
eater1.push("banana");
eater1.eat(); // I am eating banana
```
```
// 私有化变量
function Deng(name, wife) {
    var prepareWife = "xiaozhang"; // 私有变量
    this.name = name;
    this.wife = wife;
    this.disvorce = funtion () {
        this.wife = prepareWife;
    }
    this.changePrepareWife = function (target) {
        prepareWife = target;
    }
    this.sayPreparewife = function () {
        console.log(prepareWife);
    }
}
var deng = new Deng("deng", "xiaoliu");
```
```
// 模块开发，防止污染全局变量
var init = (function () {
    var name = "abc";
    function callName() {
        console.log(name);
    }
    return function () {
        callName();
    }
})();
```
1. 
```
function test() {
    var arr = [];
    for(var i=0; i<10; i++) {
        (function (j) {
            arr[j] = function () {
                console.log(j);
            }
        })(i);
    }
    return arr;
}
var myArr = test();
for(var j=0; j<10; j++) {
    myArr[j](); // 0 1 2 3 4 5 6 7 8 9
}
```
2. 
```
var x = 1;
if(function f() {}) { // (function f() {}) 表达式执行完后，失去对函数名的索引
    x += typeof f;
}
console.log(x); // "1undefined"
```

## 对象

对象的创建方法

1. `var obj = {};` plainObject 对象字面量/对象直接量

2. 构造函数
    1. 系统自带的构造函数 `new Object()`
    2. 自定义 // 大驼峰式命名规则

构造函数内部原理 (new)

1. 在函数体最前面隐式的加上 `this = {}`
2. 执行 `this.xxx = xxx;`
3. 隐式的返回 `this`

```
function Person(name, age) {
    // var this = {};
    this.name = name;
    this.age = age;
    this.say = function() {
        console.log("My name is " + this.name);
    }
    // return this;

    // 构造函数显示 return
    return {}; // {}
    return 123; // new之后只能返回对象，显示返回原始值时会被忽略
}

var person = new Person("xiaowang", 18);
```

## 包装类

`new String()`

`new Number()`

`new Boolean()`

```
var str = "abc";
str += 1; // "abc1"
var test = typeof str; // "string"
if(test.length == 6) {
    test.sign = "typeof的返回结果可能为String";
    // new String(test).sign = "xxx"; delete
}
// new String(test).sign
console.log(test.sign); // undefined
```
1. 
```
function Person(name, age, sex) {
    var a = 0;
    this.name = name;
    this.age = age;
    this.sex = sex;
    function sss() {
        a++;
        console.log(a);
    }
    this.say = sss;
}
var oPerson = new Person();
oPerson.say(); // 1
oPerson.say(); // 2
var oPerson1 = new Person();
oPerson1.say(); // 1
```
2. 
```
var x = 1, y = z = 0;
function add(n) {
    return n = n + 1;
}
y = add(x);
function add(n) {
    return n = n + 3;
}
z = add(x);
// x y z
// 函数变量提升，下面的add()覆盖上面的
// 1 4 4
```
3. 下面代码中 `console.log` 的结果是 `[1, 2, 3, 4, 5]` 的有 (ACD)
```
// A
function foo(x) {
    console.log(arguments);
    retrun x;
}
foo(1, 2, 3, 4, 5);

// B
function foo(x) {
    console.log(arguments);
    return x;
}(1, 2, 3, 4, 5)
// 不报错也不执行

// C
(function foo(x) {
    console.log(arguments);
    return x;
})(1, 2, 3, 4, 5);

// D
function foo() {
    bar.apply(null, arguments);
}
function bar(x) {
    console.log(arguments);
}
foo(1, 2, 3, 4, 5);
```
4. 
```
parseInt(3, 8); // 3
parseInt(3, 2); // NaN
parseInt(3, 0); // 3
```
5. 
```
function b(x, y, a) {
    arguments[2] = 10;
    alert(a); // 10
}
b(1, 2, 3);

function b(x, y, a) {
    a = 10;
    alert(arguments[2]); // 10
}
b(1, 2, 3);
```
6. 写一个方法，求一个字符串的字节长度。
（提示：字符串有一个方法 `charCodeAt()` 一个中文占两个字节，一个英文占一个字节。
定义和用法：`charCodeAt()` 方法可返回指定位置的字符的 `Unicode` 编码，这个返回值是 `0-65535` 之间的整数。
当返回值是 `<=255` 时，为英文，当返回值 `>255` 时为中文）
```
function bytesLength(target) {
    var len = target.length;
    var count = len;
    for(var i=0; i<len; i++) {
        if(target.charCodeAt(i) > 255) {
            count++;
        }
    }
    console.log(count);
}
```
7. 
```
var f = ( // 逗号操作符
    function f() {
        return "1";
    },
    function g() {
        return 2;
    }
)();
typeof f; // "number"
```

## 原型

1. 原型是 `function` 对象的一个属性，它定义了构造函数制造出的对象的公共祖先。通过该构造函数产生的对象，可以继承该原型的属性和方法。原型也是对象
```
// Person.prototype --> 原型
// Person.prototype = {} 是祖先

Car.prototype.height = 1400;
Car.prototype.lang = 4900;
Car.prototype.carName = "BMW";

Car.prototype = { // 创建了新的对象 car.constructor --> Object() 需要重新添加构造函数
    constructor: Car, // [[Enumerable]]特性被设置为true
    height: 1400,
    lang: 4900,
    carName: "BMW"
}

function Car(color, owner) {
    this.color = color;
    this.owner = owner;
}
var car = new Car("red", "xiaowang");
var car1 = new Car("black", "xiaoli");
```

2. 利用原型特点和概念，可以提取公有属性

3. 对象如何查看原型 --> 隐式属性 `__proto__`
```
fucntion Person() {}

var person = new Person();
// 调用构造函数创建一个新实例后，该实例的内部将包含一个指针 __proto__ 指向构造函数的原型
// 实例化对象等同于下列代码
var person = {};
person.__proto__ = Person.prototype;
Person.call(person);
```

4. 对象如何查看对象的构造函数 --> `constructor`
```
Person.prototype.constructor = Person;

var person = new Person();
person.constructor --> Person.prototype.constructor
```

## 原型链

```
Grand.prototype.lastName = "Qiu";
function Grand() {}

Father.prototype = new Grand();
function Father() {
    this.name = "jiaming";
}

Son.prototype = new Father();
function Son() {
    this.hobbit = "guiter";
}
var son = new Son();
```

绝大多数对象最终都会继承自 `Object.prototype` 例外：`var obj = Object.create(null);`

`Object.create(原型);`
```
var obj = {
    name: "sunny",
    age: 123
};
var obj1 = Object.create(obj);

Person.prototype.name = "sunny";
function Person() {}
var person = Object.create(Person.prototype);
```

`toString()`
```
var num = 123;
num.toString(); --> new Number(num).toString();
Number.prototype.toString = function() {}

// Number.prototype.__proto__ = Object.prototype;
// Object.prototype.toString = function() {}
```

## `call/apply`

作用：改变 `this` 指向
```
function Person(name, age) {
    this.name = name;
    this.age = age;
}
var obj = {};
Person.call(obj, "cheng", 300); // obj = {name: "cheng", age: 300}
```
```
function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}
function Student(name, age, sex, tel, grade) {
    Person.call(this, name, age, sex);
    this.tel = tel;
    this.grade = grade;
}
var student = new Student("sunny", 123, "male", 139, 2017);
```

区别：后面传的参数形式不同

`call` 需要把实参按照形参的个数传进去

`apply` 需要传一个 `arguments`

`call/apply` 立即调用函数，并临时替换函数中的 `this` 为指定对象

`bind` 不立即调用函数，基于原函数，创建一个新函数并永久绑定 `this` 为指定对象

## 继承模式

```
// 圣杯模式
function inherit(Target, Origin) {
    function F() {};
    F.prototype = Origin.prototype;
    Target.prototype = new F();
    Target.prototype.constructor = Target;
    Target.prototype.uber = Origin.prototype;
}

Father.prototype.lastName = "Deng";
function Father() {}
function Son() {}

inherit(Son, Father);
var son = new Son();
var father = new Father();
```
```
var inherit = (function () {
    var F = function () {}; // 私有变量
    return function (Target, Origin) {
        F.prototype = Origin.prototype;
        Target.prototype = new F();
        Target.prototype.constructor = Target;
        Target.prototype.uber = Origin.prototype;
    }
})();
```

命名空间

管理变量，防止污染全局，适用于模块化开发
```
// 模块开发，防止污染全局变量
var init = (function () { // 入口函数
    var name = "abc";
    function callName() {
        console.log(name);
    }
    return function () {
        callName(); // 出口函数
    }
})();
```

1. 实现链式调用模式（模仿jquery）
```
var deng = {
    smoke: function () {
        console.log("Smoking... xuan cool!!!");
        return this;
    },
    drink: function () {
        console.log("drinking... ye cool!!!");
        return this;
    },
    perm: function () {
        console.log("preming... cool!");
        return this;
    }
};
deng.smoke().drink().perm();
```

## 对象的枚举 `enumeration`

1. `for in` 
```
var obj = {
    name: "13",
    age: 123,
    sex: "male",
    height: 180,
    weight: 75
    // prop: 123
};
for(var prop in obj) {
    console.log(obj.prop); // 123x6 obj.prop --> obj["prop"]
    console.log(obj[prop]);
}
```

2. `hasOwnProperty`
```
var obj = {
    name: "13",
    age: 123,
    sex: "male",
    height: 180,
    weight: 75,
    __prop__: {
        lastName: "deng"
    }
};
for(var prop in obj) { // for in 循环会打印原型链上的属性，但不会打印系统原型链上的属性
    if(obj.hasOwnProperty(prop)) {
        console.log(obj[prop]);
    }
}
```

3. `in`
```
"height" in obj // true
"lastName" in obj // true
```

4. `instanceof`
```
看A对象的原型链上 有没有 B的原型
A instanceof B // ture
```
```
var arr = [],
    obj = {};

arr.constructor --> f Array()
obj.constructor --> f Object()

arr instanceof Array // true
obj instanceof Object // true

Object.prototype.toString.call(arr) --> "[object Array]"
Object.prototype.toString.call(obj) --> "[object Object]"
```

## `this`

1. 函数预编译过程 `this --> window`

2. 全局作用域里 `this --> window`

3. `call/apply` 可以改变函数运行时 `this` 指向

4. `obj.func();` `func()` 里面的 `this` 指向 `obj`

1. 写出代码输出结果
```
var name = "222";
var a = {
    name: "111",
    say: function () {
        console.log(this.name);
    }
}
var fun = a.say; // var fun = function () {console.log(this.name);}
fun(); // 222
a.say(); // 111
var b = {
    name: "333",
    say: function (fun) {
        fun();
    }
}
b.say(a.say);  // 222 预编译过程
b.say = a.say;
b.say();  // 333
```

## `arguments`

```
function test() {
    console.log(arguments.callee == test); 
}
test(); // true
```
```
var num = (function (n) {
    if(n == 1) {
        return 1;
    }
    return n * arguments.callee(n - 1);
})(50)
```
```
function test() {
    console.log(arguments.callee);
    function demo() {
        console.log(arguments.callee);
    }
    demo(); // demo
}
test(); // test
```
```
function test() {
    demo();
}
function demo() {
    console.log(demo.caller); // test 指调用环境
}
test();
```

1. 
```
var foo = "123";
function print() {
    var foo = "456";
    this.foo = "789";
    console.log(foo);
}
print(); // 456
```
```
var foo = 123;
function print() {
    this.foo = 234;
    console.log(foo);
}
print(); // 234

var foo = 123;
function print() {
    this.foo = 234;
    console.log(foo);
}
new print(); // 123
```
```
var a = 5;
function test() {
    // var this = { // this 上没有 a
    //     __proto__: test.prototype
    // }
    a = 0;
    alert(a);
    alert(this.a);
    var a;
    alert(a);
}
test(); // 0 5 0
new test(); // 0 undefined 0
```
2. 
```
function print() {
    console.log(foo); // undefined
    var foo = 2;
    console.log(foo); // 2
    console.log(hello); // Uncaught ReferenceError: hello is not defined
}
print();
```
3. 
```
function print() {
    var test;
    test();
    function test() {
        console.log(1);
    }
}
print(); // 1
```
4. 
```
function print() {
    var x = 1;
    if(x == "1") console.log("One!");
    if(x === "1") console.log("Two!");
}
print(); // One!
```
5. 
```
function print() {
    var marty = {
        name: "marty",
        printName: function () {
            console.log(this.name);
        }
    };
    var test1 = {name: "test1"};
    var test2 = {name: "test2"};
    var test3 = {name: "test3"};
    test3.printName = marty.printName;
    var printName2 = marty.printName.bind({name: 123}); 
    marty.printName.call(test1); // test1
    marty.printName.apply(test2); // test2
    marty.printName(); // marty
    printName2(); // 123
    test3.printName(); // test3
}
print();
```
6. 
```
var bar = {a: "002"};
function print() {
    bar.a = "a";
    Object.prototype.b = "b";
    return function inner() {
        console.log(bar.a); // a
        console.log(bar.b); // b
    }
}
print()();
```
7. 
```
function Person(name, age, sex) {
    var a = 0;
    this.name = name;
    this.age = age;
    this.sex = sex;
    function sss() {
        a++;
        document.write(a);
    }
    this.say = sss;
}
var oPerson = new Person();
oPerson.say(); // 1
oPerson.say(); // 2
var oPerson1 = new Person();
oPerson1.say(); // 1
```

## 克隆

浅层克隆
```
var obj = {
    name: "abc",
    age: 123,
    sex: "female"
}
var obj1 = {}
function clone(origin, target) {
    var target = target || {};
    for(var prop in origin) {
        target[prop] = origin[prop];
    }
    return target;
}
clone(obj, obj1);
```

深层克隆

```
// 遍历对象 for(var prop in obj)
// 1.判断是不是原始值 typeof() object 
// 2.判断是数组还是对象 toString instanceof constructor
// 3.建立相应的数组或对象
// 递归

var obj = {
    name: "abc",
    age: 123,
    card: ["visa", "master"],
    wide: {
        name: "bcd",
        son: {
            name: "aaa"
        }
    }
}

function deepClone(origin, target) {
    var target = target || {},
        toStr = Object.prototype.toString,
        arrStr = "[object Array]";
    
    for(var prop in origin) {
        if(origin.hasOwnProperty(prop)) {
            if(origin[prop] !== null && typeof origin[prop] == "object") {
                // if(toStr.call(origin[prop]) == arrStr) {
                //     target[prop] = [];
                // } else {
                //     target[prop] = {};
                // }
                target[prop] = toStr.call(origin[prop]) == arrStr ? [] : {};
                deepClone(origin[prop], target[prop]);
            } else {
                target[prop] = origin[prop];
            }
        }
    }
    return target;
}
```

## 数组常用方法

改变原数组

`push, pop, shift, unshift, sort, reverse, splice`
```
Array.prototype.push = function () {
    for(var i=0; i<arguments.length; i++) {
        this[this.length] = arguments[i];
    }
    return this.length;
}
```
`arr.splice(从第几位开始，截取多少的长度，在切口处添加新的数据) 返回截取的数组`
```
数组索引
pos += pos > 0 ? 0 : this.length;
```

1. 随机打乱一个数组，一次性输出
```
var arr = [1,2,3,4,5,6,7];
arr.sort(function () {
    return Math.random() - 0.5;
});
arr.sort((a,b) => Math.random() - 0.5);
```

不改变原数组

`concat, join, split, toString, slice`

## 类数组

1. 可以利用属性名模拟数组的特性

2. 可以动态的增长 `length` 属性

3. 如果强行让类数组调用 `push` 方法，则会根据 `length` 属性值的位置进行属性的扩充

```
var obj = {
    "0": "a",
    "1": "b",
    "2": "c",
    "length": 3,
    "push": Array.prototype.push
}
Array.prototype.push = function (target) {
    this[this.length] = target;
    this.length++;
}
```

属性要为索引（数字）属性，必须有 `length` 属性，最好加上 `push`

1. 
```
var obj = {
    "2": "a",
    "3": "b",
    "length": 2,
    "push": Array.prototype.push
}
obj.push("c");
obj.push("d");
obj = {
    "2": "c",
    "3": "d",
    "length": 4,
    "push": Array.prototype.push
}
```
2. 封装 `type` 方法
```
typeof([]) -- array
typeof({}) -- object
typeof(function) -- object
typeof(new Number()) -- number object
typeof(123) -- number
```
```
function type(target) {
    var typeStr = typeof target,
        toStr = Object.prototype.toString.call(target),
        objStr = {
            "[object Array]": "array",
            "[object Object]": "object",
            "[object Number]": "number - object",
            "[object Boolean]": "boolean - object",
            "[object String]": "string - object"
        };
    if(target === null) {
        return "null";
    } else if(typeStr === "object") {
        return objStr[toStr];
    } else {
        return typeStr;
    }
}
```
3. 数组去重 在原型链上编程

利用对象属性名不能重复 `hash`
```
Array.prototype.unique = function () {
    var arr = [];
    for(var i=0; i<this.length; i++) {
        if(arr.indexOf(this[i]) === -1) {
            arr.push(this[i]);
        }
    }
    return arr;
}
```
```
Array.prototype.unique = function () {
    var temp = {},
        arr = [],
        len = this.length;
    for(var i=0; i<len; i++) {
        if(!temp[this[i]]) {
            temp[this[i]] = 1;
            arr.push(this[i]);
        }
    }
    return arr;
}
```
4. 一个字符串 `[a-z]` 组成，找出该字符串第一个只出现一次的字母
```
function findStr(str) {
    var obj = {},
        len = str.length;
    for(var i=0; i<len; i++) {
        if(!obj[str[i]]) {
            obj[str[i]] = 1;
        } else {
            obj[str[i]]++;
        }
    }
    for(var prop in obj) {
        if(obj[prop] === 1) {
            return prop;
        }
    }
}
```
5. 字符串去重
```
String.prototype.unique = function () {
    var obj = {},
        str = "",
        len = this.length;
    for(var i=0; i<len; i++) {
        if(!obj[this[i]]) {
            obj[this[i]] = 1;
            str += this[i];
        }
    }
    return str;
}
```

## `try catch`

在 `try` 里面发生错误，不会执行错误后的 `try` 里面的代码

```
try {
    console.log("a"); // a
    console.log(b);
    console.log("c");
} catch(e) {
    console.log(e.name + ": " + e.message); // ReferenceError: b is not defined
}
console.log("d"); // d
```

`Error.name` 的六种值对应的信息：
1. `EvalError:` `eval()` 的使用与定义不一致
2. `RangeError:` 数值越界
3. `ReferenceError:` 非法或不能识别的引用数值
4. `SyntaxError:` 发生语法解析错误
5. `TypeError:` 操作数类型错误
6. `URIError:` `URI` 处理函数使用不当

## `es5` 严格模式

`es3` 和 `es5` 新增方法，启用 `es5` 严格模式，冲突部分用 `es5`

`"use strict";` 推荐使用局部函数内严格模式

不支持 `with, arguments.callee, func.caller`，变量赋值前必须声明，局部 `this` 必须赋值，赋值什么就是什么，拒绝重复的属性和参数

## DOM

`document` 代表整个文档

遍历节点树

`parentNode childNodes firstChild lastChild nextSibling previousSibling`

基于元素节点树的遍历

`parentElement chidren firstElementChild lastElementChild nextElementSibling previousElementSibling`

节点类型（元素节点 1，属性节点 2，文本节点 3，注释节点 8，document 9，DocumentFragment 11）

获取节点类型 `nodeType`

节点的四个属性

`nodeName nodeValue nodeType attributes`

节点的方法 `hasChildNodes()`

DOM 基本操作

增 `document.createElement(); document.createTextNode(); document.createComment(); document.createDocumentFragment();`

插 `ParentNode.appendChild(); ParentNode.insertBefore(a,b);`

删 `parent.removeChild();`剪切 `child.remove();`销毁

改 `parent.replaceChild(new, origin);`

`Element` 节点的一些属性

`innerHTML` `innerText`(火狐不兼容)/`textContent`(老版本IE不好使)

`Element` 节点的一些方法

`ele.setAttribute(); ele.getAttribute();`

1. 封装函数，返回元素 `e` 的第 `n` 层祖先元素节点
```
function retParent(elem, n) {
    while(elem && n) {
        elem = elem.parentElement;
        n--;
    }
    return elem;
}
```
2. 编辑函数，封装 `myChildren` 功能，解决以前部分浏览器的兼容性问题
```
Element.prototype.myChildren = function () {
    var child = this.childNodes,
        len = child.length,
        arr = [];
    for(var i=0; i<len; i++) {
        if(child[i].nodeType == 1) {
            arr.push(child[i]);
        }
    }
    return arr;
}
```
3. 封装 `hasChildren()` 方法，不可用 `children` 属性
```
Element.prototype.myChildren = function () {
    var child = this.childNodes,
        len = child.length;
    for(var i=0; i<len; i++) {
        if(child[i].nodeType == 1) {
            return true;
        }
    }
    return false;
}
```
4. 封装函数，返回元素 `e` 的第 `n` 个兄弟元素节点，`n` 为正，返回后面的兄弟元素节点，`n` 为负，返回前面的，`n` 为0，返回自己
```
function retSibling(e, n) {
    while(e && n) {
        if(n > 0) {
            if(e.nextElementSibling) {
               e = e.nextElementSibling;
            } else {
                for(e=e.nextSibling; e && e.nodeType!=1; e=e.nextSibling);
            }
            n--;
        } else {
            if(e.previousElementSibling) {
               e = e.previousElementSibling;
            } else {
                for(e=e.previousSibling; e && e.nodeType!=1; e=e.previousSibling);
            }
            n++;
        }
    }
    return e;
}
```
5. 封装函数 `insertAfter();` 功能类似 `insertBefore();`
```
Element.prototype.insertAfter = function (targetNode, afterNode) {
    var beforeNode = afterNode.nextElementSibling;
    if(beforeNode == null) {
        this.appendChild(targetNode);
    } else {
       this.insertBefore(targetNode, beforeNode);
    }
}
```

## 日期对象 `Date()`

1. 打印当前时间
```
function myTime() {
    var date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        week = date.getDay(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds(),
        weekday = ["日","一","二","三","四","五","六"],
        str = "";
    str = `${year}年${month}月${day}日 星期${weekday[week]} ${hour}:${minute}:${second}`
    return str;
}

setInterval("myTime()",100);
```
2. 计时器
```
var mNode = document.getElementsByTagName("span")[0],
    sNode = document.getElementsByTagName("span")[1],
    minute = 0,
    second = 0;
var timer = setInterval(function () {
    second++;
    if(second == 60) {
        second = 0;
        minute++;
    }
    mNode.innerHTML = minute;
    sNode.innerHTML = second;
    if(minute == 3) {
        clearInterval(timer);
    }
}, 100);
```

## 浏览器DOM

1. 封装兼容性方法，求滚动轮滚动距离 `getScrollOffset()`
```
function getScrollOffset() {
    if(widow.pageXOffset) {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    } else {
        return {
            x: document.body.scrollLeft + document.documentElement.scrollLeft,
            y: document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}
```
2. 封装兼容性方法，返回浏览器视口尺寸 `getViewportOffset()`
```
function getViewportOffset() {
    if(window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight
        }
    } else {
        if(document.compatMode === "BackCompat") {
            return {
                w: document.body.clientWidth,
                h: document.body.clientHeight
            }
        } else {
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            }
        }
    }
}
```

查看元素尺寸

`dom.offsetWidth dom.offsetHeight`

查看元素的位置

`dom.offsetLeft dom.offsetTop`

对于无定位父级的元素，返回相对文档的坐标。对于有定位父级的元素，返回相对于最近的有定位的父级的坐标

`dom.offsetParent`

返回最近的有定位的父级，如无，返回 `body`, `body.offsetParent` 返回 `null`

让滚动条滚动

`window` 上的三个方法 `scroll()/scrollTo(), scrollBy()`

三个方法功能类似，用法都是将x，y坐标传入，滚动到当前位置。`scrollBy()` 滚动会叠加

3. 自动阅读
```
var timer = 0,
    key = true;
start.onclick = function () {
    if(key) {
        timer = setInterval(function () {
            window.scrollBy(0, 10);
        }, 100);
        key = false;
    }
    
}
stop.onclick = function () {
    clearInterval(timer);
    key = true;
}
```

#### 脚本化CSS

`dom.style.` 行内样式

查询计算样式

`window.getComputedStyle(ele, null)[prop]` `null` 为伪元素

IE: `ele.currentStyle[prop]`

4. 封装兼容性方法 `getStyle(elem, prop)`
```
function getStyle(elem, prop) {
    if(window.getComputedStyle) {
        return window.getComputedStyle(elem, null)[prop];
    } else {
        return elem.currentStyle[prop];
    }
}
```
5. 小方块运动
```
// html
<div></div>
// css
div {
    width: 100px;
    height: 100px;
    background: red;
    position: absolute;
    left: 0;
    top: 0;
}
// 
function getStyle(elem, prop) {
    if(window.getComputedStyle) {
        return window.getComputedStyle(elem, null)[prop];
    } else {
        return elem.currentStyle[prop];
    }
}
var div = document.getElementsByTagName("div")[0];
var speed = 2;
var timer = setInterval(function () {
    div.style.left = parseInt(getStyle(div, "left")) + speed + "px";
    speed += speed/20;
    if(parseInt(getStyle(div,"left"))>600) {
        clearInterval(timer);
    }
}, 10);
```
6. 轮播图 无缝

## 事件

#### 绑定事件

1. `elem.onxxx = function (event) {}` 句柄 一个元素只能绑定一个处理程序

程序 `this` 指向是 `dom` 元素本身

2. `obj.addEventListener("click", fn, false);`

程序 `this` 指向是 `dom` 元素本身

3. `obj.attachEvent("on" + type, fn);` 

程序 `this` 指向 `window`

1. 封装兼容性的 `addEvent(elem, type, handle);` 方法
```
function addEvent(elem, type, handle) {
    if(elem.addEventListener) {
        elem.addEventListener(type, handle, false);
    } else if(elem.attachEvent) {
        elem.attachEvent("on" + type, function () {
            handle.call(elem);
        })
    } else {
        elem["on" + type] = handle;
    }
}
```

解除事件处理程序

1. `ele.onxxx = null/false;`

2. `ele.removeListener("click", fn, false);`

3. `ele.detachEvent("on" + type, fn);`

若绑定匿名函数，则无法解除

事件处理模型

1. 事件冒泡

结构上嵌套关系的元素，会存在事件冒泡的功能，即同一事件，自子元素冒泡向父元素 自底向上

2. 事件捕获

结构上嵌套关系的元素，会存在事件捕获的功能，即同一事件，自父元素捕获至子元素 自顶向下

IE 没有捕获事件

3. 触发顺序，先捕获，后冒泡

4. `focus, blur, change, submit, reset, select` 等事件不冒泡

取消冒泡和阻止默认事件

1. 取消冒泡

W3C `event.stopPropagation();` IE `event.cancelBubble = true;`

封装取消冒泡的函数 `stopBubble(event)`
```
function stopBubble(event) {
    if(event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
}
```

2. 阻止默认事件

默认事件：表单提交，a标签跳转，右键菜单等

`return false;` 以对象属性的方式注册的事件才生效

`event.preventDefault();` W3C标注

`event.returnValue = false;` 兼容IE

封装阻止默认事件的函数 `cancelHandler(event)`
```
function cancelHandler(event) {
    if(event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
}
```

#### 事件对象

`event || window.event`

事件源对象

`event.target || event.srcElement`

```
ele.onxxx = function (e) {
    var event = e || window.event;
    var target = event.target || event.srcElement;
}
```

事件委托

利用事件冒泡，和事件源对象进行处理

1. 性能 不需要循环所有的元素一个个绑定事件
2. 灵活 当有新的子元素时不需要重新绑定事件

#### 事件分类

鼠标事件

`click mousedown mousemove mouseup contextmenu mouseover mouseout mouseenter mouseleave`

用 `button` 来区分鼠标的按键 0/1/2

DOM3标准规定：`click` 事件只能监听左键，只能通过 `mousedown` 和 `mouseup` 来判断鼠标键

1. 解决 `mousedown` 和  `click` 的冲突
```
var firstTime = 0,
    lastTime = 0,
    key = false;
document.onmousedown = function () {
    firstTime = new Date().getTime();
}
document.onmouseup = function () {
    lastTime = new Date().getTime();
    if(lastTime - firstTime < 300) {
        key = true;
    }
}
document.onclick = function () {
    if(key) {
        // do
        key = false;
    }
}
```

键盘事件

`keydown` > `keypress` > `keyup`

`keydown` 可以响应任意键盘按键，`keypress` 只可以响应字符类键盘按键

`keypress` 返回ASCII码，可以转换成响应字符

移动端touch事件

`touchstart touchmove touchend`

文本操作事件

`input focus blur change`

```
<input value="please input" style="color:#999" 
    onfocus="if(this.value=='please input'){this.value='';this.style.color='#424242';}" 
    onblur="if(this.value==''){this.value='please input';this.style.color='#999';}" />
```

窗体操作类 window

`scroll load`

`onload` 整个页面加载完后执行


## `JSON`

传输数据的格式

`JSON.parse(); string --> json`

`JSON.stringify(); json --> string`

## 异步加载js

```
function loadScript(url, callback) {
    var script = document.createElement("script");
    if(script.readyState) {
        script.onreadystatechange = function () {
            if(script.readyState == "complete" || script.readyState == "loaded") {
                tools[callback]();
            }
        }
    } else {
        script.onload = function () {
            tools[callback]();
        }
    }
    script.src = url;
    document.head.appendChild(script);
}
loadScript("demo.js", "test");
// demo.js
var tools = {
    test: function () {
        console.log("a");
    },
    demo: function () {
    
    }
}
```

#### js加载时间线

1. 创建 `Document` 对象，开始解析 `web` 页面。解析 `HTML` 元素和他们的文本内容后添加 `Element` 对象和 `Text` 节点到文档中。这个阶段 `document.readyState = "loading"`。

2. 遇到 `link` 外部 `css`，创建线程加载，并继续解析文档。

3. 遇到 `script` 外部 `js`，并且没有设置 `async、defer`，浏览器加载，并阻塞，等待 `js` 加载完成并执行该脚本，然后继续解析文档。

4. 遇到 `script` 外部 `js`，并且设置有 `async、defer`，浏览器创建线程加载，并继续解析文档。
对于 `async` 属性的脚本，脚本加载完成后立即执行。（异步禁止使用 `document.write()`）

5. 遇到 `img` 等，先正常解析 `dom` 结构，然后浏览器异步加载 `src`，并继续解析文档。

6. 当文档解析完成，` document.readyState = "interactive"`。

7. 文档解析完成后，所有设置有 `defer` 的脚本会按照顺序执行。（注意与 `async` 的不同,但同样禁止使用 `document.write()`）;

8. `document` 对象触发 `DOMContentLoaded` 事件，这也标志着程序执行从同步脚本执行阶段，转化为事件驱动阶段。

9. 当所有 `async` 的脚本加载完成并执行后、`img` 等加载完成后， `document.readyState = "complete"`，`window` 对象触发 `load` 事件。

10. 从此，以异步响应方式处理用户输入、网络事件等。

## 正则表达式

贪婪匹配，后加 `?` 变为非贪婪匹配

```
var reg = /^a/gim;
var str = "abc";

reg.test(str);
reg.exec(str);

str.match(reg);
str.search(reg); // return index
str.replace(reg, "xxx");
str.split(reg);

reg = /(\w)\1(\w)\2/g;
str.replace(reg, "$2$1");
```
```
\w === [0-9A-z_]
\W === [^\w]
\d === [0-9]
\D === [^\d]
\s === [\t\n\r\v\ ]
\S === [^\s]
\b === 单词边界
\B === 非单词边界
.  === [^\r\n]
```
```
n+      {1, }
n*      {0, }
n?      {0,1}
n{X}    {x}
n{x,y}  {x,y}
n{x,}   {x, }

x(?=y) // 正向肯定查找，匹配x仅当x后跟着y
x(!=y) // 正向否定查找

[\s\S] 代表任何东西
```

1. 检验一个字符串首尾是否含有数字
```
var reg = /^\d|\d$/g;
var str = "123abc123";
reg.test(str); // true
str.match(reg); // ["123", "123"]
```
2. the-first-name --> theFirstName
```
var reg = /-(\w)/g;
var str = "the-first-name";
str.replace(reg, function ($, $1) {
    return $1.toUpperCase();
});
```
3. 字符串去重
```
var str = "aaaaabbbbbbcccccccccccccccccc";
var reg = /(\w)\1*/g;
str.replace(reg, "$1");
```
4. 1000000 --> 1,000,000
```
var str = "100000000000";
var reg = /(?=(\B)(\d{3})+$)/g;
str.replace(reg, ",");
```