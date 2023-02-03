import {ReactComponent as Logo} from "./assets/jetplane-logo.svg";
import {ReactComponent as Plane} from "./assets/plane.svg"
import {ReactComponent as Search} from "./assets/search.svg";
import {ReactComponent as Roundtrip} from "./assets/roundtrip.svg";
import {ReactComponent as Arrival} from "./assets/arrival.svg";
import "./App.css";

function App() {

  return (
    <>
      <header>
        <div className="header__logo">
          <Logo/>
          <h1>Jetblue</h1>
        </div>
        <ul>
          <li><a href="/">Vuelos populares</a></li>
        </ul>
      </header>
      <main>
        <h2>Encuentra y vuela hacia tu próxima aventura</h2>
        <form className="booking__form">
          <div className="filters__form">
            <div>
              <span>One Way</span>
              <span>Round Trip</span>
            </div>
            <span className="filter__myflights"><Plane/>Mis vuelos</span>
          </div>
          <div className="departure__and__destination">
            <div className="input__container">
              <label htmlFor="departure">ORIGEN</label>
              <input id="departure" name="departure" type="text" placeholder="¿De dónde?"/>
            </div>
            <div className="input__container">
              <label htmlFor="arrival">DESTINO</label>
              <input id="arrival" name="arrival" type="text" placeholder="¿Hacia dónde?"/>
            </div>
          </div>
          <div className="dates">
            <div className="input__container">
              <label htmlFor="outbound">IDA</label>
              <input id="outbound" name="outbound" type="text" placeholder="dd/mm/aa"/>
            </div>
            <div className="input__container">
              <label htmlFor="return">VUELTA</label>
              <input id="return" name="return" type="text" placeholder="dd/mm/aa"/>
            </div>
          </div>
          <div className="passengers__and__class">
            <div className="input__container">
              <label htmlFor="passengers__class">PASAJEROS Y CLASE</label>
              <input id="passengers_class" name="passengers__class" type="text" placeholder="¿Cuántas personas?"></input>
            </div>
          </div>
          <div className="button__container">
            <button><Search/></button>
          </div>
        </form>
      </main>
    </>
  )
}

export default App
