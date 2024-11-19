//console.log("Hello world")
// if - else statement
/*let x = 10;

if (x == 10) {
  console.log("true");
} else if (x === 10) {
  console.log("false");
} else {
  console.log("Sure thing, chief");
}

//ternery, en forkortelse av en if-statement, men ikke bruk om statementen er lang
let age = 18;
age >= 18 ? console.log("lovlig") : console.log("ulovlig");

let drink = age >= 18 ? "øl" : "milk";
console.log(drink);
// and or statements
let userAge = 19;
let userName = "";
// && sjekker at begge verdier er true
if (!userName && userAge >= 18) {
  console.log("User has a name and is over 18");
} else {
  console.log("User has no name or is under 18");
}

// || sjekker om en av verdiene er true
if (userName || userAge >= 18) {
  console.log("You may enter");
} else {
  console.log("You may not enter");
} */
//function
/*
function test() {
  console.log("Hei fra test funksjonen");
}
test();
¨
//arrow function
let arrow = () => {
  console.log("Hei fra arrow funksjonen");
};


arrow();

let returnTest = () => {
    console.log("return test kjørt")
    return "Hei";
    // unreachable code, alt etter return statement blir ignorert
    console.log("Return kjørt igjen")
}

let returnTestTwo = () => {
    let hello = "Hello"
    return hello
}
console.log(hello) // vil ikke funke fordi variablen er låst inne i en funksjon
console.log(returnTestTwo()) // husk parantesene, ellers vil den returnere funksjonen som et objekt

let doubler = (num1, num2) => {
    return num1 * num2
}
console.log(doubler(30, 2)) //Man kan assigne verdiene når man kaller på funksjonen

const calculator = (num1, num2, operator) =>{
    let total = 0
    if(operator === "+") {
        return num1 + num2
    } else if (operator === "-") {
        return num1 - num2
    } else if (operator === "*") {
        return num1 * num2
    } else if (operator === "/") {
        return num1 / num2
    } else {
        return "Invalid operator"
    }
}
console.log(calculator(10, 2, "+"))


const calculator = (num1, num2, operator) => {
  let total = 0;
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
};
console.log(calculator(10, 2, "+")); // Output: 12
*/

let testBtn = document.getElementById("test-btn");
// function testClick() {
//     console.log("clicked")
// }
testBtn.addEventListener("click", function () {
  console.log("clicked");
});
