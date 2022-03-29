//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter(name, location, style, specialMove){
    this.name = fighterName;
    this.model = fighterLocation;
    this.style = fighterStyle;
    this.specialMove = fighterSpecialMove;
    this.yell = function(){
        alert('HAH')
    }
}
let chunLee = new StreetFighter('Chun Lee', 'China', 'Kung Fu', 'Cyclone Kick')

let ken = new StreetFighter('Ken', 'America', 'Karate', 'HADOKEN')