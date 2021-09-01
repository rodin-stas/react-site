import React, {Component} from 'react';

import SwapiServise from "../../servises/swapi-servise";
import Spinner from "../spinner";
import './item-list.css';
import ErroIndicator from "../error-indicator";

export default class ItemList extends Component {

	swapiServise = new SwapiServise()

	state = {
		peopleList: null,
		error: false
	}

	componentDidMount() {

		this.swapiServise.getAllPeople()
			.then((peopleList) => {
				this.setState({peopleList})})
			.catch(this.onError)
	}

	renderItems=(arr)=> {

		return arr.map(({id, name}) => {
			return (
				<li className="list-group-item"
				    key={id}
				    onClick={()=>this.props.onPersonSelected(id)}
				>
					{name}
				</li>
			)
		})


	}

	onError = () => {
		this.setState({
			error: true
		})
	}

	render() {
		const {peopleList,error} = this.state

		if (!peopleList) {return <Spinner/>}
		if (error) {return <ErroIndicator/> }
		const items = this.renderItems(peopleList)


		return (
			<ul className="item-list list-group">

				{items}
			</ul>
		);
	}
}