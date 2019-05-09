describe('Language Panel', () => {
	it('should see language table with the search bar', () => {
		cy.visit('/dashboard/languages');
		cy.get('[data-testid="language-table"]');
		
		const search = 'mal';
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
