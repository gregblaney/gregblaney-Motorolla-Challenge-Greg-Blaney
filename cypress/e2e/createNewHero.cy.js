describe("Confirm details of existing SuperHero", () => {
    it("Should locate an existing superhero, confirm name and go back to homepage", () => {
      cy.visit("http://localhost:4200/dashboard");
      cy.get('.h-12').should('be.visible');
      cy.contains('Heroes').click();
      cy.screenshot();
      cy.get('#hero-name').type("Ronald McDonald {enter}");
      cy.contains('Ronald McDonald').should('be.visible');
      cy.screenshot();
    });
  });
