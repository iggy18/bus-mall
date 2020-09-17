`use strict`;
// ------------------------global variables------------------------
var productBucket = [];
var left = document.getElementById('left');
var right = document.getElementById('right');
var center = document.getElementById('center');
var maxClick = 0;
// var chart = new chart(ctx)
// -------------------------------object constructor-----------
function Product(name, img) {
    this.name = name;
    this.img = img;
    this.vote = 0;
    this.totalVotes = 0;
    this.seenIt = 0;
    productBucket.push(this);
}

// --------------------------------new objects--------------------------
new Product('bag', 'img/assets/bag.jpg');
new Product('banana', 'img/assets/banana.jpg');
new Product('bathroom', 'img/assets/bathroom.jpg');
new Product('boots', 'img/assets/boots.jpg');
new Product('breakfast', 'img/assets/breakfast.jpg');
new Product('bubble', 'img/assets/bubblegum.jpg');
new Product('chair', 'img/assets/chair.jpg');
new Product('cthulhu', 'img/assets/cthulhu.jpg');
new Product('dog-duck', 'img/assets/dog-duck.jpg');
new Product('dragon', 'img/assets/dragon.jpg');
new Product('pen', 'img/assets/pen.jpg');
new Product('pet-sweep', 'img/assets/pet-sweep.jpg');
new Product('scissors', 'img/assets/scissors.jpg');
new Product('shark', 'img/assets/shark.jpg');
new Product('sweep', 'img/assets/sweep.png');
new Product('tauntaun', 'img/assets/tauntaun.jpg');
new Product('unicorn', 'img/assets/unicorn.jpg');
new Product('usb', 'img/assets/usb.gif');
new Product('water-can', 'img/assets/water-can.jpg');
new Product('wine-glass', 'img/assets/wine-glass.jpg');

// -------------------------random index value funtion-----------
function randomIndexVal() {
    var randomizer
    do {
        randomizer = Math.floor(Math.random() * productBucket.length);
    } while (currentlyShowing.includes(randomizer))
    return randomizer;
}




// ----------------------------select random without duplicates--------------------------
var currentlyShowing = [];

function render() {

    var temp1;
    var temp2;
    var temp3;

    // rolling temp1
    temp1 = randomIndexVal();

    // checking 2nd roll against first
    do {
        temp2 = randomIndexVal();
    } while (temp2 === temp1);

    // checking temp3 against the other two
    do {
        temp3 = randomIndexVal();
    } while (temp3 === temp1 || temp3 === temp2);

    currentlyShowing = [temp1, temp2, temp3]
    left.setAttribute('src', productBucket[temp1].img);
    center.setAttribute('src', productBucket[temp2].img);
    right.setAttribute('src', productBucket[temp3].img);
    productBucket[temp1].seenIt++;
    productBucket[temp2].seenIt++;
    productBucket[temp3].seenIt++;
}

render();


// -------------------------------clicked/vote increment -------------------------------
function handleVote(event) {
    event.preventDefault();
    var clicked = event.target.attributes[1].value;
    this.seenIt = this.seenIt + 1;
    for (let i = 0; i < productBucket.length; i++) {
        if (clicked === productBucket[i].img) {
            productBucket[i].vote++;
        }
    }
    if (maxClick === 4) {
        right.removeEventListener('click', handleVote);
        center.removeEventListener('click', handleVote);
        left.removeEventListener('click', handleVote);
        
        // call function with for loop crating list of voted/viewed items
        document.getElementById('results').innerHTML = 'voted for' + this.vote + 'times. seen' + this.seenIt + ' times.' 

    }
    maxClick = maxClick + 1;

    render();
    console.log('maxclicks', maxClick);
}

// ---------------------------event listeners/clickers------------------------

right.addEventListener('click', handleVote);
center.addEventListener('click', handleVote);
left.addEventListener('click', handleVote);

// ----------------------------what is currently rendered----------------------------------------------

