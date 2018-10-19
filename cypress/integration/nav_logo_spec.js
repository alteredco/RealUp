const urls = [
              'http://localhost:3000/home3', 
              'http://localhost:3000/thoughts1',          
              'http://localhost:3000/thoughts2', 
              'http://localhost:3000/thoughts3',
              'http://localhost:3000/feelings1', 
              'http://localhost:3000/feelings2',          
              'http://localhost:3000/feelings3', 
              'http://localhost:3000/results1', 
              'http://localhost:3000/results2',          
              'http://localhost:3000/results3'
            
            
            ]

describe('Logo', () => {
  urls.forEach((url) => {
    it(`Should display logo on ${url}`, () => {
      cy.visit(url)
      cy.get('#logo')
        .should('have.attr', 'src')
    })
    it(`Should move to home page from logo`, () => {
      cy.visit(url)
      cy.get('#logo').click('center')
      cy.url().should('eq', 'http://localhost:3000/home2')
    })

  })
})