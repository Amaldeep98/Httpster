
var mode=document.getElementById("mode")
mode.addEventListener("click",dmode)
var x=1;

function dmode(){
    if(x==1){
        document.body.style.backgroundColor="black"
        document.getElementById("web").style.color="white"
        document.getElementById("mode").style.backgroundColor="white"
        document.getElementById("mode").style.borderColor="black"
        x=0;
    }else{
        document.body.style.backgroundColor="white"
        document.getElementById("web").style.color="black"
         document.getElementById("mode").style.backgroundColor="black"
         document.getElementById("mode").style.borderColor="white"
        x=1
    }
}