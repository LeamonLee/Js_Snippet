
// In the previous tutorial, we added the event listener callback fucntion for each button.
// But this is not a good way to do so for two reasons:
// 1. the dynamic button which adds on later on will not have those click event 
// 2. if the number of button is too many, then it's a huge task to add every event on each button.

// Instead, what we could do is by using "bubbling event" to capture th click event for those button.
const list = document.querySelector('#book-list ul');

// delete books
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});
