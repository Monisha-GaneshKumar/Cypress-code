class RegisterPage
{
    visit(){
        cy.visit("https://mytestingthoughts.com/Sample/home.html")
    }

    fillFirstName(value){
    const field=cy.get("[name ='first_name']")
    field.clear()
    field.type(value)
    return this
    }

    fillLastName(value){
        const field=cy.get("[name ='last_name']")
        field.clear()
        field.type(value)
        return this
    }

    checkGender(){
        const check=cy.get('#inlineRadioFemale')
        check.check()
        return this
    }

    selectDepartment(value){
        const select=cy.get("[name='department']")
        select.select(value)
        return this
    }

    fillUserName(value){
        const field=cy.get("[name = 'user_name']")
        field.clear()
        field.type(value)
        return this
    }

    fillPassword(value){
        const field=cy.get("[name = 'user_password']")
        field.clear()
        field.type(value)
        return this
    }

    fillConfirmPassword(value){
        const field=cy.get("[name = 'confirm_password']")
        field.clear()
        field.type(value)
        return this
    }

    fillEmail(value){
        const field=cy.get("[name = 'email']")
        field.clear()
        field.type(value)
        return this
    }

    fillPhone(value){
        const field=cy.get("[name = 'contact_no']")
        field.clear()
        field.type(value)
        return this
    }

    submit(){
        const button=cy.get("[type='submit']")
        button.click()
    }
}