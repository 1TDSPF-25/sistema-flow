# FarmáciaPlus

![demo.png](/public/demo.png)

FarmáciaPlus é uma plataforma intuitiva e segura que oferece uma experiência de compra simplificada. O sistema inclui funcionalidades essenciais como login, vitrine de produtos, carrinho de compras, contato, FAQ e um painel administrativo restrito para gestão de estoque e catálogo. O objetivo é facilitar o acesso a produtos farmacêuticos, melhorar o atendimento ao cliente e otimizar os processos internos da farmácia.

## 👥 Time
Esse projeto está sendo construído em aula pela turma 1TDSPF do curso de Análise e Desenvolvimento de Sistemas da FIAP, para a matéra de Front-end Design Engineering.

### Leaders

- MENTORIA: Prof. Alexandre

- TECH LEADER: Gustavo Bosak

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

- [x] HOTFIX / Corrigir problema grave de carregamento. / Equipe 7

- [x] FEATURE / Criar uma api de usuários com um ENDPOINT de nome usuarios, com os campos [id:string, nome:string, nomeUser:string, email:string, avatar:string]. utilize o json-server para isso. / Equipe 7

- [x] FEATURE / Atualizar o cabeçalho com um campo de pesquisa sobre produtos eletrônicos-coloque o resultado na home / Equipe 4

- [x] FEATURE / Gerar um sistema de validação com localStorage e sessionStoarge + Token / Equipe 7

- [x] FEATURE / Criar cards de notícias na HOME / Equippe 5

- [x] FEATURE / Mesclar cópia de card de notícias na na HOME / Equipe 3

- [x] FEATURE / Criar um componente de Login completo, incluindo rotas e registro destas. / Equipe 8

- [x] FEATURE / Remodelagem da página de erro404, com redirect, utilizando o rook useNavigate / Equipe 6

- [x] FEATURE / Melhorar a estilização da Tabela e aplicar um campo de filtro, onde se possa pesquisar direto nela o produto / Equipe 1

- [x] BUGFIX / Adicionar tratamento de erro a barra de pesquisa no cabeçalho / Equipe 1

- [x] FEATURE / Melhorar o rodapé, com informações dinâmicas sobre o tempo e a bolsa de valores / Equipe 2

- [x] FEATURE / Adição de opção para remover produto na página editar produtos / Equipe 5

- [x] BUGFIX / Limpar consultar CEP, remover rotaLimitada de dentro do createBrowserRouter em main.tsx e outras coisas desnecessárias do código / Equipe 1

- [x] BUGFIX / Corrigir estilização do menu na barra de navegação, o hover aplica movimentação em todo os elementos laterais presentes. / Mentoria

- [x] FEATURE / Atualizar textos da página para itens de farmácia (exemplo: trocar produtos tech por remédios na página produtos) / Equipe 1

- [x] FEATURE / Adicionar componente para exibir resultados da barra de pesquisa / Equipe 3

- [x] FEATURE / Adicionar página de finalizar compra, com opção de adicionar dados de pagamento / Equipe 4

- [x] FEATURE / Atualizar exibição de produtos, de vez tabela (tr, td etc) fazer em forma de card, sem id nem total de produtos / Equipe 8

- [x] BUGFIX / Corrigir tipagem de erro no rodapé, corrigir useEffect na home e outros erros caso encontrar / Equipe 2

- [x] FEATURE / Remodelação estilização de card noticias na home / Equipe 1

- [x] FEATURE / Remodelar estilização do rodapé / Equipe 1

- [x] FEATURE / Atualizar e consumir validação de login / Equipe 7

- [x] FEATURE / Adicionar página de FAQ / Equipe 3

- [x] FEATURE / Adicionar logo no header e icone no index.hmtl, adicionar também um nome para a página / Equipe 5

- [x] FEATURE / Atualizar página Produtos para exibir botão de comprar que adiciona o produto em uma lista de carrinho de compras no db json relacionada ao usuario logado/ Equipe 7

- [x] FEATURE / Adicionar página de carrinho de compras que resgata quais produtos o usuário logado clicou em comprar / Equipe 7

- [x] FEATURE / Adicionar notícias relacionadas a saúde / Equipe 1

- [x] FEATURE / Adicionar na página carrinhos um redirecionamento para a página de finalizar compra após clicar em comprar, também adicionar a opção  "tem certeza que quer remover item do carrinho" antes de remover / Equipe 5 

</ul>

---

### Em Homologação:

<ul style="color:orange">
- [ ] ...
</ul>

---

### Em Desenvolvimento:

<ul style="color:yellow">

- [ ] FEATURE / Adicionar modal para mensagens de erros e sucessos / Equipe 7 <span style="color:red">**DEADLINE: proxima aula**</span>

- [ ] FEATURE / Adicionar página de contao / Equipe 6 <span style="color:red">**DEADLINE: próxima aula**</span>

- [ ] FEATURE / Adicionar página de notícias que aparece quando clicar na notícia / Equipe 1 <span style="color:red">**DEADLINE: próxima aula**</span>

- [ ] FEATURE / Adicionar página de contato / Equipe 4 <span style="color:red">**DEADLINE: 9h40**</span>

- [ ] FEATURE / Atualizar carregamentos com Suspense API / Equipe 2 <span style="color:red">**DEADLINE: próxima aula**</span>

- [ ] FEATURE / Adicionar página de perfil que mostra os dados do usuário e avatar / Equipe ? <span style="color:red">**DEADLINE: ?**</span>

- [ ] BUGFIX / Corrigir estilização do formulário de finalizar compra e adicionar validação dos campos nome, cep e outros que estão aceitando dados fora do padrão. (Sugestão: adicionar mais dados de endereço como Rua, Bairro etc em vez de só endereço) / Equipe ? <span style="color:red">**DEADLINE: ?**</span>

- [ ] FEATURE / Adicionar no db.json os dados da pasta data, e remover pasta data e arquivos lista / Equipe 3 <span style="color:red">**DEADLINE: próxima aula**</span>

- [ ] BUGFIX / Corrigir exibição da home: resolver notícias cortadas, desfixar o footer ou transformar ele como footer lateral e outros ajustes de visibilidade necessários / Equipe 8 <span style="color:red">**DEADLINE: próxima aula**</span>

- [ ] FEATURE / Adicionar página de integrantes, com link para o github e linkedin pessoais de cada integrante. Também é interessante ter uma foto de cada integrante, com nome e equipe pertencente / Equipe ? <span style="color:red">**DEADLINE: próxima aula**</span>

- [ ] FEATURE / Adicionar na página carrinhos um redirecionamento para a página de finalizar compra após clicar em comprar, também adicionar a opção "tem certeza que quer remover item do carrinho" antes de remover / Equipe 5 <span style="color:red">**DEADLINE: próxima aula**</span>

- [ ] FEATURE / Atualizar header usando links de estilização dinâmica (NavLink) para mostrar qual página está sendo acessada / Equipe 8 <span style="color:red">**DEADLINE: próxima aula**</span>

- [ ] FEATURE / Adicionar modo dark por useContext / Mentoria <span style="color:red">**DEADLINE: próxima aula**</span>

</ul>

### Equipes Liberadas

- [Equipe 5]