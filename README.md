# Webflow Advanced Keyboard Shortcuts
Advanced keyboard shortcuts for Webflow.io interface

![webflow-logo](http://uploads.webflow.com/55e93f06d996a5894512d00d/55dd1a448f79b836280d697f_png.png)

## Available shortcuts
* shift + alt --> It will focus "Class" input in top right

## How to setup?

![gif](https://github.com/maciejsaw/webflow-advanced-keyboard-shortcuts/raw/master/keyboard%20webflow.gif)

1) Open your browser developer tools

2) Go to the console tab

3) Paste the following code into the console

```javascript
(function() {
    // Load the jQuery Hotkeys script
    var script = document.createElement("SCRIPT");
    script.src = 'https://rawgit.com/jeresig/jquery.hotkeys/master/jquery.hotkeys.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);
})();

setTimeout(function() {
    $(document).bind('keydown', 'shift+alt', function() {
        $('.token.add').click();
        $('.need-class').click();
    });
}, 4000); //4 seconds timeout because we wait for the script the first script to load

```

4) Click shift+alt to focus on "Class" input 

5) You need to do this each time you reload the page Webflow designer interface, but you don't need to remember the code. You can simply hit the arrow up to reuse the last command. 

6) TIP: You can also save this as a snippet in Chrome "Sources". Right click in the Snippets tab and choose "New"

## How to use shortcuts?

Simply click shift+alt to focus on the class. 
Note how useful this is when adding new elements.


## Additional info
* This snippet loads the jQuery Hotkeys library 
* Then it binds the shift+alt to click the "Class" input
* In future we can add more keyboard shortcuts
