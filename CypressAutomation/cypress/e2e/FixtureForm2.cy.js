describe('Fixture Form 2',()=>{
       //here we r capturing the fixture data from form2.json file
       before(() =>{
        cy.fixture('form2').then(function(data){
           //this.data is an internal variable ...created to use the data outside of the before block
           this.data= data
        })
    })

    it('Fixture form Test 2', function() {   // this is one of the testcase
        cy.visit("https://demo.nopcommerce.com/");
        cy.get(".ico-register").click()
        cy.get("#gender-female").check()
        cy.get("#FirstName").type(this.data.fname)
        cy.get("#LastName").type(this.data.lname)
        cy.get("[name='DateOfBirthDay']").select(this.data.day)
        cy.get("[name='DateOfBirthMonth']").select(this.data.month)
        cy.get("[name='DateOfBirthYear']").select(this.data.year)
        cy.get("#Email").type(this.data.email)
        cy.get("#Company").type(this.data.company)
        cy.get("#Password").type(this.data.password)
        cy.get("#ConfirmPassword").type(this.data.confirmpassword)
        cy.get("#register-button").click()
        cy.get("div.result").should('be.eq',this.data.result)
     })
})

       