import { useEffect, useReducer } from "react";
import './datacard.css';

const initialState = {
  loading: false,
  data: [],
  error: "",
  searchQuery: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true, data: [], error: "" };
    case "SUCCESS":
      return { ...state, loading: false, data: action.payload, error: "" };
    case "ERROR":
      return { ...state, loading: false, data: [], error: action.payload };
    case "SET_SEARCH":
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

const DataFetching = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, data, error, searchQuery } = state;

  useEffect(() => {
    dispatch({ type: "LOADING" });

    fetch("https://jsonmock.hackerrank.com/api/football_matches?page=2")
      .then((res) => res.json())
      .then((jsonData) => {
        dispatch({ type: "SUCCESS", payload: jsonData.data });
      })
      .catch((error) => {
        dispatch({ type: "ERROR", payload: error.message });
      });
  }, []);

  // Debouncing function
  let debounceTimeout;
  const handleSearch = (searchQuery) => {
    clearTimeout(debounceTimeout); // Clear the previous timeout
    debounceTimeout = setTimeout(() => {
      dispatch({ type: "SET_SEARCH", payload: searchQuery }); // Dispatch search after the delay
    }, 500); // Set a delay of 500ms
  };

  const filteredData = searchQuery
    ? data.filter(
        (item) =>
          item.team1.toLowerCase().includes(searchQuery) ||
          item.team2.toLowerCase().includes(searchQuery)
      )
    : data; // If searchQuery is empty, return full data

  return (
    <>
      <h1>Data Fetching with useReducer and Debouncing</h1>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => handleSearch(e.target.value.toLowerCase())}
        />
      </div>

      <ul>
        {loading ? (
          <>
            <h1>Fetching data, please wait...</h1>
            {/* loading animation */}
            <p>...............................................</p>
          </>
        ) : (
          filteredData.map((item, index) => (
            <div key={index} className="card">
              {item.team1} vs {item.team2} - Score: {item.team1goals} -{" "}
              {item.team2goals}
            </div>
          ))
        )}
      </ul>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default DataFetching;
