describe('Confidentialities Panel', () => {
	it('should see confidentialities table with search bar', () => {
		cy.visit('/dashboard/confidentialities');
		
		cy.get('[data-testid="confidentialities-table"]');
		const search = 'secret';
		cy.get('[name="search"]')
			.type(search);
		
		cy.get('[data-testid="data-row"]').each($e => {
			cy.wrap($e)
				.find('td')
				.eq(1)
				.invoke('text')
				.should('match', new RegExp(search, 'i'));
		});
	});
});
