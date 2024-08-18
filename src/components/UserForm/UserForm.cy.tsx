import UserForm from './UserForm'

describe('<UserForm />', () => {
  it('should show an error if passwords do not match', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<UserForm />)
    cy.get('input[name="name"]').type('Tom')
    cy.get('input[name="password"]').type('123')
    cy.get('input[name="email"]').type('tom@emal.com')
    cy.get('input[name="confirm-password"]').type('1234')

    cy.get('button[type="submit"]').click();

    cy.get('p').should('contain', 'Passwords do not match!');
  })
})