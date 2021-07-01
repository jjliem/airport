const Person = require('./Person')

class Crew extends Person {
    constructor(name){
        super(name)
    }
}

module.exports = Crew