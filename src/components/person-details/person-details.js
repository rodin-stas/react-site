import React, {Component} from 'react';

import './person-details.css';
import SwapiServise from "../../servises/swapi-servise";
import Spinner from "../spinner";

import ErroIndicator from "../error-indicator";
import PersonViev from "./person-viev";

export default class PersonDetails extends Component {

	swapiSerwise = new SwapiServise()

	state = {
		person: null,
		loading: true,
		error: false
	}

	componentDidMount() {
		this.updatePerson()
	}

	componentDidUpdate(prevProps) {
		if (this.props.personId !== prevProps.personId) {
			this.updatePerson()
		}
	}

	onPersonLoaded = (person) => {
		this.setState({person, loading: false},
		)
	}
	onError = () => {
		this.setState({
			error: false,
			loading:true
		})
	}

	updatePerson() {
		const {personId} = this.props
		if (!personId) {
			return
		}
		this.setState({loading: true})
		this.swapiSerwise
			.getPerson(personId)
			.then(this.onPersonLoaded)
			.catch(this.onError)
	}


	render() {


		const {loading, error, person} = this.state
		const hasData = !(loading || error)
		const spinner = loading ? <Spinner/> : null
		const content = hasData ? <PersonViev person={person}/> : null
		const errorMassage = error ? <ErroIndicator/> : null
		if (!this.state.person ) {
			return <span>Select a person from a list</span>
		}
		return (
			<>
				{spinner}
				{errorMassage}
				{content}
			</>

		)
	}
}