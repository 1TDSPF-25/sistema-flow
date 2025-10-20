// Local: src/components/Card/CardNoticia.tsx

// NÃO PRECISAMOS MAIS DO 'Link' DO REACT-ROUTER-DOM
import { listaDeNoticias } from '../../data/listaNoticias'; 

export default function CardNoticia() {
    return (
        <div className="flex justify-center w-screen bg-gray-100 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5">

                {listaDeNoticias.map((noticia) => (

                    <a
                        href={noticia.urlExterna} 
                        target="_blank"           
                        rel="noopener noreferrer"
                        key={noticia.id}
                    >
                        <div className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
                            
                            {noticia.imagemUrl && (
                                <div className="overflow-hidden">
                                    <img
                                        src={noticia.imagemUrl}
                                        alt={noticia.titulo}
                                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            )}

                            <div className="p-6 flex-grow">
                                <h1 className="font-bold text-lg mb-3 text-gray-800">
                                    {noticia.titulo}
                                </h1>
                                <p className="text-gray-600 text-sm md:text-base">
                                    {noticia.resumo}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}

            </div>
        </div>
    );
}