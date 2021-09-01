import React, {Component} from 'react';

import './person-details.css';
import SwapiServise from "../../servises/swapi-servise";
import Spinner from "../spinner";

import ErroIndicator from "../error-indicator";
import PersonViev from "./person-viev";

export default class PersonDetails extends Component {

	swapiSerwise = new SwapiServise()

	state = {
		person: {},
		loading: true,
		error:false
	}

	componentDidMount() {
		this.updatePerson()
	}

	componentDidUpdate(prevProps) {
		if (this.props.personId !== prevProps.personId) {
			this.updatePerson()
		}
	}

	updatePerson() {
		const {personId} = this.props
		if (!personId) {
			return
		}
		this.setState({loading:true})
		this.swapiSerwise
			.getPerson(personId)
			.then((person) => {
				this.setState({person})
			})
			.then(this.onPersonLoaded)
			.catch(this.onError)
	}

	onPersonLoaded = (person) => {
		this.setState({ loading: false},
		)
	}
	onError = () => {
		this.setState({
			error: true,
			loading: false
		})
	}

	render() {

		if (!this.state.person) {
			return <span>Select a person from a list</span>
		}
		const {loading,error,person} = this.state
		const hasData = !(loading || error)
		const spinner = loading ? <Spinner/> : null
		const content = hasData ? <PersonViev person={person}/> : null
		const errorMassage = error ? <ErroIndicator/> : null

		return (
			<>
				{spinner}
				{errorMassage}
				{content}
			</>

		)
	}
}