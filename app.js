var min=0, sec=0, msec=0;
var minHeading=document.getElementById("min");
var secHeading=document.getElementById("sec");
var msecHeading=document.getElementById("msec");
var count=0;
var button1=document.getElementById("startButton");

var interval;

function timer(){

	msec++;
	msecHeading.innerHTML=msec;
	if(msec>=100){
		sec++;
		secHeading.innerHTML=sec;
		msec=0;
	}else if(sec>=60){
		min++;
		minHeading.innerHTML=min;
		sec=0;
	}
	
}

function start(){
interval=setInterval(timer, 10);
count=1;
if(count===1){
	button1.disabled = true;
}

}

function stop(){
clearInterval(interval);
count=0;
if(count===0){
	button1.disabled = false;
}

}

function reset(){
sec=0;
msec=0;
min=0;
secHeading.innerHTML=sec;
msecHeading.innerHTML=msec;
minHeading.innerHTML=min;
stop();

}