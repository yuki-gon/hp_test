const images = ["image/01.jpg" , "image/02.jpg" , "image/03.jpg" , "image/04.jpg" , "image/05.jpg"];

let count = 0;
const slideimage =()=>{
  if( count >= images.length){
    count = 0;
  }else{
    document.getElementById('slideshow').src = images[count];
    count++;
  }
}



let slideid = 0;
const startstop = () =>{
  if(slideid === 0){
    slideid = setInterval(slideimage, 1000);
  　}else{ 
    　clearInterval(slideid);
    　slideid = 0;
  　}
}
document.getElementById('start_stop').onclick = startstop;