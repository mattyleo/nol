// create the video contents
const videoLoop = document.createElement('video');
videoLoop.className = 'presentation';
videoLoop.src = 'data/video/presentation.m4v';
videoLoop.play = true;
videoLoop.autoplay = true;
videoLoop.loop = true;
videoLoop.muted = true;
document.querySelector('.testata').appendChild(videoLoop);

// Company Info 
const heroContent = document.createElement('div');
heroContent.className = 'hero-info';
document.querySelector('.hero-content').appendChild(heroContent);

const companyName = document.createElement('h1');
companyName.className = 'testata-aziendale';
const company = 'Nolnautica';
const strong = company.bold().toUpperCase();
companyName.innerHTML = strong;
const description = document.createElement('p');
description.className = 'descriptions';
description.innerHTML = 'Costa Smeralda watersports paradise';
document.querySelector('.hero-info').appendChild(companyName);
document.querySelector('.hero-info').appendChild(description);

// create video button
const playButton = document.createElement('div');
playButton.className = 'video-storage';
document.querySelector('.hero-info').appendChild(playButton);
const ytButton = document.createElement('img');
ytButton.className = 'play-button';
ytButton.alt = 'youtube play image';
ytButton.src = 'data/images/ytlogo.png';
document.querySelector('.video-storage').appendChild(ytButton);

// create the modal form
const modal = document.createElement('div');
modal.className = 'modal';
document.querySelector('.hero-info').appendChild(modal);


// create the player using YOUTUBE API
let ytPlayer = document.createElement('div');
ytPlayer.id = 'player';
document.querySelector('.modal').appendChild(ytPlayer);
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: '03Y4X7cG_EE',
    playerVars: { 'rel': 0},
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function pauseVideo() {
  player.pauseVideo();
}

function playVideo() {
  player.playVideo();
}

function stopVideo() {
  player.stopVideo();
}

// Show modal on click
ytButton.onclick = () => {
  modal.style.display = 'block';
  player.playVideo();
}

// disable modal when user click outside the video
window.onclick = () => {
  if(event.target == heroContent) {
    modal.style.display = 'none';
    player.stopVideo();
  }
}
