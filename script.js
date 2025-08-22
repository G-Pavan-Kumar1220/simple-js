
const titl = document.getElementById("title");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const input2 = document.getElementById("enter_value");
const btn = document.getElementById("btn")
box1.addEventListener("click",myFunction1);
box2.addEventListener("click",myFunction2);
box3.addEventListener("click" ,myFunction3);
box4.addEventListener("click",myFunction4);
box1.addEventListener("dblclick",myFunction5);
box2.addEventListener("dblclick",myFunction6);
box3.addEventListener("dblclick",myFunction7);
box4.addEventListener("dblclick",myFunction8);
btn.addEventListener("click",()=>{
    titl.innerHTML=input2.value;
    input2.value=" ";
})
function myFunction1(){
    box1.style.backgroundColor="red";
}
function myFunction2(){
    box2.style.backgroundColor="blue";
}
function myFunction3(){
    box3.style.backgroundColor="green";
}
function myFunction4(){
    box4.style.backgroundColor="yellow";
}
function myFunction5(){
    box1.style.backgroundColor="white";
}
function myFunction6(){
    box2.style.backgroundColor="white";
}
function myFunction7(){
    box3.style.backgroundColor="white";
}
function myFunction8(){
    box4.style.backgroundColor="white";
}