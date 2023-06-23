const foodData = require('./food.json');

//1. list all the food items
const foodItems1 = foodData.map((element) => {
    return element.foodname;
});
console.log(foodItems1);

//2. list all the food items with category vegetables
const foodItems2 = foodData.filter((element) =>{
    return element.category === "Vegetable"
}).map((element) => {
    return element.foodname
});
console.log(foodItems2);

//3. list all the food items with category fruit
const foodItems3 = foodData.filter((element) =>{
    return element.category === "Fruit"
}).map((element) => {
    return element.foodname
});
console.log(foodItems3);

//4. list all the food items with category protien
const foodItems4 = foodData.filter((element) =>{
    return element.category === "Protein"
}).map((element) => {
    return element.foodname
});
console.log(foodItems4);

//5. list all the food items with category nuts
const foodItems5 = foodData.filter((element) =>{
    return element.category === "Nuts"
}).map((element) => {
    return element.foodname
});
console.log(foodItems5);

//6. list all the food items with category grains
const foodItems6 = foodData.filter((element) =>{
    return element.category === "Grain"
}).map((element) => {
    return element.foodname
});
console.log(foodItems6);

//7. list all the food items with category dairy
const foodItems7 = foodData.filter((element) =>{
    return element.category === "Dairy"
}).map((element) => {
    return element.foodname
});
console.log(foodItems7);

//8. list all the food items with calorie above 100
const foodItems8 = foodData.filter((element) =>{
    return element.calorie > 100
}).map((element) => {
    return element.foodname
});
console.log(foodItems8);

//9. list all the food items with calorie below 100
const foodItems9 = foodData.filter((element) =>{
    return element.calorie < 100
}).map((element) => {
    return element.foodname
});
console.log(foodItems9);

//10. list all the food items with highest protien content to lowest
const foodItems10 = foodData.sort((a,b) =>{
    return b.protiens - a.protiens
}).map((element) => {
    return element.foodname
});
console.log(foodItems10);

//11. list all the food items with lowest cab content to highest
const foodItems11 = foodData.sort((a,b) =>{
    return a.cab - b.cab
}).map((element) => {
    return element.foodname
});
console.log(foodItems11);