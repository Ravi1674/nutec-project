import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./features/MyDocument";

function App() {
  const users = [
    { name: "John", age: 28, city: "Delhi" },
    { name: "Ravi", age: 23, city: "Mumbai" },
    { name: "Savan", age: 23, city: "Surat" },
    { name: "Jiya", age: 23, city: "Ahmedabad" },
  ];

  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.city.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="App">
      <h2>List</h2>
      <input
        type={"text"}
        placeholder="search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>City</td>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.city}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No Result Found</td>
            </tr>
          )}
        </tbody>
      </table>
      {filteredUsers.length > 0 && (
        <PDFDownloadLink
          document={<MyDocument users={filteredUsers} />}
          fileName="data.pdf"
        >
          {({ loading }) =>
            loading ? (
              <button>Loading...</button>
            ) : (
              <button>Download PDF</button>
            )
          }
          {/* Fixed this later just needed to add loading here */}
        </PDFDownloadLink>
      )}
    </div>
  );
}

export default App;
