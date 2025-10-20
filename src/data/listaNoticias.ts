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
    titulo: "Nova tributação de medicamentos em MG pode elevar preços",
    resumo: "O governo de Minas Gerais publicou o Decreto 49.107/2025, que altera as regras do ICMS para medicamentos e produtos sujeitos à substituição tributária (ICMS-ST). As mudanças impactam diretamente o varejo farmacêutico e exigem atenção redobrada do setor.",
    conteudoCompleto: "A principal alteração é a adoção do Preço Médio Ponderado ao Consumidor Final (PMPF) como base prioritária para o cálculo do ICMS-ST. Isso significa que o imposto será calculado com base em um preço médio definido pelo Estado, e não no valor real da venda. Na prática, se o PMPF for superior ao preço praticado pela farmácia, haverá aumento da carga tributária, compressão das margens e necessidade de revisar estratégias de precificação.",
    imagemUrl: "data:image/jpeg;base64,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",
    urlExterna: "https://www.otempo.com.br/opiniao/2025/10/20/nova-tributacao-de-medicamentos-em-mg-pode-elevar-precos"
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
