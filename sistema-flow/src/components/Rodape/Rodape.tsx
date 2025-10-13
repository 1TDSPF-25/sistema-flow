// Rodape.tsx
import { useState, useEffect } from 'react';


interface Currency { name: string; buy: number; }
interface Stock { name: string; location: string; points?: number; }

export default function Rodape() {
  const [currencies, setCurrencies] = useState<{ [key: string]: Currency }>({});
  const [stocks, setStocks] = useState<{ [key: string]: Stock }>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    
    const API_KEY = import.meta.env.VITE_API_KEY_HGBRASIL; 
    
    
    const apiUrl = `/api-finance/finance?key=${API_KEY}`;

    setLoading(true);
    setError(null);

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`O servidor respondeu com um erro: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.error) { throw new Error(data.error.message); }
        setCurrencies(data.results.currencies);
        setStocks(data.results.stocks);
      })
      .catch((err) => { setError(err.message); })
      .finally(() => { setLoading(false); });
  }, []);
  
  if (loading) return <footer>Carregando dados financeiros...</footer>;
  if (error) return <footer style={{ color: 'red' }}>Erro ao carregar dados: {error}</footer>;

  return (
    <footer>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%' }}>
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