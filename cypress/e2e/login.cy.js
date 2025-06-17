import loginPage from '../support/pages/loginPage';

describe('Login Test with POM', () => {
  it('Should login successfully with valid credentials', () => {
    // Intercept endpoint dashboard
    cy.intercept('GET', '**/dashboard/index').as('dashboard');

    loginPage.visit();
    loginPage.enterUsername('Admin');
    loginPage.enterPassword('admin123');
    loginPage.clickLogin();

    // Tunggu permintaan login
    cy.wait('@dashboard');

    // Assertion: cek apakah dashboard muncul
    cy.url().should('include', '/dashboard');
  });
});