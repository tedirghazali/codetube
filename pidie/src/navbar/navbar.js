export function navbar() {
    Array.prototype.forEach.call(document.querySelectorAll('.pd-nav-toggle'), function(elem) {
        var toggleCollapse = document.querySelector(elem.getAttribute('data-target'));
        elem.onclick = function(e) {
            e.preventDefault();
            toggleCollapse.classList.toggle('pd-show');
        }
    })
    Array.prototype.forEach.call(document.querySelectorAll('.pd-nav-dropdown ul li > ul'), function(elem2) {
        var caretParent = elem2.parentElement;
        caretParent.classList.add('pd-nav-caret');
    })
    Array.prototype.forEach.call(document.querySelectorAll('.pd-nav-dropdown ul li ul li > ul'), function(elem3) {
        var caretParent = elem3.parentElement;
        caretParent.classList.add('pd-nav-caret');
        caretParent.classList.add('pd-nav-caret-right');
    })
}
