
const words = [
    "Alaska",
    "Pocahontas",
    "diving",
    "bear",
    "scrotum",
    "beige",
    "fiction",
    "collosal",
    "strike",
    "Honduras",
    "magnifier",
    "keyboard",
    "queue",
    "crater",
    "boulevard",
    "Hollywood",
    "hello",
    "cockroach",
    "Alexander",
    "Alexandria",
    "quarterback",
    "currency",
    "choir",
    "handcuffs",
    "accommodation",
    "crucifixion",
    "bankrupcy",
    "ideology",
    "goosebump",
    "broker",
    "socialism",
    "illumination",
    "dictionary",
    "Greece",
    "wallpaper"
];


function randomWordGenerator(wordList){
    const randIdx = Math.floor(Math.random() * (wordList.length));
    return wordList[randIdx];
}


function changeWord(){
    const elem = document.getElementById("word-generator");
    const newWord = randomWordGenerator(words);
    elem.innerHTML = newWord;
}


function checker(){
    if(document.getElementById("15s").checked){
        return document.getElementById("15s")
    } else if (document.getElementById("30s").checked){
        return document.getElementById("30s")
    } else if (document.getElementById("1min").checked){
        return document.getElementById("1min")
    } else {
        return false
    }
}


function startTimer(){
    const checked = checker()
    if (!checked) {
        document.getElementById("timer").innerHTML = "NO TIME PICKED";
        alert("No time picked")
    } else {
        const ceiling = +checked.value;
        const time = new Date().getTime();
        let timeout = setInterval(function() {
            const now = new Date().getTime()
            const passed = time - now
            const seconds = Math.floor((passed % (1000 * 60)) / 1000);
            const display = ceiling + seconds
            document.getElementById("timer").innerHTML = display

            if (display <= 0){
                clearInterval(timeout);
                document.getElementById("timer").innerHTML = "EXPIRED"
            }
        }, 1000)
    }
}


function updateValue(){
    const currWord = document.getElementById("word-generator");
    if(userText.value === "start"){
        startTimer()
    }

    const timeLeft = document.getElementById("timer").innerHTML
    
    if(userText.value === currWord.innerHTML && timeLeft !== "EXPIRED"){
        console.log(timeLeft)
        changeWord()
        userText.value = "";
        const words = document.getElementById("curr-score");
        const count = +(words.innerHTML)
        words.innerHTML = count + 1
    }

}


function resetValues(){
    document.getElementById("curr-score").innerHTML = 0;
    document.getElementById("timer").innerHTML = "The test hasn't begun yet";
    document.querySelector("textarea").value = "";
    document.getElementById("word-generator").innerHTML = "start"

}


const userText = document.getElementById("main-input");
userText.addEventListener("input", updateValue);

const resetButton = document.getElementById("reset")
resetButton.addEventListener("click", resetValues)

