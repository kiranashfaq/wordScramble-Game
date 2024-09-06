
// game id 
var refreshBtn = document.getElementById("refresh-button");
var check = document.getElementById("check-button");
var input = document.getElementById("input");
var hint = document.getElementById("hint-div");
var timeText = document.getElementById("time-div");
var un_scrambled_word = document.getElementById("unscrambled-word");

//form id 
var create_acc = document.getElementById("submit")
var create = document.getElementById("create")
var login_2 = document.getElementById("login-2")
var heading = document.getElementById("head")
var accLine = document.getElementById("acc-line")
var loginLine = document.getElementById("login-line")

var timer 
var correct_word 
// funcionailtiy 


// for show form 
var start_btn = document.getElementById("start-btn")
start_btn.addEventListener("click",function(){
    
        var blur = document.getElementById("blur")
        blur.classList.toggle("active")

        var blur_name = document.getElementById("game-name")
        blur_name.classList.toggle("active")

        
        var form_div = document.getElementById("form-div")
        form_div.classList.toggle("active")
})
// for show logiin elements 

var login_1 = document.getElementById("login-1")
login_1.addEventListener("click",function(){
    event.preventDefault()
create_acc.style.display = "none"
login_2.style.display = "block"
heading.innerText = "Login"
accLine.style.display = "block"
loginLine.style.display = "none"

})

// for show create account elemnts 
create.addEventListener("click",function(){
event.preventDefault()
    create_acc.style.display = "block"
    login_2.style.display = "none"
    heading.innerText = "Create Account"
    accLine.style.display = "none"
    loginLine.style.display = "block"
})









const word = [
    { word: "Server", hint: "Provides resources or data." },
    { word: "Router", hint: "Forwards data packets." },
    { word: "Cloud", hint: "Remote data storage." },
    { word: "Browser", hint: "Accesses websites." },
    { word: "Codec", hint: "Encodes and decodes data." },
    { word: "Bug", hint: "An error in software." },
    { word: "Cipher", hint: "Encrypts data." },
    { word: "Debug", hint: "Fixes code issues." },
    { word: "Kernel", hint: "Core of an OS." },
    { word: "Firewall", hint: "Protects network security." },
    { word: "Script", hint: "Code for automation." },
    { word: "Database", hint: "Stores structured data." },
    { word: "Network", hint: "Connected systems." },
    { word: "Encrypt", hint: "Secures data." },
    { word: "Proxy", hint: "Acts as an intermediary." },
    { word: "Server", hint: "Handles client requests." },
    { word: "Token", hint: "Digital security unit." },
    { word: "Router", hint: "Directs network traffic." },
    { word: "Module", hint: "A component of software." },
    { word: "API", hint: "Application interface." },
    { word: "Cloud", hint: "Remote computing." },
    { word: "Driver", hint: "Controls hardware." },
    { word: "Protocol", hint: "Rules for data exchange." },
    { word: "Algorithm", hint: "Step-by-step process." },
    { word: "Firmware", hint: "Hardware-software interface." },
    { word: "Backup", hint: "Copies of data." },
    { word: "Token", hint: "Unit of digital value." },
    { word: "Cloud", hint: "Online storage solution." },
    { word: "Server", hint: "Manages network resources." },
    { word: "Script", hint: "Automates tasks." },
    { word: "Router", hint: "Network traffic manager." },
    { word: "Module", hint: "Software component." },
    { word: "Firewall", hint: "Network security system." },
    { word: "Compiler", hint: "Translates code." },
    { word: "Browser", hint: "Webpage viewer." },
    { word: "Patch", hint: "Fixes software bugs." },
    { word: "Token", hint: "Data security unit." },
    { word: "Subnet", hint: "Segment of a network." },
    { word: "Cache", hint: "Temporary data storage." },
    { word: "Gateway", hint: "Network entry point." },
    { word: "Viral", hint: "Spreads quickly online." },
    { word: "Server", hint: "Hosts data and services." },
    { word: "Packet", hint: "Small data unit." },
    { word: "Matrix", hint: "Grid-like data structure." },
    { word: "Cluster", hint: "Group of computers." },
    { word: "Sandbox", hint: "Isolated testing environment." },
    { word: "Index", hint: "Data reference point." },
    { word: "Server", hint: "Central data handler." },
    { word: "Drive", hint: "Storage device." },
    { word: "System", hint: "Integrated components." },
    { word: "Buffer", hint: "Temporary data storage." },
    { word: "Encrypt", hint: "Secures information." }
];


const initTimer = maxTime =>{
    clearInterval(timer)

    timer = setInterval(()=>{
    if(maxTime>0){
        maxTime--
       return timeText.innerText = `Time left: ${maxTime} seconds`
    }
    clearInterval(timer)
    hint.innerText =  `Times up! ${correct_word.toUpperCase() } was the correct word `
input.style.display = "none"
    },1000)
    }

const initGame = () => {
    input.style.display = "block"
    initTimer(30)  
    let randomObj = word[Math.floor(Math.random() * word.length)];
    let wordArray = randomObj.word.split("");  

    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); 
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
un_scrambled_word.innerText = wordArray.join("");
hint.innerText = `Hint: ${randomObj.hint}`   
correct_word = randomObj.word.toLocaleLowerCase() 
input.value = ""
input.setAttribute("maxlength",correct_word.length)
}
initGame()
export{initGame}
const checkWord = () =>{
    let userWord = input.value.toLocaleLowerCase()
    if(!userWord) return alert("please enter a word ")
    if(userWord !== correct_word) return alert(`Oops! ${userWord} is not a correct word `)
        alert(`Congrats! ${userWord.toUpperCase() } is  a correct word `)
     initGame()
}

refreshBtn.addEventListener("click",initGame)
check.addEventListener("click",checkWord)
