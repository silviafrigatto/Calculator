let result = document.getElementById("inputText");

let calculate=(number)=>{
	result.value += number;
}

let Result=()=>{
	try{
		result.value = eval(result.value) // rewrite this without eval
	}
	catch(err){
		alert("Enter a valid input");
	}
}

function percent(){
	result.value = result.value / 100;
}

function clr(){
	result.value = " ";
}

function del(){
	result.value = result.value.slice(0, -1);
}