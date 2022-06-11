import React from "react";
import title from "title";
import { badHealth } from "./health";
import {sex } from "./sex";
import {reproduction} from "./reproduction";
import {jobs, jobMasteryLevels} from "./jobs";
import {mentalHealth, mentalHealthLevels} from "./mentalHealth";
import { badPersonalityTraits } from "./personalityTraits";


const getRandomItem: any = (arr: any[]) => arr[Math.floor(Math.random()*arr.length)];
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

const generatePersona = ():Persona => {
	return {
		age : Math.floor(Math.random()*(90-18+1)+18),
		sex : getRandomItem(sex),
		reproduction : getRandomItem(reproduction),
		health : getUniqueRandomItem(badHealth),
		job : getUniqueRandomItem(jobs),
		jobMasteryLevel : getRandomItem(jobMasteryLevels),
		mentalHealth : getUniqueRandomItem(mentalHealth),
		mentalHealthLevel : getRandomItem(mentalHealthLevels),
		personality : getUniqueRandomItem(badPersonalityTraits)
	};
}

// function generateUser(): Persona{
// 	return {
// 		age = Math.floor(Math.random()*(90-18+1)+18),
// 		sex = getRandomItem(sex),
// 		reproduction = getRandomItem(reproduction),
// 		health = getUniqueRandomItem(badHealth),
// 		job = getUniqueRandomItem(jobs),
// 		jobMasteryLevel = getRandomItem(jobMasteryLevels),
// 		mentalHealth = getUniqueRandomItem(mentalHealth),
// 		mentalHealthLevel = getRandomItem(mentalHealthLevels),
// 		personality = getUniqueRandomItem(badPersonalityTraits)
// 	};
// }
debugger;

export const Persona = () => {
	return (
		<div className="card">
			<button type="button" className="" onClick={generatePersona}>Generate Persona</button>
		</div>
	);
}