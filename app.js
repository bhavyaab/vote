//put every single img in and array
var img = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/water-can.jpg', 'img/wine-glass.jpg'];

//Defined an object to set the property of each object and assign two property click and view to zero.
var click = 0;
var view = 0;
function Images_obj(name, path){
  this.name = name;
  this.path = path;
  this.click = click;
  this.view = view;
}
//generate an array of image and its property
var images = [];
for(var i = 0; i < img.length; i++){
  images.push(new Images_obj(img[i].split('.')[0].split('/')[1], img[i]));
}

//generate a random number between zero and image.length
function randomNum() {
  return Math.floor((Math.random() * images.length));
}

//create function for invoking images and its name to dom.

function DisplayContent(){
  var i = randomNum();
  console.log(i);
  var div = document.getElementById('img-1');
  var ul = document.createElement('ul');
  var li = document.createElement('li');
  ul.innerHTML = 'li';
  li.innerHTML = '<img src ="' + images[i].path + '" </li>' + '<li>' + images[i].name;
  div.appendChild(li);

//add eventListner for click and hover

  ul.addEventListener('onmouseover', mouse_over());
  function mouse_over() {
    ul.innerHTML = images[i].view++;
    console.log(images[i].view);
    return images[i].view;
  };

  ul.addEventListener('click', click());
  function click(){
    ul.innerHTML = images[i].click++;
    console.log(images[i].click);
    return images[i].click;
  };
}
//three times and then pass it to the array to get that index object
//fetch the object name and images and display to the DOM
function Take_vote() {
  for(i = 0; i < 3; i++){
    new DisplayContent();
  };
  document.getElementById('img-1').addEventListener('click', hide());
  function hide(){
    display: none;
  };
};

new Take_vote();








// display result in table
