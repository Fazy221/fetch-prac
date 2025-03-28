const usefulFuncObj = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) => a * b,
    div: (a, b) => a / b,
    ranNum: 69
}
console.log(usefulFuncObj.add(1, 2)) // 3
console.log(usefulFuncObj.ranNum) // 3



class usefulFuncClass {
    constructor(a,b) {
        this.a = a;
        this.b = b;
    }
    add() {
        return this.a + this.b;
    }
    static sub(a,b) {
        return a - b;
    }
}
// Normal Way with insaniation
const num = new usefulFuncClass(1,2);
console.log(num.add()) // 3

// Static Way
console.log(usefulFuncClass.sub(1,2)) // -1