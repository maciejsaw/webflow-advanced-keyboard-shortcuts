// ==UserScript==
// @name         Webflow Advanced Keyboard Shortcuts
// @namespace    http://webflow.com/
// @version      0.1
// @description  Webflow Advanced Keyboard Shortcuts
// @author       Maciej Sawicki
// @match        https://webflow.com/design/*
// @run-at       document-idle
// ==/UserScript==

var foundWebflowEditorIframe = false;

function checkIfWebflowIframeLoaded() {
    var $iframe = $(document).find('#site-iframe-next').contents();
    if ($iframe.length !== 1) {
         return false;
    } else if ($iframe.length === 1) {
        return true;
    }
}

var timer;
timer = setInterval(function() {
      if ( checkIfWebflowIframeLoaded() === true ) {
          clearInterval(timer);
          initWebflowAdvancedKeyboardShortcuts();
          console.log("Webflow Advanced Keyboard Shortcuts: Automatically initiated via Greasemonkey script");
      } else {
          console.log("Webflow Advanced Keyboard Shortcuts: Webflow designer is not ready yet");
      }
}, 2000);

function initWebflowAdvancedKeyboardShortcuts() {
    var WebflowAdvancedKeyboardShortcuts = (function() {
        var version = "1.1";

        //After clicking Esc on keyboard, the iframe is in focus so we need to bind the keys
        //for both "documents": parent document and site iframe.
        var $iframe = $(document).find('#site-iframe-next').contents();
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
                clickInStyleTab('.css-selector .editable > div');
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
        };

    })();

    WebflowAdvancedKeyboardShortcuts.init();
}
