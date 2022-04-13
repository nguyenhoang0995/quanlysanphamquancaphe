const adressnnh = document.querySelector('#adress-form')
const adressclose =document.querySelector('#adress-close')


adressnnh.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "flex"
})
adressclose.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "none"
})
