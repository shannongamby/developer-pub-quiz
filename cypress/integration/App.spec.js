// Cypress Feature testing for the App

context('App', () => {
  beforeEach(() => {
    cy.visit('https://developer-pub-quiz.herokuapp.com/')
  })

  it('Opens and closes the map component', () => {
    cy.contains('PUBS NEAR ME')
      .click()

      cy.contains("map").should('be.visible')

      cy.contains('PUBS NEAR ME')
        .click()

        cy.contains("map").should('not.be.visible')
  })

  it('Starts the quiz for Player 1', () => {
    cy.contains('PLAY FOR PINTS').click()

    cy.contains('PLAYER ONE').should('be.visible')
  })

  it('Moves onto the next question', () => {
    cy.contains('PLAY FOR PINTS').click()

    cy.contains('A Fly').click()

    cy.get('button[id=answer]').should('be.visible')
  })

  it('Moves to switch player page', () => {
    cy.contains('PLAY FOR PINTS').click()

    cy.contains('A Fly').click()

    cy.get('button[id=answer]').first().click()
    cy.get('button[id=answer]').first().click()
    cy.get('button[id=answer]').first().click()
    cy.get('button[id=answer]').first().click()

    cy.contains('SWITCH PLAYER').should('be.visible')
  })


  it('Switches to Player 2', () => {
    cy.contains('PLAY FOR PINTS').click()

    cy.contains('A Fly').click()

    cy.get('button[id=answer]').first().click()
    cy.get('button[id=answer]').first().click()
    cy.get('button[id=answer]').first().click()
    cy.get('button[id=answer]').first().click()

    cy.contains('SWITCH PLAYER').click()

    cy.contains('PLAYER TWO').should('be.visible')
  })

  it('Finishes the game', () => {
    cy.contains('PLAY FOR PINTS').click()

    cy.contains('A Fly').click()

    cy.get('button[id=answer]').first().click()
    cy.get('button[id=answer]').first().click()
    cy.get('button[id=answer]').first().click()
    cy.get('button[id=answer]').first().click()

    cy.contains('SWITCH PLAYER').click()

    cy.get('div[class=App]')
      .find('div[id=quiz_two]').contains('A Moth').click()
    cy.get('div[class=App]')
      .find('div[id=quiz_two]').first().click()
    cy.get('div[class=App]')
      .find('div[id=quiz_two]').first().click()
    cy.get('div[class=App]')
      .find('div[id=quiz_two]').first().click()
    cy.get('div[class=App]')
      .find('div[id=quiz_two]').first().click()

    cy.contains('Play Again').should('be.visible')
  })

  it('Map works at the end of the game', () => {
    cy.contains('PLAY FOR PINTS').click()

    cy.contains('A Fly').click()

    cy.get('button[id=answer]').first().click()
    cy.get('button[id=answer]').first().click()
    cy.get('button[id=answer]').first().click()
    cy.get('button[id=answer]').first().click()

    cy.contains('SWITCH PLAYER').click()

    cy.get('div[class=App]')
      .find('div[id=quiz_two]').contains('A Moth').click()
    cy.get('div[class=App]')
      .find('div[id=quiz_two]').first().click()
    cy.get('div[class=App]')
      .find('div[id=quiz_two]').first().click()
    cy.get('div[class=App]')
      .find('div[id=quiz_two]').first().click()
    cy.get('div[class=App]')
      .find('div[id=quiz_two]').first().click()

    cy.contains('PUBS NEAR ME')
        .click()

    cy.contains("map").should('be.visible')
  })
})
