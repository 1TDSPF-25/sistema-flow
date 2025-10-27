export default function CardNoticia() {
  return (
    <div className="flex justify-center w-screen bg-gray-100 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6 w-full max-w-7xl">
        
        {/* Card 1 */}
        <div className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="overflow-hidden">
            <img
              src="https://th.bing.com/th/id/OIP.YWd5_j96_muHBaH7Icj-4wHaFS?w=285&h=204&c=7&r=0&o=7&cb=12&pid=1.7&rm=3"
              alt="Fila em farmácia de Guarulhos"
              className="w-full h-28 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-3">
            <h1 className="font-semibold text-[15px] mb-2 text-gray-800 leading-snug">
              Pacientes enfrentam longas filas na única farmácia de medicamentos de alto custo de Guarulhos, na Grande SP
            </h1>
            <p className="text-gray-600 text-sm leading-tight">
              Antes mesmo da abertura, é comum pacientes chegarem cedo à fila para garantir atendimento.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMAylzbfxnpFw-wtlkvgwi50dxruiV7ORBZA&s"
              alt="Tributação de medicamentos"
              className="w-full h-28 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-3">
            <h1 className="font-semibold text-[15px] mb-2 text-gray-800 leading-snug">
              Nova tributação de medicamentos em MG pode elevar preços
            </h1>
            <p className="text-gray-600 text-sm leading-tight">
              Decreto 49.107/2025 altera regras do ICMS-ST e pode encarecer o preço final ao consumidor.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="overflow-hidden">
            <img
              src="https://www.gov.br/saude/pt-br/assuntos/noticias/2025/agosto/ministerio-da-saude-e-cgu-inspecionam-farmacias-do-programa-farmacia-popular/whatsapp-image-2025-08-27-at-12-1.jpg/@@images/7c8d89dc-edfa-4821-be3f-d32323416a54.jpeg"
              alt="Programa Farmácia Popular"
              className="w-full h-28 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-3">
            <h1 className="font-semibold text-[15px] mb-2 text-gray-800 leading-snug">
              Ministério da Saúde e CGU inspecionam farmácias do Programa Farmácia Popular
            </h1>
            <p className="text-gray-600 text-sm leading-tight">
              Ação reforça medidas de fortalecimento e aumento de 90% no orçamento desde 2022.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="overflow-hidden">
            <img
              src="https://classic.exame.com/wp-content/uploads/2025/10/Amazon-medicamentos-autoatendimento.png?ims=750x/filters:quality(85):format(webp)"
              alt="Medicamentos controlados em máquinas"
              className="w-full h-28 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-3">
            <h1 className="font-semibold text-[15px] mb-2 text-gray-800 leading-snug">
              Amazon vai vender medicamentos controlados em máquinas eletrônicas nos EUA
            </h1>
            <p className="text-gray-600 text-sm leading-tight">
              Serviço será oferecido a moradores de Los Angeles pela rede One Medical.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="overflow-hidden">
            <img
              src="https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/10/farmacia-mercado-livre.png?w=1200&h=900&crop=0"
              alt="Venda de remédios"
              className="w-full h-28 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-3">
            <h1 className="font-semibold text-[15px] mb-2 text-gray-800 leading-snug">
              Mercado Livre entra na venda de remédios e setor reage
            </h1>
            <p className="text-gray-600 text-sm leading-tight">
              Plataforma promete transparência e segurança; Abrafarma alerta para riscos.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="overflow-hidden">
            <img
              src="https://s2-g1.glbimg.com/HeTNpVlQboDJkOSLZ0wxkFu1EVs=/0x0:3840x2160/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/j/L/Rs8nAbTdGfVAemE3UDfw/img-7079-frame-205.jpeg"
              alt="Estoque de medicamentos zerado"
              className="w-full h-28 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-3">
            <h1 className="font-semibold text-[15px] mb-2 text-gray-800 leading-snug">
              Metade das farmácias municipais de Sorocaba está com estoque zerado
            </h1>
            <p className="text-gray-600 text-sm leading-tight">
              UBSs registram falta de medicamentos; prefeitura nega situação.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
