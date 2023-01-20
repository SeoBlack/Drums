let buttons= document.querySelectorAll(".drum");
buttons.forEach(btn => {
    btn.addEventListener('click',(e)=>{
        playSound(e.target.innerHTML);
        animateButton(e.target.innerHTML);
    })
});
document.addEventListener('keydown',(e)=>{
    playSound(e.key);
    animateButton(e.key);
})
function playSound(key){
    switch (key) {
        case "w":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;  
        case "d":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break; 
        case "j":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break; 
        default:
            console.log(e.target.innerHTML);
            break;
    }
}
function animateButton(key){
    let activeBtn = document.querySelector("." + key);
    activeBtn.classList.add("pressed");
    setTimeout(() => {
        activeBtn.classList.remove("pressed");
    },100)
}

// let audio = new Audio('sounds/tom-1.mp3');
// audio.play();