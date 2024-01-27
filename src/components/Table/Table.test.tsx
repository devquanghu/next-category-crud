import { render, screen } from '@testing-library/react';
import Table from '.';

describe('Table Component Unit Testing', () => {

    test('Table should be render correctly', () => {
        render(<Table data={[]}/>)
        const title = screen.getByText('Category List');
        const noColumn = screen.getByText('No');
        const nameColumn = screen.getByText('Name');
        const statusColumn = screen.getByText('Status');
        const actionColumn = screen.getByText('Action');

        expect(title).toBeDefined();
        expect(noColumn).toBeDefined();
        expect(nameColumn).toBeDefined();
        expect(statusColumn).toBeDefined();
        expect(actionColumn).toBeDefined();
    });

    test('Table should be render with props data', () => {
        const categories = [
            {
                id: 1,
                name: 'Test',
                status: 'Active',
                action: <button>{'testing button'}</button>
            }
        ]

        render(<Table data={categories} />);

        const title = screen.getByText('Category List');
        const noColumn = screen.getByText('No');
        const nameColumn = screen.getByText('Name');
        const statusColumn = screen.getByText('Status');
        const actionColumn = screen.getByText('Action');

        expect(title).toBeDefined();
        expect(noColumn).toBeDefined();
        expect(nameColumn).toBeDefined();
        expect(statusColumn).toBeDefined();
        expect(actionColumn).toBeDefined();

        categories.map((category) => {
            expect(category.id).toBeDefined()
            expect(category.name).toBeDefined()
            expect(category.status).toBeDefined()
            expect(category.action).toBeDefined()
        })
    })

})