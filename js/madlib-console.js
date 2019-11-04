var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'WeWork'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest', 'Theranos'];

// ___________store the #create button in a variable
let create = document.getElementById('create');
let randomSentence;

//____________create new startup
//listen for clicks on the #create button, and insert randomSentence
create.addEventListener('click', function() {
  //remove class isSaved from #save, noClick from #print, reset #favorites on click #create
  save.classList.remove('isSaved');
  print.classList.remove('noClick');
  favorites.innerHTML = '<strong>Saved Favorites:</strong><br>';
  //store new random numbers on each click
  let random1 = Math.floor((Math.random() * startupX.length));
  let random2 = Math.floor((Math.random() * startupY.length));
  //store the sentence to be inserted in a variable
  randomSentence = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2] + '.';
  //test the sentence in the console
  console.log(randomSentence);
  //insert randomSentence into #xForY
  document.getElementById('xForY').innerHTML = randomSentence;
  return randomSentence;
});

//__________store favorite startups
//create variables
let favoritesArr = [];
let save = document.getElementById('save');

//when click #save, append value of #xForY to favorites, return favoritesArr
save.addEventListener('click', function() {
  if(favoritesArr[(favoritesArr.length)-1] === randomSentence) {
    return;
  } else {
    favoritesArr.push(randomSentence);
    console.log('saved: ' + favoritesArr);
    //add class isSaved to #save button
    save.classList.add('isSaved');
    return favoritesArr;
  }
});

//__________print saved favorites
//create variables
let print = document.getElementById('print');
let favorites = document.getElementById('favorites');
//when click #print, insert favoritesArr into #favorites
print.addEventListener('click', function() {
  //use CSS to make #print unclickable
  print.classList.add('noClick');
  //insert innerHTML to #favorites
  for(let i = 0; i < favoritesArr.length; i++) {
    favorites.innerHTML = favorites.innerHTML + favoritesArr[i] + '<br>';
  }
});
