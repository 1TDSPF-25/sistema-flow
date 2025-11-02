import React, { useState, useEffect } from 'react';
import CardNoticia from '../../components/CardNoticia/CardNoticia';
import type { TipoNoticia } from '../../types/tipoNoticia'; 

export default function Home() {
  const [noticias, setNoticias] = useState<TipoNoticia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/noticias')
      .then(response => response.json())
      .then(data => {
        setNoticias(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro ao buscar notícias:", error);
        setLoading(false);
      });
  }, []);

  return (
    <main className="flex flex-col bg-gray-50 items-center min-h-screen">
      <h2 className="text-3xl font-bold text-gray-700 mt-8 mb-8 text-center">
        Bem-vindo à FarmaciaPlus
      </h2>
      
      {loading ? (
        <p className="text-gray-600">Carregando notícias...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-3 w-full max-w-7xl pb-10">
          
          {noticias.map(item => (
            <CardNoticia 
              key={item.id}  
              noticia={item} 
            />
          ))}

        </div>
      )}
    </main>
  );
}