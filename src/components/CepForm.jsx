import { useState } from 'react';

const CepForm = ({ onSubmit, isLoading }) => {
  const [cep, setCep] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cep.length !== 8 || !/^\d+$/.test(cep)) {
      alert('CEP inválido. Digite 8 números.');
      return;
    }
    onSubmit(cep);
  };

  return (
    <form onSubmit={handleSubmit} className="cep-form">
      <label htmlFor="cep">CEP:</label>
      <input
        type="text"
        id="cep"
        value={cep}
        onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
        maxLength="8"
        placeholder="Digite o CEP (apenas números)"
        disabled={isLoading}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Buscando...' : 'Buscar'}
      </button>
    </form>
  );
};

export default CepForm;