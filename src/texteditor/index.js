/*!
* CtEditor v0.0.2
* (c) 2018-2019 Tedir Ghazali
* Released under the Apache License 2.0
*/

import './index.css';

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.CtEditor = factory());
}(this, (function () { 'use strict';

    function CtEditor(options = {}) {
        this.el = options.el;
        this.basicButtons = options.basicButtons;
        this.classButtons = options.classButtons;
        this.viewButtons = options.viewButtons;
        this.buttonDropdowns = options.buttonDropdowns;
        this.classDropdowns = options.classDropdowns;
        this.classDropdownItems = options.classDropdownItems;
        this.init();
    }
    
    CtEditor.prototype.saveSelection = function () {
        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                return sel.getRangeAt(0);
            }
        } else if (document.selection && document.selection.createRange) {
            return document.selection.createRange();
        }
        return null;
    }
    
    CtEditor.prototype.restoreSelection = function (range) {
        if (range) {
            if (window.getSelection) {
                sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            } else if (document.selection && range.select) {
                range.select();
            }
        }
    }
    
    CtEditor.prototype.restoreIESelection = function (range) {
        if (range) {
            if (window.getSelection) {
                sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            } else if (document.selection && range.select) {
                range.select();
            }
        }
    }
    
    CtEditor.prototype.insertTextAtSelection = function (text) {
        var sel, range, html;
        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                range = sel.getRangeAt(0);
                range.deleteContents();
                var textNode = document.createTextNode(text);
                range.insertNode(textNode);
                sel.removeAllRanges();
                range = range.cloneRange();
                range.selectNode(textNode);
                range.collapse(false);
                sel.addRange(range);
            }
        } else if (document.selection && document.selection.createRange) {
            range = document.selection.createRange();
            range.pasteHTML(text);
            range.select();
        }
    }
      
    CtEditor.prototype.toolButton = function (toolbar, arrButton, classButton) {
        arrButton.forEach(function(elem){
            var elemButton = document.createElement('button');
            elemButton.setAttribute('type', 'button');
            elemButton.setAttribute('class', classButton);
            elemButton.setAttribute('data-button', elem.name);
            elemButton.classList.add('ct-'+elem.name);
            elemButton.innerHTML = elem.icon;
            toolbar.appendChild(elemButton);
        })
    }
    
    CtEditor.prototype.actionButton = function (arrButton, uiButton, valButton) {
        Array.prototype.forEach.call(arrButton, function(elem1){
            elem1.onclick = function (e) {
                e.preventDefault();
                document.execCommand(elem1.getAttribute('data-button'), uiButton, valButton);
            }
        })
    }
    
    CtEditor.prototype.viewContent = function (arrButton, valText, valHTML) {
        Array.prototype.forEach.call(arrButton, function(elem2){
            elem2.onclick = function (e) {
                e.preventDefault();
                if(elem2.getAttribute('data-button') == 'html'){
                    var isiText = valText.innerHTML;
                    valHTML.value = isiText;
                    valText.parentNode.replaceChild(valHTML, valText);
                    valHTML.style.backgroundColor = "#ffffff";
                    valHTML.style.color = "#333333";
                    valHTML.style.border = "none";
                } else{
                    var isiHTML = valHTML.value;
                    valText.innerHTML = isiHTML;
                    valHTML.parentNode.replaceChild(valText, valHTML);
                }
            }
        })
    }
    
    CtEditor.prototype.toolDropdown = function (toolbar, arrDropdown, classDropdown, classItem) {
        arrDropdown.forEach(function(elem3){
            var elemDropdown = document.createElement('div');
            elemDropdown.setAttribute('class', classDropdown);
            elemDropdown.classList.add('ct-dropdown');
            var elemButton2 = document.createElement('button');
            elemButton2.setAttribute('type', 'button');
            elemButton2.setAttribute('class', classItem.all);
            elemButton2.classList.add(classItem.button);
            elemButton2.innerHTML = elem3.icon+' <span class="ct-dropdown-text">'+elem3.title+'</span>';
            elemDropdown.appendChild(elemButton2);
            var elemMenu = document.createElement('div');
            elemMenu.classList.add(classItem.menu);
            elemDropdown.appendChild(elemMenu);
            elem3.items.forEach(function(elem4){
                var elemItem = document.createElement('button');
                elemItem.setAttribute('type', 'button');
                elemItem.classList.add(classItem.item);
                elemItem.setAttribute('data-dropdown', elem3.name);
                elemItem.setAttribute('data-value', elem4.value);
                elemItem.innerHTML = elem4.text;
                elemMenu.appendChild(elemItem);
            })
            toolbar.appendChild(elemDropdown);
        })
    }
    
    CtEditor.prototype.actionDropdown = function (arrButton, classItem) {
        Array.prototype.forEach.call(arrButton, function(elem5){
            elem5.onclick = function (e) {
                e.preventDefault();
                var elemToggle = elem5.querySelector('.'+classItem.button);
                var elemMenu2 = elem5.querySelector('.'+classItem.menu);
                var elemToggleText = elemToggle.querySelector('.ct-dropdown-text');
                var elemMenuitem = elemMenu2.querySelectorAll('.'+classItem.item);
                elem5.onclick = function(e){
                    e.preventDefault();
                    elemMenu2.classList.toggle('show');
                }
                Array.prototype.forEach.call(elemMenuitem, function(item){
                    item.onclick = function(){
                        var dataDropdown = item.getAttribute('data-dropdown');
                        var dataValue = item.getAttribute('data-value');
                        document.execCommand(dataDropdown, false, dataValue); 
                        elemToggleText.innerText = item.innerText;
                    }
                })
            }
        })
    }
    
    CtEditor.prototype.keyboardShortcut = function (txtEditor) {
        txtEditor.addEventListener('keypress', function(e){
            e.preventDefault();
            if(e.key == "Enter"){
                document.execCommand('insertParagraph');
            } else if(e.key == "Backspace"){
                document.execCommand('delete');
            } else if(e.key == "Delete"){
                document.execCommand('forwardDelete');
            } else if(e.ctrlKey && e.key == "b"){
                document.execCommand('bold');
            } else if(e.ctrlKey && e.key == "i"){
                document.execCommand('italic');
            } else if(e.ctrlKey && e.key == "u"){
                document.execCommand('underline');
            } else if(e.ctrlKey && e.key == "m"){
                document.execCommand('removeFormat');
            } else if(e.ctrlKey && e.key == "l"){
                document.execCommand('justifyLeft');
            } else if(e.ctrlKey && e.key == "e"){
                document.execCommand('justifyCenter');
            } else if(e.ctrlKey && e.key == "r"){
                document.execCommand('justifyRight');
            } else if(e.ctrlKey && e.key == "j"){
                document.execCommand('justifyFull');
            }
        })
    }
    
    CtEditor.prototype.init = function () {
        var areaEditor = document.querySelector(this.el);
        var wrapEditor = document.createElement('div');
        wrapEditor.classList.add('ct-editor');
        var toolbarEditor = document.createElement('div');
        toolbarEditor.classList.add('ct-editor-toolbar');
        var toolbarEditorLeft = document.createElement('div');
        toolbarEditorLeft.classList.add('ct-editor-toolbar-left');
        var toolbarEditorRight = document.createElement('div');
        toolbarEditorRight.classList.add('ct-editor-toolbar-right');
        toolbarEditor.appendChild(toolbarEditorLeft);
        toolbarEditor.appendChild(toolbarEditorRight);
        wrapEditor.appendChild(toolbarEditor);
        var contentEditor = document.createElement('div');
        contentEditor.classList.add('ct-editor-content');
        contentEditor.contentEditable = "true";
        contentEditor.innerHTML = areaEditor.value;
        wrapEditor.appendChild(contentEditor);
        areaEditor.parentNode.replaceChild(wrapEditor, areaEditor);
        
        this.toolDropdown(toolbarEditorLeft, this.buttonDropdowns, this.classDropdowns, this.classDropdownItems);
        
        var allDropdowns = toolbarEditorLeft.querySelectorAll('.ct-dropdown');
        this.actionDropdown(allDropdowns, this.classDropdownItems);
        
        this.toolButton(toolbarEditorLeft, this.basicButtons, this.classButtons);
        this.toolButton(toolbarEditorRight, this.viewButtons, this.classButtons);
        
        var allButtons = toolbarEditorLeft.querySelectorAll('button');
        this.actionButton(allButtons, false, false);
        
        var allViews = toolbarEditorRight.querySelectorAll('button');
        this.viewContent(allViews, contentEditor, areaEditor);
        
        this.keyboardShortcut(contentEditor);
    }
    
    window.onload = function () {
        new CtEditor({
            el: '.ct-editor',
            basicButtons: [
                { id: 1, name: 'undo', icon: '<i class="fa fa-undo"></i>' }, 
                { id: 2, name: 'redo', icon: '<i class="fa fa-repeat"></i>' }, 
                { id: 3, name: 'bold', icon: '<i class="fa fa-bold"></i>' }, 
                { id: 4, name: 'italic', icon: '<i class="fa fa-italic"></i>' }, 
                { id: 5, name: 'underline', icon: '<i class="fa fa-underline"></i>' }, 
                { id: 6, name: 'strikeThrough', icon: '<i class="fa fa-strikethrough"></i>' }, 
                { id: 7, name: 'superscript', icon: '<i class="fa fa-superscript"></i>' }, 
                { id: 8, name: 'subscript', icon: '<i class="fa fa-subscript"></i>' }, 
                { id: 9, name: 'insertOrderedList', icon: '<i class="fa fa-list-ol"></i>' }, 
                { id: 10, name: 'insertUnorderedList', icon: '<i class="fa fa-list-ul"></i>' }, 
                { id: 11, name: 'justifyLeft', icon: '<i class="fa fa-align-left"></i>' }, 
                { id: 12, name: 'justifyCenter', icon: '<i class="fa fa-align-center"></i>' }, 
                { id: 13, name: 'justifyRight', icon: '<i class="fa fa-align-right"></i>' }, 
                { id: 14, name: 'justifyFull', icon: '<i class="fa fa-align-justify"></i>' }
            ],
            classButtons: 'btn btn-secondary btn-sm mr-1',
            buttonDropdowns: [
                {
                    id: 1, name: 'heading', icon: '<i class="fa fa-header"></i>', title: 'Heading',
                    items: [
                        { value: 'H1', text: '<h1>Heading 1</h1>' },
                        { value: 'H2', text: '<h2>Heading 2</h2>' },
                        { value: 'H3', text: '<h3>Heading 3</h3>' },
                        { value: 'H4', text: '<h4>Heading 4</h4>' },
                        { value: 'H5', text: '<h5>Heading 5</h5>' },
                        { value: 'H6', text: '<h6>Heading 6</h6>' },
                    ]
                },
                {
                    id: 2, name: 'fontName', icon: '<i class="fa fa-font"></i>', title: 'Font', 
                    items: [
                        { value: 'arial', text: '<span style="font-family: arial">Arial</span>' },
                        { value: 'comic sans ms', text: '<span style="font-family: comic sans ms">Comic Sans MS</span>' },
                        { value: 'impact', text: '<span style="font-family: impact">Impact</span>' },
                        { value: 'ubuntu', text: '<span style="font-family: ubuntu">Ubuntu</span>' },
                        { value: 'verdana', text: '<span style="font-family: verdana">Verdana</span>' },
                        { value: 'times', text: '<span style="font-family: times">Times New Roman</span>' },
                        { value: 'tahoma', text: '<span style="font-family: tahoma">Tahoma</span>' },
                        { value: 'helvetica', text: '<span style="font-family: helvetica">Helvetica</span>' }
                    ] 
                },
                {
                    id: 3, name: 'fontSize', icon: '<i class="fa fa-text-height"></i>', title: 'Size', 
                    items: [
                        { value: '1', text: '<span style="font-size: 10px">10px</span>' },
                        { value: '2', text: '<span style="font-size: 13px">13px</span>' },
                        { value: '3', text: '<span style="font-size: 16px">16px</span>' },
                        { value: '4', text: '<span style="font-size: 18px">18px</span>' },
                        { value: '5', text: '<span style="font-size: 24px">24px</span>' },
                        { value: '6', text: '<span style="font-size: 32px">32px</span>' },
                        { value: '7', text: '<span style="font-size: 48px">48px</span>' }
                    ] 
                }
            ],
            classDropdowns: 'btn-group btn-group-sm mr-1',
            classDropdownItems: { button: 'dropdown-toggle', menu: 'dropdown-menu', item: 'dropdown-item', all: 'btn btn-secondary' },
            viewButtons: [
                { id: 1, name: 'text', icon: '<i class="fa fa-pencil-square-o"></i>'},
                { id: 2, name: 'html', icon: '<i class="fa fa-code"></i>'}
            ]
        });
    }
        
    return CtEditor;
    
})));
