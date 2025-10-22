import { useEffect } from "react";

const faqData = [
    {
        question: "Quais são os horários de funcionamento da farmácia?",
        answer: "A farmácia funciona de segunda a sábado, das 8h às 20h."
    },
    {
        question: "Preciso de receita médica para comprar medicamentos?",
        answer: "Sim. É obrigatório apresentar receita médica válida para compra de remédios controlados."
    },
    {
        question: "Atendimento 24 horas está disponível?",
        answer: "Não, nosso horário de atendimento é das 8h às 20h."
    },
    {
        question: "Como posso fazer uma reclamação?",
        answer: "Você pode fazer uma reclamação diretamente na loja se necessário."
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
        useEffect(() => {
            document.title = "FarmáciaPlus - FAQ";
        }, []);

    return(
        <main className="flex flex-col justify-center items-center">
            <h1 className="text-blue-900 font-bold text-3xl m-3">FAQ - Perguntas Frequentes</h1>
            <section className="border-2 rounded w-[50vw] shadow-2xl bg-white p-7 gap-1">
                {faqData.map((item, index) => (
                    <div key={index} className="flex flex-col">
                        <h2 className="text-blue-800 font-bold text-[20px]">{item.question}</h2>
                        <p className="text-neutral-800 text-[20px]">{item.answer}</p>
                    </div>
                ))}
            </section>
        </main>
    )
}