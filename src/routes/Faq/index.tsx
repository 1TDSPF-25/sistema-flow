import React from 'react';

const faqData = [
    {
        question: "Quais são os horários de funcionamento da farmácia?",
        answer: "A farmácia funciona de segunda a sábado, das 8h às 20h."
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
        </main>
    )
}