<<<<<<< HEAD
export default function Rodape() {
  return (
    <footer className=" bg-blue-900 text-gray-100">
      <div className="p-6 text-center">
        <p className="text-sm sm:text-base font-medium tracking-wide">
          &copy; 2025. App — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
=======
// src/components/Rodape/Rodape.tsx
import { useState, useEffect } from 'react';


interface Currency { name: string; buy: number; }
interface Stock { name: string; location: string; points?: number; }
interface WeatherData { temp: number; city: string; description: string; }

export default function Rodape() {

  const [currencies, setCurrencies] = useState<{ [key: string]: Currency }>({});
  const [stocks, setStocks] = useState<{ [key: string]: Stock }>({});
  
 
  const [weather, setWeather] = useState<WeatherData | null>(null);

 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
 
  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY_HGBRASIL; 
    
    
    const financeApiUrl = `/api-hgbrasil/finance?key=${API_KEY}`;
    const weatherApiUrl = `/api-hgbrasil/weather?key=${API_KEY}`;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        
        const [financeResponse, weatherResponse] = await Promise.all([
          fetch(financeApiUrl),
          fetch(weatherApiUrl)
        ]);

        if (!financeResponse.ok) throw new Error('Falha ao buscar dados financeiros.');
        if (!weatherResponse.ok) throw new Error('Falha ao buscar dados do clima.');

        const financeData = await financeResponse.json();
        const weatherData = await weatherResponse.json();

        
        setCurrencies(financeData.results.currencies);
        setStocks(financeData.results.stocks);
        setWeather(weatherData.results);

      } catch (err) {
        setError(err.message);
        console.error("Erro ao buscar dados da API:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  if (loading) return <footer>Carregando dados...</footer>;
  if (error) return <footer style={{ color: 'red' }}>Erro ao carregar dados: {error}</footer>;

  return (
    <footer>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%' }}>
        
        {/* Seção de Clima */}
        {weather && (
          <section>
            <h2>Clima</h2>
            <p><strong>{weather.city}:</strong> {weather.temp}°C, {weather.description}</p>
          </section>
        )}
        {/* Seção de Moedas */}
        <section>
          <h2>Moedas</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {Object.keys(currencies).slice(0, 2).map(key => {
              const currency = currencies[key];
              if (key === 'source') return null;
              return <li key={key}><strong>{currency.name}:</strong> R$ {currency.buy.toFixed(2)}</li>;
            })}
          </ul>
        </section>
        
        {/* Seção de Bolsas */}
        <section>
          <h2>Bolsas</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {Object.keys(stocks).slice(0, 2).map(key => {
              const stock = stocks[key];
              return <li key={key}><strong>{stock.name}:</strong> {stock.points?.toFixed(2)} pts</li>;
            })}
          </ul>
        </section>
      </div>
    </footer>
  );
};
>>>>>>> feature/adicionando-api-bolsa
