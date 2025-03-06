// Reference: https://workbench.gusto.com/components/control-layout/
import { ChangeEvent } from 'react';
import SearchIcon from './../../assets/SearchIcon.svg'
import styled from 'styled-components'

type SearchProps = {
    placeholder?: string;
    onSearchTermChange: (event: ChangeEvent<HTMLInputElement>) => {}
}

// TO DO: Add clear state
// TO DO: Global styling for color tokens and css reset
// TO DO: fine tune colors and padding according to DS
const SearchComponent: React.FC<SearchProps> = ({ placeholder = "Search", onSearchTermChange }) => {
    return <>
        <Form>
            <label className="sr-only" htmlFor="search">Search</label>
            <StyledSearchIcon alt="" />
            <StyledSearchInput id="search" name="search" type="text" placeholder={placeholder} onChange={onSearchTermChange} />
        </Form>
    </>
}

const Form = styled.form`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #919197;
    background-color: #F4F4F3;
`;

const StyledSearchIcon = styled.img.attrs({
    src: SearchIcon,
})`
    width: 16px;
    height: 16px;
`;

const StyledSearchInput = styled.input`
    all: unset;
    outline: none;
`
export default SearchComponent