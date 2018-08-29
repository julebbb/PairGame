var container = document.getElementsByClassName('unactive');
var source = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg", "img/img5.jpg", "img/img6.jpg", "img/img7.jpg", "img/img7.jpg", "img/img6.jpg", "img/img5.jpg", "img/img4.jpg", "img/img3.jpg", "img/img2.jpg", "img/img1.jpg"];


var historique = new Array ([]);
var imageSelect = new Array ();
var sourceImg =  new Array ();
var pair = new Array ([]);
var racourcie = "nothing";
var sourceSelect = 0;
var click = 0;
var compt = 0;

var time = setInterval(timeFunction, 1000);

function timeFunction() {

  
  compt++;

}
//Randomize array element order in place
//Using Durstenfeld suffle algorithme
for (var i = source.length - 1; i > 0; i--) {

        //Take a number random
        var random = Math.floor(Math.random() * (i + 1));
        //Make a variable with the source
        var temp = source[i];
        //Change the source with the random
        source[i] = source[random];
        //Make the random in the place of the initial source
        source[random] = temp;
}

for (let i = 0; i < container.length; i++) {
   container[i].onclick = function(){
      sourceSelect= source[i];
      game(this, sourceSelect);
      click++

      };
}

function game(image, srcSelect) {
    //take img in a table
     imageSelect.push(image);

     //take source of img
     image.src = srcSelect;
     sourceImg.push(image.src);

     //make image visible
     image.style.opacity = 1;
     //take element like in source table
     racourcie = image.src.substr(62, 74);
     console.log(racourcie);
     //if 2 element a egal
     if (imageSelect.length === 2 && sourceImg[0] === sourceImg[1]) {
       console.log();
       pairs();
     } else if (imageSelect.length === 2) {
       impairs();
     }

}


function pairs() {

  imageSelect[0].className = 'active';
  imageSelect[1].className = 'active';

  imageSelect = [];
  sourceImg = [];
}


function impairs() {
  for (var i = 0; i < container.length; i++) {
    if (container[i].style.opacity === "0") {
      container[i].style.display = "none";
    }
  }

  setTimeout(function(){
    for (var j = 0; j < container.length; j++) {
    container[j].style.opacity = "0";
    container[j].style.display = "block";
  }
    sourceImg= [];
    imageSelect = [];
  }, 1000)

}
