import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('main page', () => {
    it.todo('renders page heading', async () => {
        // render(<Pagination />);
        const heading = await screen.findByRole('heading', { name: 'City List' });
        expect(heading).toBeInTheDocument();
    });

    it.todo('does a search correctly', async () => {
        // render(<Pagination />);
        expect(await screen.findByText(/Tokyo/)).toBeInTheDocument();
        const textInput = screen.getByRole('textbox', { name: 'Search' });
        userEvent.type(textInput, 'osaka');
        expect(screen.queryByText(/Tokyo/)).not.toBeInTheDocument();
    });
});
