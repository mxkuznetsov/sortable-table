import React from 'react'
import SortIcon from './../../../assets/SortIcon.svg'
import styled from 'styled-components'

// Time tradeoff: Maybe we'd want to enforce sentence casing in English and convert the text
// Or maybe we find that's too brittle for how we handle internationalized strings
// We would also want some sort of alt text to denote the sorted state that works with the rest of the component


type TableHeaderCellProps = {
    sortable?: boolean,
    setSortedField: (entry: string) => void,
    entry: string,
    children: React.ReactNode
}

const TableHeaderCell: React.FC<TableHeaderCellProps> = ({ sortable = true, setSortedField, entry, children }) => {
    return (
        <StyledTableHeader>
            {children}
            {sortable &&
                <button onClick={() => setSortedField(entry)}>
                    <StyledSortIcon />
                </button>
            }
        </StyledTableHeader>)
}

// TO DO: Map icons to [ascending, descending, not sorted] and return the appropriate one
const StyledSortIcon = styled.img.attrs({
    src: SortIcon,
})`
    height: 16px;
    width: 16px;
`;

const StyledTableHeader = styled.th`
    background-color: ${({ theme }) => theme.colors.background.accent};
    border-block-end: 1px solid ${({ theme }) => theme.colors.border.table};
    border-block-start: 1px solid ${({ theme }) => theme.colors.border.table};
    color:  ${({ theme }) => theme.colors.text.primary};
    min-height: 24px;
    min-width: 24px;
    text-align: left;
    padding: 8px;
      > button {
        border: none;
        background-color: transparent;
     }
`

export default TableHeaderCell