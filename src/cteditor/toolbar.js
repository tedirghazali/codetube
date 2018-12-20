export function toolButton(toolbar, arrButton, classButton) {
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

export function toolDropdown(toolbar, arrDropdown, classDropdown, classItem) {
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