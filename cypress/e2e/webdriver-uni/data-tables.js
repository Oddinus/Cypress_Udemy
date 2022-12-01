/// <reference types="Cypress" />
describe("Handling data via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });
  it("Calculate and assert the total age of all users", () => {
    let ages = [];
    cy.get("#thumbnail-1 td")
      .each(($el, i) => {
        ages[i] = $el.text();
      })
      .then(() => {
        const filteredAge = ages.filter(Number).map(Number); //ages array contains strings like 'John' and numbers in form of string like '94' not 94, so first we are filtering only for numbers excluding names and then convert these string numbers into 'real' number via map method using Number method inside. We receive array of numbers ready to calculate

        const ageSum = filteredAge.reduce((acc, cur) => acc + cur, 0); //reduce replace for loop, just sum all numbers in array of numbers by adding current number value of every iteration of loop (cur) to accumulator (acc). 0 is initial value of loop.
        ages = ageSum; // overwriting of initial ages array with final summed data
        cy.log(`Found total age: ${ages}`);
        expect(ages).to.eq(322);
        console.log(ages);
      });
  });

  // var userDetails = [];
  // let numb = 0;
  // cy.get('#thumbnail-1 td').each(($el, index, $list) => {
  //     userDetails[index] = $el.text();
  // }).then(() => {
  //     var i;
  //     for(i = 0; i < userDetails.length; i++) {
  //         if(Number(userDetails[i])) {
  //             numb += Number(userDetails[i])
  //         }
  //         //cy.log(userDetails[i])
  //     }
  //     cy.log("Found total age: " + numb)
  //     expect(numb).to.eq(322)

  it("Calculate and assert the age of a given user based on last name", () => {
    cy.get("td").contains("Woods").next().should("have.text", "80");
  });
});
// cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index, $list) => {
//   const text = $el.text();
//   if (text.includes("Woods")) {
//     cy.get("#thumbnail-1 tr td:nth-child(2)")
//       .eq(index)
//       .next()
//       .then(function (age) {
//         const userAge = age.text();
//         expect(userAge).to.equal("80");
//       });
//   }
// });
