import satData from "./satData";

const Table = ({ sat }) => {

let dataJSX = sat.map((data, id) => {
  let isOperational = "";
  if (data.operational){
    isOperational = "active";
  } else {
    isOperational = "inactive";
  }
  return (
    <tr key={id}>
        <td>{data.name}</td>
        <td>{data.type}</td>
        <td>{data.launchDate}</td>
        <td>{isOperational}</td>
      </tr>
  )
}
);
  
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
        {dataJSX}
        </tbody>
      </table>
  );
};

export default Table;