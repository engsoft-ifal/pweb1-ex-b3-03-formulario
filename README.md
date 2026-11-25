# Avaliativo B3-03 — Cadastro com validação (JavaScript)

**Vale 100 pontos** · Correção automática a cada envio (`push`).

O **HTML já está pronto** (um formulário com nome, senha e uma caixa "aceito os termos").
Edite **apenas `js/script.js`** para **validar o envio** com JavaScript — praticando o evento
**`submit`**, o **`preventDefault`**, e a leitura dos controles com **`.value`** e **`.checked`**.

> 📖 Material de apoio: **Unidade 3 → "Formulários e controles na prática"** e a seção
> **3.8 Validar formulários com JavaScript**.

## Requisitos (edite `js/script.js`)

Ao clicar em **Cadastrar**, escreva a mensagem certa em `#aviso` (sem recarregar a página):

- [ ] Enviar **vazio** → avisa sobre o **nome** e **não recarrega** a página (`preventDefault`) **(25)**
- [ ] **Senha** com menos de 6 caracteres → avisa sobre a **senha** **(20)**
- [ ] **Termos** não marcados → avisa que é preciso **aceitar os termos** (`aceito.checked`) **(20)**
- [ ] Tudo válido → mensagem de **sucesso com o nome** (ex.: "Cadastro realizado, Ana!") **(25)**
- [ ] O JavaScript roda **sem erros** **(10)**

> Dica: comece com
> `form.addEventListener("submit", (evento) => { evento.preventDefault(); ... })`
> e teste cada regra com `if / else if`. Leia o texto com `nome.value`, o tamanho com
> `senha.value.length` e a caixa com `aceito.checked`.

## ⚠️ Como entregar

A entrega é simples: **edite, salve (commit) e dê push** no seu repositório. Tudo pelo
navegador, **sem terminal**:

1. No seu repositório, tecle **`.`** para abrir o **VS Code online** (github.dev).
2. Edite **apenas `js/script.js`**.
3. Abra o painel de **controle de versão** (ícone à esquerda) e faça **Commit** → **Push**
   (ou *Commit & Push*).

A cada push, a **correção automática** roda sozinha na aba **Actions** (workflow
**"Corretor automatico"**) e mostra o seu **feedback de 0 a 100** — repita quantas vezes
quiser para melhorar.

> 📌 Vale a **melhor versão enviada até o prazo** (veja a data no **Google Classroom**).
> O professor **clona o seu repositório e corrige** ao final — então o que importa é o
> `js/script.js` da sua última entrega estar funcionando (feedback **100/100** no Actions).
>
> ✅ **Não esqueça:** cole o **link do seu repositório** (ex.:
> `https://github.com/SEU-USUARIO/pweb1-ex-b3-03-formulario`) na **planilha de entregas**
> do Google Classroom. É por ela que o professor coleta e corrige.
