```html
<!DOCTYPE html>
<html lang='en'>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'>
    <link rel="shortcut icon" href="rice.ico" type="image/x-icon" />
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <script src='js/jquery/jquery.min.js'></script>
    <script src='js/jquery/jquery.qrcode.min.js'></script>
    <script src='js/velocity/velocity.min.js'></script>
    <script src='js/marked/marked.min.js'></script>
    <script src='js/mermaid/dist/mermaid.min.js'></script>
    <script src='js/clipboard/clipboard.js'></script>
    <script src='js/utils/myutils.js'></script>
    <script src='js/d3/d3.min.js'></script>
    <script src='js/md5/md5.min.js'></script>
    <link href="css/prettify.css" type="text/css" rel="stylesheet" />
    <script src='prettify/prettify.js'></script>
    <link rel='stylesheet' type='text/css' href='js/mermaid/dist/mermaid.dark.css'>
     <link type="text/css" rel="stylesheet" href="css/font-awesome.min.css">
     <link type="text/css" rel="stylesheet" href="css/jsmind.css">
     <link type="text/css" rel="stylesheet" href="css/my_md.css">
</head>

<body style='background-color: #ccc;'>
    <a class="home" href="/my_note/">回到首页</a>
    <a id="menuBtn" class="menu_btn"><i class="fa fa-bars"></i></a>
    <div id="menuMask" class="mask hide"></div>
    <div id="menuDiv" class="menu_div hide">
        <ul id="menuUl"></ul>
    </div>
    <div id='preview'></div>
    <div id='md'>
        
    </div>

    <section class="bottom_icons">
        <ul>
            <li onclick="closeFootBtn();"><i class="fa fa-close"></i></li>
            <li><a href="/my_note/"><i class="fa fa-home"></i></a></li>
            <li onclick="slideUp();"><i class="fa fa-chevron-up"></i></li>
        </ul>
    </section>
    <script src="my/my_mind.js"></script>
    <script src="my/my_renderer.js"></script>
    <script src="my/my_markdown.js"></script>

    <script>
        function closeFootBtn(){
            $(".bottom_icons").remove();
        }

        function slideUp(){
            $("body").velocity("scroll", { duration: 500});
        }
    </script>
</body>

</html>
```html
