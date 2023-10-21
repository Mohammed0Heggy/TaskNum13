// 1- undefined, because the local variable has the same name of the global variable and the console log statement comes before the local decleartion

// 2- hello one time only, because the second log statement can't read the value of the 'message' operator because it exist in the local scope of the if statement

// 3 - error, because in if statement can't access 'x' value 
// =========================================================
let x = document.getElementById("sec1");
console.log(x);
// -------------------------
let d = document.getElementsByTagName("div");
console.log(d);

let m = document.getElementsByClassName("pro");
console.log(m);
// -------------------------
let h = document.getElementsByClassName("pro3");
console.log(h);
// -------------------------
let n = document.getElementsByTagName("h2").innerHTML = "Welcome from Div";
console.log(n);

// ================================================

let setName = (name) => {
  console.log(document.getElementsByClassName("name").innerHTML = name);
}
setName("Mohammed");
// -------------------------------------
let sum = (num1, num2) => {
  console.log(document.getElementsByClassName("sum").innerHTML = num1 + num2);
}
sum(5, 17);
// =================================================

let concat = (name) => {
  console.log(document.getElementById("name").innerHTML += name);
}
concat("Ahmed");