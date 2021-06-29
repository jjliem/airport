const Bag = require('./Bag')

describe('Bag objects', () => {

	test('Bag has weight', () => {
		const testBag = new Bag(25)
		expect(testBag.weight).toBe(25)
	})

	test("throws error if bag doesn't have weight", () => {
		expect(() => new Bag()).toThrowError('bag must have a weight')
	})
})