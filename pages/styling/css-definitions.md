# **CSS Definitions**
---
## *Definitions with Examples*
---
#### In order to select specific items you must use the tag from html to identify what CSS will do
###### *CSS*
```CSS
h1 {
  color: red
}
```
##### This is called a CSS Block ^
###### *HTML*
```html
<h1>This Is My Header</h1> 
```
#### This will change anything in the tag called out to be red
---
In order to select multiple tags for different CSS just make a new block and seperate similar tags the `id=` attribute or `class=` attribute
```html 
<p id="id"></p>
<span class="class"></span>
```

```CSS
h1 {
  color: red;
}
 
p {
  font-weight: bold;
}

#id {
    font-size: 15px
}

.class {
  font-weight: bold;
}
```
---
---
### *CSS Selectors*

* #### Compound
```CSS
h1, h2, #box {
  font-family: Arial, Helvetica, sans-serif;
}
```
^This selects all matched elements in the compound set. This selector is indicated by a `,` comma separating the selectors of the set. Each element within the comma separated list will be styled the same.

* #### Descendent
```CSS
#nav li {
  background: blue;
}
```
^This selects an element that is nested inside of the specified parent element. This selector is indicated by a keyboard space between the parent and the child to be selected.

* #### Child
```CSS
#list > li {
  border: 1px solid black;
}
```
^This selects an element that is nested only one level deep inside of the specified parent element. It only selects direct children and not grandchildren. This selector is indicated by a `>` (greater than) symbol between the parent and the child to be selected.

* #### Adjacent Sibling
```CSS
h3 + p {
  color: green;
}
```
^This selects an element that appears directly after the former element assuming they are both siblings (in the same level of nesting, in the same parent). This selector is indicated by a `+` plus symbol between the former sibling and the selected element that follows.

* #### General Sibling
```CSS
h2 ~ p {
  color: black;
}
```
^This selects all elements that appear directly after the former element. This selector is indicated by a `~` tilde symbol between the former sibling and the selected element that follows it

* #### Universal
```CSS
* {
  color: orange;
}
```
^This selects elements where the properties specified have not been styled by any other selectors. This selector is indicated by an `*` asterisk symbol.

* #### Attribute
```CSS
img[alt="Cat"] {
  border: 1px solid black;
}
```
^This selects an element with a matching attribute value. This selector is indicated by `[]` square brackets, followed by the attribute property and value of the selected element within the brackets.

---
---
* #### Other Attribute Selectors:
```CSS
a[href^="http"] 
```
^The `^=` caret symbol and equals sign select elements that start with the matching value, such as `<a href="http://google.com">google</a>`

---
```CSS
p[class$="dog"] 
```
^The `$=` dollar and equals signs select elements that end with the matching value, such as `<p class="bigbdog">...</p>`

---
```CSS
img[alt*="love"]
```
^The `*=` asterisk and equals sign select elements that have the matched characters appearing anywhere within the value, such as `<img src="myimage.jpg" alt="I love you.">`

---
```CSS
p[class~="monkey"] 
```
^The `~=` tilde symbol and equals sign select elements that contain the term within a space separated value, such as `<p class="zoo monkey details">...</p>`

---
```CSS
p[class|="birds"] 
```
^The `|=` pipe symbol selects elements that contain the term within a dash separated value, such as `<p class="new-birds-today">...</p>`

---
#### Psuedo Class
```CSS
a:link {
  text-decoration: none;
}
```
^This selects an element based on the unique relationship or state described in the selector. This selector is indicated by the `:` colon symbol, followed by the pseudo class that describes the element's state or positioning amongst other elements.

* #### Other Psuedo Selectors:
```CSS
a:link
```
^selects links in their default state before the visitor has interacted with them.

---
```CSS
a:visited 
```
^selects links after the user has already clicked on them and is visiting that page again.

---
```CSS
a:hover
```
^selects links when the user is hovering their mouse over the link.

---
```CSS
a:active 
```
^selects links for only the moment when the mouse button is pressed when clicking on the link.

---
```CSS
p:first-child
```
^selects elements that are the first child when appearing inside a common parent. Such as:
###### *HTML*
```html
<div><p>I'm selected</p><p>I'm not</p><p>Neither am I</p></div>
```
---
```CSS
p:last-child
```
^selects elements that are the last child when appearing inside a common parent. Such as:
###### *HTML*
```html
<div><p>I'm not selected</p><p>Neither am I</p><p>I'm selected</p></div>
```

---
See video on CSS "Styling the Front-End": [video](https://youtu.be/-k-1TU8qq0Q?t=9)

---
# CSS Udemy Notes

## Basics (See MDN Web Docs for Specifics)
---
* Text Properties
  
  * Text-Align:
    * Sets the text alignment within the element itself
      * text-align: left/right/center/justify;

  * Font-Weight:
     * Controls the blodness of the font in the element
        * font-weight: bold/normal/lighter/bolder/100/900;
          * The numbers are a variation of boldness in weights
  
  * Text-Decoration:
    * Controls the appearance of decoravtive lines on text
      * text-decoration: underline/overline/line-through
      * You can specify color and style before the decoration as well
        * text-decoration: color decoration style ;

  * Line-Height:
    * Controls height of the line of text for that element
      * You can use the various units to change the height
        * line-height: 1/0.5/2/15px/1.5em
  
  * Letter-Spacing:
    * Controls the spacing between the letters
      * letter-spacing: 1px/1.5em
        * You can use the various units to change the spacing
  
  * Font-Family:
    * Changes the fonts on the page or element
      * font-family: Arial, sans-serif;
        * font-family: first choice, back-up choice;
      * Fonts must be installed via browser or on the system already
---          
## Box Model
---

```CSS
#div {
  width : 200px;
  height: 200px;
  border-width: 2px;
  border-color: black;
  border-style: solid;
  padding: 15px;
  margin: 5px;
}
```
* You can use various units or styles to set the box model inputs
  * The border grows inward from the box width & height
* padding is the space between content and border (top|right|bottom|left or single for for all for sides to be equal)
* margin is the space outside of the border between itself and other elements (top|right|bottom|left or single for for all for sides to be equal)

#### Border In One Line
```CSS
#div{
  border-style: dashed solid;
  border: medium solid black;
  border-radius: 5px;
}
```
* border-style: dashed solid; sets top/bottom then left/right(The more added then moves clockwise left to right starting at the top)
* border sets all attributes in one line (width|style|color)
* border-radius sets the corners of the box to be round

#### Display Property
```CSS
#div{
  inline: ;
  block: ;
  inline-block: ;
}
```
* inline level elements only take up the space of their content like spans
* block level elements span the entire body like the html headers
* inline-block elements behave like inline elements except width/height/margin/padding and respected

#### Postion Property
```css
#div{
  position: static;
  position: relative;
  top: 5px;
  bottom: 6px;
  left: 2px;
  right: 4px;
  position: absolute;
}
```
* postions sets how an element is positioned in the document via top/right/bottom/left (static is default)
* postion: relative; allows you to offset the element by the various units
* position: absolute; ignores the document flow and takes up no space (things will overlap it) and it refernces off the top left corner of the document or closest ancestor and allows you to offset the element by the various units
