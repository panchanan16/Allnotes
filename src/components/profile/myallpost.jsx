import { useEffect, useState} from 'react';
import CardOfMain from '../card/card';
import { TriSpinner } from '../../utils/loader';
import { getproductsbyid } from '../../utils/firbase.utils';

function Myallpost() {
    const p = { btnname: 'delete' };
    const [data, setdata] = useState(undefined);
    useEffect(() => {
       async function calldatabyid() {
         const myproductsbyid = await getproductsbyid();
         setdata(myproductsbyid);
       }
       calldatabyid()
    }, []);

    return (
        <>
            <p className="font-medium text-1xl xl:text-2xl ml-[2rem]">
                My Posts
            </p>
            <div className="item-section">
                <div className="scrol-items ml-[1rem] xl:w-[67rem] xsm:w-[23rem] mt-2 flex gap-x-3 overflow-x-scroll">
                    {data != undefined ? data.map((el, ind) => (
                        <CardOfMain key={ind} cardsdata={el} btn={p} />
                    )) : <TriSpinner />}
                </div>
            </div>

        </>
    )
}

export default Myallpost;