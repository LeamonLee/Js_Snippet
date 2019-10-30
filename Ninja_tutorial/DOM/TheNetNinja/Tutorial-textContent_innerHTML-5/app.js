const books = document.querySelectorAll('#book-list li .name');

// The returned type of querySelectorAll is NodeList instead of HTMLCollection like getElementByClassName or getElementByTagName does.
// NodeList can use forEach directly without turning it into an array.
// But you still can use Array.from() to do the conversion anyway.
Array.from(books).forEach(function(book){
  console.log(book.textContent);
  book.textContent += ' (Book title)';
});

const bookList = document.querySelector('#book-list');
bookList.innerHTML = '<h2>Books and more books...</h2>';
bookList.innerHTML += '<p>This is how you add HTML content</p>';
