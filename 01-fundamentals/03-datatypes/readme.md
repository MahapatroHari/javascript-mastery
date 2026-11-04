## Block Scope

Scope determines where a variable can be accessed in JavaScript.

A block is a section of code enclosed in curly braces `{ }`, such as an `if` statement, loop, or standalone block.

### 1. let and const are block-scoped

Variables declared with `let` and `const` inside a block cannot be accessed outside that block.

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

### 2. var is not block-scoped

`var` is function-scoped, meaning an ordinary block does not restrict its accessibility.

```javascript
{
  var company = "Google";
}

console.log(company); // Google
```

However, `var` declared inside a function cannot be accessed outside that function.

```javascript
function test() {
  var salary = 20000;
}

// console.log(salary); // ReferenceError
```

### 3. Variable Shadowing

When an inner scope declares a variable with the same name as an outer variable, the inner variable shadows the outer one.

```javascript
let score = 10;

{
  let score = 20;

  console.log(score); // 20
}

console.log(score); // 10
```

Both `score` variables are separate. Changing the inner variable does not affect the outer variable.

### 4. Accessing Outer Variables

An inner block can access variables declared in its outer scope.

```javascript
let salary = 12500;

{
  salary = 15000;
}

console.log(salary); // 15000
```

Here, no new `salary` variable is declared inside the block. The existing outer variable is reassigned.

Compare this with:

```javascript
let salary = 12500;

{
  let salary = 15000;
}

console.log(salary); // 12500
```

Here, `let` creates a separate inner variable.

### 5. Important Points

- `let` and `const` are block-scoped.
- `var` is function-scoped, not block-scoped.
- Inner blocks can access variables from outer scopes.
- Outer scopes cannot directly access variables declared only inside an inner block.
- Variable shadowing allows an inner variable to have the same name as an outer variable.
- Declaring `let salary` inside a block is different from assigning `salary = 15000`.
- Accessing an unavailable variable normally throws a `ReferenceError`.

### 6. Interview Questions

**Q1. What is block scope?**

Block scope means a variable is accessible only within the block `{ }` where it is declared, including any nested scopes.

**Q2. Which JavaScript keywords are block-scoped?**

`let` and `const`.

**Q3. Is var block-scoped?**

No. `var` is function-scoped.

**Q4. What is variable shadowing?**

When an inner scope declares a variable with the same name as an outer variable, the inner variable temporarily hides the outer variable within that scope.

**Q5. What is the difference between these two statements?**

```javascript
let age = 25;
age = 30;
```

The second statement reassigns the existing variable.

```javascript
let age = 25;

{
  let age = 30;
}
```

The inner declaration creates a separate block-scoped variable.