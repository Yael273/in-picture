'use strict'

// var gNextId = 1
var gCurrQuestIdx = 0

var gQuests = [
    { id: 1, quest: 'What movie is this scene from?', img: 'img/1.jpg', opts: ['Inglourious Basterds', 'Django Unchained'], correctOptIndex: 0 },
    { id: 2, quest: 'Who is this actor?', img: 'img/2.jpg', opts: ['Al Pacino', 'Robert De Niro'], correctOptIndex: 1 },
    { id: 3, quest: 'Say hello to my little...', img: 'img/3.webp', opts: ['friend', 'gun'], correctOptIndex: 0 }
]

function initGame() {
    gCurrQuestIdx = 0
    renderQuest(gQuests)

}

function renderQuest() {

    var currQuest = gQuests[gCurrQuestIdx]

    var img = currQuest.img
    var opts = currQuest.opts
    var quest = currQuest.quest

    var strHTML = `
        <img src="${img}">

        <h2>${quest}</h2>
        <div>
        <button class="0 btn" onclick="checkAnswer(this)">${opts[0]}</button>
        <button class="1 btn" onclick="checkAnswer(this)">${opts[1]}</button>
        </div>`

    var elQuest = document.querySelector('.quest')
    elQuest.innerHTML = strHTML

}

function gameOver() {
    var strHTML =
        `<h1>Well Done</h1>
        <button onclick="initGame()">Play again</button>`
    var elBody = document.querySelector('body');
    elBody.innerHTML = strHTML;
}

function checkAnswer(optIdx) {

    if (parseInt(optIdx.classList[0]) === gQuests[gCurrQuestIdx].correctOptIndex) {

        gCurrQuestIdx++
        if (gCurrQuestIdx === gQuests.length) gameOver()
        else renderQuest()

    }
}



