import React from "react";
import "./style.css";

function SaveButton(props){

  

  return (
		<div className="brown save" onClick={props.onClick}>
      Save
      </div>
	);
}

export default SaveButton;