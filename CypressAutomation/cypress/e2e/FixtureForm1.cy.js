describe('Fixture Form 1',()=>{

    //here we r capturing the fixture data from Example.json file
    before(() =>{
        cy.fixture('example').then(function(data){
           //this.data is an internal variable ...created to use the data outside of the before block
           this.data= data
        })
    })

    it('Fixture form Test 1', function() {   // this is one of the testcase
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("[placeholder='Username']").type(this.data.username)
        cy.get("[placeholder='Password']").type(this.data.password)
        cy.get("[type='submit']").click();
    
     })
})



// cy.visit("https://www.orangehrm.com/en/book-a-free-demo");
// cy.get("#Form_getForm_FullName").type('Monisha Ganesh');
// cy.get("#Form_getForm_Contact").type('654345672');
// cy.get("#Form_getForm_Email").type('Moni@gmail.com')
// cy.get("#Form_getForm_CompanyName").type('desicrew')
// cy.get("#Form_getForm_Country").select("India")
// cy.get("#Form_getForm_NoOfEmployees").select("11 - 50")
// //getting into iframe
// const iframe= cy.get("[title='reCAPTCHA']")
// iframe.get("[role='checkbox']").check();