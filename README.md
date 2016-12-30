# Webflow Advanced Keyboard Shortcuts
Advanced keyboard shortcuts for Webflow.io interface

![webflow-logo](http://uploads.webflow.com/55e93f06d996a5894512d00d/55dd1a448f79b836280d697f_png.png)

## Available shortcuts
* shift + alt --> It will focus "Class" input in top right

## How to?
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

## Additional info
* This snippet loads the jQuery Hotkeys library 
* Then it binds the shift+alt to click the "Class" input
* In future we can add more keyboard shortcuts
