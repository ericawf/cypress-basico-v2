import { faker } from '@faker-js/faker'

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    const firstName = faker.name.firstName(),
        lastName = faker.name.lastName(),
        email = faker.internet.email(),
        phone = faker.phone.number(),
        text = faker.lorem.lines()

    cy.get('#firstName').type(firstName)
    cy.get('#lastName').type(lastName)
    cy.get('#email').type(email)
    cy.get('#phone').type(phone)
    cy.get('#open-text-area').type(text, {delay: 0})
    cy.contains('button', 'Enviar').click()
})