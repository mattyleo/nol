// create the video contents
const presentation = document.createElement('video');
presentation.className = 'presentation';
presentation.src = 'data/video/presentation.m4v';
presentation.play = true;
presentation.autoplay = true;
presentation.loop = true;
presentation.muted = true;
document.querySelector('.testata').appendChild(presentation);


// Company Info 

const heroContent = document.createElement('div');
heroContent.className = 'hero-info';
document.querySelector('.hero-content').appendChild(heroContent);

const companyName = document.createElement('h1');
companyName.className = 'testata-aziendale';
const company = 'Nol Nautica';
const strong = company.bold().toUpperCase();
companyName.innerHTML = strong;
const description = document.createElement('p');
description.className = 'descriptions';
description.innerHTML = 'Costa Smeralda watersports paradise';
document.querySelector('.hero-info').appendChild(companyName);
document.querySelector('.hero-info').appendChild(description);



// play

const linkVideo = 'https://www.youtube.com/watch?v=hFdOoO_J7zs';


const videoData = document.createElement('div');
videoData.className = 'video-storage';
document.querySelector('.hero-info').appendChild(videoData);
const videoFile = document.createElement('a');
videoFile.className = 'link-video';
videoFile.setAttribute('href', linkVideo);
document.querySelector('.video-storage').appendChild(videoFile);
const play = 'data/images/play.png';
const videoPlay = document.createElement('img');
videoPlay.className = 'video-play';
videoPlay.alt = 'youtube-play';
videoPlay.src = play;
document.querySelector('.link-video').appendChild(videoPlay);


// videoPlay.className = 'video-play';
// videoPlay.alt = 'youtube-play';
// document.querySelector('.video-storage').appendChild(videoPlay);
// videoPlay.src = play;
// document.querySelector('.video-play').appendChild(videoFile);