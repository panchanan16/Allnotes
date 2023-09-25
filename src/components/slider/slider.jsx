import { AnimateAlert} from "../../utils/motion";

function Slider() {
  let arr = [{ url: '/img/offer.png' }, { url: '/img/slider123.jpg' }, { url: '/img/offertwo.png' }];

  return (
    <AnimateAlert>
        <section className="px-4 mt-4 flex w-full gap-6 overflow-hidden">
          <img
            src={arr[0].url}
            className="w-full rounded-lg xl:h-96 xsm:h-30 w-2/4"
            alt=""
          />
           <img
            src={arr[2].url}
            className="w-full rounded-lg xl:h-96 xsm:h-30 w-2/4"
            alt=""
          />
      </section>
    </AnimateAlert>
  );
}

export default Slider;
