let element;
element = document

element = document.all();

element = document.all[2];

element = document.head;

element = document.body;

element = document.domain;

element = document.URL;

element = document.characterSet;
element = document.contentType;
element = document.links;
// link
element = document.links[2].id;
element = document.links[2].className;

// form

element = document.forms;
element = document.forms[0];
element = document.forms[0].id;
element = document.forms[0].method;
element = document.forms[0].action;
element = document.forms[0].classList;
element = document.forms[0].className;
element = document.forms[0].classList[0];

// image
element = document.images;

// script
element = document.scripts;
element = document.scripts[0].getAttribute['src'];

// looping all the images
let images = document.images;
let imagesArray = Array.from(images);

imagesArray.forEach(function(image){
    console.log(image.src);

});




console.log(element);