const list = document.querySelector('#book-list ul');

// delete books
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

// Add book
const forms = document.forms;
console.log(forms);
console.log(forms[0]);
console.log(forms['add-book']);

Array.from(forms).forEach(function(form){
  console.log(form);
});

// attach the event listener to the form instead of button itself.
const addForm = forms['add-book'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();   // prevent the submit button behavior from refreshing the page.
  const value = addForm.querySelector('input[type="text"]').value;      // we use "value" property here. Since it's input element.
  console.log(value);
});
