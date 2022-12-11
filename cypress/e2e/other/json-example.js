/// <reference types="cypress" />

describe("JSON Object", () => {
  it("JSON examples", () => {
    const exampleObject = { key: "Timmy", key2: "Mike", key3: "Robcio" };
    const exampleArray = ["Marta", "Pedro", "Sambor"];
    const exampleArrOfObjects = [
      { key: "Marta" },
      { key: "Piotr" },
      { key: "Sambor" },
    ];

    exampleArrOfObjects.forEach((data) => {
      cy.log(data.key);
    });
    cy.log();
    const users = {
      firstName: "Joe",
      lastName: "Ram",
      age: 33,
      students: [
        {
          firstName: "Timmy",
          lastName: "Southpark",
        },
        {
          firstName: "Karolina",
          lastName: "Koralowa",
        },
      ],
    };
    cy.log(exampleObject["key"]);
    cy.log(exampleObject["key2"]);
    cy.log(exampleObject.key3);

    cy.log(exampleArray[0]);
    cy.log(exampleArray[1]);
    cy.log(exampleArray[2]);
    exampleArray.forEach((data) => {
      cy.log(data);
    });

    cy.log(users.students[0].lastName);
  });
});
