import React, { useState } from 'react';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../styles/Contact.css';


const Contact = () => {

        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          };

    return (
        <Container>
            <div className="container" style={{ margin: '2rem' }}>
                <form>
                    <label>Nombre</label>
                    <input type="text" id="fname" name="firstname" placeholder="Tu nombre.." />
                    <label>Apellido</label>
                    <input type="text" id="lname" name="lastname" placeholder="Tu apellido.." />
                    <label>Tipo de consulta</label>
                    <select>
                        <option>Elegi una opcion</option>
                        <option>Cotizacion</option>
                        <option>Cambio/Cancelacion</option>
                        <option>Otro</option>
                    </select>
                    <label>Mensaje</label>
                    <textarea id="subject" name="subject" placeholder="Escribi tu consulta.." style={{ height: '200px' }}></textarea>
                    <input onClick={handleOpen} type="submit" value="Enviar formulario" style={{ backgroundColor: '#C5ACF7', color: 'black' }} />
                </form>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <img src={'logo.png'}  className='logo'/>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Muchas gracias por tu consulta!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Pronto estaremos en contacto.
                    </Typography>
                </Box>
            </Modal>
        </Container>

    )
}

export default Contact;