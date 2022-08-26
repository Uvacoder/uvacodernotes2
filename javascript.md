# **JS Notes**
---
### *Steps to Reach DOM*
---
1. Right click and inspect
2. Select the tab on the top for what you want to manipulate
---
### *Definitions w/Examples*
---
* To select an element and view information directly from content use ![alt text](http://web-dev-readme-photos.s3.amazonaws.com/js/elementinspector-icon.png) and select which element to view information about it or link to html in the Dev Tools.
* To search for specific html or code go to console and type the code below with either the html tag, CSS id, class, etc...
```javascript
document.querySelector()
```
* Table of Main Selectors

|Attribute   |CSS Selector |querySelector Code |
|------------|:-----------:|------------------:|
| id         |#            |document.querySelector('#content')|
|class       |.            |document.querySelector('.red')|
|html tag    |             |document.querySelector('p')|

---
* Alternative to the `querySelector` is:
```javascript
document.getElementById('content')
document.getElementsByClassName('red')
document.getElementsByTagName('p')
```
^note the CSS selector is not needed since it is called out in the code

* Parameters are placeholders that are put between parentheses when declaring a function in this case it is `firstName`:
```js
function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`)
}
```

---
---
### *Selecting by Links*
---
* Follow same steps as if searching for an attribute but chain it together like:
```javascript
document.querySelector(".infobox").querySelector("span.deathplace").querySelector("a")
```
^this allows you to locate the code statement of a link.

---
---
### *Retrieving Attributes*
```javascript
let maryleboneAnchor = document.querySelector(".infobox").querySelector("span.deathplace").querySelector("a")
maryleboneAnchor.constructor
// ƒ HTMLAnchorElement() { [native code] }
```
By calling the selected element's `constructor` property, we can see that `maryleboneAnchor` is an "instance" of an `HTMLAnchorElement`. Many methods on this instance correspond to the potential attributes of an HTML anchor. For example, `maryleboneAnchor.href` returns `"/wiki/Marylebone"`, `maryleboneAnchor.text` returns `"Marylebone"`.

---
* There are tons of selectors so google them when guessing doesnt work.
  * Adding `.innerHTML` returns the text inside the html id or tag selected by `querySelector` in the `console`
  * Adding `.text` returns the text that a hyperlink is connected that the `querySelector` calls to in the `console`
  * Adding `.href` returns the link that the `querySelector` calls for in the `console`
---
---
* To change a string into a number wrap the variable in `parseInt()`:
```javascript
parseInt(heightSelector.innerHTML)
```
* Or you can remove the quotes around the number to change it from a string to an integer

---
### *How to Link Files*

* To link files together you need to make a variable equal to the path of the file like below:
```javascript
var index = require("./index.js")
```
^this `require()` statement links the variable index to the js file `index.js` so that whenever it is needed you can call upon variables inside `index.js` like so:

```javascript
console.log(index.name)
```

^the output would be the string that is assigned to the variable `name` under `index.js` file

---
## *Operators*

* `===` is the equal to operator where as the `=` is the operator for equals in an equation
* If you wrap a string with back-ticks ( ` ) you can input variables directly into the string statement to print the contents of those variable inside the string:
```javascript
var message = `${name} is ${height} inches tall`
```
^this will print the `name` and `height` variables inside the statement to come out like:
```javascript
var message = `name is height inches tall`
```
* To comment something out use the `/* */` operators with your comment inbetween for a multi-line comment or `//` for a single line comment
* Using `var` is a way to keep a variable local instead of global.  If var is not used and the variable looks like:
```js
word = 'bird'
```

^then that is a global variable and can be dangerous and cause issues later on in the browser window.  When changing a variables value you do not need `var` in fornt of it since it has been called out earlier.
 
* 

 ---
