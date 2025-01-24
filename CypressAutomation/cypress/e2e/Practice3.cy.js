describe('Practice3 Testcase', () => {  // this ia a test suite
    it('Login to the application', function() {   // this is one of the testcase
       cy.visit("https://ultimateqa.com/automation");
       cy.get("a[href='http://courses.ultimateqa.com/users/sign_in']").click();
       cy.get("[type='email']").type('Moni@gmail.com')
       cy.get("[type='password']").type('moni@123')
       cy.get("[type='submit']").click();
       cy.get("a.form__forgot-password").click()
       cy.get("[type='email']").type('Moni@gmail.com')
       cy.get("[type='submit']").click();
       cy.get("h2.password-reset__heading").should('be.eq','Help is on the way!')
    })

    it('Fill the text', function() {   // this is one of the testcase
        cy.visit("https://ultimateqa.com/filling-out-forms/");
        cy.get("#et_pb_contact_name_0").type("Moni");
        cy.get("#et_pb_contact_message_0").type('hi') 
        cy.get("button[name='et_builder_submit_button']").click();
     })
})