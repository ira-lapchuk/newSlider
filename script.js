const slideshow = [
  "https://images.unsplash.com/photo-1421218108559-eb1ff78357f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  "https://images.unsplash.com/photo-1508233620467-f79f1e317a05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  "https://images.unsplash.com/photo-1425342605259-25d80e320565?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1474767821094-a8fe9d8c8fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
];

let index = 0;

function setImage() {
  const sliderImg = document.getElementById("sliderImgId");

  sliderImg.src = slideshow[index];
  document.getElementById("currentIndex").value = index;
}

function clickButton(currentIndex) {
  const sliderImg = document.getElementById("sliderImgId");
  sliderImg.src = slideshow[currentIndex];

  // grab all dots
  // remove active class from all of them
  // add active class for current dot
  const dotList = document.getElementsByClassName("smallBtn"); // array of dots HTML elements

  for (let i = 0; i < dotList.length; i++) {
    dotList[i].classList.remove("active");
  }
  dotList[currentIndex].classList.add("active");
  //console.log(dotList);
}

function nextImage() {
  if (index == slideshow.length - 1) {
    index = 0;
  } else {
    index = index + 1;
  }
  setImage();

  const dotList = document.getElementsByClassName("smallBtn"); // array of dots HTML elements

  for (let i = 0; i < dotList.length; i++) {
    dotList[i].classList.remove("active");
  }
  dotList[index].classList.add("active");
}

function prevImage() {
  if (index == 0) {
    index = slideshow.length - 1;
  } else {
    index = index - 1;
  }
  setImage();
  const dotList = document.getElementsByClassName("smallBtn"); // array of dots HTML elements

  for (let i = 0; i < dotList.length; i++) {
    dotList[i].classList.remove("active");
  }
  dotList[index].classList.add("active");
}

// функція для створення кнопок
function createDotBtns() {
  for (let i = 0; i < slideshow.length; i++) {
    if (i === 0) {
      document.getElementById("display-cont").innerHTML =
        "<div type='button' class='smallBtn active' onclick='clickButton(" +
        i +
        ")'></div>";
    } else {
      document.getElementById("display-cont").innerHTML +=
        "<div type='button' class='smallBtn' onclick='clickButton(" +
        i +
        ")'></div>";
    }
  }
}

//-----------------------------

setImage();
createDotBtns();
