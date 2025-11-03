import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import type { TipoNoticia } from '../../types/tipoNoticia'; 

const DetalheNoticia: React.FC = () => {
  const { idNoticia } = useParams<{ idNoticia: string }>();

  const [noticia, setNoticia] = useState<TipoNoticia | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/noticias/${idNoticia}`)
      .then(response => response.json())
      .then(data => {
        setNoticia(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro ao buscar notícia:", error);
        setLoading(false);
      });
  }, [idNoticia]);

  if (loading) {
    return <div className="p-10 text-center">Carregando notícia...</div>;
  }

  if (!noticia) {
    return <div className="p-10 text-center text-red-600">Notícia não encontrada.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-5 my-10 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">{noticia.titulo}</h1>
      
      {noticia.imagemUrl && (
        <img 
          src={noticia.imagemUrl} 
          alt={noticia.titulo} 
          className="w-full h-auto max-h-[500px] object-cover rounded-lg mb-8 shadow-md" 
        />
      )}

      <div 
        className="text-lg text-gray-700 leading-relaxed space-y-4"
      >
        <p>{noticia.conteudoCompleto}</p>
      </div>

      {noticia.urlExterna && (
        <div className="mt-10 pt-5 border-t">
          <a 
            href={noticia.urlExterna}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Ver notícia original
          </a>
        </div>
      )}
    </div>
  );
};

export default DetalheNoticia;