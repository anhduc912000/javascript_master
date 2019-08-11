// // passing event as parameter and target 
// const clearBtn = document.getElementById('clear-card');

// clearBtn.addEventListener('click', clearBtnFunction);

// function clearBtnFunction(event){

//     //target
//     let element;
//     element = event;

//     // read the target
//     element = event.target;
//     element = event.target.id;
//     element = event.target.className;
//     element = event.target.innerText;
//     element = event.target.innerText = 2+2;
//     element = event.target;

// console.log(element);
// }

// mouse event 

//create the variables

const heading = document.getElementById('#heading');
const links = document.querySelector('nav');
const clearCartBtn = document.querySelector('#clear-cart');

//click mouse event

clearCartBtn.addEventListener('click', printEventFunction);


//double click 
clearCartBtn.addEventListener('dbclick', printEventFunction)

// mouse enter
//mouse leave
// mouse over
// mouse down mouse move....
function printEventFunction(event){

    console.log(event)
    console.log('the event is: ${event.type}');
}


// input and form event


// create the variable

const searchForm = document.getElementById('search'),
        searchInput = document.getElementById('search-course');

        //event for form

        //form submit

searchForm.addEventListener('submit', formEventFunction);

//key down, key up, key press, blur, cut, paste, ...

function formEventFunction(event){

console.log('${event.type}');
console.log('searchInput.value');

}



