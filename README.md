#Lista de Tarefas FEATURES
TAREFAS DO GIT FLOW - Front End Design Engineering

- HOTFIX/Corrigir problema grave de carregamento./Bosak, Ferrete, Brisola
- FEATURE / Criar cards de notícias na HOME / Enzo, Pietro, Lucas
- FEATURE / Melhorar a estilização do Formulário, dando ênfase na reponsividade / João-C, Furlaneto,Ryan, Raul
- FEATURE / Melhorar o rodapé, com informações dinâmicas sobre o tempo e a bolsa de valores / Guilherme, Pedro, Gabriel
- FEATURE / Atualizar o cabeçalho com um campo de pesquisa sobre produtos eletrônicos-coloque o resultado na home/HenriqueM,HenriqueC,PedroS,Kauan
- FEATURE/Melhorar a estilização da Tabela e aplicar um campo de filtro, onde se possa pesquisar direto nela o produto/LucaR,Clayton,Sola,PedroP
#Lista de Tarefas FEATURES






# -- API REST, Verbos HTTP e Consumo com React

## 1. O que é uma API?

-   **API (Application Programming Interface)** é um conjunto de regras
    e padrões que permite que aplicações diferentes se comuniquem entre
    si.\
-   No caso do **Front-End**, a API fornece dados (geralmente em
    **JSON**) que podem ser exibidos e manipulados pelos componentes
    React.

------------------------------------------------------------------------

## 2. API REST e RESTful

-   **REST (Representational State Transfer)** é um estilo de
    arquitetura que organiza a comunicação entre cliente e servidor.\
-   Uma **API RESTful** segue os princípios REST, utilizando **verbo
    HTTP + recurso (endpoint)** para acessar/manipular dados.

Exemplo de requisições: - `GET /produtos` → Busca todos os produtos.\
- `GET /produtos/1` → Busca o produto com `id=1`.\
- `POST /produtos` → Cria um novo produto.\
- `PUT /produtos/1` → Atualiza os dados do produto `1`.\
- `DELETE /produtos/1` → Remove o produto `1`.

------------------------------------------------------------------------

## 3. Quando utilizamos?

-   Quando precisamos **comunicar o Front-End com dados externos** (um
    servidor, banco de dados ou API pública).
-   Exemplo: mostrar lista de produtos em um e-commerce.

------------------------------------------------------------------------

## 4. Exemplo prático com `fetch` e funções `async`

``` ts
// Buscar lista de produtos
async function getProdutos() {
  const response = await fetch("http://localhost:3001/produtos");
  const data = await response.json();
  console.log(data);
}

// Criar novo produto
async function addProduto() {
  const novo = { nome: "Teclado", preco: 199.99 };

  const response = await fetch("http://localhost:3001/produtos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(novo)
  });

  const data = await response.json();
  console.log("Produto criado:", data);
}
```

### 📌 Tratando os dados

-   Sempre verificar se a resposta foi bem-sucedida:

``` ts
if (!response.ok) {
  throw new Error("Erro na requisição");
}
```

------------------------------------------------------------------------

## 5. Vantagens de usar API REST

-   Padronização → todos os métodos seguem a mesma lógica.\
-   Escalabilidade → fácil de manter e evoluir.\
-   Integração → permite comunicação com qualquer linguagem ou
    tecnologia.\
-   Simplicidade → URLs claras e verbos bem definidos.

------------------------------------------------------------------------

## 6. JSON Server -- Nossa API local

O **JSON Server** simula uma API real utilizando um arquivo `db.json`.

### Instalação

``` bash
npm install -g json-server
```

### Execução

``` bash
json-server --watch db.json --port 3001
```

### Exemplo de `db.json`

``` json
{
  "produtos": [
    { "id": 1, "nome": "Mouse", "preco": 90 },
    { "id": 2, "nome": "Teclado", "preco": 200 }
  ]
}
```

### Endpoints criados automaticamente:

-   `GET http://localhost:3001/produtos`\
-   `GET http://localhost:3001/produtos/1`\
-   `POST http://localhost:3001/produtos`\
-   `PUT http://localhost:3001/produtos/1`\
-   `DELETE http://localhost:3001/produtos/1`

------------------------------------------------------------------------

## 7. React: useState e useEffect no consumo de APIs

### `useState`

-   Usado para **armazenar o estado** (ex.: lista de produtos vinda da
    API).

``` ts
const [produtos, setProdutos] = useState<ProdutoType[]>([]);
```

### `useEffect`

-   Usado para **executar efeitos colaterais**, como buscar dados quando
    o componente é carregado.

``` ts
useEffect(() => {
  async function fetchData() {
    const response = await fetch("http://localhost:3001/produtos");
    const data = await response.json();
    setProdutos(data);
  }
  fetchData();
}, []);
```

------------------------------------------------------------------------

✅ Com isso, já temos a base para: 1. Entender APIs REST.\
2. Consumir dados com `fetch` e funções `async/await`.\
3. Utilizar `JSON Server` como backend local.\
4. Aplicar `useState` e `useEffect` no React para trabalhar com dados da
API.
