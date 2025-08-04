import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pages/LoginPage';
Given('Kullanici urle gider', () => {
   LoginPage.urlGit();
});


When('Kullanici gecerli bir email girer', () => {
  LoginPage.emailGonder('user888@gmail.com');

});

When('Kullanici gecerli bir password girer', () => {
LoginPage.passwordGonder('1234567890');
});

When('Kullanici Login butonuna tiklar', () => {

  LoginPage.clickLoginButton();

});

Then('Kullanici basarili sekilde login oldugunu dogrular', () => {
 // dogrulama gerceklestırilecek

});

// URL'e git
Given('Kullanici {string} urline gider', (url) => {
    cy.visit(url);

});

// Email alanına veri gir
When('Kullanici email alanina {string} mailini girer', (email) => {
 LoginPage.emailGonder(email);
});

// Password alanına veri gir
When('Kullanici password alanina {string} sifresini girer', (password) => {
LoginPage.passwordGonder(password);

});
