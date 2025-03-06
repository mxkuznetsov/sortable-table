import React, { useMemo, useState } from 'react'
import TableHeader from '../TableComponents/TableHeader'
import TableRow from '../TableComponents/TableRow'
import TableCaption from '../TableComponents/TableCaption'
import TableBody from '../TableComponents/TableBody'

// TO DO: Column helper creator for dynamic columnds
// TO DO: sortable as a field?
type SortableTableProps = {
    data: any,
    caption?: string,
}

// I've previously used HighCharts, amCharts, and MUI for data viz. For this exercise, we could use something like TanStack React Table.

export const SortableTable: React.FC<SortableTableProps> = ({ data }) => {
    // const [sortedRows, setRows] = useState(rows)
    const getHeaders = () => {
        data.map()
    }
    console.log((data))
    return (
        <>
            <table>
                {/* <TableCaption>{caption}</TableCaption> */}
                <TableHeader>
                    {/* <TableRow> */}
                    Country
                    {/* </TableRow> */}

                </TableHeader>

            </table >
        </>
    )
}

export default SortableTable