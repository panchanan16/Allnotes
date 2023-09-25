import {useState, createContext} from 'react';


export const Context = createContext({})

export function UserValue({children}) {
    const [sidemenu, setsidemenu] = useState(false);
    const [quant, setquant] = useState([]);
    const [applyvalue, setapplyvalue] = useState('');

    const val = {sidemenu, setsidemenu, quant, setquant, applyvalue, setapplyvalue};
    return (
        <Context.Provider value={val}>{children}</Context.Provider>
    )
 }