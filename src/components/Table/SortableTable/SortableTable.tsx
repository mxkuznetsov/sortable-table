import React, { useMemo, useState } from 'react'
import TableHeader from '../TableComponents/TableHeader'
import TableRow from '../TableComponents/TableRow'
import TableBody from '../TableComponents/TableBody'
import type { City } from 'api/getCities';
import TableDataCell from '../TableComponents/TableDataCell'

// TO DO: sortable as a field?
type SortableTableProps = {
    data: City[],
    caption?: string,
}

// I've previously used HighCharts, amCharts, and MUI for data viz. For this exercise, we could use something like TanStack React Table.
export const SortableTable: React.FC<SortableTableProps> = ({ data }) => {
    const [sortedField, setSortedField] = useState("")

    const getVisibleHeaders = () => {
        // return the headers that are set to visible: true
    }


    // TO DO: set sort direction. Low lift. Add another state hook
    // UX improvement: just keep clicking to go through the sorts
    // Update sortedData alg accordingly by passing different keys
    const setSortDirection = () => {

    }

    const sortedData = useMemo(() => {
        if (!sortedField) return data;
        return [...data].sort((a, b) => {
            if (a[sortedField as keyof City] < b[sortedField as keyof City]) {
                return -1;
            }
            if (a[sortedField as keyof City] > b[sortedField as keyof City]) {
                return 1;
            }
            return 0;
        });
    }, [data, sortedField]);

    // This should ideally have a caption or table description so screen reader users can skip over it if it's not interesting to them
    return (
        <>
            <table style={{ borderCollapse: "collapse" }}>
                <thead>
                    <TableRow>
                        {Object.keys(data[0]).map((entry, index) => (
                            <TableHeader key={index} entry={entry} setSortedField={setSortedField}>{entry}</TableHeader>
                        ))}
                    </TableRow>
                </thead>
                <TableBody>
                    {sortedData.map((city: City) => (
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