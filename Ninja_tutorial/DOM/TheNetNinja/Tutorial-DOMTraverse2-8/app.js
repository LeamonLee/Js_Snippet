const bookList = document.querySelector('#book-list');

// nextSibling includes textnode which is a linebreak if there's any.
console.log('#book-list next sibling:', bookList.nextSibling);
// nextElementSibling won't contain the textnode(linebreak).
console.log('#book-list next element sibling:', bookList.nextElementSibling);
// previousSibling includes textnode as well if there's any.
console.log('#book-list previous sibling:', bookList.previousSibling);
// previousElementSibling won't contain the textnode(linebreak).
console.log('#book-list previous element sibling:', bookList.previousElementSibling);

// In this scenario, it's only gonna search the <p> tag element inside the <header> scope.
bookList.previousElementSibling.querySelector('p').innerHTML += '<br />Too cool for everyone else!';
