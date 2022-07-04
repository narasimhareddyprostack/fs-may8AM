let cars = [{ car_Name: "I20", brand: "Hyndai", price: 1200000, color: "white" },
{ car_Name: "Baleno", brand: "Suziki", price: 900000, color: "red" },
{ car_Name: "ecosport", brand: "Ford", price: 1400000, color: "black" },
{ car_Name: "Nano", brand: "Tata", price: 400000, color: "blue" },
{ car_Name: "x7", brand: "BMW", price: 12000000, color: "gray" },
{ car_Name: "b1", brand: "hero", price: 1200, color: "blue" }
]

let result = cars.map((car) => {
    return car.price > 1000000 || car.color === "red"
})
console.log(cars)
console.log(result)