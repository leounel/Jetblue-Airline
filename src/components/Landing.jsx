const Landing = ({setRoute}) => {
    return (
    <>
        <main>
        <h2>Encuentra y vuela hacia tu próxima aventura</h2>
        <section className="buttons-section">
          <button onClick={() => setRoute(true) }>Buscar vuelo</button>
          <a href="/">Vuelos populares</a>
        </section>
        <section className="preview-section">
          <h5>Vista previa</h5>
          <div className="img-container">
            <img src="./src/assets/southisland-mobile.jpg"></img>
            <div className="img-title">
              <p>South Island, NZ</p>
            </div>
          </div>
          <div className="img-container">
            <img src="./src/assets/california-mobile.jpg"></img>
            <div className="img-title">
              <p>San Francisco, USA</p>
            </div>
          </div>
        </section>
      </main>
      <footer>Explora nuevos horizontes.</footer>
    </>
    );
}
 
export default Landing;