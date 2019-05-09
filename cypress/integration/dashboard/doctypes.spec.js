describe('Doctypes Panel', () => {
	it('should see doctypes panel with search bar', () => {
		cy.visit('/dashboard/doctypes');
		cy.get('[data-testid="doctypes-table"]');
		
		const search = 'excel';
		cy.get('[name="search"]')
			.type(search);
		
		cy.get('[data-testid="data-row"]').each($e => {
			cy.wrap($e)
				.find('td')
				.eq(0)
				.invoke('text')
				.should('match', new RegExp(search, 'i'));
		});
	});
});
