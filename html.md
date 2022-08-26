# **HTML Notes**
---
### *Definitions w/Examples*
---

1. `<head></head>` Contains non-visuals that make the site function
2. `<body></body>` Contains main content 

3. `<--! text -->` Replace text with comment (comment tag)
4. `<p></p>` Paragraph tag to start/end paragraphs
5. `<h1></h1>` Header/Titles that range in size from h1=biggest to h6=smallest
6. `<br>` Line break similar to clicking enter
7. `<title></title>` Contains the text that shows on browser tab
8. `<hr/>` Puts horizontal line after text, img, audio, etc...
 
#### *Example for 1-8*
---
```html
<!DOCTYPE>
<html>
  <head>
    <title>This is on the browser tab</title>
  </head>
  <body>
     <h1>Profile</h1>
    Hello, my name is Justin. 
<br>
     These are my notes.
    <p>
    This is a paragraph that contains text. 
    </p>
  </body>
  <!-- This is a comment -->
</html>
```
---
#### *Example of Image Source*
 ```html
    <img src="url/path of image here">
```
---
#### *Examples of Different Links*

* Links are wrapped with `<a href="link goes here">`

```html
<a href="http://example.com">This is a text link</a>
```
```html
<a href="http://example.com">
  <img src="myimage.jpg" alt="Alternate text">This is an image link
</a>
```
```html
<a href="mailto:webmaster@example.com">This is an email link</a>
```
```html
<a href="tel:555-555-5555">This is a phone number link</a>
```
```html
<p id="tips">Useful Tips Section</p>
<a href="#tips">Jump to Useful Tips Section</a>
This is a link to jump to a section
```
---
#### *Realative File Path*
```html
about.html
```
#### *Absolute File Path*
```html
http://example.com/about.html
```
---
