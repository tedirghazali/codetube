/*!
* CtEditor v0.0.1
* (c) 2018-2019 Tedir Ghazali
* Released under the Apache License 2.0
*/

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.CtEditor = factory());
}(this, (function () { 'use strict';

    var defaults = {
        name: 'editor',
        version: '0.0.1',
        el: '.ct-text-editor'
    }
     
    function Editor(element) {
        this.element = element;
    }
        
    Editor.prototype.toolbar = function () {
        var txtEditor = document.querySelector(this.element);
            var barEditor = document.createElement('div');
            barEditor.classList.add('ct-editor-toolbar');
            var toolEditor = '';
            toolEditor += '<div class="ct-editor-toolbar-left">';
            toolEditor += '<div class="btn-group btn-group-sm mr-1">';
            toolEditor += '<button type="button" class="btn btn-secondary ct-editor-button" data-button="undo" title="Undo"><i class="fa fa-undo"></i></button>';
            toolEditor += '<button type="button" class="btn btn-secondary ct-editor-button" data-button="redo" title="Redo"><i class="fa fa-repeat"></i></button>';
            toolEditor += '</div>';
            toolEditor += '<div class="btn-group btn-group-sm mr-1 ct-dropdown">';
            toolEditor += '<button class="btn btn-secondary dropdown-toggle" type="button"><i class="fa fa-header"></i> <span class="dropdown-text">Heading</span></button>';
            toolEditor += '<div class="dropdown-menu ct-headings"></div>';
            toolEditor += '</div>';
            toolEditor += '<div class="btn-group btn-group-sm mr-1 ct-dropdown">';
            toolEditor += '<button class="btn btn-secondary dropdown-toggle" type="button"><i class="fa fa-font"></i> <span class="dropdown-text">Font</span></button>';
            toolEditor += '<div class="dropdown-menu ct-fontnames"></div>';
            toolEditor += '</div>';
            toolEditor += '<div class="btn-group btn-group-sm mr-1 ct-dropdown">';
            toolEditor += '<button class="btn btn-secondary dropdown-toggle" type="button"><i class="fa fa-text-height"></i> <span class="dropdown-text">16px</span></button>';
            toolEditor += '<div class="dropdown-menu ct-fontsizes"></div>';
            toolEditor += '</div>';
            toolEditor += '<div class="btn-group btn-group-sm mr-1">';
            toolEditor += '<button type="button" class="btn btn-secondary ct-editor-button" data-button="bold" title="Bold"><i class="fa fa-bold"></i></button>';
            toolEditor += '<button type="button" class="btn btn-secondary ct-editor-button" data-button="italic" title="Italic"><i class="fa fa-italic"></i></button>';
            toolEditor += '<button type="button" class="btn btn-secondary ct-editor-button" data-button="underline" title="Underline"><i class="fa fa-underline"></i></button>';
            toolEditor += '</div>';
            toolEditor += '<div class="btn-group btn-group-sm mr-1">';
            toolEditor += '<button type="button" class="btn btn-secondary ct-editor-button" data-button="justifyLeft" title="Align Left"><i class="fa fa-align-left"></i></button>';
            toolEditor += '<button type="button" class="btn btn-secondary ct-editor-button" data-button="justifyCenter" title="Align Center"><i class="fa fa-align-center"></i></button>';
            toolEditor += '<button type="button" class="btn btn-secondary ct-editor-button" data-button="justifyRight" title="Align Right"><i class="fa fa-align-right"></i></button>';
            toolEditor += '<button type="button" class="btn btn-secondary ct-editor-button" data-button="justifyFull" title="Align Justify"><i class="fa fa-align-justify"></i></button>';
            toolEditor += '</div>';
            toolEditor += '<div class="btn-group btn-group-sm mr-1">';
            toolEditor += '<button type="button" class="btn btn-secondary ct-editor-button" data-button="insertOrderedList" title="Ordered List"><i class="fa fa-list-ol"></i></button>';
            toolEditor += '<button type="button" class="btn btn-secondary ct-editor-button" data-button="insertUnorderedList" title="Unordered List"><i class="fa fa-list-ul"></i></button>';
            toolEditor += '</div>';
            toolEditor += '<div class="btn-group btn-group-sm mr-1">';
            toolEditor += '<button type="button" class="btn btn-secondary ct-editor-button" data-button="insertParagraph" title="Paragraph"><i class="fa fa-paragraph"></i></button>';
            toolEditor += '<button type="button" class="btn btn-secondary ct-editor-button" data-button="strikeThrough" title="Strike Through"><i class="fa fa-strikethrough"></i></button>';
            toolEditor += '<button type="button" class="btn btn-secondary ct-editor-button" data-button="superscript" title="Superscript"><i class="fa fa-superscript"></i></button>';
            toolEditor += '<button type="button" class="btn btn-secondary ct-editor-button" data-button="subscript" title="Subscript"><i class="fa fa-subscript"></i></button>';
            toolEditor += '</div>';
            toolEditor += '</div>';
            toolEditor += '<div class="ct-editor-toolbar-right">';
            toolEditor += '<div class="btn-group btn-group-sm">';
            toolEditor += '<button type="button" class="btn btn-secondary ct-view-text" title="View as Text"><i class="fa fa-pencil-square-o"></i></button>';
            toolEditor += '<button type="button" class="btn btn-secondary ct-view-html" title="View as HTML"><i class="fa fa-code"></i></button>';
            toolEditor += '</div>';
            toolEditor += '</div>';
            barEditor.innerHTML = toolEditor;
            txtEditor.insertBefore(barEditor, txtEditor.childNodes[0]);
        }
        
    Editor.prototype.toolaction = function () {
            Array.prototype.forEach.call(document.querySelectorAll('.ct-editor-button'), function(elem){
                elem.onclick = function(e) {
                    e.preventDefault();
                    document.execCommand(elem.getAttribute('data-button'));
                }
            })
        }
        
    var editor = new Editor(defaults.el);
    editor.toolbar();
    editor.toolaction();
        
        return Editor;
    
})));
