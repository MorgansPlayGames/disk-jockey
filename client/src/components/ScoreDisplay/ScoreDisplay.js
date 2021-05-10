import React from "react";
import "./style.css";


function ScoreDisplay(props) {
    
	return (
		<div className="score-display">
      {props.content}
		</div>
	);
}

export default ScoreDisplay;