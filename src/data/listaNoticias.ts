import type { TipoNoticia } from "../types/tipoNoticia";

export const listaDeNoticias: TipoNoticia[] = [
  {
    id: 1,
    titulo: "Pacientes enfrentam longas filas na única farmácia de medicamentos de alto custo de Guarulhos, na Grande SP",
    resumo: "Bem antes do dia amanhecer e horas da abertura do local, é comum pacientes e parentes começarem a chegar na fila para garantir atendimento.",
    conteudoCompleto: "Pacientes, incluindo muitos idosos, costumam enfrentar uma fila gigante para pegar medicamentos de alto custo na única farmácia especializada de Guarulhos, na Grande São Paulo, a segunda cidade mais populosa do estado. Nesta segunda-feira (20), a fila dobrava o quarteirão.",
    imagemUrl: "https://s2-g1.glbimg.com/QtMKxDrPzxgvAAkHBvCI220xbbk=/0x0:1200x670/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/c/u/1utv0ORhuWtQdZc2809Q/fila-na-farmacia-de-alto-custo.jpg",
    urlExterna: "https://g1.globo.com/sp/sao-paulo/noticia/2025/10/20/pacientes-enfrentam-fila-gigante-na-unica-farmacia-de-medicamentos-de-alto-custo-de-guarulhos-na-grande-sp.ghtml"
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
