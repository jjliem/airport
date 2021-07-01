const Passenger = require('./Passenger')
const Person = require('./Person')
const Bag = require('./Bag')

describe('Passenger object', () => {
    const testPassenger = new Passenger('Constance Wu')
    const testCarryOn = new Bag(15)
    const testCheckIn = new Bag(25)

    test('Passenger has name', () => {
        expect(testPassenger.name).toBe('Constance Wu')
    })

    test('Passenger has bags', () => {
        testPassenger.addBag(testCarryOn)
        testPassenger.addBag(testCheckIn)
        expect(testPassenger.bags).toStrictEqual([testCarryOn, testCheckIn])
    })

    test('Passenger can call attendant', () => {
        console.log = jest.fn()

        testPassenger.callAttendant()

        expect(console.log).toHaveBeenCalledWith("Excuse me!")
    })
})