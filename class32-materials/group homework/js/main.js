// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 

//Encapsulation:  to store methods and properties into a single object
class Employee {
    constructor(name, role, rate){
        this._name = name
        this._role = role
        //Abstraction: To store properties that are private from outside and only instantiate once
        this.hourlyrate = rate
    }
    get name(){
        return this._name
    }
    get role(){
        return this._role
    }
    get rate(){
        return this._rate
    }

    //Inheritance: Eliminates redundant code that is not different from individual objects
    //If the Intro method is not different on inherited classes, it will inherit this method.
    intro(){
        console.log(`Hello, I am a ${this._role} at #100Devs`)
    }
}

class Backend extends Employee{
    constructor(name,role,tech,rate){
        super(name,role,rate)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    // get billable(){
    //     return this.rate
    // }
}
let andy = new Backend('Andy', 'Back-End Engineer', 'NodeJS', 250 )

andy.intro()
