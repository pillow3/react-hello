import React from "react";
import { Navbar } from "./navbar.jsx";
import { Card } from "./card.jsx";
import { Jumbo } from "./jumbotron.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// CARDS

const skills = [
	{
		titulo: "Desarrollo Web",
		descripcion:
			"Amplia experiencia en desarrollo web utilizando HTML, CSS y JavaScript.",
		lastUpdate: "2023-06-01",
	},
	{
		titulo: "JavaScript Avanzado",
		descripcion:
			"Profundo conocimiento de JavaScript, incluyendo conceptos avanzados y últimas características del lenguaje.",
		lastUpdate: "2023-06-15",
	},
	{
		titulo: "Diseño Web",
		descripcion:
			"Habilidades avanzadas en diseño web, creación de interfaces atractivas y experiencia de usuario efectiva.",
		lastUpdate: "2023-05-20",
	},
	{
		titulo: "Control de Versiones con Git",
		descripcion:
			"Experiencia intermedia en el uso de Git y GitHub para la gestión de versiones y colaboración en proyectos.",
		lastUpdate: "2023-04-10",
	},
	{
		titulo: "Desarrollo Frontend con React",
		descripcion:
			"Experiencia avanzada en el desarrollo de aplicaciones frontend utilizando la biblioteca React.",
		lastUpdate: "2023-06-05",
	},
	{
		titulo: "Aprendiendo Svelte",
		descripcion:
			"Iniciando el aprendizaje de Svelte para explorar nuevas tecnologías en el desarrollo web.",
		lastUpdate: "2023-06-03",
	},
	{
		titulo: "Programación en Python",
		descripcion:
			"Conocimientos sólidos en programación en Python para diversas aplicaciones.",
		lastUpdate: "2023-05-15",
	},
	{
		titulo: "Integración Continua",
		descripcion:
			"Implementación de prácticas de integración continua para mejorar la eficiencia del desarrollo.",
		lastUpdate: "2023-05-25",
	},
];

//create your first component
export const Home = () => {
	const skillCard = skills;
	// const numSkill = skills.length();

	return (
		<div className="text-center">
			<Navbar />
			<Jumbo />
			<div>
				{skillCard.map((skill) => {
					return (
						<div className="d-inline-flex m-1 flex-lg-row">
							<Card key={skill.titulo} {...skill} />
						</div>
					);
				})}
			</div>

			{/* {numSkill >= 0 ? { skillCard.map((skill) => {
			return (
					<Card titulo={skill.titulo} descripcion={skill.descripcion} lastUpdate={skill.lastUpdate} />

		)}) }: '' } */}
		</div>
	);
};

// export default Home;
