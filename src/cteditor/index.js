/*!
* CodeTube Text Editor
* (c) 2018-2019 Tedir Ghazali
* Released under the Apache License 2.0
*/

import './index.css';
import * as selection from './selection';
import * as toolbar from './toolbar';
import * as action from './action';

class CtEditor {
    
    constructor(options = {}) {
        this.el = options.el;
        this.basicButtons = options.basicButtons;
        this.classButtons = options.classButtons;
        this.viewButtons = options.viewButtons;
        this.buttonDropdowns = options.buttonDropdowns;
        this.classDropdowns = options.classDropdowns;
        this.classDropdownItems = options.classDropdownItems;
        this.init();
    }
    
    init() {
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
        
        toolbar.toolDropdown(toolbarEditorLeft, this.buttonDropdowns, this.classDropdowns, this.classDropdownItems);
        
        var allDropdowns = toolbarEditorLeft.querySelectorAll('.ct-dropdown');
        action.actionDropdown(allDropdowns, this.classDropdownItems);
        
        toolbar.toolButton(toolbarEditorLeft, this.basicButtons, this.classButtons);
        toolbar.toolButton(toolbarEditorRight, this.viewButtons, this.classButtons);
        
        var allButtons = toolbarEditorLeft.querySelectorAll('button');
        action.actionButton(allButtons, false, false);
        
        var allViews = toolbarEditorRight.querySelectorAll('button');
        action.viewContent(allViews, contentEditor, areaEditor);
        
        action.keyboardShortcut(contentEditor);
    }
    
}

export default function cteditor(params) {
    var options = {
        el: params.el || '.ct-editor',
        basicButtons: params.basicButtons || [
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
        classButtons: params.classButtons || 'btn btn-secondary btn-sm mr-1',
        buttonDropdowns: params.buttonDropdowns || [
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
        classDropdowns: params.classDropdowns || 'btn-group btn-group-sm mr-1',
        classDropdownItems: params.classDropdownItems || { button: 'dropdown-toggle', menu: 'dropdown-menu', item: 'dropdown-item', all: 'btn btn-secondary' },
        viewButtons: params.viewButtons || [
            { id: 1, name: 'text', icon: '<i class="fa fa-pencil-square-o"></i>'},
            { id: 2, name: 'html', icon: '<i class="fa fa-code"></i>'}
        ]
    };
    return new CtEditor(options);
}
