import React, { useEffect, useState } from "react";
import ListaClientes from "../components/ListaClientes";
import CadastroCliente from "../components/CadastroCliente";
import ConsultarCliente from "../components/ConsultarCliente";
import axios from 'axios';

export default function Clientes() {
    const [clientes, setClientes] = useState([])
    
    useEffect (() => {
        axios.get ('http://localhost:8080/clientes')
        .then(res => setClientes(res.data.Clientes))
        .catch(err => console.log(err))
    },[])

    return (
        <div className="content-clientes">

            <section className="Clientes">
                <h2>Clientes</h2>
                <CadastroCliente />
                <ListaClientes clientes={clientes} /> {/* Passa a lista de clientes para o componente */}
                <ConsultarCliente />
            </section>
            <footer></footer>
        </div>
    )
}
