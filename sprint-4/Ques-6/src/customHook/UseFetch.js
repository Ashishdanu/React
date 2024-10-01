import { useEffect, useState } from "react";

const useFetch = (api) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Ensure the effect only runs when the 'api' value changes
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error before new fetch
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(`Error fetching data: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    // Only call fetchData if the 'api' is not null/undefined
    if (api) {
      fetchData();
    }

  }, [api]); // Added 'api' to the dependency array

  console.log('data fetched result', data);
  console.log('error status', error);
  console.log('loading state', loading);

  return [data, error, loading];
};

export default useFetch;
