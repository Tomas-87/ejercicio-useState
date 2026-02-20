import "./App.css";
import { useState } from "react";

//cambiando nombre con el onclick
// function App() {
//   const [name, setName] = useState("Sofía");

//   return (
//     <div>
//       <h2>Teacher Name: {name}</h2>

//       <ul>
//         <li onClick={() => setName("Data")}>Data</li>
//         <li onClick={() => setName("Reyes")}>Reyes</li>
//         <li onClick={() => setName("Yolanda")}>Yolanda</li>
//       </ul>
//     </div>
//   );
// }

//Formulario con cambio de nombre
function App() {
  const [name, setName] = useState("Sofía");
  const [newName, setNewName] = useState("");

  const changeName = (e) => {
    e.preventDefault();

    if (newName.trim() === "") return;
    setName(newName);
    setNewName("");
  };

  return (
    <div>
      <h2>Teacher Name: {name}</h2>

      <form onSubmit={changeName}>
        <input
          type="text"
          value={newName}
          placeholder="Add Name"
          onChange={(e) => setNewName(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
