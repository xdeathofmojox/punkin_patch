import './App.css';
import HomePage from "./Components/HomePage"
import CreateCharacterPage from "./Components/CreateCharacterPage"
import CreatePatchPage from "./Components/CreatePatchPage"
import ViewCharactersPage from "./Components/ViewCharactersPage"
import ViewPatchesPage from "./Components/ViewPatchesPage"
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/createCharacter" className="nav-item">Create Character</Link>
        <Link to="/createPatch" className="nav-item">Create Patch</Link>
        <Link to="/viewCharacters" className="nav-item">View Characters</Link>
        <Link to="/viewPatches" className="nav-item">View Patches</Link>
      </nav>
      <header className="App-header">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/createCharacter" element={<CreateCharacterPage />} />
          <Route path="/createPatch" element={<CreatePatchPage />} />
          <Route path="/viewCharacters" element={<ViewCharactersPage />} />
          <Route path="/viewPatches" element={<ViewPatchesPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
