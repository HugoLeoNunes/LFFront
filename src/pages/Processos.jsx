import React, { useEffect, useState } from "react";
import ListarProcessos from "../components/ListarProcessos";
import CadastrarProcesso from "../components/CadastrarProcesso";
import ConsultarProcesso from "../components/ConsultarProcesso";
import BotaoVoltar from '../components/BotaoVoltar'; // Importe o componente
import BotaoNavegacao from '../components/BotaoNavegacao'; // Importe o componente
import axios from 'axios';

export default function Processos() {
    const [processos, setProcessos] = useState([])
    
    useEffect (() => {
        axios.get ('http://localhost:8080/processos')
        .then(res => setProcessos(res.data.Processos))
        .catch(err => console.log(err))
    },[])

    return (
        <div className="content-processos">
            <BotaoVoltar /> {/* Utilize o componente BotaoVoltar */}
            <BotaoNavegacao to="/clientes" label="Ir para Clientes" /> {/* Utilize o componente BotaoNavegacao */}
            <section className="Processos">
                <h2>Processos</h2>
                <CadastrarProcesso />
                <ListarProcessos processos={processos} /> {/* Passa a lista de processos para o componente */}
                <ConsultarProcesso />
            </section>
            <footer></footer>
        </div>
    )
}
