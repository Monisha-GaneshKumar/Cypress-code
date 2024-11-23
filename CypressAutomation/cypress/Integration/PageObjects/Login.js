class LoginPage //this is a page object class for Login
{
   visit()
   {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
   } 

   fillUsername(value){
    const field=cy.get('[placeholder=Username]')
    field.clear()
    field.type(value)
    return this
   }

   fillPassword(value){
    const field=cy.get('[placeholder=Password]')
    field.clear()
    field.type(value)
    return this
   }

   submit(){
    const button=cy.get('[type=submit]')
    button.clear()
   }
}
export default LoginPage
