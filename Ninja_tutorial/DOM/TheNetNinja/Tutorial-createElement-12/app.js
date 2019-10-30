const list = document.querySelector('#book-list ul');
const forms = document.forms;

// delete books
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

// add books
const addForm = forms['add-book'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();

  // create elements
  const value = addForm.querySelector('input[type="text"]').value;
  
  // At the minute, it's not done anything with it yet. It's just floating around any space if you like.
  // Later on, we have to append to the DOM by using appendChild.
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // add text content
  bookName.textContent = value;
  deleteBtn.textContent = 'delete';

  // append to DOM
  li.appendChild(bookName);         // In this case, bookName must come before deleteBtn. Because appendChild will put the element to the end.
  li.appendChild(deleteBtn);
  list.appendChild(li);
  //list.insertBefore(li, list.querySelector('li:first-child'));
});
