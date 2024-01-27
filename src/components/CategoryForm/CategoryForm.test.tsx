import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CategoryForm from '.';

describe('Category Form Unit Testing', () => {
    const mockSubmit = jest.fn()

    test('Form Render Correctly', () => {
        render(<CategoryForm onSubmit={mockSubmit}/>);
        const title = screen.getByText('Form Category');
        const label = screen.getByText('Name');
        const input = screen.getByPlaceholderText('Input Name');
        const button = screen.getByText('Submit');

        expect(title).toBeDefined();
        expect(label).toBeDefined();
        expect(input).toBeDefined();
        expect(button).toBeDefined();
    });

    test('Form send with correct data', async () => {
        render(<CategoryForm onSubmit={mockSubmit} />);
        const input = screen.getByPlaceholderText('Input Name');
        const button = screen.getByText('Submit');

        fireEvent.change(input, { target: { value : 'Name Testing'}});
        fireEvent.click(button)

        await waitFor(() => expect(mockSubmit).toHaveBeenCalled());

        expect(mockSubmit).toHaveBeenCalledWith({
            name: 'Name Testing'
        });

    })
})