const numbers = [1, 2, 3, 5, 45, 37, 58];
const numbers2 = [654, 345, 211, 222];
const numbers3 = [25, -13, 48, 22, 91, -88]

let sum = 0;

function sumAll(array) {
    
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
return sum;


}

console.log(sumAll(numbers));
console.log(sumAll(numbers2))
console.log(sumAll(numbers3));