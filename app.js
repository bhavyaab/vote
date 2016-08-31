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
//generate an array of image and its name property
var images = [];
for(var i = 0; i < img.length; i++){
  images.push(new Images_obj(img[i].split('.')[0].split('/')[1], img[i]));
}

//generate a random number between zero and image.length but it will remove the element that been recentaly displayed
var redo = 0;
 // [lbl] start:

function randomNum() {
  var num = Math.floor((Math.random() * images.length));
  var x = (num === recent_display[0] || num === recent_display[1] || num === recent_display[2] || num === same_time[0]) ? randomNum() : num;
  same_time = [];
  return(x);
};


//create function for invoking images and its name to dom.
var same_time = [];
function displayContent(){
  var i = randomNum();          //random number should not be equal to recent_display array index.
  var div = document.getElementById('img-1');
  var ul = document.createElement('ul');
    // var li = document.createElement('li');
    // ul.innerHTML = 'li';
  ul.innerHTML = '<li><img id ="' + i + '"  src = "' + images[i].path + '"> </li>' + '<li>' + images[i].name + '</li>';
  div.appendChild(ul);
  same_time.push(document.getElementsByTagName('img')[0].id);
};
//three times and then pass it to the array to get that index object
//fetch the object name and images and display to the DOM
//add eventListner for click and hover

var recent_display = [];
function New_function(){
  for(var j = 0; j < 3; j++){
    displayContent();
    recent_display.push(document.getElementsByTagName('img')[j].id);

    document.getElementsByTagName('img')[j].addEventListener('click', click_fun); //click event is been generated
    function click_fun(event){
      images[event.target.id].click++;
      document.getElementById('img-1').innerHTML = '';  //empty the dom.
      recent_display = [];  //empty the array which contains the element info
      if(redo <= 10){
        redo++;
        new New_function();  //calling the whole loop again
      } else {
        new Data();
        new CreateChart();
      };
    };

    document.getElementsByTagName('img')[j].addEventListener('mouseover', mouse_over);
    function mouse_over(event){
      images[event.target.id].view++;
    };
  };
}

new New_function();
// create array for result
//creating data array;

var data_view = [];
var data_click = [];
var data_name = [];
function Data(){
  for(var i = 0; i < images.length; i++){
    data_name.push(images[i].name);
    data_view.push(images[i].view);
    data_click.push(images[i].click);
  };
};
//create graph
function CreateChart(){
  var ctx = document.getElementById( 'myChart');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data_name,
      datasets: [{
        label: '# of vote',
        data: data_click,
        backgroungColor: ['black'],
        borderColor: ['red'],
        borderWidth: 1
      }]
    },
    options:{
      scales:{
        yAxis:[{
          ticks:{
            beginAtZero: true,
            responsive: false,
            maintainAspectRatio: false,
          }
        }]
      }
    }
  });
}
