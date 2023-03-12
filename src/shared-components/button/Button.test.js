import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
    afterEach(() => {
        jest.clearAllMocks();
      });

    test('should renders with default props', () => {
        render(<Button />)
        expect(screen.getByTestId('button')).toBeInTheDocument()
    })
    
    test('onClick callback should ba called when button is clicked', () => {
        const onClick = jest.fn()
        render(<Button onClick={onClick} testId='testBtn' />)

        const button = screen.getByTestId('testBtn');

        fireEvent.click(button);

        expect(screen.getByTestId('testBtn')).toBeInTheDocument()
        expect(onClick).toHaveBeenCalled()
    })
})