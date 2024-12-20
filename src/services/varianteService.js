import axios from 'axios';

const URL = import.meta.env.VITE_ENDPOINT_BASE;

export const getVariantes = async () => {
    try{
        const respuesta = await axios.get(`${URL}/variante`);

        if(respuesta.status === 200)
            return respuesta.data;
        throw new Error('Error al obtener los productos');
    }catch(e){
        console.error(e);
    }
}

export const getVariantesPorIdProducto = async (id) => {
    try{
        const respuesta = await axios.get(`${URL}/variante/producto/id/${id}`);

        if(respuesta.status === 200)
            return respuesta.data;
        throw new Error('Error al obtener las variantes del producto');
    }catch(e){
        console.error(e);
    }
}