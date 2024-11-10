import React, { useState } from "react";
import axios from 'axios';
import '../styles/loginform.css';


function LoginForm() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.get('http://localhost:5001/login', {
                params: {
                    email: email,
                    senha: senha
                }
            });

            if (response.data.length > 0) {
                alert("Login feito com sucesso!");
                sessionStorage.setItem('token', "eyJlbWFpbCI6ImFAYSIsInNlbmhhIjoiYWFhIiwiYWxnIjoiSFMyNTYifQ.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.J2zxdViXY6SprwJKwTVAPRFPoR--zoLgSVy3bpQ_ngg");
                window.location.href = "/eventos";
            } else {
                setError("E-mail ou senha inválidos.");
            }
        } catch (error) {
            setError("Erro ao logar, tente novamente.");
            console.error("Erro:", error);
        }
    };

    return (
        <div className="login-box">
            <p>Login</p>
            <form onSubmit={handleLogin}>
                <div className="user-box">
                    <input required type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input required type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    <label>Password</label>
                </div>
                <button type="submit">Entrar</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
}

export default LoginForm;
