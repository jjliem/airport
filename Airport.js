const fs = require('fs'); // Node.js file system module for standard callbacks
const path = require('path'); // Node.js directories and file paths module
const fsp = require('fs').promises

class Airport {
	constructor(name) {
		this.name = name
		this.planes = []
	}

	addPlane(plane) {
		this.planes.push(plane)
		}

	getInfoCallback(iata, callback) {
		const db = path.join(__dirname, 'airportsData.json')
		fs.readFile(db, (err, data) => {
			const allAirports = JSON.parse(String(data))
			const airport = allAirports.find(airport => airport.iata === iata)
			console.log("FOUND airport: ", airport)
			callback(err, airport)
		})
	}

	getInfoPromise(iata) {
		const db = path.join(__dirname, 'airportsData.json')
		return new Promise((resolve, reject) => {
			//when
			fs.readFile(db, (err, data) => {
				if (err) return reject(err)
				//then
				const allAirports = JSON.parse(String(data))
				const airport = allAirports.find(airport => airport.iata === iata)
				console.log("FOUND airport: ", airport)
				resolve(airport)
			})
		})
	}

	async getInfoAsync(iata) {
		const db = path.join(__dirname, 'airportsData.json')
		try {
			const data = await fsp.readFile(db)
			const allAirports = JSON.parse(String(data))
			const airport = allAirports.find(airport => airport.iata === iata)
			return airport
		} catch (err) {
			console.log('Error', err)
		}
	}

}

module.exports = Airport