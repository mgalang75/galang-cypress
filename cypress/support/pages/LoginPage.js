class LoginPage {
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  }

  getUsernameField() {
    return cy.xpath('//input[@name="username"]');
  }

  getPasswordField() {
    return cy.xpath('//input[@name="password"]');
  }

  getLoginButton() {
    return cy.xpath('//button[@type="submit"]');
  }

  enterUsername(username) {
    this.getUsernameField().type(username);
  }

  enterPassword(password) {
    this.getPasswordField().type(password);
  }

  clickLogin() {
    this.getLoginButton().click();
  }
}

export default new LoginPage();