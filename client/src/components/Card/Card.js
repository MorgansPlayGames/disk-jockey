
import React, {useState} from "react";
import Button from "../Button/Button";
import ScoreDisplay from "../ScoreDisplay/ScoreDisplay";
import "./style.css";


function Card(props) {


    
	return (
		<div className="card dark-green text-color">
			<Button idName="plus" content="+"></Button>
			<ScoreDisplay/>
			<Button idName="minus" content="-"></Button>
		</div>
	);
}

export default Card;
