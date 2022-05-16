// setp varibles
var // Button the Main element 
    startGameButton = document.querySelector("main span"),
    // Name is a player output
    printName = document.querySelector("header .name span"),
    // output span Mistakes
    printMistake = document.querySelector("header .mistake span"),

    // sounds audio
    audioFalse = document.getElementById("false"),
    audioTrue = document.getElementById("true"),

    // article => contener blocks
    contencerBlocks = document.querySelector("article"),
    // div Mian blocks => block
    mianBlocks = Array.from(contencerBlocks.children),
    // duration flip blocks
    duration = 1000,
    // range of blocks (ordrer range)
    rangeBlocks = [];


// for loop add the length to blocks 
addLengthBlocks();
// shuffle array range Blocks 
shuffleBlocks(rangeBlocks);

// setp Functions
// Function start page orders
function stertPage() {
    "use strict";
    // Input is Name player by prompt
    var inputName = prompt("what`s your name", "player");
    // IF input Name (prompt) value or empty
    if (inputName === "" || inputName === null) {
        // add Name to span output Name 
        printName.textContent = "No Name";
    } else {
        // add Name to span output Name 
        printName.textContent = inputName;
    }
    // remove Main Element / remove page active
    this.parentElement.remove();
    // flipd all blocks time on start page
    addAllFlips();
}

// Function loop add add the length to blocks 
function addLengthBlocks() {
    "use strict";
    for (var r = 0; r < mianBlocks.length; r++) {
        rangeBlocks.push(r);
    }
}

// Function shuffle (random Number) to range blocks
function shuffleBlocks(arrayN) {
    var blockCrunt = arrayN.length,
        storgeRange,
        random;

    while (blockCrunt > 0) {
        // get random Number = block range بجلب رقم اندكس عشوائي من المصفوفة فقط 
        random = Math.floor(Math.random() * blockCrunt);

        blockCrunt--;

        // [1] storge Range Number (save)
        storgeRange = arrayN[blockCrunt];
        // [2] change storge Number range to random Number
        arrayN[blockCrunt] = arrayN[random];
        // [3] change random Number to storge Number
        arrayN[random] = storgeRange;
    }
}

// Function blocks flip
function blocksFlip(b) {
    "use strict";
    // add class flip to blocks
    b.classList.add("flip");
    // get blocks length in class (flip)
    var blocksStyleFlip = document.getElementsByClassName("flip");
    // when two blocks from class flip
    if (blocksStyleFlip.length ===  2) {
        
        // stop add class flip when blocks flip length = 2
        stopFlip();
        // check match to blocks fliped
        checkMatch(blocksStyleFlip[0], blocksStyleFlip[1]);
    }
}

// Function stop add class flip 
function stopFlip() {
    // add class no click to contener blocks
    contencerBlocks.classList.add("on-click");
    // after time durartion remove class no click to contener blocks
    setTimeout(function () {
        contencerBlocks.classList.remove("on-click");
    }, duration);
} 

// Function check Match ==>   Main Function
function checkMatch(blockOne, blockTwo) {
    if (blockOne.dataset.images === blockTwo.dataset.images) {
        // remove class flip
        blockOne.classList.remove("flip");
        blockTwo.classList.remove("flip");
        // add class flip-match
        blockOne.classList.add("flip-match");
        blockTwo.classList.add("flip-match");
        // play sound true
        audioTrue.play();

    } else {
        // add Number Mistake
        printMistake.textContent = parseInt(printMistake.textContent) + 1;
        // remove class flip after duration
        setTimeout(function () {
            blockOne.classList.remove("flip");
            blockTwo.classList.remove("flip");
        }, duration);
        // play sound false
        audioFalse.play();
    }
}

// Function add class flip to all blocks on start page
function addAllFlips() {
    'use strict';
    mianBlocks.forEach(function (block) {
        block.classList.add("flip");
    })

    setTimeout(function () {
        mianBlocks.forEach(function (block) {
            block.classList.remove("flip");
        })
    }, 2000)
};

// futuse app
// start page 
startGameButton.onclick = stertPage;
// add css order to blocks 
mianBlocks.forEach(function (block, index) {
    // add style css (order) to blocs
    block.style.order = rangeBlocks[index];
    // fliped blocks by function blocks flip
    block.addEventListener("click", function () {
        blocksFlip(block);
    })
})

