var num1="", num2="";

/*  Function for adding two numbers, add button click event*/
document.getElementById("btn_add").onclick= function(){
	num1=document.getElementById("num1").value;
	num2=document.getElementById("num2").value;
	if(num1!="" || num2!="")
	{
		document.getElementById("result").value = Number.parseInt(num1) + Number.parseInt(num2);
	}
}
/*  Function for subtracting two numbers, sub button click event*/
document.getElementById("btn_sub").onclick= function(){
	num1=document.getElementById("num1").value;
	num2=document.getElementById("num2").value;
	if(num1!="" || num2!="")
	{
		document.getElementById("result").value = Number.parseInt(num1) - Number.parseInt(num2);
	}
}
/*  Function for multiplying two numbers, mul button click event*/
document.getElementById("btn_mul").onclick= function(){
	num1=document.getElementById("num1").value;
	num2=document.getElementById("num2").value;
	if(num1!="" || num2!="")
	{
		document.getElementById("result").value = Number.parseInt(num1) * Number.parseInt(num2);
	}
}
/*  Function for dividing two numbers, div button click event*/
document.getElementById("btn_div").onclick= function(){
	num1=document.getElementById("num1").value;
	num2=document.getElementById("num2").value;
	if(num1!="" || num2!="")
	{
		document.getElementById("result").value = Number.parseInt(num1) / Number.parseInt(num2);
	}
}
/*  Function for resetting all text fields, reset all button click event*/
document.getElementById("btn_reset").onclick= function(){
	document.getElementById("num1").value = "";
	document.getElementById("num2").value = "";
	document.getElementById("result").value = "";
}