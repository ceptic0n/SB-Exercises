function calculateTaxes(income){
	if(!Number.isFinite(income)){
		throw new Error("Invalid Income");
	}
	if(income > 30000){
		return income * 0.25;
	} else {
		return income * 0.15;
	}
};

console.log(calculateTaxes(500));

function removeDupes(values){
	const arr = [...new Set(values)];
	if(typeof values === 'string') return arr.join("")
	return arr;
};

function remove(arr, val){
	return arr.filter((el) => {
		return el !== val
	})
};

const body = document.querySelector(".test");

// document.addEventListener("DOMContentLoaded", function(){
// 	let string = "Hello!";

// 	createnewH1(string);

// });

function createnewH1(headingName){
	let title = document.createElement("h1");
	title.innerText = headingName;
	title.classList.add("color");
	body.append(title);
	
}
