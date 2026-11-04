let name = "Hari";
let age = 24;

console.log(name);
console.log("name");

age = age + 1;

console.log(age);
console.log(age + 5);

var company = "Google";
var company = "Microsoft";

let salary = 10000;
salary = 15000;

const role = "Frontend Developer";

console.log(company);
console.log(salary);
console.log(role);

// --- Block Scope ---

{
    let city = "Vizag";
    const country = "India";
    var state = "Andhra Pradesh";

    console.log(city); // Vizag
    console.log(country); // India
    console.log(state); // Andhra Pradesh
}

console.log(state);