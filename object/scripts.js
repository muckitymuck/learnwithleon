let user = {}
user.name = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.name;

//Check for emptiness
let schedule = {};

function isEmpty(obj) {
    for (let key in obj) {
        // if the loop has started, there is a property
        return false;
      }
      return true;

}

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false


//Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

const values = Object.values(salaries);

const sum = values.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);

console.log(sum);


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(obj) {
    let values = Object.values(obj)
    for( let key in obj){
        if(typeof obj[key] === "number"){
            obj[key] *=  2
        }
    }
}
multiplyNumeric(menu);
console.log(menu)