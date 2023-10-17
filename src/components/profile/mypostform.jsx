/* eslint-disable no-unused-vars */
import { useRef, useState, useContext } from 'react';
import { WriteDataIn } from "../../utils/firbase.utils";
import Spinner from '../../utils/loader';
import { categoryContext } from '../../context/category.context';
import { ProductContext } from '../../context/product.context';
import { uploadMaindoc } from '../../utils/firbase.utils';


function MypostForm() {
    const { category } = useContext(categoryContext)
    const { setcallagain } = useContext(ProductContext)
    const name = useRef();
    const stream = useRef();
    const subject = useRef();
    const title = useRef();
    const price = useRef();
    const docMain = useRef();
    const [load, setload] = useState(false);
    const[close, setclose] = useState(false);

    function showpostform() {
        setclose(!close);
    }

    async function createpost() {
        setload(true);
        const ThumbnailLINK = await uploadMaindoc(docMain.current.files[0], docMain.current.files[0].name);
        const data = { name: name.current.value, stream: stream.current.value, subject: subject.current.value, title: title.current.value, price: price.current.value, ThumbnailLink : ThumbnailLINK}
        await WriteDataIn(data.stream, 'userdata', data);
        setcallagain('call again');
        setload(false);
    }
    return (
        <>
           <div className="mypostform flex flex-col items-center mt-[1rem]">
            <button onClick={showpostform} className="p-2 bg-black rounded-full px-3" ><i className={`uil uil-plus-circle text-3xl text-white ${close ? 'hidden':''}`}></i><i className={`uil uil-minus-circle text-3xl text-white ${close ? '':'hidden'}`}></i></button>
            <div className={`mt-[2rem] border-4 p-4 block mb-[2rem] ${close ? 'block' : 'hidden'}`}>
                <form className="flex flex-col gap-3">
                    <input type="text" className="xl:w-[30rem] p-1 border-2" placeholder="Enter Your name" ref={name} required />
                    <select name="stream" className="border-2 p-1" ref={stream} required>
                        {category.map((cat, ind) => (<option key={ind} value={cat.id}>{cat.id}</option>))}
                    </select>
                    <input type="text" className="xl:w-[30rem] p-1 border-2" placeholder="Enter Your subject" ref={subject} />
                    <input type="text" className="xl:w-[30rem] p-1 border-2" placeholder="Enter Your topic details" ref={title} />
                    <input type="text" className="xl:w-[30rem] p-1 border-2" placeholder="Enter price"
                        ref={price} />
                    <input type="file" ref={docMain} /><label>Upload content</label>
                    <input type="file" /><label>Upload Thumbnail</label>
                </form>
                <button className="bg-black text-white p-2 font-medium w-[6rem] hover:bg-white hover:text-black hover:border-2 mt-[1rem]" onClick={createpost}>{load ? <Spinner /> : 'Upload'}</button>
            </div>
          </div>
        </>
    )
}

export default MypostForm;