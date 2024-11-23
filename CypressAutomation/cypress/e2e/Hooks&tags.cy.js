
//HOOKS:
//before: will get executed once before all it blocks
//after: will get executed once after all it blocks
//beforeeach: executed before each it block
//aftereach: executed after each it block

//Tags:
//it.skip: skips only that particular it block
//it.only: runs only that particular it block


describe('MyTestSuite', ()=>{

before(() =>{
    cy.log("This for launch app")
})

after(()=>{
    cy.log("This is for closing app")
})

beforeEach(()=>{
    cy.log("this is for login")
})

afterEach(()=>{
    cy.log("Logout")
})

    it('search', function() {   // this is one of the testcase
        //cy.visit("https://opensource-demo.orangehrmlive.com/");
        
     })

     it('advance search', function() {   // this is one of the testcase
        //cy.visit("https://opensource-demo.orangehrmlive.com/");
       
     })

     it('listing products', function() {   // this is one of the testcase
        //cy.visit("https://opensource-demo.orangehrmlive.com/");
       
     })

})