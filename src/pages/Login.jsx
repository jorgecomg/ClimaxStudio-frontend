import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import LoginForm from "../components/LoginForm";
import { Navigate } from 'react-router-dom';

function Login() {

    const token = sessionStorage.getItem('token');

    if (token) {
        return <Navigate to="/eventos" />; 
    }

    return (

        <div>
            <h1 id="climax"><Link to={'/'}>Climax Studio</Link></h1>
            <Header />
            <LoginForm/>


        </div>

    );
}
export default Login;