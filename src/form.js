import { getAuth,createUserWithEmailAndPassword,sendEmailVerification,signInWithEmailAndPassword,signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth } from "./firebase.mjs"
import { initGame } from "./script.js";
var email = document.getElementById("email")
var password = document.getElementById("pass")
 var createAcc = document.getElementById("submit")
 var login = document.getElementById("login-2")
 var game_card = document.getElementById("game-card")
 var input = document.getElementById("input");
 var sign = document.getElementById("signout")
var timeText = document.getElementById("time-div");
var hint = document.getElementById("hint-div")
var close = document.getElementById("close")
var timer 
var correct_word

const init_Timer = maxTime =>{
    clearInterval(timer)

    timer = setInterval(()=>{
    if(maxTime>0){
        maxTime--
       return timeText.innerText = `Time left: ${maxTime} seconds`
    }
    clearInterval(timer)
    hint.innerText =  `Times up! ${correct_word.toUpperCase() } was the correct word `
    input.style.display = "none"
initGame() //calling initgame function so again game is restart 
    },1000)
    }
 








 createAcc.addEventListener("click", function(){
event.preventDefault()
init_Timer()

    createUserWithEmailAndPassword(auth, email.value, password.value)
    
     .then((userCredential) => {
        // Signed up 
        const user =  userCredential.user;
        console.log(user);
   sendEmailVerification(auth.currentUser)
        .then(() => {
          // Email verification sent!
          // ...

          
          alert("your account is created")
          game_card.style.display = "block"
  var blur = document.getElementById("blur")
  blur.classList.remove("active")
  blur.style.display = "none"
  var blur_name = document.getElementById("game-name")
  blur_name.classList.remove("active")

var form_div = document.getElementById("form-div")
form_div.classList.remove("active")

input.style.display = "block";




        });
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    
     

   })


   login.addEventListener("click",function(){
  event.preventDefault()
  init_Timer()
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
      // alert("you're logged in")
       if(user.emailVerified){
  game_card.style.display = "block"
  alert("email is verified")
  
  var blur = document.getElementById("blur")
  blur.classList.remove("active")
blur.style.display = "none"
  var blur_name = document.getElementById("game-name")
  blur_name.classList.remove("active")

var form_div = document.getElementById("form-div")
form_div.classList.remove("active")




input.style.display = "block";





      }
      else{
// game_card.style.display = "block"
alert("email is not verified")

      }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    

   })

sign.addEventListener("click",function(){
  signOut(auth).then(() => {
    // Sign-out successful.
    game_card.style.display = "none"
  var blur = document.getElementById("blur")

    blur.style.display = "block"
    blur.style.display= "flex"
  }).catch((error) => {
    // An error happened.
  });
})
close.addEventListener("click" , function(){
  
  
  var blur = document.getElementById("blur")
  blur.classList.remove("active")
  var blur_name = document.getElementById("game-name")
  blur_name.classList.remove("active")

var form_div = document.getElementById("form-div")
form_div.classList.remove("active")
})