function disp(val){
	document.getElementById("box").innerHTML+=val;
}
function clc(){
	document.getElementById("box").innerHTML="";
}
function equal(){
	let input=document.getElementById("box").innerHTML;
	let output=eval(input);
	document.getElementById("box").innerHTML=output;
}