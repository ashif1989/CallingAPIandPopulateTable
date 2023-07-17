import { useState, useEffect } from "react";

let useFetch = (url) => {
  const [apiData, setApiData] = useState([]);

  console.log(url);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  console.log("api", apiData);
  return apiData;
};

export default useFetch;
