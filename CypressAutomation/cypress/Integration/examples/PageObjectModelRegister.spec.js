

describe('Test Suite', function(){
    it('Valid Register test', function() {   
        const register = new RegisterPage()
        register.visit()
        register.fillFirstName('Monisha')
        register.fillLastName('Ganeshkumar')
        register.checkGender('Female')
        register.selectDepartment('Department of Engineering')
        register.fillUserName('Username')
        register.fillPassword('Moni@123')
        register.fillConfirmPassword('Moni123')
        register.fillEmail('Moni123@gmail.com')
        register.fillPhone('(639)8992992')
        register.submit()
     })
})