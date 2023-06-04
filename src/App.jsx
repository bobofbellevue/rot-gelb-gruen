import "./App.css";
import { AmpelKopf } from "./components/AmpelKopf/AmpelKopf";
import { AmpelKoerper } from "./components/AmpelKoerper/AmpelKoerper";

function App() {
  return (
    <>
      <div>
        <AmpelKopf />
        <AmpelKoerper />
      </div>
    </>
  );
}

export default App;
