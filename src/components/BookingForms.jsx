const BookingForms = () => {
    return (
    <main className="main-booking">
        <h2>1. <br/>Reserva tu ticket.</h2>
        <form className="credentials-form">
            <section className="flight-type-buttons">
                <button style={{color:"#676767"}} type="button">Solo ida</button>
                <button type="button">Ida y vuelta</button>
            </section>
            <section className="destination-inputs-container">
                <div className="destination-input">
                    <label>ORIGEN</label>
                    <input placeholder="¿De dónde?"/>
                </div>
                <div className="destination-input">
                    <label>DESTINO</label>
                    <input placeholder="¿Hacia dónde?"/>
                </div>
            </section>
            <section className="dates-container">
                <span>FECHAS</span>
                <div className="dates-input-container">
                    <div className="date-departure">
                        <label htmlFor="">IDA</label>
                        <input placeholder="May 09, 2023"></input>
                    </div>
                    <div className="date-return">
                        <label htmlFor="">VUELTA</label>
                        <input placeholder="May 17, 2023"></input>
                    </div>
                </div>
            </section>
            <section className="class-container">
                <span>CLASE</span>
                <div className="class-select">
                    <div>{"<"}</div>
                    <span>Clase ejecutiva</span>
                    <div>{">"}</div>
                </div>
            </section>
            <button className="credentials-button" type="button">Reservar</button>
        </form>
    </main>
    );
}
 
export default BookingForms;