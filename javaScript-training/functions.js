function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

const multiply=(a, b)=> (a*b)

const divide=(a, b) =>{
    if (b === 0) {
        return "Division by zero is not possible";
    }
    return a / b;
}

console.log(add(3,8));
console.log(subtract(9,1));
console.log(multiply(6,6));
console.log(divide(30,5));
console.log(divide(5,0));
