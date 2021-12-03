function suma(n1, n2){
	return n1 + n2;
}

console.log(suma(2, 4));

function comparar(a, b){
	return a > b ? "mayor" : ( b > a ? "menor" : a*a);
}

console.log(comparar(2, 1));

function rndCoor(){
	return [Math.random() * 360 - 180, Math.random() * 360 - 180];
}

let coor = rndCoor();

console.log(coor);

function rndCoorArray(n){
	let array = [];

	for (let i = 0; i < n; i++)
		array.push(rndCoor());

	return array;
}

let coorArray = rndCoorArray(4)

console.log(coorArray);

//////////////////////////////////

function rndCoorTable(n){
	let array = `<table border="1" style="text-align:center;">
		<tr>
			<th style="padding:5px;">Latitud</th>
			<th style="padding:5px;">Longitud</th>
		</tr>`;

	for (let i = 0; i < n; i++){
		let tempCoor = rndCoor();
		
		array += `<tr>
			<td style="padding:5px;">${tempCoor[0]}</td>
			<td style="padding:5px;">${tempCoor[1]}</td>
		</tr>`;
	}

	array += `</table>`;

	return array;
}

document.write(rndCoorTable(5));

//////////////////////////////////

function sayHelloTo(name, surname1, surname2){
	return `Hola ${name} ${surname1} ${surname1}! :D`
}

document.write(`<p>${sayHelloTo("Domingo Antonio","Edjang","Moreno")}</p>`)

/////////////////////////////////////

function createCard(name, img){
	return `<div class="card"><img src="${img}" alt="imagen de ${name}"><p>${name}</p></div> `
}

// document.write(createCard("patata", "https://ibericadepatatas.es/wp-content/uploads/2019/11/img-producto-patatas-voyager-iberica-de-patatas.jpg"));

////////////////////////////////

function createCards(cardsInfo){

	let returnMe = "";

	returnMe += `<div style="display:flex;flex-wrap:wrap;justify-content:space-around;gap: 30px;">`;

	for(let cardInfo in cardsInfo)
		returnMe += createCard(cardsInfo[cardInfo][0], cardsInfo[cardInfo][1]);

	returnMe += `</div>`;

	return returnMe;
}

var dishes = [	["patata", "https://ibericadepatatas.es/wp-content/uploads/2019/11/img-producto-patatas-voyager-iberica-de-patatas.jpg"],
				["patata", "https://ibericadepatatas.es/wp-content/uploads/2019/11/img-producto-patatas-voyager-iberica-de-patatas.jpg"],
				["patata", "https://ibericadepatatas.es/wp-content/uploads/2019/11/img-producto-patatas-voyager-iberica-de-patatas.jpg"],
				["patata", "https://ibericadepatatas.es/wp-content/uploads/2019/11/img-producto-patatas-voyager-iberica-de-patatas.jpg"]];

document.write(createCards(dishes));