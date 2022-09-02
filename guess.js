
let num

function enter1(){
	if (document.getElementById("agee").value==""){
		alert("Enter a number")
	}
	else{
	num=document.getElementById("agee").value
	document.getElementById("display").innerHTML= "Your current number: " + num
	document.getElementById("agee").value=""
	document.getElementById("agee").placeholder="Multuply by 2"
	document.getElementById("button").onclick=enter2
	}

}

function enter2(){
	if (document.getElementById("agee").value==""){
		alert("Enter a number")
	}
	else{
	num=document.getElementById("agee").value
	document.getElementById("display").innerHTML= "Your current number: " + num
	document.getElementById("agee").value=""
	document.getElementById("agee").placeholder="Add 5"
	document.getElementById("button").onclick=enter3
	}
	

}

function enter3(){
	if (document.getElementById("agee").value==""){
		alert("Enter a number")
	}
	else{
	num=document.getElementById("agee").value
	document.getElementById("display").innerHTML= "Your current number: " + num
	document.getElementById("agee").value=""
	document.getElementById("agee").placeholder="Multiply by 50"
	document.getElementById("button").onclick=enter4
	}
}

function enter4(){
	if (document.getElementById("agee").value==""){
		alert("Enter a number")
	}
	else{
	num=document.getElementById("agee").value
	document.getElementById("display").innerHTML= "Your current number: " + num
	document.getElementById("agee").value=""
	document.getElementById("agee").style.width="450px"
	document.getElementById("agee").placeholder="Already had birthday this year? add 1772, else add 1771"
	document.getElementById("button").onclick=enter5
	}
}

function enter5(){
	if (document.getElementById("agee").value==""){
		alert("Enter a number")
	}
	else{
	num=document.getElementById("agee").value
	document.getElementById("display").innerHTML= "Your current number: " + num
	document.getElementById("agee").value=""
	document.getElementById("agee").placeholder="Subtract the year of your birth from the result"
	document.getElementById("button").onclick=enter6	
	}
}

function enter6(){
	if (document.getElementById("agee").value==""){
		alert("Enter a number")
	}
	else{
	num=document.getElementById("agee").value
	let urnum=num[0];
	let urage=num.slice(1)
	document.getElementById("display").innerHTML= `Result: <span id='yornum'>${urnum}</span><span id='yorage'>${urage}</span> The First digit is the number you chose, the other two is your age.`
	document.getElementById("agee").style.visibility="hidden"
	document.getElementById("button").style.visibility="hidden"
	document.getElementById("label").style.visibility="hidden"
	}
}
