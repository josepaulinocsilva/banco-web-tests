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

  it("Deve transferir quando informo dados e valor validos", () => {
    cy.get('label[for="conta-origem"]').parent().as("campo-conta-origem");
    cy.get("@campo-conta-origem").click();
    cy.get("@campo-conta-origem").contains("João da Silva com saldo").click();

    cy.get('label[for="conta-destino"]').parent().as("campo-conta-destino");
    cy.get("@campo-conta-destino").click();
    cy.get("@campo-conta-destino").contains("Paulino com saldo").click();

    cy.get("#valor").click().type("37.35");

    cy.contains("button", "Transferir").click();

    cy.get(".toast").should("have.text", "Transferência realizada!");
  });
});
