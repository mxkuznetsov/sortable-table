// For a DS component: increase flexibility and determine style guidleines
// Which text snippets do we allow? Unlimited?
// Do we limit which components can be displayed here or do we only have one?
// Do we permit actions?

// Further explorations: add relevant CTA like clear or add an item
export const EmptyState = () => {
    return (
        <>
            <h3>No results found</h3>
            <span>Based on the filters that are applied, there are no results to display </span>
        </>
    )
}
export default EmptyState