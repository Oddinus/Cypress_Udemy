class AutoStore_HairCare_Po {
  addHairCareProductsToBasket() {
    data.productName.forEach((el) => {
      cy.addProductToBasket(el).then(() => {
        //debugger
      });
    });
    cy.get(".dropdown-toggle > .fa").click().debug();
  }
}
export default AutoStore_HairCare_Po;
