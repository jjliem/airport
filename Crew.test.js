const Crew = require('./Crew')
const Person = require('./Person')

describe('Crew object', () => {
    const testCrew =  new Crew('Jonathan')

    test('is instance of Person', () => {
        expect(testCrew instanceof Crew).toBeTruthy()
    })
})