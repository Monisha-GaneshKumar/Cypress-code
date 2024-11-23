describe('CustomSuite', function(){
    it('LoginTest', function() {   // this is one of the testcase
       
        cy.login('Admin','admin123')// valid login cred
        cy.get(".oxd-topbar-header-title").should('have.text','Dashboard');
        cy.wait(3000)

        
        cy.login('Admin','admin1234')// invalid login cred
        cy.get(".oxd-alert-content").should('have.text','Invalid credentials');

       // Note: here couldnt able to do data driven testing ...coz 2nd time the login fn is not gng to commands.js file

        //unfortunately this URL is not working
        // cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F");
     
     })

     it('Add customer', function() {   // this is one of the testcase
        //login script
        cy.login('Admin','admin123')

        //adding customer
     })

     it('Edit customer', function() {   // this is one of the testcase
        //login
        cy.login('Admin','admin123')

        //editing customer
     })
})