describe('Language Panel', () => {
	it('should see language table with the search bar', () => {
		cy.visit('/dashboard/languages');
		cy.get('[data-testid="language-table"]');
		cy.get('[name="search"]').type('asdf');
	});
});
