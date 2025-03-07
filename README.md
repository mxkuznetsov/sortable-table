# Take-home Exercise: Sortable Table
**We've provided some code to get you started, though there are a few bugs in there that you'll have to deal with first.** 
For reference, we use the following tech stack for this exercise:
* [TypeScript](https://www.typescriptlang.org)
* [React](https://reactjs.org)
* [Jest](https://jestjs.io)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# Product requirements :books:

**Note:** These product requirements are created in loosely the same style you would see internally at , but the problem statement and goals were made up for this exercise.

## The Problem
Often enough,  users need to deal with large sets of data – in this exercise, that would be a list of the cities of the world.
We are looking to offer a delightful user-experience when it comes to searching, sorting and navigating through such datasets.

<img src="https://user-images.githubusercontent.com/9911645/171285680-74d420e9-faff-439d-929d-923f8b699c51.png" width="800px" />

In this exercise, we'll be focusing on these elements of your implementation:
* The reusability/flexibility of the `<SortableTable>` component (or set of components) you'll be coding up
* The user interface and user experience of your app:
  * Visual design
  * Navigation
  * Performance

## User-focused Requirements

### Search
* [x] :star: **P0**: As a user, I want to search for cities by city name
* [x] :star: **P0**: As a user, I want to search for cities by country name
* [ ] :star: **P0**: As a user, I should know when a search is pending
* [ ] :star: **P0**: As a user, I should know when a search does not match any city
* [ ] :star: **P0**: As a user, I should know when a search fails (**Note: if you search for 'error', we mimic an error for you :raised_hands:**)
* [ ] P1: [Performance] As a user, I want search to only kick-in after 150ms since my last change to the search term

### Sorting
* [ ] :star: **P0**: As a user, I want to to be able to toggle sorting (ascending) the search results by a single column
* [ ] **P1**: As a user, I want to to be able to toggle between ascending, descending or no sorting of the search results by a single column
* [ ] **P2**: As a user, I want to to be able to toggle between ascending, descending or no sorting of the search results by multiple columns

### Pagination
* [ ] :star: **P0**: As a user, I want to to be able to paginate through search results using a fixed page size (10)
* [ ] :star: **P0**: As a user, I want to to be able to navigate between result pages
* [ ] **P2**: As a user, I want to to be able to paginate through search results using a dynamic page size
* [ ] **P3**: As a user, I want to to be able to go all the way to the first and last pages of the search results

### Design

*For reference, you can use the screenshot in the problem statement above. We've also uploaded some icons you might want to use for your implementation – you can find these under src/assets/..* :pray:

* [ ] :star: **P0**: As a  engineer, when I use `<SortableTable>`, its design matches 's default design

## Open questions

* How many columns do we want to support?
* How complicated would it be to allow users to change the columns' order? :thinking_face:
* Can we make it easy to hide/show columns?
* Support for checkbox columns, single/multi selection in the table?
