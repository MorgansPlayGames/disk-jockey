
import React from "react";
import {API} from "../../utils/API";



function LoginForm() {

    function handleSubmit(event){
        event.preventDefault();
        console.log(event.target);
    }

    return <form onSubmit={handleSubmit}>
        <label for="userName">Username</label>
        <input type="text" id="username"></input>
        <label for="password">Password</label>
        <input type="password" id="password"></input>
        <button>Submit</button>
    </form>
}

export default LoginForm;