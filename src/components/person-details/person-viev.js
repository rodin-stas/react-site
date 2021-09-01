import React from "react";

const PersonViev = ({person}) => {
	const {id, name, gender, birthYear, eyeColor} = person

return(
	<div
		className="person-details card">
		<img
			className="person-image"
			src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
			alt={"Foto"}>
		</img>

		<div
			className="card-body">
			<h4> {name}</h4>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">
					<span className="term">{gender}</span>
					<span>male</span>
				</li>
				<li className="list-group-item">
					<span className="term">{birthYear}</span>
					<span>43</span>
				</li>
				<li className="list-group-item">
					<span className="term">{eyeColor}</span>
					<span>red</span>
				</li>
			</ul>
		</div>

	</div>
)
}

export default PersonViev