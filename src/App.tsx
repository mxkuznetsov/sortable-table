import { useEffect, useCallback, useState, useMemo } from 'react';
import type { ChangeEvent } from 'react';
import type { City } from 'api/getCities';
import { getCities } from 'api/getCities';
import './index.css';
import SortableTable from 'components/Table/SortableTable/SortableTable';
import SearchComponent from 'components/SearchComponent/SearchComponent';
import EmptyState from 'components/EmptyState/EmptyState';
import Pagination from 'components/Table/Pagination/Pagination';
import styled from 'styled-components';

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
      setIsLoading(false)

    }
    // Error handling: if there's not enough results, handle the pagination
    catch (err: any) {
      setIsLoading(false)
      setError(err);
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

  return (
    <Layout className="App">
      <Container>
        <h1 className='sr-only'>City List</h1>
        <SearchComponent placeholder={"Search for a city"} onSearchTermChange={onSearchTermChange} />
        {isLoading ? <p>Loading...</p> :
          cities.length ?
            <div>
              <SortableTable data={cities} />
              <Pagination
                currentPage={query.currentPage}
                itemsPerPage={query.itemsPerPage}
                onPageChange={onPageChange}
                onPageSizeChange={onPageSizeChange} />
            </div> :
            <EmptyState />
        }
        {error && <pre>{`We can't load this search. Please try another filter.`} </pre>}
      </Container>
    </Layout >
  );
};

const Layout = styled.main`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 64px;
`

export default App;
