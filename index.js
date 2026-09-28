const drinks = ["Latte", "Tea", "Coffee"];

drinks.push("Flat White");

console.log("Updated number of drinks:", drinks.length);

const orders = {
    drinks: drinks
};

let category = "drinks";
let orderIndex = 3;

console.log(orders[category][orderIndex]);