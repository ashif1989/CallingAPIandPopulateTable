import "./table.css";

let Table = ({ info }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody className="body">
          {info.map((i) => (
            <tr key={i.id}>
              <td>{i.id}</td>
              <td>{i.name}</td>
              <td>{i.username}</td>
              <td>{i.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
