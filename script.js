let start=document.getElementById("start");
let stoped=document.getElementById("stop");
let reset=document.getElementById("reset");
let minutestr = document.getElementById("minute");
let secondstr = document.getElementById("second");
let hourstr  = document.getElementById("hour");
var count = 0;
var timer=false;
var second=0,minute=0,hour=0;


start.addEventListener("click" ,function()
{
    if(timer==false){
    timer=true;
    stopwatch();   
    }
  }      //function called to star timer
);

function stopwatch()
{
    if(timer){
   count++;                      //count goes to 100 second get increment
   if(count==100)
   {
    second++;
    count=0;
   }
   if(second==60)
   {
    minute++;
    second=0;
   }
   if(minute==60)
   {
    hour++;
    minute=0;
    second=0;
   }
(second<=9)?secondstr.innerHTML="0"+second:secondstr.innerHTML=second;
(minute<=9)?minutestr.innerHTML="0"+minute:minutestr.innerHTML=minute;
(hour<=9)?hourstr.innerHTML="0"+hour:hourstr.innerHTML=hour;

setTimeout(stopwatch,1);//calling again function
    }
}


stoped.addEventListener("click",function()
{
   stoptimer();
});
function stoptimer()
{
    if(timer===false)
    {
        alert("first start the stopwatch and don't double click 😅😅😄");
    }
    timer=false; //to stop timer passed timer false so if get break
}


reset.addEventListener("click",function()
{
    resettimer();
})

function resettimer()
{
    second=0;      //reseting to 0
    hour=0 ;
    minute=0 ;
secondstr.innerHTML="00";
minutestr .innerHTML="00";
hourstr.innerHTML="00";
timer=false;             //optional
}
