const Person = require('./Person')

describe('Person object', () => {
    const testPerson = new Person('Michelle Yeoh')

    test('Person has name', () => {
        expect(testPerson.name).toBe('Michelle Yeoh')
    })
})