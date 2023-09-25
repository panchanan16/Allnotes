import {useState, createContext, useEffect} from 'react';
import {GetCategory} from '../utils/firbase.utils'


export const categoryContext = createContext({})

export function UserCategory({children}) {
    const [category, setcategory] = useState([]);
    const [searchdata, setsearchdata] = useState('');

    useEffect(() => {
      async function getcat(){
        const cat = await GetCategory(); 
        setcategory(cat);
      } 
      getcat();
    },[])

    const val = {category, searchdata, setsearchdata};
    return (
        <categoryContext.Provider value={val}>{children}</categoryContext.Provider>
    )
 }