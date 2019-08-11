// create a new element


const newLink = document.createElement('a');
// create class
newLink.className = 'link';

// add attribute

newLink.setAttribute('href', '#');
// add the text 

newLink.appendChild(document.createTextNode('new Text Link'));

// add the element to the HTML

document.querySelector('#primary').appendChild(newLink);

console.log('newLink');



// replace element

const newHeading = document.createElement('h2');
// create an id
newHeading.id = heading;

// add an new Text
newHeading.appendChild(document.createTextNode('the bét courses'));

// select the old heading 
const oldHeading = document.querySelector('#heading');

// parent
const coureseList = document.querySelector('#courses-list');

// then, replace

coursesList.replaceChild(newHeading, oldHeading);

console.log(newHeading);





//remove element
const links = document.querySelector('.link');

links[0].remove();

console.log(links);




const cards = document.querySelectorAll('.card');

card[2].remove();

console.log(cards);



const navigation = document.querySelector('#primary');
const links = document.querySelectorAll('#primary .link');

navigation.removeChild('link[4]');

console.log(links);
console.log(navigation);