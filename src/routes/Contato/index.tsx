import type { FormEvent } from 'react';

export default function Contato() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Formulário enviado!");
  };

  return (
    <div>
      {/* Cabeçalho */}
      <div>
        <h1>Fale Conosco</h1>
        <p>
          Tem alguma dúvida, sugestão ou precisa falar com um de nossos farmacêuticos?
          <br />
          Preencha o formulário abaixo ou utilize um de nossos canais de atendimento.
        </p>
      </div>

      {/* Seção do Formulário */}
      <div>
        <h2>Envie uma Mensagem</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome">Nome Completo</label>
            <input type="text" id="nome" required />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="assunto">Assunto</label>
            <input type="text" id="assunto" required />
          </div>
          <div>
            <label htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem" rows={6} required></textarea>
          </div>
          <button type="submit">Enviar Mensagem</button>
        </form>
      </div>

      {/* Seção de Informações */}
      <div>
        <h2>Informações de Contato</h2>
      </div>

      {/* Seção do Mapa */}
      <div>
        <h2>Nossa Localização</h2>
      </div>
    </div>
  );
}