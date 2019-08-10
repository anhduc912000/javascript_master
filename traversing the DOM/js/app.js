// // traversing the DOM

// const navigation = document.querySelector('#primary');

// let element;

// element = navigation.childNodes;

// element = navigation.children[0].nodeType;
// navigation.children[0].textContent = 'new text';
// // element
// //attribute
// // text node


// console.log(element);


// const coursesList = document.querySelector('#courses-list');

// let element;
// element = coursesList.children;

// element = coureseList.children[0].children[1].children.lastElementchild;
// element = coureseList.children[0].children[1].children.firstElementchild;

// element = coureseList.children[0].children[1].children.childElementCount;


// console.log(element);

const cartBtn = document.querySelector('.add-to-cart');

let element;

element = cartBtn;

element = cartBtn.parentNode;
element = cartBtn.parentElement.parentElement.children[0];

// sibling
element = cartBtn.parentNode;
element = cartBtn.previousElementSibling.previousElementSibling;

console.log(cartBtn.parentElement);

// next elementSibling
