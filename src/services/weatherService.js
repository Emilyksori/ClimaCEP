export const fetchWeather = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,rain,weather_code`
      );
      if (!response.ok) {
        throw new Error('Dados meteorológicos não disponíveis');
      }
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar previsão do tempo:', error);
      throw error;
    }
  };