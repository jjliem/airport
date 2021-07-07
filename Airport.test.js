const Airport = require('./Airport')
const Plane = require('./Plane')
const Passenger = require('./Passenger')
const Bag = require('./Bag')

describe('Airport object', () => {
    const testLAX = new Airport('LAX')
    const testDFW = new Airport('DFW')
    const testBoeing = new Plane('Boeing 757', 'LAX', 'HND')
    const testAirbus = new Plane('Airbus A380', 'LAX', 'SIN')
    const testPassenger1 = new Passenger('Constance Wu')
    const testPassenger2 = new Passenger('Awkwafina')
    const testCarryOn = new Bag(15)
    const testCheckIn = new Bag(25)
    testPassenger1.addBag(testCarryOn)
    testPassenger1.addBag(testCheckIn)
    testPassenger2.addBag(testCarryOn)
    testPassenger2.addBag(testCheckIn)
    testBoeing.addPerson(testPassenger1)
    

    test('Aiport has name', () => {
        expect(testLAX.name).toBe('LAX')
    })

    test('Aiport has plane', () => {
        testLAX.addPlane(testBoeing)
        expect(testLAX.planes).toStrictEqual([testBoeing])
    })

    
    test('Weight of Bag of Passenger on Plane at Airport', () => {
        expect(testLAX.planes[0].passengers[0].bags[0].weight).toBe(15)
    })

    test('gets info with Callbacks', (done) => { //async indicator to jest
        const LAX = new Airport('LAX')
    
        //when
        LAX.getInfoCallback('LAX', (err, data) => {
            // first cb arg is err, second is found data
            //then
            expect(data.state).toBe("California")
            done()
        })
    })

    test('gets info with Promises', () => { //jest will figure out this is a Promise
        const LAX = new Airport('LAX')
    
        //when
        return LAX.getInfoPromise('LAX')
            .then(info => {
                expect(info.state).toEqual('California')
            })
            .catch(err => {
                expect(err).toBeNull()
            })
    })

    test('get info with async/await', async () => {
        const LAX = new Airport('LAX') 
        const airport = await LAX.getInfoAsync('LAX')
        expect(airport.state).toBe('California')
    })

})