import { useParams } from 'react-router-dom';
const { cpf } = useParams();
const [cliente, setCliente] = useState(null);
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/cliente?cpf=${cpf}`);
      const data = await response.json();
      setCliente(data);
    } catch (error) {
      console.error('Erro ao buscar cliente:', error);
    }
  };

  fetchData();
}, [cpf]); // Adicione 'cpf' na dependência para que a busca seja feita novamente quando o cpf mudar
return (
  <div>
    {cliente && (
      <div>
        <h2>Detalhes do Cliente</h2>
        <p>CPF: {cliente.cpf}</p>
        <p>Nome: {cliente.nome}</p>
        {/* ... outros campos do cliente ... */}
      </div>
    )}
  </div>
);
