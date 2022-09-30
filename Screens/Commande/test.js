

data= []
let num=1

//ADD
const obj = { 
    id:num++,
    nom:"Cocktail",
    prix:2500,
    toValidate :0
}



data.push(obj)

//console.log(data);

const obj1 = { 
    id:num++,
    nom:"Youzou",
    prix:1500,
    toValidate :0
}

data.push(obj1)


const  search = (nameKey, myArray) => {
  for (var i=0; i < myArray.length; i++) {
      if (myArray[i].nom === nameKey) {
        myArray[i].toValidate++
          return myArray[i].toValidate;
      }
  }
}


var resultObject = search("Youzou", data);

console.log(data);
console.log(resultObject);

//REMOVE
/*
const newData = data.filter(object => {
    return object.id !== 2;
  });

console.log(newData);



//UPDATE

for (const obj of arr2) {
    if (obj.id === 1) {
      obj.name = 'Alfred';
  
      break;
    }
  }*/