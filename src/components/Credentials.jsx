const Credentials = () => {
    return (
        <> 
            <div className="canvas-container"></div>
            <form className="form-container credentials-form">
                <section className="fullname-inputs-container">
                        <label>Nombre</label>
                        <input type="text" placeholder="Nombre"></input>
                        <input type="text" placeholder="Apellido"></input>
                </section>
                <section className="birthday-date-container">
                    <label>Fecha de nacimiento</label>
                    <input className="full-width-input" type="text" placeholder="dd/mm/aaaa"></input>
                </section>
                <section className="nationality-container">
                    <label>Nacionalidad</label>
                    <input className="full-width-input" type="text" placeholder="Ingresa tu país de nacimiento"></input>
                </section>
                <section className="email-container">
                    <label>Email</label>
                    <input className="full-width-input" type="text" placeholder="email@dirección.com"></input>
                </section>
                <section className="phone-container">
                    <label>Teléfono</label>
                    <input className="full-width-input" type="text" placeholder="+00 (00) 0000-0000"></input>
                </section>
                <button className="form-button" type="button">Siguiente</button>
            </form>
        </>
    );
}
 
export default Credentials;