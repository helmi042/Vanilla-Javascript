const buttonStart = document.getElementById('button-start');
const buttonStop = document.getElementById('button-stop');
const buttonReset = document.getElementById('button-reset');
const tens = document.getElementById('tens');
const secondsEl = document.getElementById('seconds');
let miliSeconds = 0;
let seconds = 0;
let timer;

buttonStart.onclick = start;
buttonStop.onclick = stop;
buttonReset.onclick = reset;

function start(){
	timer = setInterval(() => {
		appendTimer();
	}, 0.1)
}

function stop(){
	clearInterval(timer)
}

function reset(){
	clearInterval(timer);
	miliSeconds = 0;
	seconds = 0;
	tens.innerHTML = '00';
	secondsEl.innerHTML = '00';
}

function appendTimer(){
	miliSeconds++;
	if(miliSeconds < 9){
		tens.innerHTML = '0' + miliSeconds;
	}
	if(miliSeconds > 99){
		miliSeconds = 0;
		miliSeconds.innerHTML = '0' + miliSeconds;
		seconds++;
		secondsEl.innerHTML = '0' + seconds;
	}
	if(miliSeconds > 9){
		tens.innerHTML = miliSeconds;
	}
	if(seconds > 9){
		secondsEl.innerHTML = seconds;
	}
}