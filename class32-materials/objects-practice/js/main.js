// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }


class Contractor{
    constructor(name, role){
        this._name = name
        this._role = role

    }
    get name(){
        return this._name
    }
    get role(){
        return this._role
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, My name is ${this._name} and I am on the #100Devs ${this._role} team.`)
    }
}
class Front extends Contractor{
    constructor(name, role, tech){
        super(name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, My name is ${this._name} I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
    }
}
class Back extends Contractor{
    constructor(name, role, tech){
        super(name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, My name is ${this._name} I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
    }
}
let garrett = new Contractor('Garrett', 'Front-End')
let jane = new Front('Jane', 'Front-end', 'React')
let bob = new Back('Bob', 'Back-End', 'NodeJS')

let agency = [garrett, jane, bob]

for (person of agency){
    person.sayHello()
}