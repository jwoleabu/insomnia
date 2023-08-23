const startButton  = document.getElementById('startButton')
const title = document.querySelector('.story-title')
const info = document.querySelector('.info')
let storyStarted = false;
let typed = new Typed(".animText", {strings: ["Game.", "Story.",], typeSpeed: 150, backSpeed: 150, loop: false,
})

const chapters = [{
    chapter: "0", title: "LOREM", text: "Lorem LOREM", "choice text" : ["lorem", "lorem", null],
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
        title.style.opacity = '0'
        info.style.opacity = '0'
    }, 4000);

    setTimeout(() => {
        title.style.display = 'none'
        info.style.display = 'none'
    }, 6000);

}

function startStory(){
}


