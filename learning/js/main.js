var count = 1;
var end = 300;
var interval = 1;

var counter = document.getElementById("counter");
var intervalID;

var colors = [
    'red',
    'green',
    'blue',
    'orange',
    'pink',
    'purple',
    'black',
    'violet'
];

var colorCount = colors.length;

function increment() {
    if (count >= end) {
        clearInterval(intervalID);
    }
    counter.innerHTML = count;
    var clIndex = count % colorCount;
    if(clIndex == colors.length - 1){
        console.count("Iteration has been completed.");
    }
    var color = colors[clIndex];
    counter.style.color = color;
    count++
}

intervalID = setInterval(increment, interval);