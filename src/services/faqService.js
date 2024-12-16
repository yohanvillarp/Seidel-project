import axios from 'axios';

const URL = import.meta.env.VITE_ENDPOINT_BASE;

export const getFAQ = async () => {
    try{
        const respuesta = await axios.get(`${URL}/faq`);

        if(respuesta.status === 200)
            return respuesta.data;
        throw new Error('Error al obtener los productos');
    }catch(e){
        console.error(e);
    }
}

export const getFAQPorId = async (id) => {
    try{
        const respuesta = await axios.get(`${URL}/faq/${id}`);
        if(respuesta.status === 200)
            return respuesta.data;
        throw new Error('Error al obtener el producto');
    }catch(e){
        console.error(e);
    }
}