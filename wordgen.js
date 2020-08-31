const words = {
    nouns: ["story", "oven", "thing", "week", "thought", "army", "child", "truth", "article", "goal", "news", "failure", "meaning",  "medicine",  "teacher",  "night",  "disease",  "road",  "role",  "moment",  "attention",  "wood",  "death",  "message",  "mood",  "you",  "effort",  "depth",  "heart", "I", "union"],
    verbs: ["cut", "drive", "eat", "fly", "make", "run", "throw", "trip", "walk", "swim", "play", "sweep", "bloom", "matter", "question", "add", "bath", "begged", "blinked", "blush", "burn", "choke", "carved", "crash", "crawl", "delayed", "destroyed", "doubts", "dream", "face", "fade", "fail", "formed", "gathered", "grab", "handed", "hunt", "joined", "melt", "miss", "nail", "prevent", "promise"],
    preps: ["as", "at", "by", "but", "for", "in", "into", "like", "of", "on", "than", "to"],
    conjs: ["for", "and", "not", "but", "or", "yet", "so"]
};

let noun = document.getElementById('noun');
noun.addEventListener('click', function() { setWordType(noun); });
let verb = document.getElementById('verb');
verb.addEventListener('click', function() { setWordType(verb); });
let prep = document.getElementById('prep');
prep.addEventListener('click', function() { setWordType(prep); });
let conj = document.getElementById('conj');
conj.addEventListener('click', function() { setWordType(conj); });

let wordOutput = document.getElementById('wordOutput');
let addword = document.getElementById('addword').addEventListener("click", addWordLine);
let lineAdd = document.getElementById('line');
let poemAdd = document.getElementById('addLine').addEventListener("click", addLinePoem);
let poem = document.getElementById('poem');

function setWordType(wType) {

    if (wType == noun) {
        let noun = words.nouns[Math.floor(Math.random() * words.nouns.length)];
        wordOutput.innerHTML = "";
        newWord = document.createElement('p');
        newWord.textContent = noun;
        wordOutput.appendChild(newWord);
    } 

    if (wType == verb) {
        let verb = words.verbs[Math.floor(Math.random() * words.verbs.length)];
        wordOutput.innerHTML = "";
        newWord = document.createElement('p');
        newWord.textContent = verb;
        wordOutput.appendChild(newWord);
    } 

    if (wType == prep) {
        let prep = words.preps[Math.floor(Math.random() * words.preps.length)];
        wordOutput.innerHTML = "";
        newWord = document.createElement('p');
        newWord.textContent = prep;
        wordOutput.appendChild(newWord);
    } 

    if (wType == conj) {
        let conj = words.conjs[Math.floor(Math.random() * words.conjs.length)];
        wordOutput.innerHTML = "";
        newWord = document.createElement('p');
        newWord.textContent = conj;
        wordOutput.appendChild(newWord);
    } 
}

function addWordLine() {
    if (!lineAdd.firstElementChild) {
        let newLine = document.createElement('p');
        newLine.innerText = wordOutput.innerText;
        lineAdd.appendChild(newLine);
    } else {
        let newLine = lineAdd.firstElementChild;
        newLine.innerText += " " + wordOutput.innerText;
        lineAdd.appendChild(newLine);
    }
}

function addLinePoem() {
    let newLine = document.createElement('p');
    newLine.innerText = lineAdd.innerText;
    poem.appendChild(newLine);
    wordOutput.innerHTML = "";
    lineAdd.innerHTML = "";
}
