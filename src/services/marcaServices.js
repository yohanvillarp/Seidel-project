export const getMarcaPorNombre = async (nombre) => {
    try{
        const respuesta = await axios.get(`${URL}/marcas/${nombre}`);
        if(respuesta.status === 200)
            return respuesta.data;
        throw new Error('Error al obtener el producto');
    }catch(e){
        console.error(e);
    }
}

export const getMarcaPorId = async (id) => {
    try{
        const respuesta = await axios.get(`${URL}/marcas/id/${id}`);
        if(respuesta.status === 200)
            return respuesta.data;
        throw new Error('Error al obtener el producto');
    }catch(e){
        console.error(e);
    }
}