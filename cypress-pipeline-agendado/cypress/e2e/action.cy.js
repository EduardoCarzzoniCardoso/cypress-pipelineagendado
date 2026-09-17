describe('Cypress Pipeline Agendado - Teste de formulário', () => {

  it('Deve preencher o e-mail e marcar uma checkbox no fluxo agendado', () => {

    cy.visit('https://example.cypress.io/commands/actions')

    const email = 'teste@exemplo.com'

    cy.get('.action-email')
      .clear()
      .type(email)
      .should('have.value', email)

    cy.get('.action-checkboxes [type="checkbox"]')
      .not('[disabled]')
      .first()
      .check()
      .should('be.checked')

  })

})