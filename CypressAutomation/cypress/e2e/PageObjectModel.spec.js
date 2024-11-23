
import LoginPage from "../Integration/PageObjects/Login"
describe('Test Suite', function(){
    it('Valid login test', function() {   
        const login = new LoginPage()
        login.visit()
        login.fillUsername('Admin')
        login.fillPassword('admin123')
        login.submit()
        cy.get(".oxd-topbar-header-title").should('be.eq','Dashboard');
     })
})