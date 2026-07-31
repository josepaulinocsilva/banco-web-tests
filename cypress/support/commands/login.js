Cypress.Commands.add("fazerLoginComCredenciaisValidas", () => {
  cy.fixture("credenciais").then((credenciais) => {
    cy.get("#username").type(credenciais.valida.usuario);
    cy.get("#senha").type(credenciais.valida.senha);
  });
  cy.contains("button", "Entrar").click();
});

Cypress.Commands.add("fazerLoginComCredenciaisInvalidas", () => {
  cy.fixture("credenciais").then((credenciais) => {
    cy.get("#username").type(credenciais.invalida.usuario);
    cy.get("#senha").type(credenciais.invalida.senha);
  });
  cy.contains("button", "Entrar").click();
});
