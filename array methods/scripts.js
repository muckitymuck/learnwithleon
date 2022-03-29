/* Translate border-left-width to borderLeftWidth */
function camelize(str){
    let string = str.split("-");
    for (let i = 1; i < string.length; i++){
        string[i] = string[i][0].toUpperCase() + string[i].substring(1);
    }
    string = string.join("")
    return string
}

console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))

/*Filter Range */

let newArr = [5, 3, 8, 1];

function filterRange(arr, a, b){
    let filteredArr = arr.filter(item => (a <= item && item <= b));
    return filteredArr

}
let filtered = filterRange(newArr, 1, 4)
alert( filtered )


function filterRangeInPlace(arr, a, b){
    let filteredArr = arr.filter(item => (item >= a && b >= item));
    return filteredArr
}

let filteredRIP= filterRangeInPlace(newArr, 1, 4)
alert ( filteredRIP)

let arr = [5, 2, 1, -10, 8];

function compare(a, b){
    if(a > b) return -1;
    if(a == b) return 0;
    if(a > b) return 1;
}

arr.sort(compare);

alert(arr);

let arrAlpha = ["HTML", "JavaScript", "CSS"];

function copySorted(arrr){

    return arrr.slice().sort();
}
let sorted = copySorted(arrAlpha);
alert(sorted);
alert(arrAlpha);

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary

let johns = { name: "John", surname: "Smith", id: 1 };
let peteh = { name: "Pete", surname: "Hunt", id: 2 };
let maryk = { name: "Mary", surname: "Key", id: 3 };

let userss = [ johns, peteh, maryk ];

let usersMapped = userss.map(item => ({
    fullName: `${item.name} ${item.surname}`,
    id: item.id
    }));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith


let johna = { name: "John", age: 25 };
let petea = { name: "Pete", age: 30 };
let marya = { name: "Mary", age: 28 };

let arra = [ pete, john, mary ];
function sortByAge(arra){
    arra.sort((a,b) => a.age - b.age);
}

sortByAge(arra);

// now: [john, mary, pete]
alert(arra[0].name); // John
alert(arra[1].name); // Mary
alert(arra[2].name); // Pete

let arrRandom = [1, 2, 3];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
shuffle(arrRandom);
console.log(arrRandom);

shuffle(arrRandom);
console.log(arrRandom);

shuffle(arrRandom);
console.log(arrRandom);


//Get average age
let arrAVG = [ johna, petea, marya ];

function getAverageAge(userArr){
    return userArr.reduce((a,b) => a + b.age, 0) / userArr.length;
 
}

alert( getAverageAge(arrAVG));

//Filter unique array members
function unique(arrq){
    let result = []
    for (let str of arrq){
        if(!result.includes(str)){
            result.push(str);
        }
    }
    return result;
}
let stringsw = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(stringsw) );

//Create keyed object from array
let usersID = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(usersID);
  
function groupById(arrY){
    return arrY.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})

}


  /*
  // after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */