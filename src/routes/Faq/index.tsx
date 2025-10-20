const faqData = [
    {
        question: "Quais são os horários de funcionamento da farmácia?",
        answer: "A farmácia funciona de segunda a sábado, das 8h às 20h."
    },
    {
        question: "Preciso de receita médica para comprar medicamentos?",
        answer: "Sim. É obrigatório apresentar receita médica válida para compra de rmédops controlados.."
    },
    {
        question: "Atendimento 24 horas está disponível?",
        answer: "Não, nosso horário de atendimento é das 8h às 20h."
    },
    {
        question: "Como posso fazer uma reclamação?",
        answer: "Você pode fazer uma reclamação através do nosso formulário de contato ou diretamente na loja."
    },
    {
        question: "A farmácia oferece entrega?",
        answer: "Sim, oferecemos entrega para pedidos acima de R$50."
    },
    {
        question: "Quais tipos de medicamentos posso encontrar?",
        answer: "Temos uma ampla variedade de medicamentos, incluindo genéricos e de marca."
    },
    {
        question: "A farmácia aceita convênios?",
        answer: "Sim, aceitamos diversos convênios. Consulte na loja para mais informações."
    }
];

export default function Faq (){

    return(
        <main>
            <h1>FAQ - Perguntas Frequentes</h1>
            <section>
                {faqData.map((item, index) => (
                    <div key={index}>
                        <h2>{item.question}</h2>
                        <p>{item.answer}</p>
                    </div>
                ))}
            </section>
        </main>
    )
}