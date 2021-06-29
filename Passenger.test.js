const Passenger = require('./Passenger')
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
})