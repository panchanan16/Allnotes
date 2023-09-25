import {useState, createContext, useEffect,  useReducer} from 'react';
import {getproducts, filterproducts, getproductsbyid} from '../utils/firbase.utils'

export const ProductContext = createContext({})

function productReducer(state, action){
  const {type, payload} = action;
  switch (type) {
    case 'ABC':
      return{
        ...state,
        curProduct: payload,
      };
    case 'FILTER':
      return{
        ...state, 
        filteredItems: payload, 
      };
    case 'GETBYID':
      return{
        ...state, 
        mypostsItems: payload, 
      };
    default:
      throw new Error('You are wrong bro!')
  }
}


const ini_state = {
  curProduct:[],
  filteredItems:[],
  mypostsItems:[],
}

export function Userproduct({children}) {
    const [filterproductsid, setfilterproductsid] = useState('BCA');
    const [callagain, setcallagain] = useState('');

    const[{curProduct, filteredItems, mypostsItems}, dispatch] = useReducer(productReducer, ini_state);

    function setProd(pay) {
      dispatch({type: 'ABC', payload: pay});
    }

    function setfilteredItems(pay) {
      dispatch({type: 'FILTER', payload: pay});
    }

    function setmypost(pay) {
      dispatch({type: 'GETBYID', payload: pay});
    }


    useEffect(() => {
      async function getprod(){
        const cat = await getproducts();
        const mypost = await getproductsbyid(); 
        setProd(cat);
        setmypost(mypost);
      } 
      getprod();
    },[callagain])

    useEffect(() => {
      async function getfilterprod(){
        const cat = await filterproducts(filterproductsid); 
        setfilteredItems(cat);
      } 
      getfilterprod();
    },[filterproductsid])

    const val = {curProduct, setfilterproductsid, filteredItems, mypostsItems, setcallagain};
    return (
        <ProductContext.Provider value={val}>{children}</ProductContext.Provider>
    )
 }