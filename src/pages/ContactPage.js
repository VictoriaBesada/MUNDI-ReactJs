import React from 'react';
import { Container } from '@mui/material';
import '../styles/Contact.css';


const Contact = () => {
    return(
        <Container>
            <h3>Contacto</h3>
            <div className="container" style={{margin:'2rem'}}>
                <form>
                    <label>Nombre</label>
                    <input type="text" id="fname" name="firstname" placeholder="Tu nombre.."/>
                    <label>Apellido</label>
                    <input type="text" id="lname" name="lastname" placeholder="Tu apellido.."/>
                    <label>Tipo de consulta</label>
                    <select>
                        <option>Elegi una opcion</option>
                        <option>Cotizacion</option>
                        <option>Cambio/Cancelacion</option>
                        <option>Otro</option>
                    </select>
                    <label>Mensaje</label>
                    <textarea id="subject" name="subject" placeholder="Escribi tu consulta.." style={{height:'200px'}}></textarea>
                    <input type="submit" value="Enviar" style={{backgroundColor:'#C5ACF7', color:'black'}}/>
                </form>
            </div>
        </Container>
    )
}

export default Contact;