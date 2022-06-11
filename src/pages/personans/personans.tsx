import React, { useState } from "react";
import { badHealth } from "../../components/persona/health";
import { sex } from "../../components/persona/sex";
import { reproduction } from "../../components/persona/reproduction";
import { jobMasteryLevels, jobs } from "../../components/persona/jobs";
import { mentalHealth, mentalHealthLevels } from "../../components/persona/mentalHealth";
import { badPersonalityTraits } from "../../components/persona/personalityTraits";
import { ageRanges } from "../../components/persona/age";

const getRandomItem: any = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
const getUniqueRandomItem: any = (arr: any[]) => arr.splice((Math.random() * arr.length) | 0, 1);

type Persona = {
	age: number,
	sex: string,
	reproduction: string,
	health: string,
	job: string,
	jobMasteryLevel: string,
	mentalHealth: string,
	mentalHealthLevel: number,
	personality: string
}

const generatePersona = (): Persona => {
	const ageRange = getRandomItem(ageRanges);
console.log(ageRange);
	return {
		age: Math.floor(Math.random() * (ageRange[1] - ageRange[0] + 1) + ageRange[0]),
		sex: getRandomItem(sex),
		reproduction: getRandomItem(reproduction),
		health: getUniqueRandomItem(badHealth),
		job: getUniqueRandomItem(jobs),
		jobMasteryLevel: getRandomItem(jobMasteryLevels),
		mentalHealth: getUniqueRandomItem(mentalHealth),
		mentalHealthLevel: getRandomItem(mentalHealthLevels),
		personality: getUniqueRandomItem(badPersonalityTraits)
	};
};

export const Persona: React.FC = () => {
	const [personas, setPersonas] = useState<Array<Persona>>([]);

	const addPersona = () => {
		const persona = generatePersona();
		setPersonas([...personas, persona]);
	};

	return (
		<div className="card">
			<button type="button" className="" onClick={addPersona}>Generate Persona</button>
				{personas.map((persona) => {
				return (
					<div key={persona.job}>
						<div>{persona.sex}/{persona.age}/{persona.reproduction}</div>
						<div>Occupation: {persona.job} ({persona.jobMasteryLevel})</div>
						<div>Health problems: {persona.health}</div>
						<div>Mental health: {persona.mentalHealth} {persona.mentalHealthLevel}%</div>
						<div>Additional info: {persona.personality}</div>
						<div>----</div>
					</div>
				);
			})}
		</div>
	);
};