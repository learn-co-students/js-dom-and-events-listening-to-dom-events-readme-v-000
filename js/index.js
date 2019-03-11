// Listening to Events on a DOM Node
const main = document.getElementById('main');

main.addEventListener('click', function(event) {
    alert('I was clicked!');
});

// Triggering Events Listeners on DOM Nodes
const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
    console.log(e.which);
});

// Preventing the Default Behavior for DOM Nodes
const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
    if (e.which === 71) {
        console.log('default prevented');
        return e.preventDefault();
    } else {
        console.log('Not a "g"');
    }
});

// Bubbling and Capturing Events
let divs = document.querySelectorAll('div');

function bubble(e) {
    console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', bubble);
}
//In order to capture we need to set a third argument to true
let divs = document.querySelectorAll('div');

function capture(e) {
    console.log(this.firstChild.nodeValue.trim() + ' captured');
}

for (let i = 0; i < divs.length; i++) {
    // set the third argument to `true`!
    divs[i].addEventListener('click', capture, true);
}

// Stopping Propagated Behaviors with stopPropagation()
const divs = document.querySelectorAll('div');

function bubble(e) {
    e.stopPropagation();

    console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', bubble);
}