class LoginPage {
  visit() {
    cy.clearCookies() // penting: hapus session agar tidak langsung ke dashboard
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.url().should('include', '/auth/login')
  }

  enterUsername(username) {
    cy.get('input[name="username"]', { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .type(username)
  }

  enterPassword(password) {
    cy.get('input[name="password"]', { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .type(password)
  }

  clickLogin() {
    cy.get('button[type="submit"]').click()
  }

  verifyLoginSuccess() {
    cy.url().should('include', '/dashboard')
  }

  verifyLoginFail() {
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials')
  }

  logout() {
    cy.get('.oxd-userdropdown-icon').click()
    cy.contains('Logout').click()
  }
}

export default LoginPage