
# 🧪 Exercícios – React Hook Form (`useForm`) + Fetch + JSON Server (Vite + React + TS)

> Objetivo: praticar **Verbos HTTP** (GET/POST/PUT/DELETE) com **API RESTful**, usando **fetch assíncrono**,
**React Hook Form** (`useForm`), **useState** e **useEffect** para gerenciar estado, ciclo de vida e UX (loading/erro).

---

## 📦 Preparação do ambiente (checklist rápido)

1. **JSON Server** rodando em `http://localhost:3001`:
   ```bash
   json-server --watch db.json --port 3001
   ```
   `db.json` (exemplo mínimo):
   ```json
   {
     "produtos": [
       { "id": 1, "nome": "Mouse", "preco": 90 },
       { "id": 2, "nome": "Teclado", "preco": 200 }
     ]
   }
   ```

2. Projeto **Vite + React + TypeScript** funcionando (npm run dev).

3. Tipo base:
   ```ts
   // src/types/produtoType.ts
   export type ProdutoType = {
     id?: number;
     nome: string;
     preco: number;
   };
   ```

4. Instalar o RHF:
   ```bash
   npm i react-hook-form
   # (opcional) validação por schema:
   npm i zod @hookform/resolvers
   ```

> Dica de versionamento: **1 commit por passo**. Mensagens curtas: `feat(list): busca e renderiza produtos`, `feat(form): validação nome/preço`, etc.

---

## 🧩 Exercício 1 — Listagem (GET) com loading/erro

**Objetivo:** Exibir a lista de produtos da API, com feedback de **carregando** e **erro**.

**Passos:**  
1. Crie a página `src/pages/ProdutosList.tsx`.
2. Estados:
   - `const [produtos, setProdutos] = useState<ProdutoType[]>([])`
   - `const [loading, setLoading] = useState(false)`
   - `const [error, setError] = useState<string | null>(null)`
3. No `useEffect`, faça o **GET**:
   - `setLoading(true)` → `fetch("http://localhost:3001/produtos")` → `response.json()`
   - `setProdutos(data)` e `setError(null)` se sucesso
   - `setError("Mensagem amigável")` no `catch`
   - finalize com `setLoading(false)`
4. Renderize:
   - Se `loading`, mostre “Carregando…”
   - Se `error`, mostre a mensagem
   - Caso ok, renderize uma `<table>` com `id`, `nome`, `preco` (duas casas decimais).

**Critérios de aceitação:**
- [ ] Exibe loading enquanto busca
- [ ] Exibe erro amigável se falhar
- [ ] Mostra a lista ordenada por `id` (ascendente)

---

## 🧩 Exercício 2 — Formulário de criação (POST) com `useForm`

**Objetivo:** Criar um produto via **POST** usando **React Hook Form** e validação simples.

**Passos:**
1. Página `src/pages/ProdutoCreate.tsx`.
2. `useForm<ProdutoType>({ defaultValues: { nome: "", preco: 0 }, mode: "onChange" })`
3. Campos:
   - `nome`: `required: "Informe o nome"`, `minLength: 2`
   - `preco`: `type="number"`, `step="0.01"`, regra `valueAsNumber: true`, `min: 0`
4. No `onSubmit` (sempre `async`):
   - `fetch("http://localhost:3001/produtos", { method: "POST", headers: { "Content-Type":"application/json" }, body: JSON.stringify(values) })`
   - Checar `response.ok`, ler JSON, dar feedback (alert ou toast), e **reset** do formulário
5. Desabilite o botão “Salvar” quando `!formState.isValid` ou `formState.isSubmitting`.

**Critérios de aceitação:**
- [ ] Validação no cliente (mensagens ao lado do campo)
- [ ] Botão desabilitado quando inválido ou enviando
- [ ] POST cria o registro e limpa o formulário

---

## 🧩 Exercício 3 — Edição (GET + reset + PUT)

**Objetivo:** Carregar um produto por `id`, preencher o form (`reset`) e salvar alterações com **PUT**.

**Passos:**
1. Página `src/pages/ProdutoEdit.tsx` com rota `/produtos/:id` (use `useParams`).
2. No `useEffect`, faça **GET** por `id`, trate erro e chame `reset(data)`.
3. No `onSubmit`, faça **PUT** em `http://localhost:3001/produtos/:id` com `values`.
4. Exiba feedback de sucesso/erro e redirecione para `/produtos`.

**Critérios de aceitação:**
- [ ] Carrega dados existentes e popula o form automaticamente
- [ ] Validações permanecem ativas
- [ ] PUT atualiza e retorna à listagem

---

## 🧩 Exercício 4 — Remoção (DELETE) com confirmação

**Objetivo:** Remover um item a partir da listagem, com confirmação.

**Passos:**
1. Na tabela do Exercício 1, adicione um botão “Excluir” por linha.
2. Ao clicar:
   - Mostre `confirm("Tem certeza?")`
   - Se sim, faça **DELETE** em `http://localhost:3001/produtos/:id`
   - Recarregue a lista (ou remova da state local)
3. Trate erros e informe ao usuário.

**Critérios de aceitação:**
- [ ] Pede confirmação antes de apagar
- [ ] Atualiza listagem após sucesso
- [ ] Mensagem amigável de erro (sem travar a UI)

---

## 🧩 Exercício 5 — UX de formulário (estado e acessibilidade)

**Objetivo:** Melhorar a experiência do usuário com dicas de acessibilidade e estados visuais.

**Passos:**
1. Adicione `aria-invalid={!!errors.nome}` e `aria-describedby` para mensagens de erro.
2. Use `aria-live="polite"` em uma `<div>` que anuncia erros/feedbacks.
3. Mostre um pequeno `helperText` com o formato esperado do `preco`.
4. Exiba um rótulo de **dirty** (ex.: “Você tem alterações não salvas”) quando `Object.keys(dirtyFields).length > 0`.

**Critérios de aceitação:**
- [ ] Campos com `aria-*` corretos para erro
- [ ] Área com `aria-live` anuncia validação/feedback
- [ ] Indicação visual de alterações não salvas

---

## 🧩 Exercício 6 — Abstração de requisições (service) + `try/catch` padronizado

**Objetivo:** Centralizar chamadas em um **serviço** e padronizar tratamento de erro.

**Passos:**
1. Crie `src/services/produtosService.ts` com funções:  
   - `list()`, `getById(id)`, `create(payload)`, `update(id, payload)`, `remove(id)`
2. Cada função deve:
   - usar `fetch` com `await`
   - checar `response.ok`
   - lançar erro com mensagem clara quando falhar
3. Reutilize o service em todas as páginas/fluxos.

**Critérios de aceitação:**
- [ ] Nenhum `fetch` “solto” nos componentes (apenas via service)
- [ ] Tratamento de erro consistente em todos os fluxos
- [ ] Código mais limpo e fácil de testar

---

## 🧩 Exercício 7 — Validação com Zod (opcional, recomendado)

**Objetivo:** Centralizar regras num schema e integrar ao RHF com `zodResolver`.

**Passos:**
1. Schema:
   ```ts
   import { z } from "zod";
   export const produtoSchema = z.object({
     id: z.number().optional(),
     nome: z.string().min(2, "Mínimo 2 caracteres"),
     preco: z.coerce.number().min(0, "Não pode ser negativo"),
   });
   export type ProdutoSchema = z.infer<typeof produtoSchema>;
   ```
2. No form:
   ```ts
   import { zodResolver } from "@hookform/resolvers/zod";
   const form = useForm<ProdutoSchema>({
     resolver: zodResolver(produtoSchema),
     mode: "onChange",
   });
   ```

**Critérios de aceitação:**
- [ ] Validações migradas para o schema
- [ ] Mensagens exibidas a partir do Zod
- [ ] Regras consistentes entre “create” e “edit”

---

## 🧩 Exercício 8 — Field Array (variações/opções) (avançado)

**Objetivo:** Usar `useFieldArray` para variantes (ex.: cores/tamanhos).

**Passos:**
1. Adicione ao tipo:
   ```ts
   type Variante = { nome: string };
   export type ProdutoAvancado = ProdutoType & { variantes: Variante[] };
   ```
2. No form, inicie `defaultValues: { nome: "", preco: 0, variantes: [{ nome: "" }] }`
3. Use `useFieldArray({ control, name: "variantes" })` para **adicionar/remover** linhas.
4. Persistir no POST/PUT.

**Critérios de aceitação:**
- [ ] Add/Remove de variantes dinâmico
- [ ] Validação por item (nome obrigatório)
- [ ] Persistência correta em JSON Server

---

## 🧩 Exercício 9 — Otimização de UX: “Salvar e continuar” + reset parcial

**Objetivo:** Após salvar, continuar editando o mesmo registro sem sair da página.

**Passos:**
1. Após POST, redirecione para `/produtos/:id` retornado pela API.
2. No PUT, ao sucesso, faça `reset(dataAtualizada)` para limpar `dirtyFields` e manter o usuário na tela.
3. Exibir feedback “Salvo!” com `setTimeout` para desaparecer.

**Critérios de aceitação:**
- [ ] Pós-POST navega para a edição
- [ ] PUT faz reset parcial/total do form
- [ ] Feedback curto e não intrusivo

---

## 🧩 Exercício 10 — Testes (smoke + regra de validação) (opcional)

**Objetivo:** Criar testes mínimos com Jest + RTL.

**Passos:**
1. Smoke test do formulário: renderiza sem quebrar e mostra campos.
2. Validação: simule submit sem preencher e espere mensagem “Informe o nome”.
3. Mock da API: simule sucesso no POST e verifique se `reset` foi chamado.

**Critérios de aceitação:**
- [ ] Pelo menos 2 testes por form
- [ ] Um teste de validação cobrindo regras de nome/preço
- [ ] Mock de fetch no POST/PUT

---

## 📎 Entrega sugerida

- Estrutura de rotas:
  - `/produtos` (lista)
  - `/produtos/novo` (create)
  - `/produtos/:id` (edit)
- Commits frequentes (≥ 15) e descritivos
- README com instruções de execução e endpoints

---

## ✅ Checklist final (auto‑avaliação)

- [ ] GET com loading/erro
- [ ] POST com validação e reset
- [ ] PUT com reset dos dados carregados
- [ ] DELETE com confirmação e atualização da lista
- [ ] Form acessível (`label`, `aria-invalid`, `aria-live`)
- [ ] Service centralizando `fetch` + tratamento de erros
- [ ] (opcional) Zod + `zodResolver`
- [ ] (avançado) `useFieldArray`
- [ ] (opcional) Testes com Jest + RTL

---

## 💡 Dicas e armadilhas comuns

- **`valueAsNumber`** no `register` evita `Number(...)` manual e problemas de tipo.
- Sempre **checar `response.ok`** antes de `response.json()`.
- Use **`reset(data)`** para preencher o formulário em modo edição (melhor que `setValue` em cascata).
- Em listas grandes, **otimize re-renders** (keys estáveis, memoização quando necessário).
- Não esqueça `noValidate` no `<form>` se quiser evitar validação nativa do navegador.
- Evite misturar `controlled inputs` (via `useState`) com RHF sem necessidade. Prefira `register`.

Boa prática final: extraia a URL base da API para um lugar único (ex.: `import.meta.env.VITE_API_URL`).
