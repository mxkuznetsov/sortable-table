import React from 'react'
import styled from 'styled-components'

const TableRow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <StyledTableRow>{children}</StyledTableRow>
}

const StyledTableRow = styled.tr`
    width:100%;
`

export default TableRow