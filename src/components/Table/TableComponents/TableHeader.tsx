import React from 'react'
import SortIcon from './../../../assets/SortIcon.svg'
import styled from 'styled-components'
// TO DO: Add icon sizing to theme file

type TableHeaderProps = {
    sortable?: boolean,
    setSortedField: (entry: string) => void,
    entry: string,
    children: React.ReactNode
}

// Time tradeoff: Maybe we'd want to enforce sentence casing in English and convert the text
// Or maybe we find that's too brittle for how we handle internationalized strings
// We would also want some sort of alt text to denote the sorted state that works wiht the rest of the component


const TableHeader: React.FC<TableHeaderProps> = ({ sortable = true, setSortedField, entry, children }) => {

    return (
        <StyledTableHeader>
            {children}
            {sortable && <button onClick={() => setSortedField(entry)}>
                <StyledSortIcon />
            </button>}
        </StyledTableHeader>)
}

// TO DO: Map icons to [ascending, descending, not sorted] and return the appropriate one
const StyledSortIcon = styled.img.attrs({
    src: SortIcon,
})`
    width: 16px;
    height: 16px;
`;

const StyledTableHeader = styled.th`
    text-align: left;
    background-color: #FBFAFA;
    border-top: 1px solid #919197;
    border-bottom: 1px solid #919197;
    color: #1C1C1C;
`

export default TableHeader