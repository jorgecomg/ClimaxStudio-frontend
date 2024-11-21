import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Header from "../components/header";
import '../styles/eventos.css';
import axios from 'axios';

function Eventos() {
    const [eventos, setEventos] = useState([]);
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [currentEvento, setCurrentEvento] = useState(null);
    const navigate = useNavigate();

    const token = sessionStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" />;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentEvento((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = async () => {
        try {
            await axios.put(
                `http://localhost:5001/evento/${currentEvento.id}`,
                currentEvento
            );
            setEventos((prev) =>
                prev.map((evt) =>
                    evt.id === currentEvento.id ? currentEvento : evt
                )
            );
            setShowModal(false);
            alert("Evento atualizado com sucesso!");
        } catch (err) {
            alert("Erro ao atualizar o evento.");
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("pt-BR", {
            timeZone: "UTC",
        });
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
        console.log(eventos); 
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


    const handleEdit = (evento) => {
        setCurrentEvento(evento);
        setShowModal(true); 
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
                                <button onClick={() => handleDelete(evento.id)} id="redButton">Deletar</button>
                                <button
                                    onClick={() => handleEdit(evento)} id="yellowButton">Editar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Editar Evento</h2>
                        <form>
                            <label>
                                Nome:
                                <input
                                    type="text"
                                    name="nome"
                                    value={currentEvento.nome}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Email:
                                <input
                                    type="email"
                                    name="email"
                                    value={currentEvento.email}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Telefone:
                                <input
                                    type="text"
                                    name="telefone"
                                    value={currentEvento.telefone}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Data:
                                <input
                                    type="date"
                                    name="data"
                                    value={currentEvento.data}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Local:
                                <input
                                    type="text"
                                    name="local"
                                    value={currentEvento.local}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Mensagem:
                                <textarea
                                    name="mensagem"
                                    value={currentEvento.mensagem}
                                    onChange={handleInputChange}
                                ></textarea>
                            </label>
                            <label>
                                Pacote:
                                <select
                                    name="pacote"
                                    value={currentEvento.pacote}
                                    onChange={handleInputChange}
                                >
                                    <option value="Pacote Básico">
                                        Pacote Básico
                                    </option>
                                    <option value="Pacote Intermediário">
                                        Pacote Intermediário
                                    </option>
                                    <option value="Pacote Premium">
                                        Pacote Premium
                                    </option>
                                </select>
                            </label>
                            <button type="button" id="yellowButton" onClick={handleSave}>
                                Salvar
                            </button>
                            <button type="button" id="redButton" onClick={() => setShowModal(false)}>
                                Cancelar
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Eventos;
