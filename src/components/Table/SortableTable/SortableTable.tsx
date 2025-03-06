import React, { useMemo, useState } from 'react'
import TableHeader from '../TableComponents/TableHeader'
import TableRow from '../TableComponents/TableRow'
import TableCaption from '../TableComponents/TableCaption'
import TableBody from '../TableComponents/TableBody'
import type { City } from 'api/getCities';
import TableDataCell from '../TableComponents/TableDataCell'

// TO DO: sortable as a field?
type SortableTableProps = {
    data: City[],
    caption?: string,
}

// I've previously used HighCharts, amCharts, and MUI for data viz. For this exercise, we could use something like TanStack React Table.
/*  {cityRows.getVisibleHeaders().map(header => header.render())}

                {/* <>{row.getVisibleCells().map(cell => cell.render())}</> */

export const SortableTable: React.FC<SortableTableProps> = ({ data }) => {
    // const [sortedRows, setRows] = useState(rows)
    const getHeaders = () => {
        return Object.keys(data[0])
    }

    const getVisibleHeaders = () => {
        // return the headers that are set to visible: true
    }
    return (
        <>
            <table style={{ borderCollapse: "collapse" }}>
                <thead>
                    <TableRow>
                        {/* <TableCaption>{caption}</TableCaption> */}
                        {Object.keys(data[0]).map((entry, index) => (
                            <TableHeader key={index}>{entry}</TableHeader>
                        ))}
                    </TableRow>
                </thead>
                <TableBody>
                    {data.map((city: City) => (
                        <TableRow key={city.id}>
                            {Object.values(city).map((entry, columnIndex) => (
                                <TableDataCell key={columnIndex}>{entry}</TableDataCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>





            </table >
        </>
    )
}

export default SortableTable