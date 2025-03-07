# Description 
This pull request addresses the user requirements listed and marked off. This is a WIP and needs additional work before merging - concerns and comments are listed below and alongside their components. I referred to the existing  DS where possible but used the screenshot as the primary source of truth.

Wow, what a massive PR! Thanks, I would also hate to review this. I've split it into sections to attempt some structure alongside my thoughts.

**Structure** 
We could potentially export this all as one big `SortableTable` component. However, this would add friction to adding custom functionality and managing business logic. I’d recommend leaving it as a `Table`, a `Search`, and `Pagination`, but maybe we can have a parent component that takes in all the sub-components to handle layout.

There are two wolves inside of you. One says “you’re not gonna need that.” The other is afraid of having to do component migration. In this case, I went a little heavy on wrapping table components. Of course, they should have semantic HTML bones and be wrapped so that as the design system grows or we make changes, the markup that other people have written won’t need a refactor simply for styling changes.

Does everything need to be reusable? No. However, if we have a `Table`, we might want to have additional guidelines on how a `SortableTable` variant should behave as not all tables will need sorting. We could enable this by setting that field using a helper when we format the data into a table. 

**Process**
I started by stubbing out the major components I wanted to have. I focused on passing through props and sequestering logic so that the components could be re-used as much as possible. I left styling for the end since I wanted to focus on component structure (and having access to an existing styling library or an annotated Figma file would make many of these issues obsolete). While not every user requirement is captured here, the component structure allows for minimal refactoring to add those features as a fast follow.

## What's changed

### Bug fixes
- addresses dependency issues in lifecycle hooks that were causing re-renders/ performance issues

### New components
- `SortableTable` with `Table` child components
    - Wrapped table semantic HTML components
    - Additional helpers that could be extracted
- `Pagination` with `PaginationButton` children
    - This is a place where we could lock down styling and have every Pagination look the same.
    - Pagination passes the page states and sizes back up to the parent.
- `Search` 
    - This should be as presentational of a component as possible and extend/co-exist with our remaining form input suite.
    - Passes search term to Table
- `EmptyState` 

### New dependencies

- `dependency` : [styled-components](https://styled-components.com/)
- `dependency` : [react-axe-core](https://github.com/dequelabs/axe-core)

## Screenshots
Mock:
![171285680-74d420e9-faff-439d-929d-923f8b699c51](https://github.com/user-attachments/assets/3a3534c0-e620-4192-9a72-accd2a592aba)
PR:
<img width="1346" alt="Frame 2 (7)" src="https://github.com/user-attachments/assets/4501e6e4-ab09-42f6-99d8-c1189e0c981b" />


## User-focused Requirements

### Search
* [x] :star: **P0**: As a user, I want to search for cities by city name
* [x] :star: **P0**: As a user, I want to search for cities by country name
* [x] :star: **P0**: As a user, I should know when a search is pending
* [x] :star: **P0**: As a user, I should know when a search does not match any city
* [x] :star: **P0**: As a user, I should know when a search fails (**Note: if you search for 'error', we mimic an error for you :raised_hands:**)
* [ ] P1: [Performance] As a user, I want search to only kick-in after 150ms since my last change to the search term

### Sorting
* [x] :star: **P0**: As a user, I want to to be able to toggle sorting (ascending) the search results by a single column
* [ ] **P1**: As a user, I want to to be able to toggle between ascending, descending or no sorting of the search results by a single column
* [ ] **P2**: As a user, I want to to be able to toggle between ascending, descending or no sorting of the search results by multiple columns

### Pagination
* [x] :star: **P0**: As a user, I want to to be able to paginate through search results using a fixed page size (10)
* [x] :star: **P0**: As a user, I want to to be able to navigate between result pages
* [x] **P2**: As a user, I want to to be able to paginate through search results using a dynamic page size
* [ ] **P3**: As a user, I want to to be able to go all the way to the first and last pages of the search results

### Design
* [x] :star: **P0**: As a  engineer, when I use `<SortableTable>`, its design matches 's default design

## Open questions

* How many columns do we want to support?
Depends - are we designing for super users or admins? If we are, we might want to let them use as much horizontal space as we want. However, if our users are mostly looking for data overviews, they might not want to scroll much. Do we have a lot of mobile users? Might want to limit to 3 - 5. 3 -5 is also a guess because if we have very long header titles (German), we might find the table hard to read. For a design systems component, we want to enable the golden path. We could set a default limit and allow for a variant that overrides. 

* How complicated would it be to allow users to change the columns' order? :thinking_face:
UX side: Are we using drag and drop? We’ll have to make sure it makes sense to screenreaders and that we can read out the updated table correctly.  Engineering side: We can map the columns to the order we want using some sort of order object. If we update the order object, we can re-render the table with the data populated the way we want. We do the filtering on the front end anyways.  In summary: a little complicated. We can do it but we need to avoid gotchas in performance and operability. 

* Can we make it easy to hide/show columns?
Straightforward on the engineering side but let’s make sure we nail the UX. Show/hide columns - we might want to add another field to our data that states if it’s visible or not. If we add a helper to the code that gets visible columns, we can pull just the visible ones and render the table accordingly. A UI interaction I’ve seen before is to show a collapse/reveal icon on hover of a border but this interaction can be finicky, particularly on mobile. I’d take a look at some UX and accessibility best practices to see what we can do. Maybe this means showing like, an eyeball emoji and then they get moved to the end to reveal them again.

* Support for checkbox columns, single/multi selection in the table?
We can add a prop to pass in form types or have column “variants.” Will the component define the formatting (pass in a prop and the data to the column) or do we want to just support consumers passing children in an open-ended way? Former allows for less boilerplate for consumers, latter allows for more flexibility.

* Do we want to show the current page status in the table? 
 My suggestion is either at the top or near the pagination buttons. Low lift as we already have this data.

* Are there guidelines on table size and the grid system or should tables always be the full number of layout columns?
I'd assume tables should be full-width but there may be other constraints to consider.

## Notes for reviewers

### How to test
- Follow directions in README to run locally
- Type in a city in the search bar and see table update
- Try a nonsense string (no results) or "error" (error state)
- Update the select to change page size
- Use pagination buttons to navigate through page results

## Time tradeoffs + known issues
### Known issues
- Icon management approach doesn't allow for recoloring of the icons.
- Table slightly jitters between re-renders due to inconsistent min-width declarations.
- First and last pagination buttons don't really work due to missing pagination data.
- Select looks different across browsers due to using native select.

### Loading, error states 
This would be a conversation to have with the designer on how this data/table looks in an unhappy path. If the data isn't cute and clean, if something goes wrong, if the website is partially down. What are the guidelines for degradation?
- Loading
    - Current has a text string for loading. In a large flow like this, a skeleton would look better and provide visual context for what data will be loaded in.
    - This could also be one object instead of two state hooks to avoid a logic gotcha where error and loading can both be true.
- Error boundaries
    -  The components should be wrapped in error boundaries to prevent and log crashes.
- Error handling
    - I removed the error message being surfaced to the user. The message doesn't offer information to the user on what happened or how to recover. Could we update the API to send better errors? If not, could we add a helper to map the different server errors to readable/recoverable messaging?
    - Either way, we should forward the error to whatever we're using for error logging to understand what's happening.
- Recoverability and flow
-   Search could have a clear button for easy resetting
-   Similarly, it should be clear how to "reset to default"
-   Error states/ empty states should have a way to recover and continue the action the user was taking, potentially by prompting an alternative search or just to serach again.

### Pagination and state management
- Pagination
  - Client side vs server side pagination!  Server side: Paginating on server side reduces intial load time.  Client side: Better for small data, but makes other page fetches faster since it's all already there.
  - GOTCHA: Since I chose to use server-side pagination, I can't actually have us go to the last page since I don't know what it is! The API currently doesn't send back the total/limit. I'd refactor this to client-side pagination.
  - This would also fix the incorrect disabled states since currently, we don't know if there's a next page until we try to load it.
- State management in a larger app or since other components may need this state. We could use the React context provider or Redux here to manage state instead of just passing state back and forth. Using a reducer would make it easier to manage passing state back and forth, especially if we decouple the components. 

### Testing
- DS components need to be tested thoroughly. Adding React-axe is a nice way to get some automated testing coverage alongside your unit tests, but still need unit testing.
- For a component like this that should work with other components, we should test them together as well to make sure they manage state correctly

### Accessibility
- Table re-renders on sort would need to be read out. 
- Caption/ table description: This would allow screen reader users to understand the contents of the table in case they’d like to skip over it or go in deeper. Also helps us confirm that we’re bringing value in how we choose to visualize our data.
- Could use at least a quick pass using the Accessibility Insights browser tool check our tab stops and landmarks.

### Styling
- Coded myself into a corner assuming that I'd fix the hard-coded variables with a theme file.
- Would also need to fix transpilation of the styling. 
- Should use  design framework. I referenced the design system at times but there’s a little discrepancy on the colors. In particular, I’d want to be using tokens for all colors, spacing, icon/font sizes, and maybe borders. I’d also use the  typography system.
- Use a different icon management method. Either a library/framework or by wrapping them in a way that I could set the fill and change the sizing.
- Determine a static size for the table / sizing algorithm for the cells. Static size for the table will prevent jumping between re-renders. Cells could either be the max width of the child data, or we may choose to truncate/wrap depending on if we want to prioritize having more columns. 
- Use the  layout system to define a minimum size for the table, as well as a responsive widths for the cell sizes. They’re currently hard-coded, but if we use flex/grid, we can resize them if we hide fields.

### Documentation
- This would need a Storybook example with the props and guidelines we can determine through the open questions and our other components.

### Branch structure
- Ideally, this would have been a separate PR for each user requirement on a feature branch. It'd be much easier to review!

 ### In summary
 - DS components should be reusable within logical guidelines and be thoroughly tested. Strings should be internationalized, accessibility gotchas like alt labels and focus management should be wrapped or noted in documents, and components should be unit-tested.