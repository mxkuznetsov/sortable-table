import { ChangeEvent } from 'react';
import { ReactComponent as SearchIcon } from './../../assets/SearchIcon.svg'
import styled from 'styled-components'

type SearchProps = {
    placeholder?: string;
    onSearchTermChange: (event: ChangeEvent<HTMLInputElement>) => {}
}

// TO DO: Add clear component
// TO DO: Global styling for color tokens and css reset
// TO DO: fine tune colors and padding according to DS
// TO DO: add 150ms debounce
const SearchComponent: React.FC<SearchProps> = ({ placeholder = "Search", onSearchTermChange }) => {
    return <>
        <Form>
            <label className="sr-only" htmlFor="search">Search</label>
            <StyledSearchIcon>
                <SearchIcon />
            </StyledSearchIcon>
            <StyledSearchInput id="search" name="search" type="text" placeholder={placeholder} onChange={onSearchTermChange} />
        </Form>
    </>
}

// I'm sure there's a CSS hack to avoid rounded corners.
const Form = styled.form`
    display: flex;
    flex-direction: row;
    box-shadow: inset 0px -502px 0px -500px ${({ theme }) => theme.colors.border.input};
    background-color: ${({ theme }) => theme.colors.background.input};
    width: 400px;
    padding: 12px;
    margin-bottom: 24px;
    border-radius: 4px;
`;

const StyledSearchIcon = styled.div`
    margin: 8px;
    width: ${({ theme }) => theme.size.icons};
    height: ${({ theme }) => theme.size.icons};
`;

const StyledSearchInput = styled.input`
    all: unset;
    outline: none;
`
export default SearchComponent