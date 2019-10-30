const wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf);

// querySelector is only gonna return one single element to us.
// So when there are multiple ones, it's gonna ruturn the first one.
var books = document.querySelector('#book-list li .name');
console.log(books);

// if your want to return all of them, use querySelectorAll.
// The type is NodeList instead of HTMLCollection like getElementByClassName or getElementByTagName does.
// NodeList can use forEach directly without turning it into an array.
books = document.querySelectorAll('#book-list li .name');
console.log(books);

Array.from(books).forEach(function(book){
  console.log(book);
}); 
