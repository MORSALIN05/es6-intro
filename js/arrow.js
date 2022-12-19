function add(a, b) {
    const result = a + b;
    console.log(result);

}
const add1 = (a, b) => a + b;
console.log(add1(1, 4));

// single parameter
const add2 = a => a * a;
console.log(add2(3));

// function with no parameter
const add3 = () => 3.14;
console.log(add3());

//multiline arrow function
const add4 = (first, second, third) => {
    const multiply = first * second * third;
    const divide = multiply / 2;
    return divide;
}
const result2 = add4(2, 3, 4);
console.log(result2);