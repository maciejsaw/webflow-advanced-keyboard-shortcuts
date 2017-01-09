# Webflow Advanced Keyboard Shortcuts
Additional keyboard shortcuts for Webflow.io interface

![webflow-logo](http://uploads.webflow.com/55e93f06d996a5894512d00d/55dd1a448f79b836280d697f_png.png)

## Available shortcuts
* Shift + Alt --> Edit "Class" for selected element
* Enter --> Edit the text in the selected element
* Shift + F --> Quick access to font size
* Shift + Arrow Up / Down / Left / Right --> Quick access to padding increase/decrease
* Shift + P --> Publish website

## How to setup?

![gif](https://github.com/maciejsaw/webflow-advanced-keyboard-shortcuts/raw/master/keyboard%20webflow.gif)

1) Open your browser developer tools

2) Go to the console tab

3) Paste the following code into the console

```javascript
var WebflowAdvancedKeyboardShortcuts = (function() {
    var version = "1.1";

    //After clicking Esc on keyboard, the iframe is in focus so we need to bind the keys 
    //for both "documents": parent document and site iframe. 
    var $iframe = $(document).find('#site-iframe').contents();
    var $iframeDocument = $($iframe[0]); //this gets the document object of the iframe
    var $bothDocuments = $(document).add($iframeDocument);

    function clickInStyleTab(selector) {
        $('.style-tab').click();
        setTimeout(function() {
            $(selector).click();
        }, 50); //this delay is needed to make sure that the right panel tab is switched
    }

    function focusInStyleTab(selector) {
        $('.style-tab').click();
        setTimeout(function() {
            $(selector).focus();
        }, 50); //this delay is needed to make sure that the right panel tab is switched
    }

    function bindKeydownForClassInput() {
        $bothDocuments.bind('keydown', 'shift+alt', function() {
            clickInStyleTab('.token.add, .need-class');
        });
    }

    function bindEnterKey() {
        $bothDocuments.bind('keydown', 'return', function() {
            $iframe.find('.wf-selected').dblclick();
        });
    }

    function bindFontSize() {
        $bothDocuments.bind('keyup', 'shift+f', function() {
            focusInStyleTab('.font-size.pull-left  .kit-unit-box.kit-text-input .input');
        });
    }

    function bindPadding() {
        $bothDocuments.bind('keyup', 'shift+up', function() {
            clickInStyleTab('.padding .label.top');
        });
        $bothDocuments.bind('keyup', 'shift+down', function() {
            clickInStyleTab('.padding .label.bottom');
        });
        $bothDocuments.bind('keyup', 'shift+left', function() {
            clickInStyleTab('.padding .label.left');
        });
        $bothDocuments.bind('keyup', 'shift+right', function() {
            clickInStyleTab('.padding .label.right');
        });
    }

    function bindPublishButton() {
        $bothDocuments.bind('keydown', 'shift+p', function() {
            setTimeout(function() {
                console.log($("#publish-targets"));
                console.log($('#publish-targets').find('.primary.publish'));
                $('#publish-targets').find('.primary.publish').trigger('click');
            }, 200);
        });
    }

    function init() {
        $.getScript("https://cdn.rawgit.com/jeresig/jquery.hotkeys/master/jquery.hotkeys.js", function() {
            console.log('jQuery Hotkeys loaded');
            bindKeydownForClassInput();
            bindEnterKey();
            bindPadding();
            bindFontSize();
            bindPublishButton();
        });
    }

    return {
        version: version,
        init: init,
    }

})();

WebflowAdvancedKeyboardShortcuts.init();

```

Note: You need to run this script each time you reload the page Webflow designer interface, but you don't need to remember the code. You can simply hit the arrow up to reuse the last command, or you can also save this as a snippet in Chrome "Sources" tab - right click in the Snippets sub-tab and select "New".

4) Enjoy your advanced keyboard shortcuts

## Bookmarklet

You can also add a quick one click bookmark that will enable the advanced keyboard shortcuts. 
1. Drag this link into your bookmarks bar: [Webflow Advanced Keyboard](javascript:void%20function(){var%20n=function(){function%20n(n){$(%22.style-tab%22).click(),setTimeout(function(){$(n).click()},50)}function%20t(n){$(%22.style-tab%22).click(),setTimeout(function(){$(n).focus()},50)}function%20i(){r.bind(%22keydown%22,%22shift+alt%22,function(){n(%22.token.add,%20.need-class%22)})}function%20e(){r.bind(%22keydown%22,%22return%22,function(){d.find(%22.wf-selected%22).dblclick()})}function%20o(){r.bind(%22keyup%22,%22shift+f%22,function(){t(%22.font-size.pull-left%20%20.kit-unit-box.kit-text-input%20.input%22)})}function%20u(){r.bind(%22keyup%22,%22shift+up%22,function(){n(%22.padding%20.label.top%22)}),r.bind(%22keyup%22,%22shift+down%22,function(){n(%22.padding%20.label.bottom%22)}),r.bind(%22keyup%22,%22shift+left%22,function(){n(%22.padding%20.label.left%22)}),r.bind(%22keyup%22,%22shift+right%22,function(){n(%22.padding%20.label.right%22)})}function%20c(){r.bind(%22keydown%22,%22shift+p%22,function(){setTimeout(function(){console.log($(%22%23publish-targets%22)),console.log($(%22%23publish-targets%22).find(%22.primary.publish%22)),$(%22%23publish-targets%22).find(%22.primary.publish%22).trigger(%22click%22)},200)})}function%20f(){$.getScript(%22https://cdn.rawgit.com/jeresig/jquery.hotkeys/master/jquery.hotkeys.js%22,function(){console.log(%22jQuery%20Hotkeys%20loaded%22),i(),e(),u(),o(),c()})}var%20s=%221.1%22,d=$(document).find(%22%23site-iframe%22).contents(),l=$(d[0]),r=$(document).add(l);return{version:s,init:f}}();n.init()}();)   
2. Click it when inside Webflow designer
3. If you don't use bookmarks bar, you can also just go to this bookark from the address bar


## How to use shortcuts?

* Shift + Alt --> Simply click [Shift] + [Alt] to focus the class selector. This is useful when adding classes to newly-placed elements.

![gif2](https://raw.githubusercontent.com/maciejsaw/webflow-advanced-keyboard-shortcuts/master/keyboard%20webflow2.gif)

* Text editing with "Enter" key and "Esc" --> When a text element is selected, it will enter text editing mode. Use "Esc" to leave
* Shift + F --> It will open font size increment window. Use [Up/Down] arrow keys to increase or decrease the font size, then use [Esc] when you're done
* Shift + Arrow Up / Down / Left / Right --> Opens a window to nudge respective padding: top, right, bottom or left. For example, use [Shift]+[Down] and then use [Up/Down] keys to increment padding-down by 1px. Hit [Enter] or [Esc] when you're done.
* Shift + P --> Publish website

## Additional info
* This snippet uses the [jQuery Hotkeys](https://github.com/jeresig/jquery.hotkeys) library 
* More keyboard shortcuts will be added in the future, so check back for updates!

## Also see 
* Webflow built-in keyboard shortcuts
