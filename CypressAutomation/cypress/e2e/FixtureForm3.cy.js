describe('Fixture Form 3',()=>{
    //here we r capturing the fixture data from form2.json file
    before(() =>{
     cy.fixture('form3').then(function(data){
        //this.data is an internal variable ...created to use the data outside of the before block
        this.data= data
     })
 })

 it('Fixture form Test 3', function() {   // this is one of the testcase
     cy.visit("https://demo.wpeverest.com/user-registration/guest-registration-form/");
     cy.get("#first_name").type(this.data.fname)
     cy.get("#last_name").type(this.data.lname)
     cy.get("#user_email").type(this.data.email)
     cy.get("#user_pass").type(this.data.password)
     cy.get("#radio_1665627729_Female").check()
     cy.get("#privacy_policy_1665633140").check()
     cy.get("button[type='submit']").click()
     cy.get("#ur-submit-message-node").should('have.text',this.data.result)
  })
})