## CSS

**水平垂直居中**

html
```html
<div class="parent">
    <div class="item"></div>
</div>
```
css
1. 已知元素宽高
```css
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
```css
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
```css
.item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```
```css
.parent {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

## js

**运算符**
```js
var a = (10 * 3 - 4 / 2 + 1) % 2,
    b = 3;
b %= a + 3;
document.write(a++);      // 1   
document.write("<br/>");   
document.write(--b);      // 2
```
**交换a、b的值**
```js
var a = 123,
    b = 234;
a = a + b;
b = a - b;
a = a - b;
```
**快速求幂**
```js
Math.pow(2, n);
2 << (n - 1);
2 ** n;
```
**计算2的n次幂，n可输入，n为自然数**
```js
function power2(n) {
    var pow = 1;
    for(var i=0; i<n; i++) {
        pow *= 2;
    }
    return pow;
}
```
**计算n的阶乘，n可输入**
```js
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
**著名的斐波那契数列 1 1 2 3 5 8 输出第n项**
```js
function fibonacci(n) {
    if(n <= 2) {
        return 1;
    }
    return fibonacci(n-2)+fibonacci(n-1);
}
```
**编写一程序，输入一个三位数的正整数，输出时反向输出，如：输入456，输出654**
```js
function reverseNum(n) {
    var a = n % 10,
        b = (n - a) / 10 % 10,
        c = (n - a - b * 10) / 100;
    return a * 100 + b * 10 + c;
}
```
**输入a,b,c三个数，打印出最大的**
```js
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
**打印出100以内的质数**
```js
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
**反向输出数字**
```js
function reverseNum(n) {
    var len = String(n).length - 1,
        num = 0;
    while(len) {
        num += n % 10 * 10**len;
        n = n/10 | 0;
        if(String(n).length == 1) {
            num += n;
        }
        len--;
    }
    return num;
}
```
**实参与形参相映射**
```js
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
**实现加法计数器**
```js
function mySum() {
    var sum = 0;
    for(var i=0; i<arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
```
**定义一组函数，输入数字，逆转并输出汉字形式**
```js
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
**输出打印值**
```js
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
**输出打印值**
```js
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
**闭包问题**
```js
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
**函数名**
```js
var x = 1;
if(function f() {}) { // (function f() {}) 表达式执行完后，失去对函数名的索引
    x += typeof f;
}
console.log(x); // "1undefined"
```
**输出打印值**
```js
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
**变量提升**
```js
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
**下面代码中 `console.log` 的结果是 `[1, 2, 3, 4, 5]` 的有 (ACD)**
```js
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
**parseInt**
```js
parseInt(3, 8); // 3
parseInt(3, 2); // NaN
parseInt(3, 0); // 3
```
**形参实参**
```js
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
**写一个方法，求一个字符串的字节长度。
（提示：字符串有一个方法 `charCodeAt()` 一个中文占两个字节，一个英文占一个字节。
定义和用法：`charCodeAt()` 方法可返回指定位置的字符的 `Unicode` 编码，这个返回值是 `0-65535` 之间的整数。
当返回值是 `<=255` 时，为英文，当返回值 `>255` 时为中文）**
```js
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
**逗号操作符**
```js
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
**call/apply 改变 `this` 指向**
```js
function Person(name, age) {
    this.name = name;
    this.age = age;
}
var obj = {};
Person.call(obj, "cheng", 300); // obj = {name: "cheng", age: 300}
```
**实现链式调用模式（模仿jquery）**
```js
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
**写出代码输出结果**
```js
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
**写出代码输出结果**
```js
var foo = "123";
function print() {
    var foo = "456";
    this.foo = "789";
    console.log(foo);
}
print(); // 456
```
**写出代码输出结果**
```js
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
**写出代码输出结果**
```js
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
**写出代码输出结果**
```js
function print() {
    console.log(foo); // undefined
    var foo = 2;
    console.log(foo); // 2
    console.log(hello); // Uncaught ReferenceError: hello is not defined
}
print();
```
**写出代码输出结果**
```js
function print() {
    var test;
    test();
    function test() {
        console.log(1);
    }
}
print(); // 1
```
**写出代码输出结果**
```js
function print() {
    var x = 1;
    if(x == "1") console.log("One!");
    if(x === "1") console.log("Two!");
}
print(); // One!
```
**写出代码输出结果**
```js
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
**写出代码输出结果**
```js
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
**写出代码输出结果**
```js
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
**随机打乱一个数组，一次性输出**
```js
var arr = [1,2,3,4,5,6,7];
arr.sort(function () {
    return Math.random() - 0.5;
});
arr.sort((a,b) => Math.random() - 0.5);
```
**类数组**
```js
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
**数组去重 在原型链上编程**
```js
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
**数组去重 利用对象属性名不能重复 `hash`**
```js
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
**一个字符串 `[a-z]` 组成，找出该字符串第一个只出现一次的字母**
```js
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
**字符串去重**
```js
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
**字符串去重**
```js
var str = "aaaaabbbbbbcccccccccccccccccc";
var reg = /(\w)\1*/g;
str.replace(reg, "$1");
```
**1000000 --> 1,000,000**
```js
var str = "100000000000";
var reg = /(?=(\B)(\d{3})+$)/g;
str.replace(reg, ",");
```
**add(2,3)===add(2)(3)===5**
```js
function add(a, b) {
  if(b) {
    return a + b;
  } else {
    return function(c) {
      return a + c;
    }
  }
}

console.log(add(2,3));
console.log(add(2)(3));
```

## Promise

```js
setTimeout(()=>{
  console.log(1) 
},0)
Promise.resolve().then(()=>{
  console.log(2) 
})
console.log(3)

// [3, 2, 1]
```

```js
setTimeout(()=>{
  console.log(1) 
},0)
let a=new Promise((resolve)=>{
  console.log(2)
  resolve()
}).then(()=>{
  console.log(3) 
}).then(()=>{
  console.log(4) 
})
console.log(5) 

// [2, 5, 3, 4, 1]
```

```js
let a=new Promise((resolve)=>{
  console.log(2)
  resolve()
})
a.then(()=>{
  console.log(3) 
})
a.then(()=>{
  console.log(4) 
})

// [2, 3, 4]
```

```js
new Promise((resolve,reject)=>{
  console.log("promise1")
  resolve()
}).then(()=>{
  console.log("then11")
  new Promise((resolve,reject)=>{
    console.log("promise2")
    resolve()
  }).then(()=>{
    console.log("then21")
  }).then(()=>{
    console.log("then22")
  })
}).then(()=>{
  console.log("then12")
})

// [promise1, then11, promise2, then21, then12, then22]
```

```js
new Promise((resolve,reject)=>{
  console.log("promise1")
  resolve()
}).then(()=>{
  console.log("then11")
  return new Promise((resolve,reject)=>{
    console.log("promise2")
    resolve()
  }).then(()=>{
    console.log("then21")
  }).then(()=>{
    console.log("then22")
  })
}).then(()=>{
  console.log("then12")
})

// [promise1, then11, promise2, then21, then22, then12]
```

```js
new Promise((resolve,reject)=>{
  console.log("promise1")
  resolve()
}).then(()=>{
  console.log("then11")
  new Promise((resolve,reject)=>{
    console.log("promise2")
    resolve()
  }).then(()=>{
    console.log("then21")
  }).then(()=>{
    console.log("then22")
  })
}).then(()=>{
  console.log("then12")
})
new Promise((resolve,reject)=>{
  console.log("promise3")
  resolve()
}).then(()=>{
  console.log("then31")
})

// [promise1, promise3, then11, promise2, then31, then21, then12, then22]
```

```js
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async  function async2() {
  console.log( 'async2');
}

console.log("script start");

setTimeout(function () {
  console.log("settimeout");
},0);

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
console.log('script end');

// [script start, async1 start, async2, promise1, script end, async1 end, promise2, settimeout]
```

```js
async function async1() {
  console.log("async1 start");
  await  async2();
  console.log("async1 end");
}
async  function async2() {
  console.log( 'async2');
}

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
}).then(function () {
  console.log("promise3");
}).then(function () {
  console.log("promise4");
}).then(function () {
  console.log("promise5");
});

// [async1 start, async2, promise1, async1 end, promise2, promise3, promise3, promise5]
```