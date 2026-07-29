describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.screenshot("Após carregar a página de login");
  });

  it("Login com dados válidos, deve permitir entrada no sistema", () => {
    // act
    cy.fixture("credenciais").then((credenciais) => {
      cy.get("#username").type(credenciais.valida.usuario);
      cy.get("#senha").type(credenciais.valida.senha);
    });

    cy.screenshot("Após carregar a página de login e seus dados");
    cy.contains("button", "Entrar").click();
    cy.screenshot("Após clicar no botão de entrar");

    // assert
    cy.contains("h4", "Realizar Transferência").should("be.visible");
  });

  it("Login com dados inválidos, deve apresentar mensagem de erro entrada no sistema", () => {
    // act
    cy.fixture("credenciais").then((credenciais) => {
      cy.get("#username").type(credenciais.invalida.usuario);
      cy.get("#senha").type(credenciais.invalida.senha);
    });

    //cy.get("#login-section > .btn").click(); pode ser desta forma ou a forma abaixo mais legível
    cy.contains("button", "Entrar").click();

    // assert
    //cy.get(".toast").should("be.visible");

    cy.get(".toast").should("have.text", "Erro no login. Tente novamente.");
  });
});
