let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genbtn = document.getElementById("genbtn");

// Showing input slider value
slidervalue.textContent=inputslider.value;
inputslider.addEventListener('input', ()=>{
    slidervalue.textContent=inputslider.value;
})    
// slider value end

genbtn.addEventListener('click',()=>{
    passbox.value=generatePassword();
})
// Function to generate password
function generatePassword(){
    let genPassword="";
    genPassword = math.random() *5;
    return genPassword;
}


















































