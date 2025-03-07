import styled from "styled-components"

// For a DS component: increase flexibility and determine style guidleines
// Which text snippets do we allow? Unlimited?
// Do we limit which components can be displayed here or do we only have one?
// Do we permit actions?

// Time tradeoff: No button on the CTA. 
// Would be nice to have a clear/reset filter or a suggested filter search to encourage interaction/reduce dead-ending. 
const EmptyState = () => {
    return (
        <EmptyStateWrapper>
            <h3>No results found</h3>
            <p>Based on the filters that are applied, there are no results to display. </p>
            <p>Try a different search.</p>
        </EmptyStateWrapper>
    )
}

const EmptyStateWrapper = styled.div`
    text-align: center;
`
export default EmptyState