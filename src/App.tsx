import { useEffect, useCallback, useState, useMemo } from 'react';
import type { ChangeEvent } from 'react';
import type { City } from 'api/getCities';
import { getCities } from 'api/getCities';
import './App.css';
import SortableTable from 'components/Table/SortableTable/SortableTable';
import SearchComponent from 'components/SearchComponent/SearchComponent';
import EmptyState from 'components/EmptyState/EmptyState';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cities, setCities] = useState<City[]>([]);
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState<Boolean>(false);


  const cityRows = useMemo(() =>
    cities.map(s => <pre key={s.id}>{JSON.stringify(s)}</pre>),
    [cities]);

  const runSearch = useCallback(async (term: string) => {
    try {
      setIsLoading(true)
      const searchResult = await getCities({ searchTerm: term });
      setCities(searchResult);
    } catch (err: any) {
      setError(err);
    }
    finally {
      setIsLoading(false)
    }
  }, [setCities, setError]);

  useEffect(() => {
    runSearch(searchTerm);
  }, [searchTerm]);


  const onSearchTermChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value);
    event.preventDefault();
  };

  // Loading state
  // In a large flow like this, a skeleton would look better and provide visual context for what data will be loaded in.
  // A spinner could be another way of approaching this. 

  // A11y bug - design doesn't have an H1 or label for the table
  // TO DO: Layout components
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>City List</h1>
      <SearchComponent placeholder={"Search for a city"} onSearchTermChange={onSearchTermChange} />
      {isLoading && <p>Loading...</p>}
      {cities.length ?
        <SortableTable data={cityRows} /> :
        <EmptyState />
      }
      { }
      {/* If not found */}
      {/* If error */}
      {error ? <pre>{`Eek! ${error.message}`}</pre> : cityRows}
    </div>
  );
};

export default App;
