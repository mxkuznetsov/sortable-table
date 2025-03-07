import { useEffect, useCallback, useState, useMemo } from 'react';
import type { ChangeEvent } from 'react';
import type { City } from 'api/getCities';
import { getCities } from 'api/getCities';
import './App.css';
import SortableTable from 'components/Table/SortableTable/SortableTable';
import SearchComponent from 'components/SearchComponent/SearchComponent';
import EmptyState from 'components/EmptyState/EmptyState';
import Pagination from 'components/Table/Pagination/Pagination';

type QueryState = {
  searchTerm: string,
  currentPage: number,
  itemsPerPage: number
}

const App = () => {
  // Would maybe add optionals here and provide logcal defaults
  const [query, setQuery] = useState<QueryState>({
    searchTerm: "",
    currentPage: 0,
    itemsPerPage: 10
  })
  const [cities, setCities] = useState<City[]>([]);

  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const runSearch = useCallback(async (query: QueryState) => {
    try {
      setIsLoading(true)
      const searchResult = await getCities({
        searchTerm: query.searchTerm,
        offset: query.currentPage * query.itemsPerPage,
        limit: query.itemsPerPage
      });
      setCities(searchResult);
    }
    // Error handling: if there's not enough results, handle the pagination
    catch (err: any) {
      setError(err);
    }
    finally {
      setIsLoading(false)
    }
  }, [setCities, setError]);

  useEffect(() => {
    runSearch(query);
  }, [query]);


  const onSearchTermChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setQuery({ ...query, searchTerm: event.currentTarget.value });
    event.preventDefault();
  };


  const onPageChange = (newPage: number) => {
    setQuery({ ...query, currentPage: newPage });
  };

  const onPageSizeChange = (newSize: number) => {
    setQuery({ ...query, itemsPerPage: newSize, currentPage: 1 });
  };

  // Loading state
  // In a large flow like this, a skeleton would look better and provide visual context for what data will be loaded in.
  // A spinner could be another way of approaching this. 

  // A11y bug - design doesn't have an H1 or label for the table
  // TO DO: Layout components
  // TO DO: refactor error /loading logic. Maybe also make it one state object.
  // Adding component/ page-level error boundaries, log the error
  /* Error handling trade offs. Do we want to surface the message to the user - is this a situation where the message will help them recover/ is that even available in the API?
      It doesn't look like error.cause is going to help us. We could add a helper to map the different server errors to readable/recovrable messaging. Let's just let them know how to recover and send the error to our logging software to find out.  */

  // Client side vs server side pagination! 
  // Server side: Paginating on server side reduces intial load time
  // Client side: Better for small data, but makes other page fetches faster since it's all already there
  // Would be nice if this api also sent back the total
  // Might want to use a context provider/redux here for state management. Ran out of time. Makes it easier when we have a lot of different states going on that other components may want to
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>City List</h1>
      <SearchComponent placeholder={"Search for a city"} onSearchTermChange={onSearchTermChange} />
      {isLoading ? <p>Loading...</p> :
        cities.length ?
          <>
            <SortableTable data={cities} />
            <Pagination
              currentPage={query.currentPage}
              itemsPerPage={query.itemsPerPage}
              onPageChange={onPageChange}
              onPageSizeChange={onPageSizeChange} />
          </> :
          <EmptyState />
      }
      { }
      {error && <pre>{`We can't load this search. Please try another filter.`} </pre>}
    </div >
  );
};

export default App;
