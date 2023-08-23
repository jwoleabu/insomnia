const startButton  = document.getElementById('startButton')
const title = document.querySelector('.story-title')
const info = document.querySelector('.info')
const gameSection = document.querySelector('.game-section')
const chapterTitle = document.querySelector('.chapter-title')
const buttonContainer = document.querySelector('.button-container')
const chapterImage = document.querySelector('.chapter-image')
const chapterText = document.querySelector('.story-text')
let storyStarted = false;
let typed = new Typed(".animText", {strings: ["Game.", "Story.",], typeSpeed: 150, backSpeed: 150, loop: false,
})

const chapters = [{
    chapter: "0", title: "Lost", text:`It's dark outside.<br>You ran away from home.<br>Are you tired?<br><br><b>You'll have to make it to daybreak and survive this dark wild.</b><br><span>Please.`, "choice text" : [null, null, null],
    choices: []},

    {
    chapter: "1", title: "LOREM", text: "Lorem LOREM", "choice text" : ["lorem", "lorem", null],
    choices: []}
]

function clickButton() {
    title.style.display = 'block'
    startButton.style.display = 'none'
    let clickSound = new Audio("sounds/select.mp3")

    setTimeout(() => {
        title.style.opacity = '100%'
        title.style.fontSize = '6em'
        clickSound.play()
    }, 0);

    setTimeout(() => {
        title.style.opacity = '0';
        info.style.opacity = '0';
    }, 4000);

    setTimeout(() => {
        title.style.display = 'none';
        info.style.display = 'none';
        startChapter(0)
        gameSection.style.display = 'flex'

    }, 5500);

}

function startChapter(number){
    chapterTitle.innerText = chapters[number].title;
    let typed = new Typed(".story-text", {strings: [chapters[number].text], typeSpeed: 65, backSpeed: 1, loop: false, oncomplete: (self) =>{self.destroy()}})

}


