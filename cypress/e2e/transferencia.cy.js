describe("Transferencia", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.screenshot("Após carregar a página de login");

    cy.fixture("credenciais").then((credenciais) => {
      cy.get("#username").type(credenciais.valida.usuario);
      cy.get("#senha").type(credenciais.valida.senha);
    });
    cy.contains("button", "Entrar").click();
    
  });

  it("Deve transferir quando informo dados e valores válidos", () => {
    // act

    // assert
    cy.contains("h4", "Realizar Transferência").should("be.visible");
  });
});
