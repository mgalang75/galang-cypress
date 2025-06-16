import LoginPage from '../support/pages/LoginPage'
const loginPage = new LoginPage()

describe('Login Tests with POM', () => {
  beforeEach(() => {
    loginPage.visit()
  })

  it('should login successfully with valid credentials', () => {
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    loginPage.verifyLoginSuccess()
    loginPage.logout()
  })

  it('should show error with invalid credentials', () => {
    loginPage.enterUsername('invalidUser')
    loginPage.enterPassword('wrongPass')
    loginPage.clickLogin()
    loginPage.verifyLoginFail()
  })
})