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

// set the video link

const surceV = '03Y4X7cG_EE/autoplay=1&enablejsapi=1';
const surceVideo = 'https://www.youtube.com/embed/' + surceV;
//const surceVideo = 'data/video/nolnautica.mp4';
const linkVideo = surceVideo 

// modal central content

const modalWindow = document.createElement('iframe');
modalWindow.id = 'info-modal';
modalWindow.className = 'modal';
modalWindow.src = linkVideo;
modalWindow.controls = true;
document.querySelector('.hero-info').appendChild(modalWindow);

// set the modal frame to play the video

const videoData = document.createElement('div');
videoData.className = 'video-storage';
document.querySelector('.hero-info').appendChild(videoData);

// crete the button to open the video file

const play = 'data/images/play.png';
const videoPlay = document.createElement('img');
videoPlay.className = 'video-play';
videoPlay.alt = 'youtube-play';
videoPlay.src = play;
document.querySelector('.video-storage').appendChild(videoPlay);

//let-create the link
const videoFile = document.createElement('a');
videoFile.className = 'link-video';
videoFile.setAttribute('href', '#');
document.querySelector('.video-play').appendChild(videoFile);

// play video in modal

// const videoPresentation = document.createElement('video');
// videoPresentation.className = 'nolnautica-video';
// videoPresentation.src = linkVideo;
// videoPresentation.controls = true;
// document.querySelector('.modal').appendChild(videoPresentation);

videoPlay.onclick =() => {
  modalWindow.style.display = 'block';
}

// closing modal video session

window.onclick = () => {
  if(event.target == modalWindow) {
    modalWindow.style.display = 'none'
    modalWindow.play(onclick) == false;
  }
}
