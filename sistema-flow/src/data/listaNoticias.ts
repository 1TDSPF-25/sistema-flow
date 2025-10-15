import type { TipoNoticia } from "../types/tipoNoticia";

export const listaDeNoticias: TipoNoticia[] = [
  {
    id: 1,
    titulo: "Corinthians Desafia Gigante Europeu e Conquista o Tricampeonato Mundial",
    resumo: "Em uma final épica em Wembley, o Corinthians venceu o Real Madrid por 1 a 0 com um gol no final da partida e conquistou o tricampeonato mundial.",
    conteudoCompleto: "O jogo foi tenso do início ao fim. O Real Madrid pressionou, mas a defesa do Corinthians, liderada por Cássio, foi impecável. O gol da vitória saiu aos 42 minutos do segundo tempo, em um contra-ataque rápido finalizado por Guerrero, levando a torcida à loucura.",
    imagemUrl: "https://lncimg.lance.com.br/cdn-cgi/image/width=950,quality=75,fit=pad,format=webp/uploads/2023/08/2-imagens-44.jpg",
    urlExterna: "https://www.lance.com.br/corinthians/noticia-ficticia-titulo.html"
  },
  {
    id: 2,
    titulo: "Rebeca Andrade Conquista Ouro Inédito no Mundial",
    resumo: "Rebeca Andrade conquistou o ouro inédito no individual geral e executou um novo salto que será oficialmente batizado como “Andrade II”.",
    conteudoCompleto: "A ginasta brasileira fez história mais uma vez. Com apresentações de altíssimo nível em todos os aparelhos, Rebeca superou suas adversárias e cravou seu nome na ginástica mundial. O novo salto, 'Andrade II', recebeu uma das notas mais altas da competição.",
    imagemUrl: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/10/REBECA-e1698183867468.png?w=419&h=283&crop=0",
    urlExterna: "https://www.cnnbrasil.com.br/esportes/outros-esportes/ouro-para-o-brasil-rebeca-andrade-e-campea-do-salto-no-mundial-de-ginastica"
  },
  {
    id: 3,
    titulo: "Brasil Inicia Projeto-Piloto de “Currículo Flexível Invertido”",
    resumo: "O MEC iniciou um projeto-piloto em 50 escolas com um novo modelo onde alunos estudam teoria online e aplicam a prática em sala.",
    conteudoCompleto: "O projeto visa modernizar a educação básica. A ideia é que o tempo em sala de aula seja otimizado para debates, projetos em grupo e atividades práticas, com o suporte direto dos professores, enquanto o conteúdo expositivo é consumido em casa, no ritmo de cada aluno.",
    imagemUrl: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/03/3.jpeg?w=849&h=477&crop=0",
    urlExterna: "https://www.cnnbrasil.com.br/nacional/65-dos-alunos-buscam-curriculo-flexivel-para-o-ensino-medio-mostra-pesquisa-do-todos-pela-educacao/"
  },
  {
    id: 4,
    titulo: "FDA Aprova Lente de Contato Inteligente que Mede Glicose e Libera Insulina Automaticamente",
    resumo: "A agência de saúde dos EUA (FDA) aprovou a 'GlucoLens', uma lente de contato inteligente que promete revolucionar o tratamento para diabéticos.",
    conteudoCompleto: "A tecnologia da 'GlucoLens' utiliza um biossensor minúsculo para analisar a lágrima do usuário em tempo real. Quando os níveis de glicose sobem, um micro-reservatório na lente libera a dose necessária de insulina diretamente na corrente sanguínea através dos vasos oculares, eliminando a necessidade de picadas nos dedos e injeções.",
    urlExterna: "https://www.endocrino.org.br/lentes-de-contato-para-monitorar-o-diabetes"
  },
  {
    id: 5,
    titulo: "Tensão Aumenta no Mar da China Meridional Após Incidente com Drones",
    resumo: "A tensão militar aumentou após drones chineses realizarem manobras agressivas contra um navio das Filipinas.",
    conteudoCompleto: "Analistas internacionais expressaram preocupação com a escalada. O incidente envolveu uma nova classe de drones de patrulha com capacidade de decisão autônoma, o que levanta questões éticas e legais sobre o futuro da guerra. Diplomatas de ambos os países foram chamados para negociações de emergência.",
    urlExterna: "https://www.terra.com.br/noticias/mundo/filipinas-e-china-trocam-acusacoes-sobre-colisao-de-navios-no-mar-do-sul-da-china,ba5322bebc4cf2a17b51e72489944098vmhesxfs.html"
  },
  {
    id: 6,
    titulo: "Lançado o 'Aether', o Primeiro Satélite Comercial de Limpeza de Lixo Espacial",
    resumo: "Foi lançado com sucesso o 'Aether-1', o primeiro satélite comercial projetado especificamente para a limpeza de lixo espacial.",
    conteudoCompleto: "Operado pela startup 'Orbital Cleanup', o Aether-1 usará uma combinação de redes e braços robóticos para capturar detritos. A missão inicial tem como alvo mais de 100 peças de foguetes e satélites desativados que representam um risco para as operações espaciais atuais e futuras.",
    urlExterna: "https://www.cnnbrasil.com.br/tecnologia/satelite-removedor-de-lixo-espacial-conclui-primeiro-teste-em-orbita"
  }
];
