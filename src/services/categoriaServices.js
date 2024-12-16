import axios from 'axios';

export const getCategoriaPorNombre = async (nombre) => {
    try{
        const respuesta = await axios.get(`${URL}/categorias/${nombre}`);
        if(respuesta.status === 200)
            return respuesta.data;
        throw new Error('Error al obtener el producto');
    }catch(e){
        console.error(e);
    }
}