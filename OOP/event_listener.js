let title=document.querySelector(".title")
document.getElementById("red").addEventListener("click",function(){
    title.innerHTML="Red";
    title.style.backgroundColor="red";

});

document.getElementById("blue").addEventListener("click",function(){
    title.innerHTML="Blue";
    title.style.backgroundColor="blue";
});