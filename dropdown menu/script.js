const optionMenu = document.querySelector('.select-menu');
const selectBtn = optionMenu.querySelector('.select-btn');
const options = optionMenu.querySelectorAll('.option');
const textBtn = optionMenu.querySelector('.sbtn-content');

options.forEach(option => {
    option.addEventListener("click" , () => {
        let selectOption = option.querySelector('.option-text').innerText;
        textBtn.innerHTML = selectOption;
    })
})

selectBtn.addEventListener( "click" , () => {
    optionMenu.classList.toggle("active");
})