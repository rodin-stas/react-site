export default class SwapiServise {
	_apiBase = 'https://swapi.dev/api'

	async getResourse(url) {
		const res = await fetch(`${this._apiBase}${url}`)

		if (!res.ok) {
			throw new Error(`Could no fetch ${url} receiver ${res.status}`)
		}

		return await res.json()
	}

	async getAllPeople() {
		const res = await this.getResourse(`/people/`)
		return res.results.map(this._transformPerson)
	}

	async getPerson(id) {
		const person=await this.getResourse(`/people/${id}`)
		return this.__transformPerson(person)
	}

	async getAllPlanets() {
		const res = await this.getResourse(`/planets/`)
		return res.results.map(this._transformPlanet)
	}

	async getPlanet(id) {
		const planet = await this.getResourse(`/planets/${id}`)
		return this._transformPlanet(planet)
	}

	async getAllStarships() {
		const res = await this.getResourse(`/starships/`)
		return res.results.map(this._transformStarships)
	}

	 async getStarship(id) {
		const srarship = await this.getResourse(`/starships/${id}`)
		return this._transformStarship(srarship)
	}

	_extractId(item) {
		const reg = /\/([0-9]*)\/$/;
		const id = item.url.match(reg)[1];
		return id;
	}

	_transformPlanet(planet) {

		return {
			id: this._extractId(planet),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter

		}

	}

	_transformStarship(starship) {
		return {
			id: this._extractId(starship),
			name: starship.name,
			model: starship.model,
			manufacturer: starship.manufacturer,
			costInCredits: starship.costInCredits,
			length: starship.length,
			crew: starship.crew,
			passengers: starship.passengers,
			cargoCapacity: starship.cargoCapacity
		}
	}

	_transformPerson(person) {
		return {
			id: this._extractId(person),
			name: person.name,
			gender: person.gender,
			birthYear: person.birthYear,
			eyeColor: person.eyeColor
		}
	}



}

// const swapi = new SwapiServise()
//
// swapi.getAllPeople().then((body) => {
// 	console.log(body)
// })
//
// swapi.getStarship(5).then((body) => {
// 	console.log(body)
// })