let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genbtn = document.getElementById("genbtn");
let copyicon = document.getElementById("copyicon");

// Showing input slider value
slidervalue.textContent=inputslider.value;
inputslider.addEventListener('input', ()=>{
    slidervalue.textContent=inputslider.value;
})    
// slider value end

genbtn.addEventListener('click',()=>{
    passbox.value=generatePassword();
})
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*"; 
// Function to generate password
function generatePassword(){
    let genPassword="";
    let allChars = "";

    allChars  += lowercase.checked ? lowerChars : "";
    allChars  += uppercase.checked ? upperChars : "";
    allChars  += numbers.checked ? allNumbers : "";
    allChars  += symbols.checked ? allSymbols : "";

    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }
    

    let i = 1;
    while(i<=inputslider.value){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }


    // genPassword =allChars.charAt(Math.floor(Math.random()*allChars.length));
    // generatePassword =lowerChars.charAt(Math.floor(Math.random()*lowerChars.length));
    return genPassword;
}

copyicon.addEventListener('click',()=>{
    if(passbox.value !="" || passbox.value.length >=1){
        navigator.clipboard.writeText(passbox.value);
        copyicon.innerText="check";
        copyicon.title="password.copied";
        setTimeout(()=>{
            copyicon.innerHTML = "content_copy";
            copyicon.title = "";
        }, 2000)
    }

}); 

















































