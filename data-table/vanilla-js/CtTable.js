/*!
* CtTable v0.0.1
* (c) 2018-2019 Tedir Ghazali
* Released under the Apache License 2.0
*/

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.CtTable = factory());
}(this, (function () { 'use strict';

    function CtTable(options = {}) {
        this.el = options.el || '.ct-table';
        this.init();
    }
    
    CtTable.prototype.saveSelection = function () {
        
    }
    
    CtTable.prototype.init = function () {
        alert('saya');
    }
    
    window.onload = function () {
        new CtTable();
    }
        
    return CtTable;
    
})));
