describe('template spec', () => {
  it('Load the URL', () => {
    cy.visit("https://enum.africa/login")

    cy.get('#talentLogInEmail').type("9a54dbd64f@mailmaxy.one")
      cy.get('#TalentLoginPassword').type("Sunday@222")

      cy.get('#login-button').click()
    
  })
})