//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class Espresso {
    construtor(water, grind, frother, heat) {
        this.water = water;
        this.grind = grind;
        this.frother = frother;
        this.heat = heat;
    }
    packGrind() {
        return this.grind;
    }
    startBrew() {
        console.log(`${this.water} + " is heating." + ${this.heat}`)
    }
    steam(){
        console.log("IT'S SUMMER SALE!! 50% OFF")
    }

}
const italian = new Espresso(100, 'fine', 'frothy', 'supa hot')