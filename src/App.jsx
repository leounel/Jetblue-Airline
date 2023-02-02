import {ReactComponent as Logo} from "./assets/jetplane-logo.svg";
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
          <li><a href="/">Mis vuelos</a></li>
          <li><a href="/">Vuelos populares</a></li>
        </ul>
      </header>
      <main>
        <form className="booking__form">
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
        </form>
      </main>
    </>
  )
}

export default App
