// It will return an array-like object. But it's not an array essentially, it's HTMLCollection instead.
const titles = document.getElementsByClassName('title');

console.log(titles[0]);

console.log(Array.isArray(titles));


// This is not gonna work. Since titles is not an array.
// titles.forEach(function(item){
//   console.log(item);
// });

// Array.from() turns it into an array.
console.log(Array.isArray(Array.from(titles)));

// loop through method1
Array.from(titles).forEach(function(title){
  console.log(title);
});

// loop through method2
for(i=0; i < titles.length; i++){
  console.log(titles[i]);
}

const lis = document.getElementsByTagName("li");
console.log(lis[0]);