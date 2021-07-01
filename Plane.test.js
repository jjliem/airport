const Plane = require('./Plane')
const Crew = require('./Crew')
const Passenger = require('./Passenger')
const Bag = require('./Bag')

describe('Plane object', () => {
    const testPlane = new Plane('Boeing 757', 'LAX', 'DFW')
    const testPassenger = new Passenger('Constance Wu')
    const testCrew = new Crew('Jonathan')
    
    test('Plane has name', () => {
        expect(testPlane.name).toBe('Boeing 757')
    })

    test('Plane has passengers', () => {
        testPlane.addPerson(testPassenger)
        expect(testPlane.passengers).toStrictEqual([testPassenger])
    })

    test('Plane has inbound', () => {
        expect(testPlane.inbound).toBe('LAX')
    })
    test('Plane has destination', () => {
        expect(testPlane.destination).toBe('DFW')
    })

    test('Plane has crew', () => {
        testPlane.addPerson(testCrew)
        expect(testPlane.crew.length).toBe(1)
    })
})