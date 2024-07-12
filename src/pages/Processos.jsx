import React, { useEffect, useState } from "react";
import ListarProcessos from "../components/ListarProcessos";
import CadastrarProcesso from "../components/CadastrarProcesso";
import ConsultarProcesso from "../components/ConsultarProcesso";
import Nunes from "../components/Nunes";
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Processos() {
    const [processos, setProcessos] = useState([])
    
    useEffect (() => {
        axios.get ('http://localhost:8080/processos')
        .then(res => setProcessos(res.data.Processos))
        .catch(err => console.log(err))
    },[])

    return (
        <div className="content-processos">

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
