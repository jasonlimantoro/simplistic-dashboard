describe('Confidentialities Panel', () => {
	it('should see confidentialities table with search bar', () => {
		cy.visit('/dashboard/confidentialities');
		
		cy.get('[data-testid="confidentialities-table"]');
		cy.get('[name="search"]')
			.type('asdf');
	});
});
