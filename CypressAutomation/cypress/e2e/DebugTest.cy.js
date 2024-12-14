describe('Debugging',()=>{

    it('verify title positive', function() {   // this is one of the testcase
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.wait(3000)
        cy.title().should('eq','OrangeHRM').debug();
     })

    it('Debugging the application', function() {   // this is one of the testcase
            cy.visit('https://opensource-demo.orangehrmlive.com/')
            cy.title().should('eq','OrangeHRM');
            cy.get("[placeholder='username']").type('Admin')
            cy.wait(3000)
            cy.get("[placeholder='password']").type('admin123')
            cy.get("[type='submit']").click().debug();
            
            // Rest of your test
            cy.get('.oxd-topbar-header-title').should('contain', 'Dashboard')
     })
    })