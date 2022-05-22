let content1 = document.getElementById("content1");
let content2 = document.getElementById("content2");
let content3 = document.getElementById("content3");
let content4 = document.getElementById("content4");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let button4 = document.querySelector("#button4");
let toDoList = document.querySelectorAll(".to-do-list");
let content = document.querySelectorAll(".content");
let doneIcon = document.querySelectorAll(".material-symbols-rounded");
let doneIconArray = Array.from(doneIcon);
let addItem = document.querySelectorAll(".material-symbols-sharp");
let addItemArray = Array.from(addItem);
let crossItem = document.querySelectorAll(".material-symbols-sharp + .material-symbols-outlined");
let crossItemArray = Array.from(crossItem);
let notDoneIcon = document.querySelectorAll(".remove");
let notDoneIconArray = Array.from(notDoneIcon);
let btn = document.querySelectorAll(".btn");
let btnArray = Array.from(btn);
let input = document.querySelectorAll("input");
let inputArray = Array.from(input);
let value_input = "";
let notUse = document.querySelectorAll(".not_use");
const getSomeQuote = () => {
	return new Promise((resolve, reject) => {
		const quote = new XMLHttpRequest();
		quote.addEventListener("readystatechange", () => {
			if (quote.readyState === 4 && quote.status === 200) {
				const data = JSON.parse(quote.responseText);
				resolve(data);
			}
		});
		quote.open("GET", "https://api.quotable.io/search/quotes?query=inspirational");
		quote.send();
	});
}
getSomeQuote().then((data) => {
	let i = Math.floor(Math.random() * 11);
	content1.innerText = data.results[i].content;

	return getSomeQuote();
}).then((data) => {
	let i = Math.floor(Math.random() * 11);
	content2.innerText = data.results[i].content;
	return getSomeQuote();
}
).then((data) => {
	let i = Math.floor(Math.random() * 11);
	content3.innerText = data.results[i].content;
	return getSomeQuote();
}).then((data) => {
	let i = Math.floor(Math.random() * 11);
	content4.innerText = data.results[i].content;
});

button1.addEventListener("click", () => {
	content.forEach(element => {
		element.classList.add("active");
	});
	content[0].classList.remove("active");
	toDoList.forEach(element => {
		element.classList.remove("active");
	});
	toDoList[0].classList.add("active");

});
button2.addEventListener("click", () => {
	content.forEach(element => {
		element.classList.add("active");
	});
	content[1].classList.remove("active");
	toDoList.forEach(element => {
		element.classList.remove("active");
	});
	toDoList[1].classList.add("active");
});
button3.addEventListener("click", () => {
	content.forEach(element => {
		element.classList.add("active");
	});
	content[2].classList.remove("active");
	toDoList.forEach(element => {
		element.classList.remove("active");
	});
	toDoList[2].classList.add("active");

});
button4.addEventListener("click", () => {
	content.forEach(element => {
		element.classList.add("active");
	});
	content[3].classList.remove("active");
	toDoList.forEach(element => {
		element.classList.remove("active");
	});
	toDoList[3].classList.add("active");
});
 const done = () =>
{doneIconArray.forEach(element => {
	element.addEventListener("click", (e) => {
		e.target.classList.remove("active");
		e.target.nextElementSibling.classList.add("active");
	})
});
notDoneIconArray.forEach(element => {
	element.addEventListener("click", (e) => {
		e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
	})
});
 }
inputArray.forEach(element => {
	element.addEventListener("keyup", (e) => {
		let i = inputArray.indexOf(e.target);
		e.preventDefault();
		if (e.keyCode === 13) {
			value_input = inputArray[i].value;
			btnArray[i].click();
		}
		
	})
	
});
btnArray.forEach(element => {
	element.addEventListener("click", (e) => {
		let i = btnArray.indexOf(e.target);
		inputArray[i].value = "";
		if(value_input== ""){
			alert("Enter Task");
		}else{
			const new_h3 = document.createElement("h3");
			new_h3.innerHTML = `${value_input}<span><span class="material-symbols-rounded active">check_circle</span><span class="material-symbols-outlined">dangerous</span></span>`;
			let pos =inputArray[i];
			toDoList[i].insertBefore(new_h3, pos);
			
			doneIconArray.splice(4*(i+1), 0, new_h3.children[0].firstElementChild);
			notDoneIconArray.splice(4*(i+1), 0, new_h3.children[0].lastElementChild);
			done();
		}
		
	})
})
done();
 
addItemArray.forEach(element =>{
	element.addEventListener("click", e => {
		let n = addItemArray.indexOf(e.target);
		
		 
		addItemArray[n].style.display="none";
		inputArray[n].style.display="inline";
		crossItemArray[n].style.display="block";
	})
})
crossItemArray.forEach(element=>{
	element.addEventListener("click", e=>{
		let n = crossItemArray.indexOf(e.target);
		addItemArray[n].style.display="block";
		inputArray[n].style.display="none";
		crossItemArray[n].style.display="none";
	})
})
 