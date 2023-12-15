import React from "react";

export const Card = ({ titulo, descripcion, lastUpdate }) => {
	return (
		<div className="card h-100" style={{ width: 350 }}>
			<div className="card-body">
				<h5 className="card-title">{titulo}</h5>
				<p className="card-text">{descripcion}</p>
			</div>
			<div className="card-footer">
				<small className="text-muted">{lastUpdate}</small>
			</div>
		</div>
	);
};

Card.prototype;
