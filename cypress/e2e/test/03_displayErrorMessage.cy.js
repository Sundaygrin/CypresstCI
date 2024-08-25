describe('Invalid Login Details', () => {
    it('Load the URL', () => {
      cy.visit("https://enum.africa/login")
      
      
      cy.get('#talentLogInEmail').type("Admin@gmail.com")
      cy.get('#TalentLoginPassword').type("Sunday@222")
      
      cy.get('#login-button').click()

      cy.get('.tw-mb-5').should("be.visible", "Invalid User Credentials")

    })
  
    
  })


