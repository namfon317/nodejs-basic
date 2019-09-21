// class Calculator {
//   static sum(x, y) {
//     return x + y;
//   }
//   sum2(x, y) {
//     return x + y;
//   }
// }
// const calculatorObject = new Calculator();
// console.log(calculatorObject.sum(1, 2));
// console.log(calculatorObject.sum2(2, 3));
// console.log(calculatorObject.sum(5, 6));

class Calculator {
  static sum(x, y) {
    return x + y;
  }
  sum2(x, y) {
    return x + y;
  }
  multiply(x, y) {
    return x * y;
  }
}
const calculatorObject = new Calculator();
console.log(calculatorObject.multiply(10, 20));
//   console.log(calculatorObject.sum2(2, 3));
//   console.log(calculatorObject.sum(5, 6));
