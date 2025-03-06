import React from 'react'
import SortIcon from './../../../assets/SortIcon.svg'
import styled from 'styled-components'
// TO DO: Add icon sizing to theme file

type TableHeaderProps = {
    sortable?: Boolean,
    children: React.ReactNode
}

const TableHeader: React.FC<TableHeaderProps> = ({ sortable = true, children }) => {
    return (
        <th>
            {children}
            {sortable && <StyledSortIcon alt="" />}
        </th>)
}

const StyledSortIcon = styled.img.attrs({
    src: SortIcon,
})`
    width: 16px;
    height: 16px;
`;

export default TableHeader