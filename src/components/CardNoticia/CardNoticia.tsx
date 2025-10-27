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
                    Pacientes enfrentam longas filas na única farmácia de medicamentos de alto custo de Guarulhos, na Grande SP
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base">
                    em antes do dia amanhecer e horas da abertura do local, é comum pacientes e parentes começarem a chegar na fila para garantir atendimento
                    </p>
                </div>
                </div>

            {/* Card 2 */}
                <div className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <div className="overflow-hidden">
                        <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMAylzbfxnpFw-wtlkvgwi50dxruiV7ORBZA&s"
                        alt="Tributação de medicamentos"
                        className="w-full h-35 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="p-3">
                        <h1 className="font-bold text-lg mb-3 text-gray-800">
                        Nova tributação de medicamentos em MG pode elevar preços
                        </h1>
                        <p className="text-gray-600 text-sm md:text-base">
                        O governo de Minas Gerais publicou o Decreto 49.107/2025, que altera as regras do ICMS para medicamentos e produtos sujeitos à substituição tributária (ICMS-ST)
                        </p>
                    </div>
                    </div>

            {/* Card 3 */}
                <div className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ">
                    <div className="overflow-hidden">
                        <img
                        src="https://www.gov.br/saude/pt-br/assuntos/noticias/2025/agosto/ministerio-da-saude-e-cgu-inspecionam-farmacias-do-programa-farmacia-popular/whatsapp-image-2025-08-27-at-12-1.jpg/@@images/7c8d89dc-edfa-4821-be3f-d32323416a54.jpeg"
                        alt="Programa Farmácia Popular"
                        className="w-full h-35 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="p-3">
                        <h1 className="font-bold text-lg mb-3 text-gray-800">
                        Ministério da Saúde e CGU inspecionam farmácias do Programa Farmácia Popular
                        </h1>
                        <p className="text-gray-600 text-sm md:text-base">
                        Ação conjunta reforça medidas de fortalecimento do Programa, que ampliou em 90% o orçamento entre 2022 e 2025 e garantiu gratuidade para todos os 41 medicamentos e insumos ofertados.
                        </p>
                    </div>
                    </div>

            {/* CARD 4 */}
                <div className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <div className="overflow-hidden">
                        <img
                        src="https://classic.exame.com/wp-content/uploads/2025/10/Amazon-medicamentos-autoatendimento.png?ims=750x/filters:quality(85):format(webp)"
                        alt="Medicamentos controlados em máquinas"
                        className="w-full h-35 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="p-3">
                        <h1 className="font-bold text-lg mb-3 text-gray-800">
                        Amazon vai vender medicamentos controlados em máquinas eletrônicas nos EUA
                        </h1>
                        <p className="text-gray-600 text-sm md:text-base">
                        Serviço será oferecido para moradores de Los Angeles, na Califórnia, que se consultarem pela rede de atendimento One Medical, adquirida pela Amazon em 2023
                        </p>
                    </div>
                    </div>

            {/* CARD 5 */}
                <div className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <div className="overflow-hidden">
                        <img
                        src="https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/10/farmacia-mercado-livre.png?w=1200&h=900&crop=0"
                        alt="Venda de remédios"
                        className="w-full h-35 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="p-3">
                        <h1 className="font-bold text-lg mb-3 text-gray-800">
                        Mercado Livre entra na venda de remédios e setor reage; entenda a polêmica
                        </h1>
                        <p className="text-gray-600 text-sm md:text-base">
                        Plataforma defende modelo de intermediação com rigor sanitário e transparência de preços, enquanto Abrafarma alerta para riscos de segurança ao consumidor
                        </p>
                    </div>
                    </div>

            {/* CARD 6 */}
                <div className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <div className="overflow-hidden">
                        <img
                        src="https://s2-g1.glbimg.com/HeTNpVlQboDJkOSLZ0wxkFu1EVs=/0x0:3840x2160/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/j/L/Rs8nAbTdGfVAemE3UDfw/img-7079-frame-205.jpeg"
                        alt="Estoque de medicamentos zerado"
                        className="w-full h-35 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="p-3">
                        <h1 className="font-bold text-lg mb-3 text-gray-800">
                        Uma em cada duas farmácias municipais de Sorocaba está com quase metade do estoque de medicamentos zerado
                        </h1>
                        <p className="text-gray-600 text-sm md:text-base">
                        Todas as unidades básicas de saúde da cidade estavam com algum medicamento em falta na quarta-feira (15). Prefeitura de Sorocaba nega a situação
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}