import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Header from "../components/header";
import '../styles/eventos.css';
import axios from 'axios';

function Eventos() {
    const [eventos, setEventos] = useState([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const token = sessionStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" />;
    }


    const formatDate = (dateString) => {
        const date = new Date(dateString);
        if (isNaN(date)) {
            return "Invalid Date";
        }
        return date.toLocaleDateString();
    };


    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const response = await axios.get('http://localhost:5001/evento');
                console.log("Fetched data: ", response.data); 
                setEventos(response.data.flat());
            } catch (err) {
                setError("Error fetching events");
            }
        };
    
        fetchEventos(); 
    }, []);
    
    useEffect(() => {
        console.log("Updated eventos state: ", eventos); 
    }, [eventos]); 

    const handleDelete = async (id) => {
        if (confirm('Tem certeza que deseja deletar o item de id ' + id + "?")) {
            try {
                await axios.delete(`http://localhost:5001/evento/${id}`);
                setEventos(eventos.filter(evento => evento.id !== id)); 
            } catch (err) {
                setError("Error deleting event");
            }
        }
    };


    const handleEdit = (id) => {
        navigate(`/edit-evento/${id}`);
    };

    return (
        <div>
            <h1 id="climax"><Link to={'/'}>Climax Studio</Link></h1>
            <Header />
            <div id="topo">
                <h1>Tabela de Eventos</h1>
                {error && <p>{error}</p>}
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Data</th>
                        <th>Local</th>
                        <th>Mensagem</th>
                        <th>Pacote</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {eventos.map((evento, index) => (
                        <tr key={index}>
                            <td>{evento.id}</td>
                            <td>{evento.nome}</td>
                            <td>{evento.email}</td>
                            <td>{evento.telefone}</td>
                            <td>{formatDate(evento.data)}</td>
                            <td>{evento.local}</td>
                            <td>{evento.mensagem}</td>
                            <td>{evento.pacote}</td>
                            <td>
                                <button onClick={() => handleDelete(evento.id)} id="deleteButton">Deletar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Eventos;
