import React from 'react'
import styled from 'styled-components'

const TableDataCell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <StyledTableData>{children}</StyledTableData>
}

const StyledTableData = styled.td`
    text-align: left;
    background-color: #fff;
    border-bottom: 1px solid #EAEAEA;
    color: #525257;
    padding: 16px;
`
export default TableDataCell