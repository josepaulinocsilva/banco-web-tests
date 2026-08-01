describe("Transferencia", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fazerLoginComCredenciaisValidas();
  });

  it("Deve transferir quando informo dados e valor validos", () => {
    // Act
    (cy.realizarTransferencia("João", "Paulino", "15.50"),
      // Assert
      cy.verificarMensagemNoToast("Transferência realizada!"));
  });

  it("Deve apresentar erro quando tentar transferir mais que 5 mil sem o token", () => {
    // Act
    (cy.realizarTransferencia("Paulino", "João", "6000"),
      // Assert
      cy.verificarMensagemNoToast(
        "Autenticação necessária para transferências acima de R$5.000,00.",
      ));
  });
});

//   cy.get(".toast").should("have.text", "Transferência realizada!");
