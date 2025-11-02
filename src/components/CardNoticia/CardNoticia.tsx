import React from 'react';
import { Link } from 'react-router-dom';

import type { TipoNoticia } from '../../types/tipoNoticia'; 

interface CardNoticiaProps {
  noticia: TipoNoticia;
}

const CardNoticia: React.FC<CardNoticiaProps> = ({ noticia }) => {
  return (
    <Link 
      to={`/noticias/${noticia.id}`} 
      className="bg-white border rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 block"
    >
      <div className="overflow-hidden">
        <img
          src={noticia.imagemUrl || 'https://via.placeholder.com/300x150?text=Sem+Imagem'}
          alt={noticia.titulo}
          className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h1 className="font-bold text-[15px] mb-2 text-gray-800 leading-snug">
          {noticia.titulo}
        </h1>
        <p className="text-gray-600 text-[14px] leading-tight">
          {noticia.resumo}
        </p>
      </div>
    </Link>
  );
};

export default CardNoticia;