"use strict"

// Arrow for sub menu
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.classList.add("_touch");

    const menuArrows = document.querySelectorAll(".menu__arrow");
    console.log(menuArrows);
    if (menuArrows.length > 0) {
        for (let i = 0; menuArrows.length > i; i++ ){
            const menuArrow = menuArrows[i];
            menuArrow.addEventListener("click", (event) => {
                menuArrow.parentElement.classList.toggle("_active");
            })
        }
    }
} else {
    document.body.classList.add("_pc");
}

// menu burger 
const iconBurger = document.querySelector(".menu__burger-icon");

if (iconBurger) {
    const menuNav = document.querySelector(".menu__nav");
    iconBurger.addEventListener("click", () => {
        menuNav.classList.toggle("_active");
        iconBurger.classList.toggle("_active")
        document.body.classList.toggle("_lock");
    });
}


