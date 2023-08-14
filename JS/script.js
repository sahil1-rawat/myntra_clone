const day=document.getElementById("day");
const hours=document.getElementById("hrs");
const minutes=document.getElementById("mnt");
const seconds=document.getElementById("sec");
const offer=document.getElementById("offer");
const today=document.getElementById("today");
const offerend = new Date(2023, 7, 16, 0, 0,0);
const updateOffer=()=>{const now = new Date();
const offerleft = offerend - now;
if(offerleft<0){
    offer.style.display="none"
    
}
let days = Math.floor(offerleft / (1000 * 60 * 60 * 24));
let hrs = Math.floor((offerleft / (1000 * 60 * 60)) % 24);
let mnt = Math.floor((offerleft / (1000 * 60)) % 60);
let sec = Math.floor((offerleft / 1000) % 60);
if(days<10){
    days=` 0${days}`
}
if(hrs<10){
    hrs=` 0${hrs}`
}
if(mnt<10){
    mnt=` 0${mnt}`
}
if(sec<10){
    sec=` 0${sec}`
}
day.innerText=days;
hours.innerText=hrs;
minutes.innerText=mnt;
seconds.innerText=sec;
}
setInterval(updateOffer,1000);
updateOffer();
const now=new Date();
today.innerText=now.getFullYear();