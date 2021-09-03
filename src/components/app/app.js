import React from 'react';

import Header from '../header';
import PeoplePage from "../people-page";
import RandomPlanet from '../random-planet';
import './app.css';
import ErrorIndicator from "../error-indicator";

export default class App extends React.Component {

	state = {
		showRandomPlanet: true,
		hasError: false
	}
	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		this.setState({hasError:true})
	}

	toggleRandomPlanet = () => {
		this.setState((state) => {
			return {
				showRandomPlanet: !state.showRandomPlanet
			}
		});
	};


	render() {
		if(this.state.hasError){
			return <ErrorIndicator/>
		}
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

				<PeoplePage/>
				<PeoplePage/>
				<PeoplePage/>


			</div>
		);
	}
}

