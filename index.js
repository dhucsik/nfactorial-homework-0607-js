import {cA as countAll} from "./ex.js"
import fruitss from "./fruits.js"

const SHOP_NAME = "Dalida's shop"

let openTime = "09:00"
let closeTime = "00:00"
let employeesCount = 20
let isCool = true
let disadvatages = null
let haters = undefined

let product = {
    name: "apple",
    price: 650,
    origin: "Poland",
}

product.id = 1;
delete product.id;

product["id"] = 1
delete product["id"]

console.log(product)

let vegetables = ["broccoli", "avocado"]
vegetables.push("lemon")
vegetables.pop()
vegetables.unshift("olive")
vegetables.shift()
vegetables = vegetables.concat(["carrot", "tomato", "potato"])
console.log(vegetables, vegetables.length)

let isTrue = (0 == false)
let isFalse = (0 === false)

if (25 < 50) {
    alert("This is true")
} else {
    alert("This is false")
}

let age = 20
let accessAllowed = (age > 18) ? "Yes" : "No"

if (accessAllowed) {
    console.log(accessAllowed)
} else {
    console.log("accessAllowed is undefined")
}

let a = 2 + 2

switch (a) {
    case 3:
        alert("Too small")
        break
    case 4:
        alert("Exactly!")
        break
    case 5:
        alert("Too big")
        break
    default:
        alert("I don't know such values")
}

let count = 0
let i = 0

while (i < 3) {
    count += i
    i++ 
}

i = 0

do {
    count += i
    i++
} while(i < 3)

for (i = 0; i < 10; i++) {
    count += i
}


console.log(count)

function countVegetables() {
    return vegetables.length
}

let cVegetables = function () {
    return vegetables.length
}

let isOpenNow = (curTimeHour) => {
    if (curTimeHour >= 9 && curTimeHour < 24) {
        return true
    } else {
        return false
    }
}


let drinks = ["water", "iced tea", "green juice", "iced tea", "water"]
let tea = drinks.filter(drink => drink === "iced tea")
let slicedDrinks = drinks.map(drinks => slice(drink))

function buy(name, price, ...drinks) {
    return `${name} buys ${drinks} for ${price}`
}

countAll()



console.log(fruitss)

console.log(`${SHOP_NAME} ${openTime}  ${closeTime}`)

console.log(isOpenNow(15))