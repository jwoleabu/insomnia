const body = document.body;
const startButton  = document.getElementById('startButton')
const title = document.querySelector('.story-title')
const info = document.querySelector('.info')
const gameSection = document.querySelector('.game-section')
const chapterTitle = document.querySelector('.chapter-title')
const buttonContainer = document.querySelector('.button-container')
const chapterImage = document.querySelector('.chapter-image')
const chapterText = document.querySelector('.story-text')
const musicText = document.querySelector('.current-music')
const buttons = buttonContainer.querySelectorAll('button');
let textSpeed = 35;
let storyStarted = false;
let audio = new Audio('');
let audioMuted = false;
let typed = new Typed(".animText", {strings: ["Game.", "Story.",], typeSpeed: 150, backSpeed: 150, loop: false,
})


const chapters = [
    {
        chapter: "0",
        title: "Lost",
        text: `It's dark outside.<br>You ran away from home.<br>The wilds are not safe, not anymore.<br><br><b>You'll have to make it to daybreak and survive.</b><br><span>Please.</span>`,
        choices: ['Proceed', '', ''],
        choiceFunctions: [proceed],
        song: "sounds/winds.mp3",
        songDesc: "Wind"
    },
    {
        chapter: "1",
        title: "Death",
        text: "Lorem LOREM Lorem LOREM Lorem LOREMLorem LOREM Lorem LOREMLorem LOREM Lorem LOREM Lorem LOREM",
        choices: ['Retry', '', ''],
        choiceFunctions: [retry],
        song: "sounds/death.mp3",
        songDesc: "Nikita Kryukov: I'll be here for a while"
    },
    {
        chapter: "2",
        title: "The Moonlight Forest",
        text: `The crescent moon shone like a silvery claw in the night sky, its radiance permeating the groves.<br><br>You find yourself in a beautiful forest right by a crystal lake.<br><br>Your reflection, as clear as day, you look the same.`,
        choices: ['Drink the Water', 'Rest by a Tree', ''],
        choiceFunctions: [water, rest],
        song: "sounds/introtheme.mp3",
        songDesc: "AZALI: the crystal voidlands"
    },
    {
        chapter: "3",
        title: "Voices In The Trees",
        text: `You rest by a sturdy looking tree, it's bark forming a makeshift respite for your dreams.<br><br>You're woken by some chatter, trees with faces discussing topics about the forest.<br><br>You beckon to them asking them for a way out, Anansi the honest says to take the left path, Dharma the true urges you to take the right path. One is a <span>liar</span>.`,
        choices: ['Listen to Dharma', 'Listen to Anansi', 'Listen To Neither'],
        choiceFunctions: [dharma, anansi, neither],
        song: "sounds/trees.mp3",
        songDesc: "Ery Noice: Wise Mystical Tree"
    },
    {
        chapter: "4",
        title: "Monstrous Nightmares",
        text: `The night wanes and ink blots sky as you follow Dharmas path.<br>Something unsettling is in the distance....<br><br>A creature<br><br>Its body spangled with insults to god, it wept and screamed, as if begging for forgiveness.<br><br> It noticed you, piercing you with its manic gaze, your <span class="red">heart</span> skips a beat.`,
        choices: ['Close your Ears', 'Close your Mouth', 'Close your Eyes'],
        choiceFunctions: [ears, mouth, eyes],
        song: "sounds/horrorbuildup.mp3",
        songDesc: "Eerie"
    },
    {
        chapter: "5",
        title: "Beneath Broken Sky",
        text: `You slam your eyes shut, Hoping and wishing that abomination never existed<br><br>Alas, within your own fragile world you are safe, as long as your eyes are closed and your heart denies death, It shall not be your truth.<br><br>You feel a flicker of light, will you accept this?`,
        choices: ['Breathe in the dawn', '', ''],
        choiceFunctions: [breathe],
        song: "sounds/awemusic.mp3",
        songDesc: "Nikita Kryukov: Death Music?"
    },
    {
        chapter: "6",
        title: "His Eminence,The Sun",
        text: `<br><br>As you open your eyes the Dawn graces you with its warm embrace.<br><br>Its valiance warding away all evil, you remember the path home now.<br><br>It's been a long, hard night, but you overcame all odds.<br><br>Bursting with confidence, you march forward, you march to home.<br><br>Thanks for playing!`,
        choices: ['', '', ''],
        choiceFunctions: [],
        song: "sounds/dawn.mp3",
        songDesc: "Toby Fox: But The Earth Refused To Die"
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
    musicText.innerText = chapters[number].songDesc;
    audio.src = chapters[number].song;
    audio.play()
    typed = new Typed(".story-text", {
        strings: [chapters[number].text],
        typeSpeed: textSpeed,
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
    chapterText.innerHTML = '';
    let choiceSound = new Audio("sounds/click.mp3")
    choiceSound.play();
}

function proceed() {
    clearButton()
    startChapter(2)
}

function die(){
    musicText.classList.remove('yellow')
    body.classList.add('dead')
    clearButton()
    startChapter(1)
}

function water(){
    clearButton()
    chapters[1].text = `You lap the water.<br>All fades to red as it's shards serrate your throat.<br><br>You were killed by the <span class="purple">Crystal Lake</span>`;
    die();
}

function anansi(){
    clearButton()
    chapters[1].text = `The tree cackles in the distance as you mindlessly strut<br>ever deeper into the heart of the forest.<br><br>You were misled by the <span class="purple">Trickster</span>`;
    die();
}

function neither(){
    clearButton()
    chapters[1].text = `The trees violently impale you with their roots, draining you of all your blood and nutrients, A worthy punishment for your ignorance.<br><br>You lay asunder, a dry corpse for ants to tread and soil to feed.<br><br>You were killed by the <span class="purple">Ancient Trees</span>`;
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
    chapters[1].text = `You close your ears, now you no longer hear its solemn cries, yet the creature is still there.<br><br>You who would ignore the cries of a sinner, shall receive penance, The creature rips out your heart.<br><br>You were killed by the <span class="purple">Heretic</span>`;
    die();
}

function mouth(){
    clearButton()
    chapters[1].text = `You cover your mouth, making sure not to utter a single word. It urges you to join in its blasphemy, yet you ignore it.<br><br>In a fit of rage it hurls a rock straight into your skull, a fitting fate for a non-believer. <br><br>You were killed by the <span class="purple">Heretic</span>`;
    die();
}

function rest() {
    clearButton()
    startChapter(3)
}



function retry(){
    body.className = ''
    musicText.classList.remove('yellow')
    clearButton()
    startChapter(2)
}

function breathe(){
    body.classList.add('sun')
    musicText.classList.add('yellow')
    clearButton()
    startChapter(6)
}
function sun(){
    clearButton()
    startChapter(5)
}

function fast() {
    textSpeed = 10;
    let choiceSound = new Audio("sounds/click.mp3")
    choiceSound.play();
}

function slow() {
    textSpeed = 35;
    let choiceSound = new Audio("sounds/click.mp3")
    choiceSound.play();
}

function volume(element) {
    let choiceSound = new Audio("sounds/click.mp3")
    choiceSound.play();
    if (audioMuted){
        audioMuted = false;
        audio.volume = 1;
        element.classList.toggle('muted')
    }
    else {
        audioMuted = true;
        audio.volume = 0;
        element.classList.toggle('muted')
    }
}