var container = document.getElementsByClassName('unactive');
var source = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg", "img/img5.jpg", "img/img6.jpg", "img/img7.jpg", "img/img7.jpg", "img/img6.jpg", "img/img5.jpg", "img/img4.jpg", "img/img3.jpg", "img/img2.jpg", "img/img1.jpg"];

var timeP = document.getElementsByTagName('p')[0];
var clickTap = document.getElementsByTagName('p')[1];
var imgActivate = document.getElementsByClassName('active');

var imageSelect = new Array ();
var sourceImg =  new Array ();
var racourcie = "nothing";
var sourceSelect = 0;

//Variable for click function
var click = 0;

//Variable for timeFunction
var hours = 0;
var minutes = 0;
var secondes = 0;

//create a button in the end of the game for retry
var buttonRetry = document.createElement('a');
var targetRetry = document.createAttribute("target");
var linkRetry = document.createAttribute("href");

buttonRetry.setAttributeNode(linkRetry);
buttonRetry.setAttributeNode(targetRetry);
buttonRetry.className = "retry";
buttonRetry.innerHTML = "Recommencer"

buttonRetry.href = "index.html";
buttonRetry.target = "_self";


var time = setInterval(timeFunction, 1000);

function timeFunction() {
  //If it's 59 secondes
  if (secondes === 59) {
    minutes++;
    secondes = 0;
  }
  //If it's 59 minutes
  else if (minutes === 60) {
    hours++;
    minutes = 0;

  } else {

    secondes++;

  }

  timeP.innerHTML = "Temps : " + hours + " : " + minutes + " : " + secondes;
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

      sourceSelect = source[i];

      game(this, sourceSelect);

      click++;

      if (imgActivate.length === 14) {

        clickTap.innerHTML = "Bravo tu as réussi en " + click + " coups !";
        clickTap.parentNode.appendChild(buttonRetry);

      } else {
        clickTap.innerHTML = "Nombres de click : " + click;
      }

      };
}


function game(image, srcSelect) {

    if (image !== imageSelect[0]) {
      //take img in a table
       imageSelect.push(image);

       //take source of img
       image.src = srcSelect;
       sourceImg.push(image.src);
       //make image visible
       image.style.opacity = 1;
       //take element like in source table

       racourcie = image.src.substr(62, 74);

       //if 2 element a egal
       if (imageSelect.length === 2 && sourceImg[0] === sourceImg[1]) {

         pairs();

       } else if (imageSelect.length === 2) {

         impairs();

       }
    }

}


function pairs() {

  //change class to pairs picture
  imageSelect[0].className = 'active';
  imageSelect[1].className = 'active';

  //reset table
  imageSelect = [];
  sourceImg = [];

  if (imgActivate.length === 14) {
    //stop time
    clearInterval(time);



    //take off all img
    for (var i = 0; i < imgActivate.length; i++) {
      imgActivate[i].parentNode.style.display = "none";
    }
  }
}


function impairs() {
  //Desactivate another picture than this activate
  for (var i = 0; i < container.length; i++) {

    if (container[i].style.opacity === "0" || container[i].style.opacity === "") {
      container[i].style.display = "none";
    }

  }

  //activate button and hide picture
  setTimeout(function(){
    for (var j = 0; j < container.length; j++) {
    container[j].style.opacity = "0";
    container[j].style.display = "block";
  }
    //reset table
    sourceImg= [];
    imageSelect = [];
  }, 1000);

}
