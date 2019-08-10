// // how to select one element

// 1. select by Id

let heading = document.getElementById('heading');

console.log(heading);



// 2. querySelector


const learningHeading = document.querySelector('#learn');

const tagline = document.querySelector('.tagline');

let card = document.querySelector('.card');

let heading1 = document.querySelector('h2');


let link;

link = document.querySelector('#primary a:first-child');
console.log(link);
console.log(heading1);
console.log(tagline);

// select multi element



// 3. getElementByClassName

const links = document.getElementsByClassName('link');

links[0].style.color = '#fff';
links[0].style.background = 'black';
links[0].textContent = 'Newtext';




// 4. getElementByTagName

// const heading = document.getElementsByTagName('h1');

const oddLinks = document.querySelectorAll('#primary a:nth-child(odd)');

oddLinks.forEach(function(odd){
    odd.style.backgroundColor = 'read';
    odd.style.color = '#000';
});

const evenLinks = document.querySelectorAll('#primary a:nth-child(even)');

evenLinks.forEach(function(even){
    even.style.color =' blue';
    even.backgroundColor = 'red';
})