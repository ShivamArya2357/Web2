burgerEle = document.querySelector('.burger');
navBarEle = document.querySelector('.navBar');
navListEle = document.querySelector('.nav-list');
rightNavEle = document.querySelector('.rightNav');

burgerEle.addEventListener('click', () => {
    navListEle.classList.toggle("visibility-class");
    rightNavEle.classList.toggle("visibility-class");
    navBarEle.classList.toggle("nav-height");
})