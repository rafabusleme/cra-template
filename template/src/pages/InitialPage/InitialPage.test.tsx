import React from 'react';

import { render, screen } from '@testing-library/react';

import InitialPage from './InitialPage';

describe('InitialPage', () => {
  test('should display the content.', () => {
    render(<InitialPage />);

    expect(screen.getByText('mr-robot.svg')).toBeInTheDocument;
    expect(screen.getByText('Hello World!')).toBeInTheDocument;
  });
});
