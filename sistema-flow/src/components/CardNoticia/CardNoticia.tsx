export default function CardNoticia(){
    return(
        <div className="flex justify-center w-screen bg-gray-100 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5">

                <div className="bg-white border rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                    <h1 className="font-bold text-lg mb-3 text-gray-800">Corinthians Desafia Gigante Europeu e Conquista o Tricampeonato Mundial em Jogo Épico Contra o Real Madrid</h1>
                    <p className="text-gray-600 text-sm md:text-base">Em uma final épica em Wembley, o Corinthians venceu o Real Madrid por 1 a 0 com um gol no final da partida e conquistou o tricampeonato mundial de clubes, com atuação heroica do jovem Gui Negão e mais uma "invasão" da Fiel Torcida em Londres.</p>
                </div>

                <div className="bg-white border rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                  <h1 className="font-bold text-lg mb-3 text-gray-800">Rebeca Andrade Conquista Ouro Inédito no Mundial e Eterniza Novo Movimento com seu Nome</h1>
                  <p className="text-gray-600 text-sm md:text-base">Rebeca Andrade conquistou o ouro inédito no individual geral do Campeonato Mundial de Ginástica. Durante a competição, ela executou um novo salto que será oficialmente batizado como "Andrade II", consolidando seu status como a maior ginasta da história do Brasil.</p>
                </div>

                <div className="bg-white border rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                   <h1 className="font-bold text-lg mb-3 text-gray-800">Brasil Inicia Projeto-Piloto de "Currículo Flexível Invertido" em 50 Escolas de Ensino Médio</h1>
                   <p className="text-gray-600 text-sm md:text-base">O MEC iniciou um projeto-piloto em 50 escolas brasileiras com um novo modelo de "currículo flexível". Nele, alunos estudam a teoria online e usam o tempo em sala de aula para desenvolver projetos práticos, visando maior engajamento e preparo para o mercado.</p>
                </div>

                <div className="bg-white border rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                   <h1 className="font-bold text-lg mb-3 text-gray-800">FDA Aprova Lente de Contato Inteligente que Mede Glicose e Libera Insulina Automaticamente</h1>
                   <p className="text-gray-600 text-sm md:text-base">A agência de saúde dos EUA (FDA) aprovou a "GlucoLens", uma lente de contato inteligente que mede continuamente a glicose na lágrima e libera insulina de forma automática, prometendo revolucionar o tratamento para diabéticos e eliminar a necessidade de agulhas.</p>
                </div>

                <div className="bg-white border rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                   <h1 className="font-bold text-lg mb-3 text-gray-800">Guerra e Conflito: Tensão Aumenta no Mar da China Meridional Após Incidente com Drones de Patrulha Autônomos</h1>
                   <p className="text-gray-600 text-sm md:text-base">A tensão militar aumentou no Mar da China Meridional após drones de patrulha autônomos chineses realizarem manobras agressivas contra um navio das Filipinas. O incidente gerou um debate global sobre o uso de armas autônomas em conflitos.</p>
                </div>

                <div className="bg-white border rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                   <h1 className="font-bold text-lg mb-3 text-gray-800">Tecnologia: Lançado o "Aether", o Primeiro Satélite Comercial de Limpeza de Lixo Espacial</h1>
                   <p className="text-gray-600 text-sm md:text-base">Foi lançado com sucesso o "Aether-1", o primeiro satélite comercial projetado especificamente para a limpeza de lixo espacial. Sua missão é capturar e remover mais de 100 detritos de grande porte que estão na órbita da Terra.</p>
                </div>
            </div>
        </div>
    )
}