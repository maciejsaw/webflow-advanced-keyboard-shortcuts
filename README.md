# Webflow Advanced Keyboard Shortcuts
Advanced keyboard shortcuts for Webflow.io interface

![webflow-logo](http://uploads.webflow.com/55e93f06d996a5894512d00d/55dd1a448f79b836280d697f_png.png)

## Available shortcuts
* Shift + Alt --> It will focus "Class" input in top right
* Text editing with "Enter" key and "Esc" --> When a text element is selected, it will enter text editing mode. Use "Esc" to leave  

## How to setup?

![gif](https://github.com/maciejsaw/webflow-advanced-keyboard-shortcuts/raw/master/keyboard%20webflow.gif)

1) Open your browser developer tools (Google Chrome: F12)

2) Go to the console tab

3) Paste the following code into the console

```javascript
var AKS = {
    version: "1.0",
    
    bindKeydownForClassInput: function() {
        this.bothDocuments.bind('keydown', 'shift+alt', function() {
            $('.style-tab').click();
            setTimeout(function() {
                $('.token.add, .need-class').click();
            }, 50); //this delay is needed to make sure that the right panel tab is switched
        });
    },
    
    bindEnterKey: function() {
        this.bothDocuments.bind('keydown', 'return', function() {
            this.iframe.find('.wf-selected').dblclick();
        });
    },
    
    init: function() {
        console.log('Webflow Advanced Keyboard Shortcuts v' + this.version);

        // After clicking Esc on keyboard, the iframe is in focus so we need to bind the keys 
        // for both "documents": parent document and site iframe
        this.iframe = $(document).find('#site-iframe').contents();
        this.iframeDocument = $(AKS.iframe[0]); //this gets the document object of the iframe
        this.bothDocuments = $(document).add(AKS.iframeDocument);
        
        $.getScript("https://cdn.rawgit.com/jeresig/jquery.hotkeys/master/jquery.hotkeys.js", function() {
            console.log('jQuery Hotkeys loaded.');
            AKS.bindKeydownForClassInput();
            AKS.bindEnterKey();
        });
    }
};
AKS.init();
```

4) Click [Shift]+[Alt] to focus the class selector

Note: You need to run this script each time you reload the page Webflow designer interface, but you don't need to remember the code. You can simply hit the arrow up to reuse the last command, or you can also save this as a snippet in Chrome "Sources" - right click in the Snippets tab and choose "New".

## How to use shortcuts?

Simply click [Shift] + [Alt] to focus the class selector. 
This is useful when adding classes to newly-placed elements.

![gif2](https://raw.githubusercontent.com/maciejsaw/webflow-advanced-keyboard-shortcuts/master/keyboard%20webflow2.gif)


## Additional info
* This snippet loads the [jQuery Hotkeys](https://github.com/jeresig/jquery.hotkeys) library, then it binds [Shift] + [Alt] to click the class selector
* More keyboard shortcuts will be added in the future, so check back for updates!


## Also see 
* Webflow built-in keyboard shortcuts
