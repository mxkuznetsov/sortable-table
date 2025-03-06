import React from 'react'
import { render } from '@testing-library/react'
import axe from 'axe-core';
import SortableTable from './SortableTable';

const mockData = {
    "id": 1392685764,
    "name": "Tokyo",
    "nameAscii": "Tokyo",
    "country": "Japan",
    "countryIso3": "JPN",
    "capital": "primary",
    "population": 39105000
}

describe("Sortable Table tests", () => {
    it('should render without accessibility violations', async () => {
        const { container } = render(<SortableTable data={[mockData]} />);
        const results = await axe.run(container);
        expect(results.violations.length).toBe(0);
    });
});