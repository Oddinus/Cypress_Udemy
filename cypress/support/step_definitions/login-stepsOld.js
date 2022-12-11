import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor";

Given("I acces Webdriver Login Portal page", () => {
  cy.visit("https://webdriveruniversity.com/Login-Portal/index.html");
});
When("I enter a username {word}", (userName) => {
  cy.get("#text").type(userName);
});
And("I enter a password {word}", (password) => {
  cy.get("#password").type(password);
});
When("I click on the login button", () => {
  cy.get("#login-button").click();
});
Then(
  "I should be presented with following message validation succeeded",
  () => {}
);
