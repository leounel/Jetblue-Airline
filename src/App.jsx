import "./App.css";
import Landing from "./components/Landing";
import BookingForms from "./components/BookingForms";
import { useState } from "react";
import {ReactComponent as Logo} from "./assets/jetplane-logo.svg";
import {ReactComponent as Arrow} from "./assets/arrow.svg"

function App() {
  const [isBooking, setBooking] = useState(false);

  return (
    <>
      <header>
        <div className="placeholder arrow">
          {isBooking && <Arrow style={{cursor: "pointer"}} onClick={() => setBooking(!isBooking)} />}
        </div>
        <div className="logo-container go-back">
          <Logo/>
          <h1>Celeste Air</h1>
        </div>
        <div className="placeholder"></div>
      </header>
      { isBooking ?
       <BookingForms/> :
       <Landing setBooking={setBooking}/>
      }
    </>
  )
}

export default App
