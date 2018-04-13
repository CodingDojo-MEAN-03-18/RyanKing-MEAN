var myNum = 5;
var myString = 'Hello Universe';
var myArr = [1, 2, 3, 4];
var myObj = { name: 'Bill' };
var anythingVariable = 'Hey';
anythingVariable = 25;
var arrayOne = [true, false, true, true];
var arrayTwo = [1, 'abc', true, 2];
myObj = { x: 5, y: 10 };
var MyNode = /** @class */ (function () {
    function MyNode(value) {
        this.val = value;
    }
    MyNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return MyNode;
}());
var myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction() {
    console.log('Hello world');
    return;
}
function sendingErrors() {
    throw new Error('Error message');
}
