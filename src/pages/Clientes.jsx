import React, { useEffect, useState } from "react";
import ListaClientes from "../components/ListaClientes";
import CadastroCliente from "../components/CadastroCliente";
import ConsultarCliente from "../components/ConsultarCliente";
import axios from 'axios';
import BotaoVoltar from '../components/BotaoVoltar'; // Importe o componente
import BotaoNavegacao from '../components/BotaoNavegacao'; // Importe o componente

export default function Clientes() {
    const [clientes, setClientes] = useState([])
    
    useEffect (() => {
        axios.get ('http://localhost:5000/clientes')
        .then(res => setClientes(res.data.Clientes))
        .catch(err => console.log(err))
    },[])

    return (
        <div className="content-clientes">
            <BotaoVoltar /> {/* Utilize o componente BotaoVoltar */}
            <BotaoNavegacao to="/processos" label="Ir para Processos" /> {/* Utilize o componente BotaoNavegacao */}
            <section className="Clientes">
                <h2>Clientes</h2>
                <CadastroCliente />
                <ListaClientes clientes={clientes} /> 
                <ConsultarCliente />
            </section>
            <footer></footer>
        </div>
    )
}
