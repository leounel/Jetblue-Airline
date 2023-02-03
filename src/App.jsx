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
          <div className="input__container departure__and__destination">
            <label htmlFor="departure">ORIGEN</label>
            <input name="departure" type="text" placeholder="¿De donde?..."/>
          </div>
          <div className="input__container departure__and__destination">
            <label htmlFor="arrival">DESTINO</label>
            <input name="arrival" type="text" placeholder="¿Hacia donde?..."/>
          </div>
          <div className="input__container dates">
            <label htmlFor="outbound">IDA</label>
            <input name="outbound" type="text" placeholder="dd/mm/aa"/>
          </div>
          <div className="input__container dates">
            <label htmlFor="return">VUELTA</label>
            <input name="return" type="text" placeholder="dd/mm/aa"/>
          </div>
          <div className="input__container passengers__and__class">
            <label htmlFor="passengers__class">PASAJEROS Y CLASE</label>
            <input name="passengers__class" type="text" placeholder="Cuantos pasajeros y que clase"></input>
          </div>
          <button><Search/></button>
        </form>
      </main>
    </>
  )
}

export default App
