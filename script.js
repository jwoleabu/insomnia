const body = document.body;
const startButton  = document.getElementById('startButton')
const title = document.querySelector('.story-title')
const info = document.querySelector('.info')
const gameSection = document.querySelector('.game-section')
const chapterTitle = document.querySelector('.chapter-title')
const buttonContainer = document.querySelector('.button-container')
const chapterImage = document.querySelector('.chapter-image')
const chapterText = document.querySelector('.story-text')
const buttons = buttonContainer.querySelectorAll('button');
let storyStarted = false;
let typed = new Typed(".animText", {strings: ["Game.", "Story.",], typeSpeed: 150, backSpeed: 150, loop: false,
})

const chapters = [
    {
        chapter: "0",
        title: "Lost",
        text: `It's dark outside.<br>You ran away from home.<br>You're fatigued by the night.<br><br><b>You'll have to make it to daybreak and survive the wilderness.</b><br><span>Please.</span>`,
        choices: ['proceed', '', ''],
        choiceFunctions: [proceed],
        song: "sounds/introtheme.mp3"
    },
    {
        chapter: "1",
        title: "Death",
        text: "Lorem LOREM Lorem LOREM Lorem LOREMLorem LOREM Lorem LOREMLorem LOREM Lorem LOREM Lorem LOREM",
        choices: ['Retry', '', ''],
        choiceFunctions: [retry],
        song: "sounds/introtheme.mp3"
    },
    {
        chapter: "2",
        title: "The Moonlight Forest",
        text: `The crescent moon shone like a silvery claw in the night sky, its radiance permeating the groves.<br><br>You find yourself in a beautiful forest right by a crystal lake.`,
        choices: ['Drink the water', 'Rest by a tree', ''],
        choiceFunctions: [water, rest],
        song: "sounds/introtheme.mp3"
    },
    {
        chapter: "3",
        title: "Voices In The Trees",
        text: `You rest by a sturdy looking tree, it's bark forming a makeshift respite for your dreams.<br><br>You're woken by some chatter, trees with faces discussing topics about the forest.<br><br>You beckon to them asking them for a way out, Anansi the honest says to take the left path, Dharma the true urges you to take the right path. One is a <span>liar</span>.`,
        choices: ['Listen to Dharma', 'Listen to Anansi', 'Listen To Neither'],
        choiceFunctions: [dharma, anansi, neither],
        song: "sounds/introtheme.mp3"
    },
    {
        chapter: "4",
        title: "Monstrous Nightmares",
        text: `The night wanes, and ink blots sky as you follow the path Dharma showed you.<br> You hear a bloodcurdling scream from right behind you.<br><br>You turn around to find a pale skinned man sitting on the floor.`,
        choices: ['Close your Ears', 'Close your Mouth', 'Close your Eyes'],
        choiceFunctions: [ears, mouth, eyes],
        song: "sounds/introtheme.mp3"
    },
    {
        chapter: "5",
        title: "Beneath Broken Sky",
        text: `You slam your eyes shut, Hoping and wishing that abomination never existed<br><br>Alas, within your own fragile world you are safe, as long as your eyes are closed and your heart denies death, It shall not be your truth.<br><br>You feel a flicker of light, will you accept this?`,
        choices: ['Breathe in the dawn', '', ''],
        choiceFunctions: [breathe],
        song: "sounds/introtheme.mp3"
    },
    {
        chapter: "6",
        title: "His Eminence,The Sun",
        text: `As you open your eyes the Dawn graces you with its warm embrace.<br><br>You survived the night.`,
        choices: ['', '', ''],
        choiceFunctions: [],
        song: "sounds/introtheme.mp3"
    },
];

function clickButton() {
    title.style.display = 'block'
    startButton.style.display = 'none'
    let clickSound = new Audio("sounds/select.mp3")

    setTimeout(() => {
        title.style.opacity = '100%'
        title.style.fontSize = '6em'
        clickSound.play()
    }, 100);

    setTimeout(() => {
        title.style.opacity = '0';
        info.style.opacity = '0';
    }, 2000);

    setTimeout(() => {
        title.style.display = 'none';
        info.style.display = 'none';
        startChapter(0)
        gameSection.style.display = 'flex'

    }, 3000);

}

function startChapter(number){
    chapterTitle.innerText = chapters[number].title;
    let chapterSound = new Audio(chapters[number].song);
    console.log(`${chapterSound}`);
    typed = new Typed(".story-text", {
        strings: [chapters[number].text],
        typeSpeed: 20,
        backSpeed: 0,
        loop: false,
        showCursor: false,
        onComplete: function() {

            buttons.forEach((button, index) => {
                if (chapters[number].choices[index] !== '') {
                    button.innerText = chapters[number].choices[index];
                    button.style.display = 'block';
                    button.onclick = chapters[number].choiceFunctions[index];
                } else {
                    button.style.display = 'none';
                }
            });
        }
    });

}

function clearButton() {
    buttons.forEach((button) => {
        button.style.display = 'none';
    });
}

function proceed() {
    clearButton()
    startChapter(2)
}

function die(){
    body.classList.add('dead')
    clearButton()
    startChapter(1)
}

function water(){
    clearButton()
    chapters[1].text = `You lap the water.<br> It fades to red as it's shards serrate your throat.`;
    die();
}

function anansi(){
    clearButton()
    chapters[1].text = `The tree cackles in the distance as you mindlessly strut<br>ever deeper into the heart of the forest.`;
    die();
}

function neither(){
    clearButton()
    chapters[1].text = `The trees violently impale you with their roots, draining you of all your blood and nutrients, A worthy punishment for your ignorance.<br> You lay asunder, a dry corpse for ants to tread and soil to feed.`;
    die();
}

function dharma(){
    clearButton()
    body.classList.add('dark')
    startChapter(4)
}

function eyes(){
    clearButton()
    body.classList.remove('dark')
    startChapter(5)
}

function ears(){
    clearButton()
    chapters[1].text = `The ears cackles in the distance as you mindlessly strut<br>ever deeper into the heart of the forest.`;
    die();
}

function mouth(){
    clearButton()
    chapters[1].text = `The mouth cackles in the distance as you mindlessly strut<br>ever deeper into the heart of the forest.`;
    die();
}

function rest() {
    clearButton()
    startChapter(3)
}



function retry(){
    body.className = ''
    clearButton()
    startChapter(0)
}

function breathe(){
    body.classList.add('sun')
    clearButton()
    startChapter(6)
}
function sun(){
    clearButton()
    startChapter(5)
}