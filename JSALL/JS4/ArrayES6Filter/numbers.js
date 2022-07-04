let numbers = [1, 7, 98, 197, 255, 2, 9, 400]
let new_Numbers = numbers.map((x) => {
    return x % 2 == 0
})
console.log(numbers)
console.log(new_Numbers)