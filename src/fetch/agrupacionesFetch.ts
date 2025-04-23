



const fetchAgrupaciones = async () => {

    const url = import.meta.env.VITE_API_URL;

    try {
        const response = await fetch(`${url}/sot/obtener_agrupaciones?LST_FILTROS=[{"EQUIPOS":"N","ESTADO":"A"}]&FORMATO=`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching agrupaciones:', error);
        throw error;
    }
}

export default fetchAgrupaciones;
