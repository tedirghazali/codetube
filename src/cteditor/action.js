export function actionButton(arrButton, uiButton, valButton) {
    Array.prototype.forEach.call(arrButton, function(elem1){
        elem1.onclick = function (e) {
            e.preventDefault();
            document.execCommand(elem1.getAttribute('data-button'), uiButton, valButton);
        }
    })
}

export function actionDropdown(arrButton, classItem) {
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

export function viewContent(arrButton, valText, valHTML) {
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

export function keyboardShortcut(txtEditor) {
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