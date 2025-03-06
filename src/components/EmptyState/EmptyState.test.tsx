import React from 'react'
import { render } from '@testing-library/react'
import axe from 'axe-core';
import EmptyState from './EmptyState';

describe("Empty State tests", () => {
    it('should render without accessibility violations', async () => {
        const { container } = render(<EmptyState />);
        const results = await axe.run(container);
        expect(results.violations.length).toBe(0);
    });
});