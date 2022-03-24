import React from 'react';
import Card from '../card/Card';
import './ItemListContainer.css';

const ItemListContainer = () => {

  return(
    <div className='container-cards'>
      <Card  title='Nueva York' duracion='15 dias' precio={15000} servicios='Pasaje aéreo, ruta: Buenos Aires / New York / Buenos Aires. Taslados de llegada y salida. 14 noches de alojamiento en The New Yorker a Wyndham Hotel 3*. Asistencia al viajero con seguro de cancelación.'/>
      <Card title='Machu Picchu' duracion='8 dias' precio={15000} servicios='Aéreo LATAM. Traslados en destino en privado. 7 noches en el Hotel con desaryuno y almuerzo incluido. Seguro Flight Plus. Asistencia al viajero con seguro de cancelación.'/>
      <Card title='Barcelona' duracion='20 dias' precio={4500} servicios='Traslados de llegada y salida. Guías locales en español en todas las visitas. Bus de lujo y guía acompañante durante todo el recorrido en bus.Asistencia al viajero con seguro de cancelación.'/>
      <Card title='Phuket' duracion='13 dias' precio={10000} servicios='Vuelos Internacionales. Traslados en destino. Guía de habla hispana. 12 noches en EcoLoft Hotel 3* all inclusive. Excursiones. Asistencia al viajero con seguro de cancelación.'/>
    </div>
  )
}

export default ItemListContainer;