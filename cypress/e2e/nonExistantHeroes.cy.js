describe("Search for a SuperHero", () => {
    it("Should search for a superhero which doesn't exist, confirm message and clear messages", () => {
      cy.visit("http://localhost:4200/dashboard");
      cy.get('.h-12').should('be.visible');
      cy.get('#search-box').type('Batman');
      cy.contains('p.text-sm.text-gray-500', 'HeroService: no heroes matching "Batman"')
      cy.screenshot();
      cy.get('.ml-auto').click();
      cy.contains('p.text-sm.text-gray-500', 'HeroService: no heroes matching "Batman"').should('not.exist')
      cy.screenshot();
    });
  });