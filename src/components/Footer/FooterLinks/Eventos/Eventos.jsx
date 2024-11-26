import './Eventos.css';
import EventCard from './EventCard';

const Eventos = () => {
  return (
    <section className="events">
        <h2 className="events__title">Eventos</h2>

        {events.map( (event) => (
            <EventCard 
            key = {event.id}
            title = {event.title}
            />
          ))}
    </section>
  )
}

export default Eventos;


let events = [
  {
    id : 1,
    title : 'Descuento 30%',
    date : '2022-03-15',
    location : 'Seidel, Spain'
  },
  {
    id : 2,
    title : 'Descuento 10%',
    date : '2022-03-20',
    location : 'Barcelona, Spain'
  },
  {
    id : 3,
    title : 'Descuento 20%',
    date : '2022-03-25',
    location : 'Madrid, Spain'
  }
]