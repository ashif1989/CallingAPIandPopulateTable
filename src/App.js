import "./styles.css";
import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import Table from "./Table";

export default function App() {
  const [info, setInfo] = useState([]);

  //const data = useFetch("https://jsonplaceholder.typicode.com/users");
  let url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setInfo(data))
      .catch((err) => console.log(err));
  }, [url]);

  // console.log(data);
  // setInfo(data);
  console.log(info);

  return (
    <div className="App">
      <h1>Calling API & getting Data</h1>
      <Table info={info} />
    </div>
  );
}
