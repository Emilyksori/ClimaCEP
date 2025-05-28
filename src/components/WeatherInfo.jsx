const WeatherInfo = ({ weather }) => {
    if (!weather) return null;
  
    const getWeatherDescription = (code) => {
      const weatherCodes = {
        0: 'Céu limpo',
        1: 'Principalmente limpo',
        2: 'Parcialmente nublado',
        3: 'Nublado',
        45: 'Nevoeiro',
        48: 'Nevoeiro com geada',
        51: 'Chuvisco leve',
        53: 'Chuvisco moderado',
        55: 'Chuvisco denso',
        56: 'Chuvisco congelante leve',
        57: 'Chuvisco congelante denso',
        61: 'Chuva leve',
        63: 'Chuva moderada',
        65: 'Chuva forte',
        66: 'Chuva congelante leve',
        67: 'Chuva congelante forte',
        71: 'Queda de neve leve',
        73: 'Queda de neve moderada',
        75: 'Queda de neve forte',
        77: 'Grãos de neve',
        80: 'Pancadas de chuva leves',
        81: 'Pancadas de chuva moderadas',
        82: 'Pancadas de chuva violentas',
        85: 'Pancadas de neve leves',
        86: 'Pancadas de neve pesadas',
        95: 'Trovoada',
        96: 'Trovoada com granizo leve',
        99: 'Trovoada com granizo pesado'
      };
      return weatherCodes[code] || `Código de tempo desconhecido: ${code}`;
    };
  
    return (
      <div className="weather-info">
        <h2>Previsão do Tempo</h2>
        <p><strong>Data/Hora:</strong> {weather.current.time}</p>
        <p><strong>Temperatura:</strong> {weather.current.temperature_2m} °C</p>
        <p><strong>Umidade Relativa:</strong> {weather.current.relative_humidity_2m}%</p>
        <p><strong>Chuva:</strong> {weather.current.rain} mm</p>
        <p><strong>Condição:</strong> {getWeatherDescription(weather.current.weather_code)}</p>
      </div>
    );
  };
  
  export default WeatherInfo;