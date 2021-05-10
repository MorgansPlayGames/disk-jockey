
import React, {useState} from "react";
import Button from "../Button/Button";
import ScoreDisplay from "../ScoreDisplay/ScoreDisplay";
import "./style.css";


function Card(props) {

	const [score, setScore] = useState(0)
    console.log(score)
	return (
		<div className="card dark-green text-color">
			<Button idName="plus" content="+" onClick={() => setScore(score + 1)  }></Button>
			<ScoreDisplay content={score}></ScoreDisplay>
			<Button idName="minus" content="-" onClick={() => setScore(this.score -1) }></Button>
		</div>
	);
}

export default Card;
