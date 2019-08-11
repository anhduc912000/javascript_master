// class id and other attribute 


const links = document.querySelector('.link');

let element;

element = link;

// read the class

element = links.className;
// read the class (DOM token list)

element = links.classList;
// access specifi class with classList

element = links.classList[0];
// add a new class 

links.classList.add('new-class');
// remove the class 
links.classList.remove('link');

console.log(element);


// ids
link.id = 'new-id';

// remove the id
link.id = ' ';
link.removeAttribute('id');

// attribute function 

element = link.getAttribute('href');
element = link.getAttribute('class');
element = link.getAttribute('href', '#');
element = link.getAttribute('target', '_blank');
element = link.getAttribute('data-link', '10');
element = link.getAttribute('data-link');
element = link.getAttribute('data-link');

console.log(element);