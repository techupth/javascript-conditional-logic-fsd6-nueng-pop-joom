//Exercise 3
// Ternary Operator
let lightBulbStatus = "On";

//Start coding here
let message;
message = lightBulbStatus === "On" || lightBulbStatus === "Off" ? "Bulb is " + lightBulbStatus : "Please choose the correct input (On/Off)"
console.log(message);