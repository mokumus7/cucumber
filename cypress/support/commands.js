// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Google arama için özel komut
Cypress.Commands.add('googleSearch', (searchTerm) => {
  cy.visit('/');
  cy.get('textarea[name="q"], input[name="q"]', { timeout: 10000 })
    .should('be.visible')
    .clear()
    .type(searchTerm)
    .type('{enter}');
  
  cy.get('#search', { timeout: 15000 }).should('be.visible');
});

// Element görünür olana kadar bekle
Cypress.Commands.add('waitForElement', (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).should('be.visible');
});

// Text içeren elementi bul ve tıkla
Cypress.Commands.add('clickElementWithText', (selector, text) => {
  cy.get(selector).contains(text).click();
});

// Sayfanın tamamen yüklenmesini bekle
Cypress.Commands.add('waitForPageLoad', () => {
  cy.window().should('have.property', 'document');
  cy.document().should('have.property', 'readyState', 'complete');
});

// Cookie kabul etme için özel komut
Cypress.Commands.add('acceptCookies', () => {
  cy.get('body').then(($body) => {
    if ($body.find('#L2AGLb').length > 0) {
      cy.get('#L2AGLb').click();
    }
  });
});

// Arama sonuçlarında belirli bir metni kontrol et
Cypress.Commands.add('verifySearchResults', (expectedText) => {
  cy.get('#search a h3')
    .should('have.length.greaterThan', 0)
    .then(($links) => {
      const linkTexts = Array.from($links).map(link => link.textContent.toLowerCase());
      const hasExpectedText = linkTexts.some(text => 
        text.includes(expectedText.toLowerCase())
      );
      expect(hasExpectedText).to.be.true;
    });
});

// Ekran görüntüsü al (özel isimle)
Cypress.Commands.add('takeScreenshot', (name) => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  cy.screenshot(`${name}-${timestamp}`, { capture: 'fullPage' });
});

// Session storage temizle
Cypress.Commands.add('clearSessionStorage', () => {
  cy.window().then((win) => {
    win.sessionStorage.clear();
  });
});

// Tüm storage'ları temizle
Cypress.Commands.add('clearAllStorage', () => {
  cy.clearLocalStorage();
  cy.clearSessionStorage();
  cy.clearCookies();
});

// Element'in text içeriğini al
Cypress.Commands.add('getElementText', (selector) => {
  return cy.get(selector).invoke('text');
});

// Sayfa başlığını kontrol et
Cypress.Commands.add('verifyPageTitle', (expectedTitle) => {
  cy.title().should('contain', expectedTitle);
});

// URL'i kontrol et
Cypress.Commands.add('verifyUrl', (expectedUrl) => {
  cy.url().should('include', expectedUrl);
});
