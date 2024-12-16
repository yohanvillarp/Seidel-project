import React from 'react'
import './FilterCard.css'

const FilterCard = ({filtros, setFiltros}) => {
  
  const handleChange = (e) => {
    setFiltros({
      ...filtros,
      [e.target.name]: e.target.value
    })
  };

  return (
    <section className='filtro'>

      <div className='filtro__item'>
        <label className='filtro__label'>Marca</label>
        <select className='filtro__select' value={filtros.marca} onChange={handleChange} name='marca'>
          <option value='all'>Todos</option>
          <option value='nike'>Nike</option>
          <option value='adidas'>Adidas</option>
          <option value='reebok'>Reebok</option>
          <option value='irun'>irun</option>
        </select>
      </div>

      <div className='filtro__item'>
        <label className='filtro__label'>Precio</label>
        <select className='filtro__select'
        name='precio' value={filtros.precio} onChange={handleChange}>
          <option value='all'>Todos</option>
          <option value="descendente">De mayor a menor</option>
          <option value="ascendente">De menor a mayor</option>
        </select>
      </div>
      <div className='filtro__item'>
       <label className='filtro__label'>Color</label>
       <select className='filtro__select'
       name='color' value={filtros.color} onChange={handleChange}>
         <option value='all'>Todos</option>
         <option value='rojo'>Rojo</option>
         <option value='azul'>Azul</option>
         <option value='amarillo'>Amarillo</option>
         <option value='verde'>Verde</option>
         <option value='naranja'>Naranja</option>
         <option value='gris'>Gris</option>
       </select>
      </div>
    </section>
  )
}

export default FilterCard