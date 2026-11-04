# JavaScript Console

The console is a tool used to display information, test JavaScript code, and debug programs.

## 1. console.log()

`console.log()` is used to print values to the console.

```javascript
console.log("Hello World");
```

Output:
```text
Hello World
```

- `console` is an object provided by the JavaScript environment.
- `log()` is a method of the console object.
- `"Hello World"` is a string.
- `;` marks the end of a statement. It is often optional because JavaScript supports automatic semicolon insertion.

## 2. Strings vs Numbers

```javascript
console.log("10"); // 10
console.log(10);   // 10
```

Both display `10`, but their data types are different.

- `"10"` is a string (text).
- `10` is a number.

The console may display strings and numbers differently depending on the environment.

## 3. Expressions in console.log()

JavaScript evaluates expressions before printing their results.

```javascript
console.log(10 + 20);   // 30
console.log("10 + 20"); // 10 + 20
```

- Without quotes, `10 + 20` performs addition.
- With quotes, `"10 + 20"` is treated as text.

## 4. Multiple console.log() Statements

JavaScript normally executes synchronous statements from top to bottom.

```javascript
console.log("First");
console.log("Second");
console.log("Third");
```

Output:
```text
First
Second
Third
```

## 5. Printing Multiple Values

We can pass multiple values separated by commas.

```javascript
console.log("Age:", 24);
console.log("Total:", 10 + 20);
```

Output:
```text
Age: 24
Total: 30
```

## 6. Other Useful Console Methods

### console.error()

Displays an error message.

```javascript
console.error("Something went wrong!");
```

### console.warn()

Displays a warning message.

```javascript
console.warn("Check your input!");
```

### console.table()

Displays arrays or objects in a table format in supported consoles.

```javascript
console.table([
  { name: "Hari", age: 24 },
  { name: "John", age: 25 }
]);
```

### console.clear()

Clears the console in environments that support it.

```javascript
console.clear();
```

## 7. Running JavaScript

### Browser Console

1. Open Chrome.
2. Press `F12` or `Ctrl + Shift + J`.
3. Open the Console tab.
4. Write JavaScript and press Enter.

### VS Code with Node.js

Create an `index.js` file.

```javascript
console.log("Hello JavaScript");
```

Run it using:

```bash
node index.js
```

## 8. Important Points

- `console.log()` is mainly used for debugging and inspecting values.
- Strings are written inside quotes.
- Numbers do not require quotes.
- JavaScript evaluates expressions before printing them.
- Code normally executes sequentially unless control flow changes that order.
- `console.log()` does not display content on the webpage itself.
- Console output formatting can differ between browsers and Node.js.

## 9. Interview Questions

**Q1. What is console.log()?**

A method used to display information in the console, commonly for debugging.

**Q2. What is the difference between console.log("10") and console.log(10)?**

The first passes a string, while the second passes a number.

**Q3. What is the difference between console.log(10 + 20) and console.log("10 + 20")?**

The first evaluates the addition and prints `30`. The second prints the text `10 + 20`.

**Q4. Does console.log() return a value?**

Yes. In standard JavaScript console implementations, it returns `undefined`.

**Q5. What is the difference between console.log(), console