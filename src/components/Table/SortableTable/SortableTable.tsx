import React, { useMemo, useState } from 'react'
import TableRow from '../TableComponents/TableRow'
import TableBody from '../TableComponents/TableBody'
import type { City } from 'api/getCities';
import TableDataCell from '../TableComponents/TableDataCell'
import styled from 'styled-components';
import TableHeaderCell from '../TableComponents/TableHeaderCell';

// TO DO: sortable as a field?
type SortableTableProps = {
    data: City[],
    caption?: string,
}

export const SortableTable: React.FC<SortableTableProps> = ({ data }) => {
    const [sortedField, setSortedField] = useState("")

    // return the headers that are set to visible: true
    const getVisibleHeaders = () => {
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
            <Table style={{ borderCollapse: "collapse" }}>
                <TableHead>
                    <TableRow>
                        {Object.keys(data[0]).map((entry, index) => (
                            <TableHeaderCell key={index} entry={entry} setSortedField={setSortedField}>{entry}</TableHeaderCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedData.map((city: City) => (
                        <TableRow key={city.id}>
                            {Object.values(city).map((entry, columnIndex) => (
                                <TableDataCell key={columnIndex}>{entry}</TableDataCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table >
        </>
    )
}

const Table = styled.table`
    width: 900px
`

const TableHead = styled.thead`
`

export default SortableTable