//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods


function TonyHawkChar(boardColor, skaterName, catchPhrase, specialMove)  {
    this.color = boardColor
    this.name = skaterName
    this.catch = catchPhrase
    this.move = specialMove
    this.yell = function() {
        alert("HAH")
    }
    this.jump = function() {
        console.log("HUP")
    }
    this.win = function() {
        console.log("WAAAA")
    }
}

let scabies = new TonyHawkChar('blue','Scabies','ITCHY','SPINNY')

