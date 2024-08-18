/// <reference types="cypress" />
import UserForm from './UserForm'

import { mount } from 'cypress/react'

describe('UserForm Component', () => {
  beforeEach(() => {
    mount(<UserForm />);
  });

  it('should show an error if passwords do not match', () => {
    cy.get('input[name="name"]').type('Tom')
    cy.get('input[name="password"]').type('123')
    cy.get('input[name="email"]').type('tom@emal.com')
    cy.get('input[name="confirm-password"]').type('1234')

    cy.get('button[type="submit"]').click();

    cy.get('p').should('contain', 'Passwords do not match!');
  })
})