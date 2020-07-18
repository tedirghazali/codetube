// Navbar Dropdown
const dropdown = Array.prototype.slice.call(document.querySelectorAll('.has-dropdown'), 0);
    if(dropdown.length > 0) {
            dropdown.forEach(dd => {
                dd.querySelector('.navbar-link').onclick = e => {
                    e.preventDefault();
                    e.stopPropagation();
                    dropdown.forEach(dd2 => {
                        if(dd2 != e.target.parentElement) {
                            dd2.classList.remove('is-active');
                        }
                    })
                    dd.classList.toggle('is-active');
                }
    })
}

// Navbar Burger
const navbar = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
if(navbar.length > 0) {
            navbar.forEach(el => {
                el.addEventListener('click', () => {
                    const target = el.dataset.target;
                    const collapse = document.getElementById(target);
                    el.classList.toggle('is-active');
                    collapse.classList.toggle('is-active');
                })
            })
}

// Sidebar Collapse
document.getElementById('sidebar-collapse').onclick = e => {
            e.preventDefault();
            e.stopPropagation();
            const sidebar = document.querySelector('.sidebar');
            const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
            sidebar.classList.toggle('shrink');
            if(width <= 1023) {
                sidebar.classList.remove('shrink');
                sidebar.classList.toggle('show');
            }
}

const collapsibleMenu = [].slice.call(document.querySelectorAll('.is-collapsible'));
if(collapsibleMenu.length > 0) {
            collapsibleMenu.forEach(cm => {
                cm.querySelector('a').onclick = e => {
                    e.preventDefault();
                    e.stopPropagation();
                    cm.querySelector('ul').classList.toggle('show');
                }
            });
}

// Window Events
window.onclick = () => {
            const cd = document.querySelector('.has-dropdown.is-active');
            if(cd) {
                cd.classList.remove('is-active');
            }
}

