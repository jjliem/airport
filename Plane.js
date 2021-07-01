const Passenger = require('./Passenger')

class Plane {
    constructor(name, inbound, destination) {
        this.name = name
        this.inbound = inbound
        this.destination = destination
        this.passengers = []
        this.crew = []
    }

    addPerson(person) {
        if (person instanceof Passenger){
            this.passengers.push(person)
        } else {
            this.crew.push(person)
        }
        
    }
}

module.exports = Plane