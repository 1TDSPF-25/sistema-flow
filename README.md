# Sistema Flow

O sistema flow é uma plataforma intuitiva e segura que oferece uma experiência de compra simplificada. O sistema inclui funcionalidades essenciais como login, vitrine de produtos, carrinho de compras, contato, FAQ e um painel administrativo restrito para gestão de estoque e catálogo. O objetivo é facilitar o acesso a produtos farmacêuticos, melhorar o atendimento ao cliente e otimizar os processos internos da farmácia.

## 👥 Time
Esse projeto está sendo construído em aula pela equipe 1TDSPF do curso de Análise e Desenvolvimento de Sistemas da FIAP, para a matéra de Front-end Design Engineering.

### Leaders

- MENTORIA: Prof. Alexandre

- TEC LEADER: Gustavo Bosak

- HOMOLOGAÇÃO: Felipe Furlanetto

### Equipes

| Equipe | Integrantes |
|--------|--------|
| Equipe 1 | Pedro Pequini, Guilherme Sola, Clayton, Lucas Rafael |
| Equipe 2 | Guilherme Macedo, Pedro Henrique, Gabriel Hayashi |
| Equipe 3 | Ryan, Raul |
| Equipe 4 | Henrique Martins, Henrique Cesar, Pedro Sakai, Kauan |
| Equipe 5 | Enzo, Pietro, Lucas Ryuji |
| Equipe 6 | Nicolly, Cléo, Samyr |
| Equipe 7 | Nikolas Brisola, Felipe Ferrete |
| Equipe 8 | João Bueno, João Caetano |

## 🚀 Rodando local

1. Faça o clone do projeto

```
git clone https://github.com/1TDSPF-25/sistema-flow.git
```

2. Instale as dependências

```
npm install
```

3. Coloque no ar o servidor json-server

```
npm run api
```

4. Por fim, execute o programa em modo desenvolvedor

```
npm run dev
```

## 📂 Estrutura de diretórios

```
SISTEMA-FLOW/
├── src/
│   ├── App.tsx
│   ├── globals.css # Arquivo principal do Tailwind CSS
│   ├── main.tsx
│   ├── components/
│   │   ├── Cabecalho/
│   │   ├── Card/
│   │   ├── CardNoticia/
│   │   ├── Menu/
│   │   ├── Rodape/
│   │   └── SearchBar/
│   ├── routes/ # Páginas da aplicação
│   │   ├── Cadastro/
│   │   ├── EditarProdutos/
│   │   ├── Error/
│   │   ├── Faq/
│   │   ├── FinalizarCompra/
│   │   ├── Home/
│   │   └── Produtos/
│   ├── services/ # Serviços de autentificação
│   └── types/
├── .env # Arquivo de variáveis de ambiente
└── db.json # Base de dados do servidor json-server
```

## 🏆 Contribuições:

<a href="https://github.com/1TDSPF-25/sistema-flow/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=1TDSPF-25/sistema-flow" />
</a>

## 🛠️ Features
### Implementados:

<ul style="color:89FA17">

- [x] HOTFIX / Corrigir problema grave de carregamento.

- [x] FEATURE / Criar uma api de usuários com um ENDPOINT de nome usuarios, com os campos [id:string, nome:string, nomeUser:string, email:string, avatar:string]. utilize o json-server para isso.

- [x] FEATURE / Atualizar o cabeçalho com um campo de pesquisa sobre produtos eletrônicos-coloque o resultado na home

- [x] FEATURE / Gerar um sistema de validação com localStorage e sessionStoarge + Token 

- [x] FEATURE / Criar cards de notícias na HOME 

- [x] FEATURE / Mesclar cópia de card de notícias na na HOME

- [x] FEATURE / Criar um componente de Login completo, incluindo rotas e registro destas.

- [x] FEATURE / Remodelagem da página de erro404, com redirect, utilizando o rook useNavigate 

- [x] FEATURE / Melhorar a estilização da Tabela e aplicar um campo de filtro, onde se possa pesquisar direto nela o produto

- [x] BUGFIX / Adicionar tratamento de erro a barra de pesquisa no cabeçalho

- [x] FEATURE / Melhorar o rodapé, com informações dinâmicas sobre o tempo e a bolsa de valores

- [x] FEATURE / Adição de opção para remover produto na página editar produtos

- [x] BUGFIX / Limpar consultar CEP, remover rotaLimitada de dentro do createBrowserRouter em main.tsx e outras coisas desnecessárias do código

- [x] BUGFIX / Corrigir estilização do menu na barra de navegação, o hover aplica movimentação em todo os elementos laterais presentes.

- [x] FEATURE / Atualizar textos da página para itens de farmácia (exemplo: trocar produtos tech por remédios na página produtos)

- [x] FEATURE / Adicionar componente para exibir resultados da barra de pesquisa

- [x] FEATURE / Adicionar página de finalizar compra, com opção de adicionar dados de pagamento

- [x] FEATURE / Atualizar exibição de produtos, de vez tabela (tr, td etc) fazer em forma de card, sem id nem total de produtos

- [x] BUGFIX / Corrigir tipagem de erro no rodapé, corrigir useEffect na home e outros erros caso encontrar

- [x] FEATURE / Remodelação estilização de card noticias na home

- [x] FEATURE / Remodelar estilização do rodapé

</ul>

---

### Em Homologação:

<ul style="color:orange">
- [ ] ...
</ul>

---

### Em Desenvolvimento:

<ul style="color:yellow">

- [ ] FEATURE / Atualizar página Produtos para exibir botão de comprar que adiciona o produto em uma lista de carrinho de compras no db json relacionada ao usuario logado/ Nikolas Brisola <span style="color:red">**DEADLINE: próxima aula**</span>

- [ ] FEATURE / Adicionar página de carrinho de compras que resgata quais produtos o usuário logado clicou em comprar / Nikolas Brisola <span style="color:red">**DEADLINE: próxima aula**</span>

- [ ] FEATURE / Atualizar e consumir validação de login / Felipe Ferrete <span style="color:red">**DEADLINE: proxima aula**</span>

- [ ] FEATURE / Adicionar modal para mensagens de erros e sucessos / Equipe 7 <span style="color:red">**DEADLINE: proxima aula**</span>

- [ ] FEATURE / Adicionar página de contao / Equipe 6 <span style="color:red">**DEADLINE: próxima aula**</span>

- [ ] FEATURE / Adicionar página de notícias que aparece quando clicar na notícia / Equipe 1 <span style="color:red">**DEADLINE: próxima aula**</span>

- [ ] FEATURE / Adicionar logo no header e icone no index.hmtl, adicionar também um nome para a página / Equipe 5 <*span style="color:red">**DEADLINE: 9h20</**span>

- [ ] FEATURE / Adicionar página de contato / Equipe 4 <*span style="color:red">**DEADLINE: 9h40</**span>

- [ ] FEATURE / Adicionar página de FAQ / Equipe 3 <*span style="color:red">**DEADLINE: 9h40</**span>

- [ ] FEATURE / Atualizar carregamentos com Suspense API / Equipe 2 <span style="color:red">**DEADLINE: próxima aula**</span>

- [ ] FEATURE / Adicionar notícias relacionadas a saúde / Equipe 1 <span style="color:red">**DEADLINE: próxima aula**</span>

- [ ] FEATURE / Adicionar imagens dos produtos aos cards de produto / Equipe 8 <span style="color:red">**DEADLINE: próxima aula**</span>

</ul>

### Equipes Liberadas

-
