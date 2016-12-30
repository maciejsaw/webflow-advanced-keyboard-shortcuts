# webflow-advanced-keyboard-shortcuts
Advanced keyboard shortcuts for Webflow.io interface

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
