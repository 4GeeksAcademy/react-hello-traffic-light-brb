import React from "react";
import { useState } from "react";
import ReactDOM from "react";
import TrafficLight from "./TrafficLight";


//create your first component
const Home = () => {
	const [ color, setColor] = useState([]);
	const []

	return (
			<div className="container">
			<button className= "bg-{setColor}" onClick={
				() => setColor('success')
				}>Light 1</button>

			<button className='bg-warning' onClick={
				() => setColor('yellow')
				}>Light 2</button>

			<button className='bg-danger' onClick={
				() => setColor('red')
				}>Light 3</button>
			</div>

	);
};


export default Home;