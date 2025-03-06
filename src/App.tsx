import { useEffect, useCallback, useState, useMemo } from 'react';
import type { ChangeEvent } from 'react';
import type { City } from 'api/getCities';
import { getCities } from 'api/getCities';
import './App.css';
import { Search } from 'components/Search';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cities, setCities] = useState<City[]>([]);
  const [error, setError] = useState<Error>();

  const cityRows = useMemo(() =>
    cities.map(s => <pre key={s.id}>{JSON.stringify(s)}</pre>),
    [cities]);

  const runSearch = useCallback(async (term: string) => {
    try {
      const searchResult = await getCities({ searchTerm: term });
      setCities(searchResult);
    } catch (err: any) {
      setError(err);
    }
  }, [setCities, setError]);

  useEffect(() => {
    runSearch(searchTerm);
  }, [searchTerm]);

  const onSearchTermChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value);
    event.preventDefault();
  };

  // A11y bug - design doesn't have an H1 or label for the table
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>City List</h1>
      <Search onSearchTermChange={onSearchTermChange} />
      <table>
      </table>
      {error ? <pre>{`Eek! ${error.message}`}</pre> : cityRows}
    </div>
  );
};

export default App;
