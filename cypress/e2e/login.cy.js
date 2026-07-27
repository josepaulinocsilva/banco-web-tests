describe("Login", () => {
  it("Login com dados válidos, deve permitir entrada no sistema", () => {
    // arrange
    cy.visit("http://localhost:4000");

    // act
    cy.get("#username").type("julio.lima");
    cy.get("#senha").type("123456");
    cy.contains("button", "Entrar").click();

    // assert
    cy.contains("h4", "Realizar Transferência").should("be.visible");
  });

  it("Login com dados inválidos, deve apresentar mensagem de erro entrada no sistema", () => {
    // arrange
    cy.visit("http://localhost:4000");

    // act
    cy.get("#username").type("julio.lima");
    cy.get("#senha").type("1234");
    //cy.get("#login-section > .btn").click(); pode ser desta forma ou a forma abaixo mais legível
    cy.contains("button", "Entrar").click();

    // assert
    //cy.get(".toast").should("be.visible");
    cy.get(".toast").should("have.text", "Erro no login. Tente novamente.");
  });
});
