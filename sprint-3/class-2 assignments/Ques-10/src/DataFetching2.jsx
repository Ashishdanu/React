import { useState, useEffect } from "react";

const DataFetching2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonmock.hackerrank.com/api/football_matches?page=2")
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Data Fetching</h1>
      <ul>
        {data.length > 0 ? (
          data.map((item, index) => (
            <li key={index}>
              {item.team1} vs {item.team2} - Score: {item.team1goals} - {item.team2goals}
            </li>
          ))
        ) : (
          <li>Loading data...</li>
        )}
      </ul>
    </>
  );
};

export default DataFetching2;
