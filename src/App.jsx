import {ReactComponent as Logo} from "./assets/jetplane-logo.svg";
import {ReactComponent as Arrow} from "./assets/arrow.svg"
import "./App.css";
import Landing from "./components/Landing";
import SearchFlights from "./components/SearchFlights";
import { useState } from "react";

function App() {
  const [route, setRoute] = useState(false);

  return (
    <>
      <header>
        <div className="placeholder arrow">{route && <Arrow onClick={() => setRoute(!route)} />}</div>
        <div className="logo-container go-back">
          <Logo/>
          <h1>Celeste Air</h1>
        </div>
        <div className="placeholder"></div>
      </header>
      { route ?
       <SearchFlights/> :
       <Landing setRoute={setRoute}/>
      }
    </>
  )
}

export default App
