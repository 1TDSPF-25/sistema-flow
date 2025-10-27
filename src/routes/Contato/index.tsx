import { useState, type FormEvent } from 'react';

export default function Contato() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const formData = { nome, email, assunto, mensagem };
    console.log('Dados do formulário:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setNome('');
    setEmail('');
    setAssunto('');
    setMensagem('');
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
            <input
              type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required/>
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
+            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="assunto">Assunto</label>
            <input type="text" id="assunto" value={assunto} onChange={(e) => setAssunto(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem" rows={6} value={mensagem} onChange={(e) => setMensagem(e.target.value)} required ></textarea>
          </div>
          <button type="submit">Enviar Mensagem</button>
        </form>
      </div>

      {/* Seção de Informações */}
      <div>
        <h2>Informações de Contato</h2>
        <div>
         <strong>📍 Endereço</strong>
         <p>Av. Paulista, 1106 - Bela Vista<br />São Paulo - SP, 01310-100</p>
       </div>
       <div>
         <strong>📞 Telefone</strong>
         <p>(11) 4002-8922</p>
       </div>
       <div>
         <strong>✉️ E-mail</strong>
         <p>contato@fiapfarma.com.br</p>
       </div>
      </div>

      {/* Seção do Mapa */}
      <div>
        <h2>Nossa Localização</h2>
      </div>
    </div>
  );
}