import './Ofertas.css';
import OfferCard from './OfferCard';

const Ofertas = () => {
  return (
    <section className="offers">
        <h2 className="offers__title">Ahorra Hoy</h2>
        <p className="offers__description">¡No dejes pasar estas increíbles ofertas! Descubre descuentos especiales en zapatillas y accesorios seleccionados para completar tu estilo y ahorrar al máximo.</p>
        <div className="offers__content">
        {ofertas.map( (offer) => (
            <OfferCard 
            key = {offer.id}
            title = {offer.title}
            description = {offer.descripcion}
            color = {offer.color}
            codigo = {offer.codigo}
            limite = {offer.limite}
            />
          ))}
        </div>
        
    </section>
  )
}

export default Ofertas;

let ofertas = [
  {
    id: 1,
    title: "Descuento 30%",
    date: "2022-03-15",
    descripcion: "Aplicado únicamente a zapatillas deportivas de marcas seleccionadas. Disponible durante todo el día.",
    color: "#ffffff",
    codigo: "SEIDEL20",
    limite : "14 de febrero de 2025"
  },
  {
    id: 2,
    title: "Descuento 10%",
    date: "2022-03-20",
    descripcion: "Aplicado únicamente a accesorios y productos de cuidado del calzado. Promoción válida hasta agotar stock.",
    color: "#000000",
    codigo: "SEIDEL10",
    limite : "17 de febrero de 2025"
  },
  {
    id: 3,
    title: "Descuento 20%",
    date: "2022-03-25",
    descripcion: "Aplicado únicamente a zapatillas casuales y urbanas. No acumulable con otras ofertas.",
    color: "#000000",
    codigo: "SEIDEL20",
    limite : "20 de febrero de 2025"
  },
  {
    id: 4,
    title: "Descuento 20%",
    date: "2022-03-25",
    descripcion: "Aplicado únicamente a zapatillas casuales y urbanas. No acumulable con otras ofertas.",
    color: "#000000",
    codigo: "SEIDEL20",
    limite : "10 de febrero de 2025"
  },
  {
    id: 5,
    title: "Descuento 20%",
    date: "2022-03-25",
    descripcion: "Aplicado únicamente a zapatillas casuales y urbanas. No acumulable con otras ofertas.",
    color: "#000000",
    codigo: "SEIDEL20",
    limite : "4 de febrero de 2025"
  }
];
