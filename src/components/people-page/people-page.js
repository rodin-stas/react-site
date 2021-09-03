import React, {Component} from "react";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";

export default class PeoplePage extends Component {

	state = {
		selectedPerson: null,
		hasError: false
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		this.setState({hasError: true})
	}

	onPersonSelected = (id) => {
		this.setState({selectedPerson: id})
		console.log(id)
	}

	render() {
		if (this.state.hasError) {
			return <ErrorIndicator/>
		}
		return (
			<div className="row mb2">
				<div className="col-md-6">
					<ItemList onPersonSelected={this.onPersonSelected}/>
				</div>
				<div className="col-md-6">
					<PersonDetails personId={this.state.selectedPerson}/>
				</div>
			</div>

		)
	}
}