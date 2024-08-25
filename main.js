
var songs = ["song1.mp3", "song2.mp3", "song3.mp3"];
    var currentSongIndex = 0;
    var isPlaying = false;
    var audio = new Audio();  // Create an Audio object

    function togglePlayPause() {
      var playIcon = document.getElementById("play");

      // Toggle between play and pause icons
      if (isPlaying) {
        playIcon.classList.remove("bi-pause-fill");
        playIcon.classList.add("bi-play-fill");
        pauseSong();
      } else {
        playIcon.classList.remove("bi-play-fill");
        playIcon.classList.add("bi-pause-fill");
        playSong();
      }
    }

    function playSong() {
      if (!isPlaying) {
        isPlaying = true;
        audio.src = songs[currentSongIndex];
        audio.play();
        console.log("Play song: " + songs[currentSongIndex]);
      } else {
        isPlaying = false;
        audio.pause();
        console.log("Pause song: " + songs[currentSongIndex]);
      }
    }

    function pauseSong() {
      isPlaying = false;
      audio.pause();
      console.log("Pause song: " + songs[currentSongIndex]);
    }

  function previousSong() {
      if (currentSongIndex > 0) {
        currentSongIndex--;
        playSong();
        console.log("Previous song: " + songs[currentSongIndex]);
      }
    }

    function nextSong() {
      if (currentSongIndex < songs.length - 1) {
        currentSongIndex++;
        playSong();
        console.log("Next song: " + songs[currentSongIndex]);
      }
    }
let h = document.getElementById("input_box"); 
let css = getComputedStyle(h);
let w = ("width = ", css.width);
console.log(w);

let m = document.getElementById("menu").width = w;
// let newwidth = m.setAttribute("width",w);
console.log(m);

// slider
let flag = 0;
let intervalId;

function startSlideshow() {
    intervalId = setInterval(function () {
        controller(1);
    }, 2000); 
}

function stopSlideshow() {
    clearInterval(intervalId);
}


function controller(x){
    flag += x;
    slideshow(flag);
}
slideshow(flag);


function slideshow(num){
    let slides = document.getElementsByClassName('slide');

    if(num == slides.length){
         flag = 0;
         num = 0;
    }
    else if(num < 0){
        flag = slides.length-1;
        num = slides.length-1;
    }
       
    for(let y of slides){
        y.style.display = "none";
    }
    
        slides[num].style.display = "block";
    
}
startSlideshow();

// search box
function search_animal() { 
  let input = document.getElementById('search-input').value 
  input=input.toLowerCase(); 
  let x = document.getElementsByClassName('song-name'); 
    
  for (i = 0; i < x.length; i++) {  
      if (!x[i].innerHTML.toLowerCase().includes(input)) { 
          x[i].style.display="none"; 
      } 
      else { 
          // console.log(x[i]);
          // x[i].style.display="list-item"; 
          x[i].style.background="rgba(255, 0, 0, 0.9)"; 
         // console.log(prt);              
      } 
  } 
} 



  