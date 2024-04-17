describe("Confirm details of existing SuperHero", () => {
    it("Should locate an existing superhero, confirm name and go back to homepage", () => {
      cy.visit("http://localhost:4200/dashboard");
      cy.get('.h-12').should('be.visible');
      cy.contains(' Bombasto ').click();
      cy.get('#hero-name').invoke('val').should('equal', 'Bombasto');
      cy.screenshot();
    });
  });