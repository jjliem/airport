const Plane = require('./Plane')
const Passenger = require('./Passenger')
const Bag = require('./Bag')

describe('Plane object', () => {
    const testPlane = new Plane('Boeing 757', 'LAX', 'DFW')
    const testPassenger = new Passenger('Constance Wu')
    
    test('Plane has name', () => {
        expect(testPlane.name).toBe('Boeing 757')
    })

    test('Plane has passengers', () => {
        testPlane.addPassenger(testPassenger)
        expect(testPlane.passengers).toStrictEqual([testPassenger])
    })

    test('Plane has inbound', () => {
        expect(testPlane.inbound).toBe('LAX')
    })
    test('Plane has destination', () => {
        expect(testPlane.destination).toBe('DFW')
    })
})