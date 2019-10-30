// const listItems = document.querySelectorAll('#book-list.delete');
const listItems = document.querySelectorAll('#book-list ul li');

// Once again, can also use listItems.forEach() directly.
Array.from(listItems).forEach(function(item){
  item.addEventListener('click', (e) => {

    const li = e.target.parentElement;
    console.log('child element to remove:', li);
    console.log('parent element to remove child from:', li.parentElement);
    li.parentNode.removeChild(li);

  });
});

// prevent default behaviour

const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e){
  console.log(e);           // the event object itself 
  console.log(e.target);    // target is the property on the event object. In this case, it's gonna return <a> tag.
  e.preventDefault();       // In this case, <a> tag's default event behavior is naigating to the link that setting in href.
  console.log('Navigation to', e.target.textContent, 'was prevented');
});
