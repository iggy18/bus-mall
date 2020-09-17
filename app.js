`use strict`;
// ------------------------global variables------------------------
var productBucket = [];
var left = document.getElementById('left'); //<----------------- finds specified element
var right = document.getElementById('right');
var center = document.getElementById('center');
var maxClick = 0;
// var chart = new chart(ctx)

// -------------------------------object constructor-----------
function Product(name, img) {
    this.name = name;
    this.img = img;
    this.vote = 0;
    this.seenIt = 0;
    productBucket.push(this);   // <------------ push objects into array
}

// --------------------------------new objects--------------------------
new Product('Bag', 'img/assets/bag.jpg');
new Product('Banana', 'img/assets/banana.jpg');
new Product('Bathroom', 'img/assets/bathroom.jpg');
new Product('Boots', 'img/assets/boots.jpg');
new Product('Breakfast', 'img/assets/breakfast.jpg');
new Product('Bubble', 'img/assets/bubblegum.jpg');
new Product('Chair', 'img/assets/chair.jpg');
new Product('Cthulhu', 'img/assets/cthulhu.jpg');
new Product('Dog-duck', 'img/assets/dog-duck.jpg');
new Product('Dragon', 'img/assets/dragon.jpg');
new Product('Pen', 'img/assets/pen.jpg');
new Product('Pet-sweep', 'img/assets/pet-sweep.jpg');
new Product('Scissors', 'img/assets/scissors.jpg');
new Product('Shark', 'img/assets/shark.jpg');
new Product('Sweep', 'img/assets/sweep.png');
new Product('Tauntaun', 'img/assets/tauntaun.jpg');
new Product('Unicorn', 'img/assets/unicorn.jpg');
new Product('Usb', 'img/assets/usb.gif');
new Product('Water-can', 'img/assets/water-can.jpg');
new Product('Wine-glass', 'img/assets/wine-glass.jpg');

// -------------------------random index value funtion-----------
function randomIndexVal() {
    var randomizer
    do { //<------------------------------------------------------------makes sure different values are generated
        randomizer = Math.floor(Math.random() * productBucket.length);
    } while (currentlyShowing.includes(randomizer)) // <----------------- if these numbers match roll again
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
    left.setAttribute('src', productBucket[temp1].img); // <-------- set image from array to random  index number in "temp1" .img is property from productbucket obj.
    center.setAttribute('src', productBucket[temp2].img);
    right.setAttribute('src', productBucket[temp3].img);
    productBucket[temp1].seenIt++; // <--------------------------- increment counter in object for every time shown
    productBucket[temp2].seenIt++;
    productBucket[temp3].seenIt++;
}

render();
// <------------------------------------------------------------print results to page-------------------------
function printResults() {
    var getThis = document.getElementById('results')
    console.log('this', productBucket);
    for (let i = 0; i < productBucket.length; i++) {
        var postIt = document.createElement('li');
        postIt.innerHTML =  productBucket[i].name + ' was voted for ' + productBucket[i].vote + ' times, and seen '+ productBucket[i].seenIt + ' times. ';      // <------------------------ HOW DO I GET OBJECT NAME, VOTES, SEEN
        getThis.appendChild(postIt);
    }
}

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
    if (maxClick === 24) { // <-----------------------------------------------  SHUT OFF VALVE for handleVote
        right.removeEventListener('click', handleVote);
        center.removeEventListener('click', handleVote);
        left.removeEventListener('click', handleVote);
        printResults(); // <------------------------------------call function with for loop for results /\
        // localStorage.setItem('productdata', JSON.stringify('productBucket')
    }
    maxClick = maxClick + 1; // <---------------------------------placed here because this counts every click
    render();
    console.log('maxclicks', maxClick);
}

// ---------------------------event listeners/clickers------------------------

right.addEventListener('click', handleVote); // <--------- right div is targeted on "click", event listener bounces to function
center.addEventListener('click', handleVote);
left.addEventListener('click', handleVote);

// ----------------------------what is currently rendered----------------------------------------------

