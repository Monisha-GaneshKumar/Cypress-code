describe('Alerts',()=>{

    it('Simple Alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window:alert',(t)=>{ // t is the alert
            expect(t).to.contains('I am a JS Alert')
        })  //to trigger the alert event
        //this is how we have to write for alert
        //alert window is automatically closed by cypress using OK btn   

    })

    it('confirm Alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get("button[onclick='jsConfirm()']").click()
 
        cy.on('window:confirm',(t)=>{ // t is the alert
            expect(t).to.contains('I am a JS Confirm')
        })  //to trigger the alert event
        //this is how we have to write for confirm alert
        //alert window is automatically closed by cypress using OK btn   

    })

    it('confirm Alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get("button[onclick='jsConfirm()']").click()
 
        cy.on('window:confirm',(t)=>{ // t is the alert
            expect(t).to.contains('I am a JS Confirm')
        })  //to trigger the alert event

        cy.on('window:confirm',()=> false); //this will click cancel btn
        //this is how we have to write for confirm alert
        //alert window is closed by cypress using CANCEL btn   
    })

    it('prompt Alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
 
        //we have to get control on the prompt window before clicking the btn
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('Hi')
        })
        //this is how we have to write for prompt alert
        cy.get("button[onclick='jsPrompt()']").click()
        cy.get("#result").should('have.text','You entered: Hi')
  

    })

})