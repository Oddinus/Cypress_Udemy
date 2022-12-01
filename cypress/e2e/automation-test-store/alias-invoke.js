/// <reference types="cypress" />

describe("Alias & Invoke", () => {
  it("Validate a specific hair care product", () => {
    cy.visit("https://automationteststore.com");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");
    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });

  it("count number of items", () => {
    cy.visit("https://automationteststore.com");
    cy.get(".thumbnail").should("have.length", 16);
    cy.get(".productcart").should("have.attr", "title", "Add to Cart");
  });

  it.only("Calculate total of normal and sale products", () => {
    cy.visit("https://automationteststore.com");
    cy.get(".thumbnail").as("productThumbnail");

    cy.get("@productThumbnail")
      .find(".oneprice")
      .invoke("text")
      .as("fullItemPrice");
    cy.get("@productThumbnail")
      .find(".pricenew")
      .invoke("text")
      .as("saleItemPrice");

    let totalAmount = 0;

    cy.get("@fullItemPrice").then(($linkText) => {
      let fullPriceTotal = 0;
      const itemPrice = $linkText.split("$");
      let i;
      for (i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]);
        fullPriceTotal += +itemPrice[i];
      }
      // totalAmount += fullPriceTotal;
      totalAmount += fullPriceTotal;
    });

    cy.get("@saleItemPrice")
      .then(($linkText) => {
        let salePriceTotal = 0;
        const itemPrice = $linkText.split("$");
        let i;
        for (i = 0; i < itemPrice.length; i++) {
          cy.log(itemPrice[i]);
          salePriceTotal += +itemPrice[i];
        }
        totalAmount += salePriceTotal;
      })
      .then(() => {
        cy.log("Total price is:" + totalAmount);
        expect(totalAmount).to.equal(625.6);
      });
  });
});

// describe("Alias and Invoke", () => {
//   it("Validate a specific hair care product", () => {
//     cy.visit("https://automationteststore.com/");
//     cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

//     cy.get(".fixed_wrapper .prdocutname").eq(0).invoke("text").as("productThumbnail");
//     cy.get("@productThumbnail").its("length").should("be.gt", 5);
//     cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
//   });
//   it("Validate product thumbnail", () => {
//     cy.visit("https://automationteststore.com/");
//     cy.get('.thumbnail').as('productThumbnail')
//     cy.get('@productThumbnail').should('have.length', 16)
//     cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
//   });
//   it.only("Calculate total of normal and sale products", () => {
//     cy.visit("https://automationteststore.com/");
//     cy.get('.thumbnail').as('productThumbnail')
//     // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
//     //     cy.log($el.text());
//     // });
//     cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
//     cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

//     var itemsTotal = 0;
//     cy.get('@itemPrice').then($linkText => {
//         var itemsPriceTotal = 0;
//         var itemPrice = $linkText.split('$');
//         var i;
//         for(i = 0; i < itemPrice.length; i++) {
//             cy.log(itemPrice[i])
//             itemsPriceTotal += Number(itemPrice[i])
//         }
//         itemsTotal += itemsPriceTotal;
//         cy.log("Non sale price items total: " + itemsPriceTotal)
//     })

//     cy.get('@saleItemPrice').then($linkText => {
//         var saleItemsPrice = 0;
//         var saleItemPrice = $linkText.split('$');
//         var i;
//         for(i = 0; i < saleItemPrice.length; i++) {
//             cy.log(saleItemPrice[i])
//             saleItemsPrice += Number(saleItemPrice[i])
//         }
//         itemsTotal += saleItemsPrice;
//         cy.log("Sale price items total: " + saleItemsPrice)
//     })
//     .then(() => {
//         cy.log("The total price of all products: " + itemsTotal)
//         expect(itemsTotal).to.equal(572.45)
//     })
//   });
// });
