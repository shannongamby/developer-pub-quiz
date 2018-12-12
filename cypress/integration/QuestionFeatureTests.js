describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true)
  })
})

describe('My First Test', function() {
  it('clicks yes button', function() {
    cy.visit('localhost:3000')
    cy.get('#yes_button').click()
    cy.contains("No, you numpty!")
  })
})
