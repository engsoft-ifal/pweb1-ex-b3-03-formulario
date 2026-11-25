/**
 * Correção automática — Avaliativo B3-03: Cadastro com validação
 *
 * O HTML é fixo; o aluno edita js/script.js. Verifica o COMPORTAMENTO:
 * validar o formulário no evento "submit" (preventDefault + .value/.checked)
 * e escrever a mensagem certa em #aviso.
 *
 * Uso:  node avaliar.mjs [pastaDoAluno]
 */

import path from "node:path";
import { avaliar, exigir } from "./lib/avaliador.js";

const args = process.argv.slice(2);
const formato = args.includes("--json") ? "json" : "texto";
const pastaAluno = path.resolve(args.find((a) => !a.startsWith("--")) ?? ".");

// Lê o texto atual do #aviso (sempre em minúsculas, para comparar sem susto).
const lerAviso = async (pagina) =>
  ((await pagina.locator("#aviso").textContent()) ?? "").toLowerCase();

const { nota } = await avaliar({
  titulo: "Avaliativo B3-03 — Cadastro com validação (JavaScript)",
  pastaAluno,
  formato,
  verificacoes: ({ pagina, errosDeConsole }) => [
    {
      // Enviar vazio precisa avisar sobre o nome — e, como a mensagem
      // continua na tela, prova que o preventDefault segurou o recarregamento.
      nome: "Enviar vazio avisa sobre o nome (e não recarrega a página)",
      pontos: 25,
      executar: async () => {
        await pagina.fill("#nome", "");
        await pagina.fill("#senha", "");
        await pagina.uncheck("#aceito");
        await pagina.click("#enviar");
        const txt = await lerAviso(pagina);
        exigir(
          txt.includes("nome"),
          'ao enviar vazio, escreva em #aviso uma mensagem sobre o nome (e use evento.preventDefault() para a página não recarregar)'
        );
      },
    },
    {
      nome: "Senha com menos de 6 caracteres avisa sobre a senha",
      pontos: 20,
      executar: async () => {
        await pagina.fill("#nome", "Ana");
        await pagina.fill("#senha", "123");
        await pagina.uncheck("#aceito");
        await pagina.click("#enviar");
        const txt = await lerAviso(pagina);
        exigir(txt.includes("senha"), 'com senha curta, avise sobre a senha (mínimo 6 caracteres)');
      },
    },
    {
      nome: "Sem marcar os termos, avisa sobre os termos",
      pontos: 20,
      executar: async () => {
        await pagina.fill("#nome", "Ana");
        await pagina.fill("#senha", "123456");
        await pagina.uncheck("#aceito");
        await pagina.click("#enviar");
        const txt = await lerAviso(pagina);
        exigir(txt.includes("termos"), 'se #aceito não estiver marcado, avise que é preciso aceitar os termos (use aceito.checked)');
      },
    },
    {
      nome: "Com tudo válido, mostra sucesso com o nome digitado",
      pontos: 25,
      executar: async () => {
        await pagina.fill("#nome", "Ana");
        await pagina.fill("#senha", "123456");
        await pagina.check("#aceito");
        await pagina.click("#enviar");
        const txt = await lerAviso(pagina);
        exigir(
          txt.includes("ana"),
          'com nome, senha (6+) e termos marcados, mostre uma mensagem de sucesso que inclua o nome digitado (ex.: "Cadastro realizado, Ana!")'
        );
      },
    },
    {
      nome: "O JavaScript roda sem erros",
      pontos: 10,
      executar: async () => exigir(errosDeConsole.length === 0, `erro de JavaScript: ${errosDeConsole[0]}`),
    },
  ],
});

process.exit(formato === "json" || nota === 100 ? 0 : 1);
