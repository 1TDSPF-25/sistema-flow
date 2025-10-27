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
          Tem alguma dúvida, sugestão ou precisa falar com a gente?
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
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
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
        <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197545464525!2d-46.65657158440608!3d-23.56134626747515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c97763!2sFIAP%20-%20Paulista!5e0!3m2!1spt-BR!2sbr!4v1665411783023!5m2!1spt-BR!2sbr"></iframe>
      </div>
    </div>
  );
}