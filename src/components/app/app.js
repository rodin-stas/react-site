import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends React.Component {

	state = {
		selectedPerson: null,
		showRandomPlanet: true
	}
	toggleRandomPlanet = () => {
		this.setState((state) => {
			return {
				showRandomPlanet: !state.showRandomPlanet
			}
		});
	};
	onPersonSelected = (id) => {
		this.setState({selectedPerson: id})
		console.log(id)
	}

	render() {
		const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;
		return (
			<div>
				<Header/>
				{planet}
				<div className="row mb2 button-row">
					<button className="toggle-planet btn btn-warning btn-lg"
					onClick={this.toggleRandomPlanet}>
						Toggle random planet

					</button>

				</div>

				<div className="row mb2">
					<div className="col-md-6">
						<ItemList onPersonSelected={this.onPersonSelected}/>
					</div>
					<div className="col-md-6">
						<PersonDetails personId={this.state.selectedPerson}/>
					</div>
				</div>
			</div>
		);
	}
}

