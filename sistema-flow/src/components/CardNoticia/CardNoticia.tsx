export default function CardNoticia(){
    return(
        <div className="flex justify-center w-screen bg-gray-100 py-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-10 w-600 max-w-7xl"> 

            {/* Card 1 */}
            <div className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ">
                <div className="overflow-hidden">
                    <img
                    src="https://th.bing.com/th/id/OIP.YWd5_j96_muHBaH7Icj-4wHaFS?w=285&h=204&c=7&r=0&o=7&cb=12&pid=1.7&rm=3"
                    alt="Mouse Gamer"
                    className="w-full h-35 object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="p-3">
                    <h1 className="font-bold text-lg mb-3 text-gray-800">
                    HyperX dá dicas para usuários escolherem os mouses gamer perfeitos
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base">
                    Família Pulsefire tem modelos com e sem fio, ultraleves e mais robustos, com mais ou menos botões, além de iluminação RGB e macros personalizáveis
                    </p>
                </div>
                </div>

            {/* Card 2 */}
                <div className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <div className="overflow-hidden">
                        <img
                        src="https://promaqtecnologia.com.br/wp-content/uploads/2023/05/Impressoras-multifuncionais-vantagens-e-desvantagens-para-as-empresas.jpg"
                        alt="Impressora Multifuncional"
                        className="w-full h-35 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="p-3">
                        <h1 className="font-bold text-lg mb-3 text-gray-800">
                        6 impressoras e multifuncionais até R$ 900 que vão facilitar sua rotina
                        </h1>
                        <p className="text-gray-600 text-sm md:text-base">
                        Marcas como HP, Canon, Xerox, Brother e Epson oferecem dispositivos a laser ou cartuchos de tinta com recursos que permitem imprimir direto do celular; confira a lista
                        </p>
                    </div>
                    </div>

            {/* Card 3 */}
                <div className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ">
                    <div className="overflow-hidden">
                        <img
                        src="https://www.adrenaline.com.br/wp-content/uploads/2025/10/jbl-quantum-250-002-1200x801.jpg"
                        alt="Headset gamer"
                        className="w-full h-35 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="p-3">
                        <h1 className="font-bold text-lg mb-3 text-gray-800">
                        Headset JBL Quantum 250 chega ao Brasil com som imersivo e foco em precisão para gamers
                        </h1>
                        <p className="text-gray-600 text-sm md:text-base">
                        Novo headset JBL Quantum 250 é focado no público gamer que busca um acessório com boa relação custo-benefício.
                        </p>
                    </div>
                    </div>

                {/* CARD 4 */}
                <div className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="overflow-hidden">
                    <img
                    src="https://tse2.mm.bing.net/th/id/OIP.MmjY7zyu1iGhvD_4jQOBDgHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="Notebook 15.6 polegadas"
                    className="w-full h-35 object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="p-3">
                    <h1 className="font-bold text-lg mb-3 text-gray-800">
                    Notebook com 15 polegadas: um desses 6 modelos é perfeito para você
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base">
                    Com uma tela de 15'' esses notebooks podem ser grandes aliados no trabalho ou no estudo, mas sem perder a versatilidade; confira uma lista com marcas como Lenovo e Acer
                    </p>
                </div>
                </div>

                {/* CARD 5 */}
                <div className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="overflow-hidden">
                    <img
                    src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/10/webcam-full-hd-2090719.jpg?tf=2048x"
                    alt="Webcam Full HD"
                    className="w-full h-35 object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="p-3">
                    <h1 className="font-bold text-lg mb-3 text-gray-800">
                    Webcams Full HD: as 10 melhores câmeras com resolução ideal em 2025
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base">
                    webcam full HD tornou-se um item essencial na rotina de quem trabalha, estuda ou se comunica à distância.
                    </p>
                </div>
                </div>

                {/* CARD 6 */}
                <div className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="overflow-hidden">
                    <img
                    src="https://s2.glbimg.com/xS44BRJMda7AtPhSCXO09sJqa_M=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/G/4/RTBoVxTgOBpVJSjbHiAQ/capa-pen-drive.jpg"
                    alt="Pen drive 64GB"
                    className="w-full h-35 object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="p-3">
                    <h1 className="font-bold text-lg mb-3 text-gray-800">
                    Memória expansível e portátil: pen drives e cartões SD para ter seus arquivos sempre com você
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base">
                    Tenha seus arquivos importantes em qualquer lugar e em qualquer dispositivo: confira pen drives e cartões SD
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}