# JavaScript Variables and Scope

Variables are used to store and manage values in JavaScript.

JavaScript provides three keywords to declare variables: `var`, `let`, and `const`.

## 1. let

- Introduced in ES6 (ES2015).
- Allows reassignment.
- Does not allow redeclaration in the same scope.
- Block-scoped.
- Can be declared without an initial value.

```javascript
let age = 24;
age = 25;

console.log(age); // 25
```

Redeclaration is not allowed:

```javascript
let age = 24;
// let age = 25; // SyntaxError
```

## 2. const

- Introduced in ES6 (ES2015).
- Does not allow reassignment.
- Does not allow redeclaration in the same scope.
- Block-scoped.
- Must be initialized during declaration.

```javascript
const country = "India";

console.log(country); // India

// country = "Japan"; // TypeError
```

**Important:** `const` prevents reassignment, but does not make objects or arrays immutable.

```javascript
const user = { name: "Hari" };

user.name = "Shankar"; // Allowed

console.log(user.name); // Shankar
```

## 3. var

- The older way of declaring variables.
- Allows reassignment.
- Allows redeclaration in the same scope.
- Function-scoped, not block-scoped.
- Can be declared without an initial value.

```javascript
var company = "Google";
var company = "Microsoft";

console.log(company); // Microsoft
```

## 4. Difference Between var, let and const

| Feature | var | let | const |
|---|---|---|---|
| Reassignment | Yes | Yes | No |
| Redeclaration in same scope | Yes | No | No |
| Block-scoped | No | Yes | Yes |
| Function-scoped | Yes | Also respects function boundaries | Also respects function boundaries |
| Must initialize | No | No | Yes |

**Best practice:** Use `const` by default, `let` when reassignment is required, and avoid `var` in modern code.

## 5. Reassignment vs Redeclaration

### Reassignment

Changing the value of an existing variable.

```javascript
let salary = 12500;
salary = 15000;

console.log(salary); // 15000
```

### Redeclaration

Declaring the same variable name again in the same scope.

```javascript
var score = 10;
var score = 20;

console.log(score); // 20
```

Redeclaring with `let` or `const` in the same scope causes a `SyntaxError`.

## 6. What is Scope?

Scope determines where a variable can be accessed in JavaScript.

Common types of scope include:

- Global scope
- Function scope
- Block scope

### Global Scope

Variables declared in global scope can generally be accessed throughout the script, subject to the JavaScript environment and module boundaries.

```javascript
let city = "Vizag";

function showCity() {
  console.log(city);
}

showCity(); // Vizag
```

### Function Scope

Variables declared inside a function cannot be accessed directly outside that function.

```javascript
function test() {
  var age = 24;
  let name = "Hari";
}

test();

// console.log(age);  // ReferenceError
// console.log(name); // ReferenceError
```

### Block Scope

A block is a section of code enclosed in `{ }`.

Variables declared using `let` and `const` are block-scoped.

```javascript
{
  let age = 24;
  const city = "Vizag";

  console.log(age);  // 24
  console.log(city); // Vizag
}

// console.log(age);  // ReferenceError
// console.log(city); // ReferenceError
```

However, `var` is not block-scoped.

```javascript
{
  var company = "Google";
}

console.log(company); // Google
```

## 7. Variable Shadowing

Variable shadowing occurs when an inner scope declares a variable with the same name as an outer variable.

```javascript
let score = 10;

{
  let score = 20;

  console.log(score); // 20
}

console.log(score); // 10
```

The inner `score` is a separate variable and does not modify the outer `score`.

## 8. Accessing vs Modifying Outer Variables

An inner block can access variables declared in an outer scope.

### Modifying an outer variable

```javascript
let salary = 12500;

{
  salary = 15000;
}

console.log(salary); // 15000
```

Here, we reassign the existing variable.

### Creating a new inner variable

```javascript
let salary = 12500;

{
  let salary = 15000;
}

console.log(salary); // 12500
```

Here, `let` declares a new block-scoped variable.

## 9. Important Behavior of var

`var` ignores ordinary block boundaries but respects function boundaries.

```javascript
var experience = 2;

{
  var experience = 3;
}

console.log(experience); // 3
```

Both declarations refer to the same variable in this example.

However:

```javascript
function test() {
  var experience = 3;
}

test();

// console.log(experience); // ReferenceError
```

The function-scoped variable cannot be accessed outside the function.

## 10. Variables vs Strings

```javascript
let name = "Hari";

console.log(name);   // Hari
console.log("name"); // name
```

- Without quotes, JavaScript looks up the variable's value.
- With quotes, JavaScript treats the content as text.

## 11. Expressions vs Assignment

```javascript
let number = 10;

console.log(number + 5); // 15
console.log(number);     // 10
```

The addition does not modify `number`.

To update the variable:

```javascript
number = number + 5;

console.log(number); // 15
```

## 12. Common Errors

### ReferenceError

Occurs when trying to access an identifier that is not available.

```javascript
{
  let city = "Vizag";
}

// console.log(city); // ReferenceError
```

### TypeError

Occurs when trying to reassign a constant.

```javascript
const age = 24;

// age = 25; // TypeError
```

### SyntaxError

Occurs when redeclaring a `let` variable in the same scope.

```javascript
let score = 10;
// let score = 20; // SyntaxError
```

## 13. Important Points to Remember

- `let` and `const` are block-scoped.
- `var` is function-scoped.
- `const` prevents reassignment, not object mutation.
- Redeclaration and reassignment are different.
- Inner scopes can access variables from outer scopes.
- Outer scopes cannot directly access variables declared only in an inner block.
- Variable shadowing creates a separate inner binding.
- An expression does not change a variable unless its result is assigned or another side effect occurs.
- Prefer `const` and `let` in modern JavaScript.

## 14. Interview Questions

**Q1. What is the difference between var, let and const?**

`var` is function-scoped and supports redeclaration and reassignment. `let` is block-scoped and supports reassignment but not redeclaration in the same scope. `const` is block-scoped and supports neither reassignment nor redeclaration in the same scope.

**Q2. What is block scope?**

Block scope restricts the accessibility of variables declared with `let` and `const` to their enclosing block and nested scopes.

**Q3. What is variable shadowing?**

When an inner scope declares a variable with the same name as an outer variable, the inner variable shadows the outer variable.

**Q4. Can a const object be modified?**

Yes. Its properties can be modified, but the variable cannot be reassigned to another object.

**Q5. Is var globally scoped?**

Not always. `var` is function-scoped. A top-level `var` declaration in a classic browser script can create a global binding.

**Q6. What is the difference between reassignment and redeclaration?**

Reassignment updates an existing variable's value. Redeclaration declares the same variable name again in the same scope.

**Q7. What happens when we access a block-scoped variable outside its block?**

If no accessible outer binding with that name exists, JavaScript throws a `ReferenceError`.

**Q8. Why should we prefer const over let?**

Using `const` prevents accidental reassignment and communicates that the variable binding should remain unchanged.