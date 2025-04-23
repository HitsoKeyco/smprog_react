
import { DataGrid, DropDownBox, TreeView } from 'devextreme-react/data-grid';
import fetchAgrupaciones from '../../fetch/agrupacionesFetch';
import { useEffect, useState } from 'react';


const Agrupaciones = () => {

    const [agrupaciones, setAgrupaciones] = useState([]);

    useEffect(() => {
        fetchAgrupaciones()
        .then(setAgrupaciones)
        .catch(console.error);
    }, []);


    console.log(agrupaciones);


    return (
        <div>            
            <DataGrid
            />
        </div>
    )
}

export default Agrupaciones;
