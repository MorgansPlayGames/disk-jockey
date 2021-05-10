
import React, {useState} from "react";
import Button from "../Button/Button";
import ScoreDisplay from "../ScoreDisplay/ScoreDisplay";
import "./style.css";


function Card(props) {

	const [score, setScore] = useState(0)


	function handleClick(e) {
    e.preventDefault();
		let symbol = e.target.innerText 
			if (symbol === "+"){
				setScore(score + 1)
			} else{
				setScore(score - 1)
			}
			console.log(score)
  }

	

	return (
		<div className="card dark-green text-color">
			<Button idName="plus" content="+" onClick={handleClick}></Button>
			<ScoreDisplay content={score}></ScoreDisplay>
			<Button idName="minus" content="-" onClick={(e) => setScore(score - 1) }></Button>
		</div>
	);
}

export default Card;
