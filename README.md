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
//load the jQuery hotkeys script and bind keys
$.getScript("https://cdn.rawgit.com/jeresig/jquery.hotkeys/master/jquery.hotkeys.js", function() {
    $(document).bind('keydown', 'shift+alt', function() {
        $('.style-tab').click();
        setTimeout(function() {
            $('.token.add, .need-class').click();
        }, 50); //this delay is needed to make sure that the right panel tab is switched
    });
});
```

4) Click shift+alt to focus on "Class" input 

5) You need to run this script each time you reload the page Webflow designer interface, but you don't need to remember the code. You can simply hit the arrow up to reuse the last command. 

6) TIP: You can also save this as a snippet in Chrome "Sources". Right click in the Snippets tab and choose "New"

## How to use shortcuts?

Simply click shift+alt to focus on the class. 
Note how useful this is when adding new elements.

![gif2](https://raw.githubusercontent.com/maciejsaw/webflow-advanced-keyboard-shortcuts/master/keyboard%20webflow2.gif)


## Additional info
* This snippet loads the [jQuery Hotkeys](https://github.com/jeresig/jquery.hotkeys) library 
* Then it binds the shift+alt to click the "Class" input
* In future we can add more keyboard shortcuts
