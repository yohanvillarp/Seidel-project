import './Color.css'

const Color = ({nombre, hexa}) => {
  return (
    <button className='color' style={{backgroundColor:hexa}}></button>
  )
}

export default Color