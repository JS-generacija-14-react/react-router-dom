import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home, Users, About } from "./components";
import UsersContextProvider from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <UsersContextProvider>
        {/* Router nam omogucava upotrebu rutiranja u celoj aplikaciji - Wrapper */}
        <Router>
          <div className="navbar">
            {/* Link komponenta za navigaciju ka razlicitim rutama. 
          Svaki link ima svoj "to" prop koji definise putanju ka odgovarajucoj ruti */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/users">Users</Link>
          </div>
          {/* Unutar Routes komponente definisu se pojedinacne rute*/}
          <Routes>
            {/* Svaka ruta ima svoj "path" prop koji definise putanju ka kojoj ruta vodi,
          i "element" prop koji sadrzi komponentu koja treba da se renderuje kada se ruta 
          poklopi sa trenutnom putanjom*/}
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </UsersContextProvider>
    </div>
  );
}

export default App;
