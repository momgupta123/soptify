


let songIndex=0;
let audioElement= new Audio('songs/1.mp3');

var duration=audioElement.duration;
console.log(duration);
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myprogressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songIteam=Array.from(document.getElementsByClassName("songItem"));
let songs=[
    {
        songName:"Let me Love You",
        filepPath:"songs/1.mp3",
        coverPath:"covers/1.jpeg"
    },
    {
        songName:"Baarish me tum",
        filepPath:"songs/2.mp3",
        coverPath:"covers/2.jpg"
    },
    {
        songName:"Hoye isq na",
        filepPath:"songs/3.mp3",
        coverPath:"covers/3.jpg"
    },
 
];
//handlee 
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;  
    }
})


audioElement.addEventListener('timeupdate',()=>{
progress=parseInt((audioElement.currentTime/audioElement.duration)* 100);

myProgressBar.value=progress;
})
//mathematical progress  yaha pe sick ko jab badhaye nge to to music bhi badhega ok
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
//Listen to event
const makeallplay=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');

})
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
       makeallplay();
       songIndex=parseInt(e.target.id);
       e.target.classList.add('fa-circle-pause');
       e.target.classList.remove('fa-circle-play');
       audioElement.src=`songs/${songIndex}.mp3`;
       masterSongName.innerText=songs[songIndex].songName;
       audioElement.currentTime=0;
       audioElement.play();
       gif.style.opacity=1;
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
    });
});
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9)
    {
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})




songIteam.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});