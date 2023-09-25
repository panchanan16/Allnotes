import EachCategory from "../components/category/eachcategory";
import Category from '../components/category/category';

function FilteredCat() {
    return(
        <>
            <section className="xl:ml-[14rem] xl:mt-[2rem] xsm:mt-[1rem]">
              <Category />
              <EachCategory/>
            </section>
        </>
    )
}

export default FilteredCat;