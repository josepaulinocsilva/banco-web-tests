# Banco Web Tests

Este projeto documenta a automação de testes em aplicações web com Cypress e JavaScript para alunos da Mentoria 2.0.

## Objetivo do projeto

O objetivo é mostrar aos alunos da Mentoria 2.0 como testar e automatizar uma aplicação web usando Cypress, com foco em:

- organização de código com Custom Commands;
- separação de dados de teste em fixtures;
- uso de variáveis para credenciais;
- execução de testes end-to-end;
- geração de relatórios com `cypress-mochawesome-reporter`.

## Componentes do projeto

- `package.json`
  - contém todas as dependências necessárias para rodar os testes.
  - scripts: `test`, `cy:headed`, `cy:open`.
- `cypress.config.js`
  - configura o `baseUrl` para `http://localhost:4000`.
  - habilita o repórter `cypress-mochawesome-reporter`.
  - desabilita vídeo (`video: false`).
- `cypress/e2e/`
  - contém os arquivos de teste, incluindo `login.cy.js` e `transferencia.cy.js`.
- `cypress/fixtures/`
  - guarda dados de teste reutilizáveis.
  - `credenciais.json` contém variáveis de login válidas e inválidas.
- `cypress/support/`
  - carrega globalmente os comandos customizados e o repórter.
- `cypress/support/commands/`
  - implementa Custom Commands para login, validação de toast, seleção em combobox e transferência.

## Pré-requisitos

Para executar os testes, os seguintes serviços devem estar em execução:

- API: `https://github.com/juliodelimas/banco-api`
- Aplicação web: `https://github.com/juliodelimas/banco-web`

A aplicação web deve estar disponível em `http://localhost:4000`.

## Instalação

1. Abra o terminal na pasta do projeto:

   ```bash
   cd "e:\Particular\Mentoria 2.0\projetos\banco-web-tests"
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

## Execução dos testes

- Executar em modo headless:

  ```bash
  npm test
  ```

- Executar em modo visível:

  ```bash
  npm run cy:headed
  ```

- Abrir o Cypress Test Runner:
  `bash
npm run cy:open
`

## Documentação dos testes

- `login.cy.js`
  - testa login com credenciais válidas e inválidas.
  - valida se o usuário consegue acessar a tela de transferência.
  - valida se mensagem de erro é exibida para login inválido.
- `transferencia.cy.js`
  - testa o fluxo de transferência entre contas.
  - utiliza comandos customizados para selecionar contas e preencher valores.

## Credenciais e variáveis

O arquivo `cypress/fixtures/credenciais.json` contém as variáveis de login usadas nos testes:

```json
{
  "valida": {
    "usuario": "julio.lima",
    "senha": "123456"
  },
  "invalida": {
    "usuario": "julio.lima",
    "senha": "654321"
  }
}
```

Isso permite separar os dados de teste do código e facilitar a manutenção.

## Custom Commands

Os comandos customizados são usados para reutilizar ações de forma legível e padronizada:

- `cy.fazerLoginComCredenciaisValidas()`
  - realiza login com as credenciais válidas da fixture.
- `cy.fazerLoginComCredenciaisInvalidas()`
  - realiza login com credenciais inválidas.
- `cy.verificarMensagemNoToast(mensagem)`
  - valida o conteúdo do toast exibido na tela.
- `cy.selecionarOpcaoNaCombobox(labelDoCampo, opcao)`
  - seleciona uma opção em combobox customizados.
- `cy.realizarTransferencia(contaOrigem, contaDestino, valor)`
  - executa o fluxo de transferência preenchendo origem, destino e valor.

## Relatórios

Os resultados dos testes são reportados pelo `cypress-mochawesome-reporter`.

Após a execução, o plugin gera relatórios em HTML que podem ser consultados para análise dos resultados.

## Observações finais

- Certifique-se de que a API e a aplicação web estejam em execução antes de rodar os testes.
- Caso altere o ambiente, atualize o `baseUrl` em `cypress.config.js`.
- Este projeto serve como exemplo didático para a Mentoria 2.0, mostrando boas práticas de automação com Cypress.

<!--

Criando o Arquivo README com IA Generativa

Objetivo:
Testando e Automatizando Testes em Aplicações Web
Crie um arquivo README.md para esse projeto de testes automatizados com Cypress e Javascript.

Contexto:
- Todas as dependências do projeto estão no package.json.
- Usei automação com Cypress, organizando código com Custom Commands.
- Usei o conceito de variáveis organizando dados de login no arquivo credenciais.json.
- Relatórios são gerados com Cypress-mochawesome-reporter.
- Para que os testes sejam executados a api (https://github.com/juliodelimas/banco-api) e a aplicação web (https://github.com/juliodelimas/banco-web), devem estar em execução.

Regras:
- Descreva o objetivo do projeto, que é mostrar aos alunos da Mentoria 2.0 como automatizar com Cypress.
- Descreva os componentes que compõem o projeto.
- De um guia para instalação e execução do projeto.
- Documente os testes, as variáveis das credenciais e os Custom Commands.

-->
