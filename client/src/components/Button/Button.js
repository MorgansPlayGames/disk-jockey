import React from "react";
import "./style.css";


function Button(props) {
    
	return (
		<div className="light-green button" id={props.idName}>
      {props.content}
		</div>
	);
}

export default Button;