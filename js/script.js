// O HTML já está pronto. Edite apenas este arquivo.
//
// Pegue os elementos do formulário:
const form   = document.querySelector("#cadastro");
const nome   = document.querySelector("#nome");
const senha  = document.querySelector("#senha");
const aceito = document.querySelector("#aceito");
const aviso  = document.querySelector("#aviso");

// TODO 1: ouça o evento "submit" do formulário e, logo no início da função,
//         chame evento.preventDefault() para a página NÃO recarregar.
//
// TODO 2: validando (escreva a mensagem em aviso.textContent):
//         - se o nome estiver vazio  -> "Informe o seu nome."
//         - senão, se a senha tiver menos de 6 caracteres (senha.value.length < 6)
//                                    -> "A senha precisa de 6 caracteres."
//         - senão, se os termos NÃO estiverem marcados (aceito.checked === false)
//                                    -> "Você precisa aceitar os termos."
//         - senão (tudo certo)       -> "Cadastro realizado, <nome>!"  (com o nome digitado)

// escreva seu código aqui
