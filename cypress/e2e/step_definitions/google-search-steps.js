import { Given, When } from '@badeball/cypress-cucumber-preprocessor';

// Basit Google testi
Given('Kullanici google sayfasina gider', () => {
  cy.visit("https://www.edu.goit.global/account/login");
    cy.wait(3000);
});


When('Kullanici aramaya {string} yazar', (kelime) => {
cy.get('#user_email').type(kelime)
  cy.wait(3000);
});


