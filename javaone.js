// var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
// var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

// My favorite sandwich is a Hamburger which has approximately 260 calories, along with it I enjoy eating Large French Fries which have about 570 calories.

// var sandwiches = [{
//     sandwich: "Hamburger",
//     calories: 260
// }];

// var fries = [{
//     fries_size: "Large French Fries",
//     calories: 570
// }];

// for (let val of sandwiches) {
// console.log(sandwiches);
// console.table(sandwiches);
//     document.getElementById("food").innerHTML = `<p>${val.sandwich}</p>`;
// }
// for (let val of fries) {
// console.log(fries);
// document.write(fries)
// document.getElementById("food").innerHTML += `<p>${val.fries_size}</p>`;
// }

var sandsAfterParse = JSON.parse(sandwiches);
console.table(sandsAfterParse);

// var friesAfterParse = JSON.parse(fries);
// console.table(friesAfterParse);

// document.getElementById("food").innerHTML = sandwiches.printInfo()

let essen = JSON.parse(sandwiches);
console.log(essen)
document.getElementById('food').innerHTML += "My favorite sandwich is a " + essen[0].sandwich + " which has approximately " + essen[0].calories1 + " calories, along with it I enjoy eating " + essen[0].fries_size + " which have about " + essen[0].calories2 + "."

// let essen = JSON.parse(sandwiches);
// for (let i = 0; i < essen.lengt; i++) {
//     document.getElementById('food').innerHTML += `My favorite sandwich is a ${essen [i].sandwich} which has approximately ${essen[i].calories1} calories, along with it I enjoy eating ${essen[i].fries_size} which have about ${essen[i].calories2}`;
// }