var coches = []
coches = newCoche("paco1","paco11","paco12");
console.log(coches)
console.log(coches['paco'])
console.log(coches[0])

function newCoche (name, brand, model){
	// let cocheInfo = [ name= ['brand'=brand, 'model'=model]];
	// cocheInfo[] = ;
	// cocheInfo['model'] = model;

	// let coche = []
	// coche[name] = cocheInfo;

	let cocheInfo = [];
	cocheInfo['brand'] = brand;
	cocheInfo['model'] = model;

	let coche = []
	coche[name] = cocheInfo;

	return coche;
}

var coche = {
	brand:"paco21",
	model:"paco22"
}

console.log(coche);

////////////////////////////////////////

function newCoche (inputBrand, inputModel){
	return {
				brand:inputBrand,
				model:inputModel
			};
}

function newCocheArray(amount){
	let array = [];
	
	for(let i = 0; i < amount; i++)
		array.push(newCoche("Paco"+i+"1", "Paco"+i+"2"));

	return array;
}

function cochesTable(cochesArray){
	
}