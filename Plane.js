class Plane {
    constructor(name, inbound, destination) {
        this.name = name
        this.inbound = inbound
        this.destination = destination
        this.passengers = []
    }

    addPassenger(passenger) {
        this.passengers.push(passenger)
    }
}

module.exports = Plane