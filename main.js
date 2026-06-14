let audio = new Audio('sounds/short-click-of-a-computer-mouse.mp3');
document.querySelectorAll('.block').forEach(block => { 
    block.addEventListener('click', () => {
        audio.currentTime = 0;
        audio.play()    
    })
})
