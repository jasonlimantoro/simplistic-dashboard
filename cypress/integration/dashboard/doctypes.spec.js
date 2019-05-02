describe('Doctypes Panel', () => {
	it('should see doctypes panel with search bar', () => {
		cy.visit('/dashboard/doctypes');
		cy.get('[data-testid="doctypes-table"]');
		
		cy.get('[name="search"]')
			.type('asdf');
	});
});
