import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchComponent from './SearchComponent';

describe('Search component', () => {
    it.todo('does a search correctly', async () => {
        render(<SearchComponent onSearchTermChange={jest.fn()} />);
        expect(await screen.findByText(/Tokyo/)).toBeInTheDocument();
        const textInput = screen.getByRole('textbox', { name: 'Search' });
        userEvent.type(textInput, 'osaka');
        expect(screen.queryByText(/Tokyo/)).not.toBeInTheDocument();
    });
});
