const navLInks = document.getElementById('navLinks')
const openBtn = document.getElementById('openBtn')
const closeBtn = document.getElementById('closeBtn')
const closeMenu = document.getElementById('navItems')

openBtn.onclick = function openBtn() {
navLinks.style.left = '0';
}

closeBtn.onclick = function closeBtn() {
navLinks.style.left = '-200px'
}

closeMenu.onclick = function closeBtn() {
navLinks.style.left = '-200px'
}
