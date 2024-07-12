import React, { useState } from 'react';

const CadastroCliente = () => {
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nomeSocial, setNomeSocial] = useState('');
  const [nacionalidade, setNacionalidade] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [rg, setRg] = useState('');
  const [orgaoExpedidor, setOrgaoExpedidor] = useState('');
  const [ufDoc, setUfDoc] = useState('');
  const [profissao, setProfissao] = useState('');
  const [email, setEmail] = useState('');
  const [sexo, setSexo] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [ibge, setIbge] = useState('');
  const [numero, setNumero] = useState('');
  const [cep, setCep] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/cliente', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cpf,
          nome,
          telefone,
          nomeSocial,
          nacionalidade,
          estadoCivil,
          dataNascimento,
          rg,
          orgaoExpedidor,
          ufDoc,
          profissao,
          email,
          sexo,
          rua,
          bairro,
          complemento,
          cidade,
          uf,
          ibge,
          numero,
          cep,
        }),
      });

      if (response.status === 200) {
        alert('Cliente adicionado!');
        // Limpar os campos do formulário
        setCpf('');
        setNome('');
        setTelefone('');
        setNomeSocial('');
        setNacionalidade('');
        setEstadoCivil('');
        setDataNascimento('');
        setRg('');
        setOrgaoExpedidor('');
        setUfDoc('');
        setProfissao('');
        setEmail('');
        setSexo('');
        setRua('');
        setBairro('');
        setComplemento('');
        setCidade('');
        setUf('');
        setIbge('');
        setNumero('');
        setCep('');
      } else {
        alert('Erro ao adicionar cliente.');
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="cpf">CPF:</label>
        <input
          type="text"
          id="cpf"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="telefone">Telefone:</label>
        <input
          type="text"
          id="telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="nomeSocial">Nome Social:</label>
        <input
          type="text"
          id="nomeSocial"
          value={nomeSocial}
          onChange={(e) => setNomeSocial(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="nacionalidade">Nacionalidade:</label>
        <input
          type="text"
          id="nacionalidade"
          value={nacionalidade}
          onChange={(e) => setNacionalidade(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="estadoCivil">Estado Civil:</label>
        <input
          type="text"
          id="estadoCivil"
          value={estadoCivil}
          onChange={(e) => setEstadoCivil(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="dataNascimento">Data de Nascimento:</label>
        <input
          type="date"
          id="dataNascimento"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="rg">RG:</label>
        <input
          type="text"
          id="rg"
          value={rg}
          onChange={(e) => setRg(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="orgaoExpedidor">Órgão Expedidor:</label>
        <input
          type="text"
          id="orgaoExpedidor"
          value={orgaoExpedidor}
          onChange={(e) => setOrgaoExpedidor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="ufDoc">UF do Documento:</label>
        <input
          type="text"
          id="ufDoc"
          value={ufDoc}
          onChange={(e) => setUfDoc(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="profissao">Profissão:</label>
        <input
          type="text"
          id="profissao"
          value={profissao}
          onChange={(e) => setProfissao(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="sexo">Sexo:</label>
        <input
          type="text"
          id="sexo"
          value={sexo}
          onChange={(e) => setSexo(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="rua">Rua:</label>
        <input
          type="text"
          id="rua"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="bairro">Bairro:</label>
        <input
          type="text"
          id="bairro"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="complemento">Complemento:</label>
        <input
          type="text"
          id="complemento"
          value={complemento}
          onChange={(e) => setComplemento(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cidade">Cidade:</label>
        <input
          type="text"
          id="cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="uf">UF:</label>
        <input
          type="text"
          id="uf"
          value={uf}
          onChange={(e) => setUf(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="ibge">IBGE:</label>
        <input
          type="text"
          id="ibge"
          value={ibge}
          onChange={(e) => setIbge(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="numero">Número:</label>
        <input
          type="text"
          id="numero"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cep">CEP:</label>
        <input
          type="text"
          id="cep"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default CadastroCliente;
