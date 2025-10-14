export default function CardNoticia(){
    return(
        <div className="flex justify-center w-screen bg-gray-100 py-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-10 w-600 max-w-7xl"> 

            {/* Card 1 */}
            <div className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ">
                <div className="overflow-hidden">
                    <img
                    src="https://lncimg.lance.com.br/cdn-cgi/image/width=950,quality=75,fit=pad,format=webp/uploads/2023/08/2-imagens-44.jpg"
                    alt="Corinthians Campeão Mundial"
                    className="w-full h-35 object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="p-3">
                    <h1 className="font-bold text-lg mb-3 text-gray-800">
                    Corinthians Desafia Gigante Europeu e Conquista o Tricampeonato Mundial
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base">
                    Em uma final épica em Wembley, o Corinthians venceu o Real Madrid por 1 a 0 com um gol no final da partida e conquistou o tricampeonato mundial.
                    </p>
                </div>
                </div>

            {/* Card 2 */}
                <div className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <div className="overflow-hidden">
                        <img
                        src="https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/10/REBECA-e1698183867468.png?w=419&h=283&crop=0"
                        alt="Rebeca Andrade Ouro Mundial"
                        className="w-full h-35 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="p-3">
                        <h1 className="font-bold text-lg mb-3 text-gray-800">
                        Rebeca Andrade Conquista Ouro Inédito no Mundial
                        </h1>
                        <p className="text-gray-600 text-sm md:text-base">
                        Rebeca Andrade conquistou o ouro inédito no individual geral e executou um novo salto que será oficialmente batizado como “Andrade II”.
                        </p>
                    </div>
                    </div>

            {/* Card 3 */}
                <div className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ">
                    <div className="overflow-hidden">
                        <img
                        src="https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/03/3.jpeg?w=849&h=477&crop=0"
                        alt="Projeto Currículo Flexível"
                        className="w-full h-35 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="p-3">
                        <h1 className="font-bold text-lg mb-3 text-gray-800">
                        Brasil Inicia Projeto-Piloto de “Currículo Flexível Invertido”
                        </h1>
                        <p className="text-gray-600 text-sm md:text-base">
                        O MEC iniciou um projeto-piloto em 50 escolas com um novo modelo onde alunos estudam teoria online e aplicam a prática em sala.
                        </p>
                    </div>
                    </div>

                {/* CARD 4 */}
                <div className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="overflow-hidden">
                    <img
                    src="https://tm.ibxk.com.br/2023/02/03/03114948110520.jpg?img=1920x780"
                    alt="Lente de Contato Inteligente"
                    className="w-full h-35 object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="p-3">
                    <h1 className="font-bold text-lg mb-3 text-gray-800">
                    FDA Aprova Lente de Contato Inteligente que Mede Glicose
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base">
                    A FDA aprovou a “GlucoLens”, lente que mede glicose na lágrima e libera insulina automaticamente — um marco para diabéticos.
                    </p>
                </div>
                </div>

                {/* CARD 5 */}
                <div className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="overflow-hidden">
                    <img
                    src="https://tse2.mm.bing.net/th/id/OIP.MQnuhGRWPcqpWTY-tX1e5wHaEQ?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="Conflito no Mar da China"
                    className="w-full h-35 object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="p-3">
                    <h1 className="font-bold text-lg mb-3 text-gray-800">
                    Tensão Aumenta no Mar da China Meridional Após Incidente com Drones
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base">
                    Drones autônomos chineses realizaram manobras agressivas contra navios filipinos, aumentando a tensão na região.
                    </p>
                </div>
                </div>

                {/* CARD 6 */}
                <div className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="overflow-hidden">
                    <img
                    src="https://th.bing.com/th/id/OIP.jiBJ9UiglTEsHBCrQ5sdRQHaEK?w=312&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3"
                    alt="Satélite Aether"
                    className="w-full h-35 object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="p-3">
                    <h1 className="font-bold text-lg mb-3 text-gray-800">
                    Tecnologia: Lançado o “Aether”, o Satélite que Limpa Lixo Espacial
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base">
                    O “Aether-1” é o primeiro satélite comercial de limpeza espacial, projetado para capturar e remover grandes detritos orbitais.
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}