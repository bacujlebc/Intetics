import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
    afterEach(() => {
        jest.clearAllMocks();
      });

    test('should renders with default props', () => {
        render(<Button />)
        expect(screen.getByTestId('button')).toBeInTheDocument()
    })
})