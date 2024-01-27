import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Button from '.';
import React from 'react';

describe('Button component unit testing', () => {
    const mocking = {
        onSubmit: jest.fn()
    }

    test('Button render correctly', () => {
        const document = render(<Button label={'Button testing'} onClick={mocking.onSubmit}/>)
        expect(document).toMatchSnapshot()
    })

    test('Button should be able to click', async () => {
        render(<Button label={'Button testing'} onClick={mocking.onSubmit} />);
        const button = screen.getByText('Button testing');
        fireEvent.click(button);

        await waitFor(() => {
            expect(mocking.onSubmit).toHaveBeenCalledTimes(1);
        })
    })
})