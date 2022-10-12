import "./App.css";
import "@shopify/polaris/build/esm/styles.css";
import Gitcomponent from "./components/Gitcomponent";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Gitcomponent />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
