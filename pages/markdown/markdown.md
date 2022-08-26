<!-- It is not intended to be complete or have all option available, but continues improvent will occur in the future -->

# Markdown Notes

Markdown is very useful in GitHub readme files, Jupyter Notebooks, blogs, wikis, and other applications in the web.

It is a simple way to provide format to documentes, and simpler than formating a traditional web page with html, css, and also it can be converted to HTML very easily.

You can use any text editor to write markdown, but there are useful tools to see inmediately the results of your markdown, for example if you use Chrome as web browser, you can add the app Minimalist Markdown. Another example if you use VS Studio you can add the extension Auto-Open Markdown Viewer.

I do not intend to present all Markdown options (although I plan to improve it), only some usefull ones, but I encourage anyone reading to explore other tutorials, see markdown files form diverse sources and explore the code, and use it in your own mardown files, it is really fun.

I have divided this tutorial in several sections. Each part shows an example of how is seen in the browser, and the in the code.  

*****

## Contents
- [Header options](#header-options)
- [Formating text options](#text-options)
- [Quoting text](#quoting-text)
- [List options](#lists-options)
- [Task list](#task-list)
- [Formating a table](#table-format)
- [Adding links](#adding-links)
- [Adding images](#adding-images)
- [Adding videos](#adding-videos)
- [Including code](#including-code)
- [HTML options](#html-options)
- [Terminology](#terminology)
- [Additional references](#additional-references)

*****

## Header options
Headers are ussually the first thing you type at the begining of your document. There are several size options dependind on the number of # (hashtags) you type before the text (from 1 to 6). In this example I only show the first three options.

# Header size 1
> _Code example:_
```
# Header size 1
```

## Header size 2
> _Code example:_
```
## Header size 2
```

### Header size 3
> _Code example:_
```
### Header size 3
```

*****

## Text options
Formating text is very important, to highlight or differentiate from the rest of the text. Two common options are to use the single characters _ or * for _italic text_ or to use the same characters but double for __bold text__.

_Italic text_
> _Code example:_
```
_Italic text_
```

__Bold text__ 
> _Code example:_
```
__Bold text__
```

*****

## Quoting text
Quoting text is also very common when you want to highligh text from a different author, or copying something from a different source.

> “Don’t let the noise of others’ opinions drown out your own inner voice.”
>                           ― Steve Jobs

> _Code example:_
```
> “Don’t let the noise of others’ opinions drown out your own inner voice.”           
>                           ― Steve Jobs
```

*****

## Lists options 
Listing data is also a comon way to organize objects or elements in a document. You can use -, +, or * characteres

Example using -:
- list element
- list element
> _Code example:_
```
- list element
- list element
```

And if you want to use number your elements in a list is very simple.

Numbered lists:
1. numbered element
2. numbered element
> _Code example:_
```
1. numbered element
2. numbered element
```

Combing lists (sublists)
- list element
    + hello
    + world
- list element
> _Code example:_
```
- list element
    + hello
    + world
- list element
```

- list element
    1. hello
    2. world
- list element
> _Code example:_
```
- list element
    1. hello
    2. world
- list element
```

## Task list
Lists can also be useful to specify if a task has been completed or not.
- [x] element completed
- [ ] element not completed
> _Code example:_
```
- [x] element completed
- [ ] element not completed
```

*****

## Table format
Creating a table is very easy in markdown, and very useful to organize information when lists are not enough.

Android | iOS | Windows
--- | --- | ---
Facebook | Instagram | Twitter
Hotmail | Yahoo | Gmail
> Code:
```
Android | iOS | Windows
--- | --- | ---
Facebook | Instagram | Twitter
Hotmail | Yahoo | Gmail
```

*****

## Adding links
Adding links is very important and not only to add external resources, also to roganize the content of your document.

[Google](http://www.google.com)
> _Code example:_
```
[Google](http://www.google.com)
```

*****

## Adding images
Adding images if you want to provide graphics.

![Markdown](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/312px-Markdown-mark.svg.png
 "Markdown logo")
 > _Code example:_
```
![Markdown](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/312px-Markdown-mark.svg.png
 "Markdown logo")
```

*****

## Adding videos
I do not have a video of my own yet, but you can add any video available on the internet with this format. In the meantime I have included a Mardown video by [Traversy Media](https://www.traversymedia.com/).

[![Markdown Crash Course](https://img.youtube.com/vi/HUBNt18RFbo/default.jpg)](https://youtu.be/HUBNt18RFbo)
> _Code example:_
```
[![Markdown Crash Course](https://img.youtube.com/vi/HUBNt18RFbo/default.jpg)](https://youtu.be/HUBNt18RFbo)
```
A special note here when adding Youtube videos. The format is:
```
[![Video description](https://img.youtube.com/vi/<video id>/<default.jpg or 0.jpg will be enough>)](https://youtu.be/<video id>)   
```
## Including code
Adding code is very common if you are related to software programming or devops.

For one line code we use a single back quote (backtick) at the beggining and end of the code:
`single line of code`

For block of code we triple back quotes at the begining and end of the code:
```
import math
def func():
   for if
```
We can specify the code type to include some code formating, for example in this case we specify python after the first three back quotes:
``` python
import math
def func():
   for if
```

## HTML Options
You can use some html formating options.
For example you can add coments in your files the same way than in html files. Of couse the comments are not going to be seen on the browser, only your editor.
<!-- This is a comment -->
> _Code example:_
```
<!-- This is a comment -->
```
Also you can add headers in HTML format.

<h3>Hello world</h3>

> _Code example:_

```
<h3>Hello world</h3>
```

*****

## Terminology

*****

## Additional references

[Markdown on Wikipedia](https://en.wikipedia.org/wiki/Markdown).

What is Markdown? by [Codecademy](https://www.codecademy.com/).

[![Markdown Crash Course](https://img.youtube.com/vi/f49LJV1i-_w/default.jpg)](https://youtu.be/f49LJV1i-_w)


Markdown Crash Course by [Traversy Media](https://www.traversymedia.com/).

[![Markdown Crash Course](https://img.youtube.com/vi/HUBNt18RFbo/default.jpg)](https://youtu.be/HUBNt18RFbo)

*****

 <!--Also pending to add separators, strikethrough, escape character-->
