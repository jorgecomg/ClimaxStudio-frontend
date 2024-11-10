import React, { useState } from "react";
import axios from 'axios';
import '../styles/contatoform.css';

function ContatoForm() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        data: "",
        local: "",
        mensagem: "",
        pacote: "Pacote Básico"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:5001/evento', formData);
            alert(`Enviado com sucesso!`);
            // Reset form fields after successful submission
            setFormData({
                nome: "",
                email: "",
                telefone: "",
                data: "",
                local: "",
                mensagem: "",
                pacote: "Pacote Básico"
            });
        } catch (error) {
            alert("Erro ao enviar o formulário. Tente novamente.");
            console.error("Erro:", error);
        }
    };

    return (
        <div>
            <div className="login-box">
                <p>Formulário de Contato</p>
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <input required type="text" name="nome" id="nome" value={formData.nome} onChange={handleChange} maxLength="60" />
                        <label>Nome</label>
                    </div>
                    <div className="user-box">
                        <input required type="email" name="email" id="email" value={formData.email} onChange={handleChange} maxLength="60" />
                        <label>E-Mail</label>
                    </div>
                    <div className="user-box">
                        <input required type="tel" name="telefone" id="telefone" value={formData.telefone} onChange={handleChange} maxLength="15" />
                        <label>Telefone</label>
                    </div>
                    <div className="user-box">
                        <input required type="date" name="data" id="data" value={formData.data} onChange={handleChange} />
                        <label>Data</label>
                    </div>
                    <div className="user-box">
                        <input required type="text" name="local" id="local" value={formData.local} onChange={handleChange} maxLength="60"  />
                        <label>Local</label>
                    </div>
                    <div className="user-box">
                        <textarea required id="mensagem" name="mensagem" rows="4" value={formData.mensagem} onChange={handleChange} maxLength="500" ></textarea>
                        <label>Escreva sobre seu evento</label>
                    </div>
                    <div className="user-box2">
                        <label>Pacote:</label>
                        <select required id="pacote" name="pacote" value={formData.pacote} onChange={handleChange}>
                            <option value="Pacote Básico">Pacote Básico</option>
                            <option value="Pacote Intermediario">Pacote Intermediário</option>
                            <option value="Pacote Premium">Pacote Premium</option>
                        </select>
                    </div>
                    <button type="submit" className="submit-button">Enviar</button>
                </form>
            </div>
        </div>
    );
}


export default ContatoForm;
