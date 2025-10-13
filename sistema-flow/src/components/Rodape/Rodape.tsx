<<<<<<< HEAD
export default function Rodape(){

    return(
        <footer>
            <p>&copy; Todos os direitos reservados - 2025. App</p>
        </footer>
    );
}
=======
import React, { useState, useEffect } from 'react';


interface Currency {
  name: string;
  buy: number;
  sell: number | null;
  variation: number;
}

interface Stock {
  name: string;
  location: string;
  points?: number;
  variation?: number;
}


const FinanceData: React.FC = () => {
  
  const [currencies, setCurrencies] = useState<{ [key: string]: Currency }>({});
  const [stocks, setStocks] = useState<{ [key: string]: Stock }>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
   
    const API_KEY = '3e66b502'; 

    
    const apiUrl = `https://api.hgbrasil.com/finance${API_KEY}`;

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
        if (data.error) {
          throw new Error(data.error.message);
        }
        
        setCurrencies(data.results.currencies);
        setStocks(data.results.stocks);
      })
      .catch((err) => {
       
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });

  }, []);
  
  if (loading) {
    return <div>Carregando dados da HG Brasil...</div>;
  }

  if (error) {
    return <div style={{ color: 'red', fontFamily: 'monospace', fontSize: '16px' }}>Erro: {error}</div>;
  }

  return (
    <div>
      <h1>Painel Financeiro (HG Brasil API)</h1>
      
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start' }}>
        <section>
          <h2>Moedas</h2>
          <ul>
            {Object.keys(currencies).map(key => {
              const currency = currencies[key];
              if (key === 'source') return null;
              
              return (
                <li key={key}>
                  <strong>{currency.name} ({key}):</strong> R$ {currency.buy.toFixed(2)}
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <h2>Bolsas</h2>
          <ul>
            {Object.keys(stocks).map(key => {
              const stock = stocks[key];
              return (
                <li key={key}>
                  <strong>{stock.name} ({key}):</strong> {stock.points} pontos
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default FinanceData;
>>>>>>> 21295116d9b36f19c0b500ba8c0ab173512c68c5
