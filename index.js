const slides=document.querySelectorAll(".slide")
var count=0;

slides.forEach(
    (slide,index)=>{
        slide.style.left=`${index*100}%`
    }
)
const goNext=()=>{
    count++
    if(count==(slides.length)){
        count=0;
    }
    slideImage()
}
const goPrev=()=>{
    count--
    if(count<0){
        count=slides.length-1;
    }
    slideImage()
}
const slideImage=()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${count*100}%)`
        }
    )
}
function mobile_nav(){
    const x=document.querySelector('.nav_menu_mobile')
    x.style.display='flex'
  }
function close_nav(){
    const x=document.querySelector('.nav_menu_mobile')
    x.style.display='none'
}

const modal1 = document.getElementById("p-1");
const modal2 = document.getElementById("p-2");
const modal3 = document.getElementById("p-3");
const modal4 = document.getElementById("p-4");
const modal5 = document.getElementById("p-5");
const modal6 = document.getElementById("p-6");
const modal7 = document.getElementById("p-7");
const modal8 = document.getElementById("p-8");




const openBtn1 = document.getElementById("Straberries");
const openBtn2 = document.getElementById("Onions");
const openBtn3 = document.getElementById("Tomatos");
const openBtn4 = document.getElementById("Brinjal");
const openBtn5 = document.getElementById("Brocoli");
const openBtn6 = document.getElementById("Potato");
const openBtn7 = document.getElementById("Cauliflower");
const openBtn8 = document.getElementById("Fruits");

const y =document.querySelectorAll(".fa-circle-xmark");

openBtn1.addEventListener("click", () => {
    modal1.showModal();
});
openBtn2.addEventListener("click", () => {
    modal2.showModal();
});
openBtn3.addEventListener("click", () => {
    modal3.showModal();
});
openBtn4.addEventListener("click", () => {
    modal4.showModal();
});
openBtn5.addEventListener("click", () => {
    modal5.showModal();
});
openBtn6.addEventListener("click", () => {
    modal6.showModal();
});
openBtn7.addEventListener("click", () => {
    modal7.showModal();
});
openBtn8.addEventListener("click", () => {
    modal8.showModal();
});
y[0].addEventListener("click", () => {
    modal1.close();
});
y[1].addEventListener("click", () => {
    modal2.close();
});
y[2].addEventListener("click", () => {
    modal3.close();
});
y[3].addEventListener("click", () => {
    modal4.close();
});
y[4].addEventListener("click", () => {
    modal5.close();
});
y[5].addEventListener("click", () => {
    modal6.close();
});
y[6].addEventListener("click", () => {
    modal7.close();
});
y[7].addEventListener("click", () => {
    modal8.close();
});
y[8].addEventListener("click", () => {
    modal9.close();
});