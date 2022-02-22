import { getSupportedInputTypes } from '@angular/cdk/platform';
import { TodosService } from '@my-org/lib1';
import { getGreeting } from '../support/app.po';

describe('app1', () => {
  const types = getSupportedInputTypes();

  beforeEach(() => {
    cy.intercept(TodosService.url);
    cy.visit('/');
  });

  it('should display welcome message', () => {
    console.log('@angular/cdk support input types:', types);

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome app1');
  });
});
