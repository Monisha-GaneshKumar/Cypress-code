describe('Practical Testcase writing', () => {  // this ia a test suite
    it('Verify title of the page', function() {   // this is one of the testcase
       cy.visit("https://demo.wpeverest.com/user-registration/guest-registration-form/");
       cy.get('.zak-page-title').contains('Guest Registration Form');
    })

    it('Validation of email field', function() {   // this is one of the testcase
        cy.visit("https://demo.wpeverest.com/user-registration/guest-registration-form/");
        cy.get('#first_name').type('Monisha');
        cy.get('#last_name').type('Ganesh kumar');
        cy.get("button[type='submit']").click()
        cy.get('#user_email-error').should('contain','This field is required.')
        cy.get('#user_email').type('Moni')
        cy.get("button[type='submit']").click()
        cy.get('#user_email-error').should('contain','Please enter a valid email address.')
     })

     it('To validate the submit button functionality', function() {   // this is one of the testcase
        cy.visit("https://demo.wpeverest.com/user-registration/guest-registration-form/");
        cy.get('#first_name').type('Monisha');
        cy.get('#last_name').type('Ganesh kumar');
        cy.get('#user_email').type('Monisha123@gmail.com')
        cy.get("#user_pass").type('Moni@123$$')
        cy.get("#textarea_1665630078").type('QA, In Desicrew')
        cy.get("#radio_1665627931_Yes").check()
        cy.get("#select_1665628361").select('Town Hall').should('contain','Town Hall')
        cy.get("#privacy_policy_1665633140").check()
        cy.get("button[type='submit']").click()
        cy.get("#ur-submit-message-node").should('contain','User successfully registered.')
     })

  })