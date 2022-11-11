import './App.css';
import HomePage from "./Components/HomePage"
import CreateCharacterPage from "./Components/CreateCharacterPage"
import CreatePatchPage from "./Components/CreatePatchPage"
import ViewCharacterPage from "./Components/ViewCharacterPage"
import ViewCharactersPage from "./Components/ViewCharactersPage"
import ViewPatchPage from "./Components/ViewPatchPage"
import ViewPatchesPage from "./Components/ViewPatchesPage"
import ViewPatchResultsPage from "./Components/ViewPatchResultsPage"
import ModifyPatchPage from "./Components/ModifyPatchPage"
import PatchVoterPage from "./Components/PatchVoterPage"
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <nav>
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/createCharacter" className="nav-item">Create Character</Link>
          <Link to="/createPatch" className="nav-item">Create Patch</Link>
          <Link to="/viewCharacters" className="nav-item">View Characters</Link>
          <Link to="/viewPatches" className="nav-item">View Patches</Link>
        </nav>
      </div>
      <div className="App-page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/createCharacter" element={<CreateCharacterPage />} />
          <Route path="/createPatch" element={<CreatePatchPage />} />
          <Route path="/viewCharacter" element={<ViewCharacterPage />} />
          <Route path="/viewCharacters" element={<ViewCharactersPage />} />
          <Route path="/viewPatch" element={<ViewPatchPage />} />
          <Route path="/viewPatches" element={<ViewPatchesPage />} />
          <Route path="/viewPatchResults" element={<ViewPatchResultsPage />} />
          <Route path="/modifyPatch" element={<ModifyPatchPage />} />
          <Route path="/patchVoter" element={<PatchVoterPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
