// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V",
// "W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
// "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
//  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
//  "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"];

let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
// console.log(characters.length)

var passwordEl = document.getElementById("password-one")
// let password2 = document.getElementById("password-two")

function randompassword(){
    var i = Math.floor(Math.random() * 91)
    var j = Math.floor(Math.random() * 91)
    var k = Math.floor(Math.random() * 91)
    var l = Math.floor(Math.random() * 91)
    // return characters[i] 
    allinone = characters[i] + characters[j]  + characters[k]  +characters[l] 
    passwordEl.textContent = allinone

     document.write(allinone); 
    //console.log(characters[i] + characters[j]  + characters[k]  +characters[l])
    
}

// document.write(randompassword())
//console.log(randompassword())
// function greenbutton(){
//     password1.innerHTML = randompassword()
// }