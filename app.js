`use strict`;
// ------------------------global variables------------------------
var productBucket = [];
// var chart = new chart(ctx)

// -------------------------------object constructor-----------
function Product(name, img) {
    this.name = name;
    this.img = img;
    this.vote = 0;
    this.totalVotes = 0;
    this.seenIt = false;
    productBucket.push(this);
    console.log(productBucket.length);
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
new Product('sweep', 'img/assets/sweep.jpg');
new Product('tauntaun', 'img/assets/tauntaun.jpg');
new Product('unicorn', 'img/assets/unicorn.jpg');
new Product('usb', 'img/assets/usb.gif');
new Product('water-can', 'img/assets/water-can.jpg');
new Product('wine-glass', 'img/assets/wine-glass.jpg');

// -------------------------random index value funtion-----------
function randomIndexVal() {
    var randomizer = Math.floor(Math.random() * productBucket.length);
    return randomizer;
    // var randomizer;
    // safety = 10;
    // // do{ 
    //     randomizer = Math.floor(Math.random() * productBucket.length);
    //     safety--;
    //     console.log(randomizer);
    //     console.log(currentlyShowing);

    // } while (currentlyShowing.includes(randomizer)&& safety) 

}



// ----------------------------select random without duplicates--------------------------
var currentlyShowing = [];

function render() {
    
    var temp1;
    var temp2;
    var temp3;
    console.log(temp1);
    
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
    document.getElementById('left').setAttribute('src', productBucket[temp1].img);
    document.getElementById('center').setAttribute('src', productBucket[temp2].img);
    document.getElementById('right').setAttribute('src', productBucket[temp3].img);
}

render ();

// ----------------------increment votes----------------------------------------------------
// need to do           

// ---------------------------stick 3 imjages to page-------------------
        //    the adress of where things go

// -------------------------------clicked votes -------------------------------
function handlevote(event) {
    event.preventDefault();
    var thingThatWasClicked = event.target.attributes[1].value;
    var productId = thingThatWasClicked.src;
}                                      

// ---------------------------event listeners/clickers------------------------

// right.addEventListener(click, handleVote);
// center.addEventListener(click, handleVote);
// left.addEventListener(click, handleVote);

// ----------------------------what is currently rendered----------------------------------------------
// var previousimg1 = left.src;
// var previousimg2 = right.src;
// var previousimg3 = center.src;

// var newimg  = productId[randomIndexVal()].image

// img