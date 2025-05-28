export const fetchAddressByCep = async (cep) => {
    try {
      const response = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`);
      if (!response.ok) {
        throw new Error('CEP não encontrado');
      }
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
      throw error;
    }
  };