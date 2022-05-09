import React from 'react';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import PartyModeIcon from '@mui/icons-material/PartyMode';

const Nosotros = () => {

    const navigate = useNavigate();

    const Contacto = () => {
        navigate('/ContactPage')
    }

    return (
        <Container>
            <div className="flexbox-container">
                <div>
                    <h2>¿Qué es Mundi Travel?</h2>
                    <p>Somos una OTA (Online Travel Agency) de todo tipo de turismo y de destinos alrededor del globo. No sólo comercializamos viajes, sino que te invitamos a vivir experiencias de vida inolvidables tanto en destinos populares y clasicos, como en destinos exoticos y remotos.</p>
                    <LocalAirportIcon></LocalAirportIcon>
                    <DirectionsBusIcon></DirectionsBusIcon>
                    <LocalHotelIcon></LocalHotelIcon>
                    <RestaurantIcon></RestaurantIcon>
                    <LocalActivityIcon></LocalActivityIcon>
                    <PartyModeIcon></PartyModeIcon>
                </div>
                <div>
                    <h2>¿Qué ofrecemos?</h2>
                    <p>Mundi Travel organiza tus viajes de manera que no tengas que tu unica preocupacion desde que salis de tu casa hasta que llegas, sea pasarla bien y disfrutar al 110% de la experiencia. <br></br>
                        Es por eso, que ofrecemos paquetes de viajes que incluyen vuelos especiales, buses receptivos, hoteles estratégicamente ubicados, gastronomía, excursiones, divertimentos y actividades nocturnas a un precio global. <br></br>
                        Ademas, si tenes en mente un viaje perfecto, podes contactarnos a traves del <a onClick={Contacto} className='linkForm'>siguiente formulario</a> y con gusto hacemos realidad tu viaje a medida!
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default Nosotros;