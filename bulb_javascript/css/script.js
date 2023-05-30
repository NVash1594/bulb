let btnAdd = document.querySelector("#addbtn");
let btnRemove = document.querySelector("#removebtn");
let lightOn = document.querySelector(".circle")

btnAdd.addEventListener('click',  () => {
    lightOn.style.backgroundColor = "yellow";
    lightOn.innerHTML = `Light ON`
})

btnRemove.addEventListener('click', () => {
    lightOn.style.backgroundColor = "rgba(0,0,0,0.2)";
    lightOn.innerHTML = `Light OFF`
})