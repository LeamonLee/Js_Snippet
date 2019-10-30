const bookList = document.querySelector('#book-list');

// 99% time parentNode and parentElement are gonna return the same element.
console.log('book list parent node:', bookList.parentNode);
console.log('book list parent element:', bookList.parentElement);
console.log('book list parent element:', bookList.parentElement.parentElement);


console.log('all node children:');
// childNodes will return a list of elements including linebreak(textnode), element, linebreak, element, linebreak...
Array.from(bookList.childNodes).forEach(function(node){
  console.log(node);
});

console.log('all element children:');
// whereas children won't contain textnode. instead it's only gonna return elements.
Array.from(bookList.children).forEach(function(node){
  console.log(node);
});

const titles = bookList.querySelectorAll('.name');

console.log('Book titles:');
Array.from(titles).forEach(function(title){
  console.log(title.textContent);
});
