const BookingForms = () => {
    return (
    <main className="main-booking">
        <h2>1. <br/>Reserva tu ticket.</h2>
        <form className="credentials-form">
            <section className="flight-type-buttons">
                <button type="button">Solo ida</button>
                <button type="button">Ida y vuelta</button>
            </section>
            <section className="destination-inputs">
                <label>ORIGEN</label>
                <input placeholder="hola"></input>
                <label>DESTINO</label>
                <input placeholder="¿Hacia dónde?"></input>
            </section>
        </form>
    </main>
    );
}
 
export default BookingForms;