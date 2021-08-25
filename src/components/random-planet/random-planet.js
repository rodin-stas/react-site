import React, {Component} from 'react';

import SwapiServise from "../../servises/swapi-servise"
import Spinner from "../spinner";
import PlanetViev from "./planet-viev";

import './random-planet.css';
import ErroIndicator from "../error-indicator";

export default class RandomPlanet extends Component {

	swapiSrevise = new SwapiServise();

	state = {
		planet: {},
		loading: true,
		error: false
	}

	componentDidMount() {
		this.updatePlanet()
		setInterval(this.updatePlanet,2500)	}

	onPlanetLoaded = (planet) => {
		this.setState({planet, loading: false},
		)
	}
	onError = () => {
		this.setState({
			error: true,
			loading: false
		})
	}

	updatePlanet=()=> {
		console.log('Update Planet')
		const id = Math.floor(Math.random() * 20) + 2
		this.swapiSrevise
			.getPlanet(id)
			.then(this.onPlanetLoaded)
			.catch(this.onError)
	}


	render() {
		const {planet, loading, error} = this.state;

		const hasData = !(loading || error)
		const spinner = loading ? <Spinner/> : null
		const content = hasData ? <PlanetViev planet={planet}/> : null
		const errorMassage = error ? <ErroIndicator/> : null

		return (
			<div className="random-planet jumbotron rounded">
				{spinner}
				{errorMassage}
				{content}
			</div>

		);
	}
}

