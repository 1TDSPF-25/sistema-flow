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
        setError(err instanceof Error ? err.message : String(err));
        console.error("Erro ao buscar dados da API:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <footer className="text-center text-gray-200 p-2 bg-[#123974] text-sm">
        Carregando dados...
      </footer>
    );

  if (error)
    return (
      <footer className="text-center text-red-400 p-2 bg-[#134085] text-sm">
        Erro: {error}
      </footer>
    );

  return (
    <footer className="bg-[#0d3879] text-white text-sm p-3 w-full mt-auto border-t border-[#143c79]">
      <div className="flex flex-wrap justify-center gap-8 text-center">
        
        {/* Clima */}
        {weather && (
          <section>
            <h2 className="font-semibold text-xs uppercase mb-1 text-gray-300 tracking-wide">🌥️Clima</h2>
            <p className="text-gray-200">
              {weather.city}: {weather.temp}°C, {weather.description}
            </p>
          </section>
        )}

        {/* Moedas */}
        <section>
          <h2 className="font-semibold text-xs uppercase mb-1 text-gray-300 tracking-wide">💵Moedas</h2>
          <ul>
            {Object.keys(currencies).slice(0, 2).map(key => {
              const currency = currencies[key];
              if (key === 'source') return null;
              return (
                <li key={key} className="text-gray-200">
                  {currency.name}: R$ {currency.buy.toFixed(2)}
                </li>
              );
            })}
          </ul>
        </section>

        {/* Bolsas */}
        <section>
          <h2 className="font-semibold text-xs uppercase mb-1 text-gray-300 tracking-wide">📈Bolsas</h2>
          <ul>
            {Object.keys(stocks).slice(0, 2).map(key => {
              const stock = stocks[key];
              return (
                <li key={key} className="text-gray-200">
                  {stock.name}: {stock.points?.toFixed(2)} pts
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </footer>
  );
}
