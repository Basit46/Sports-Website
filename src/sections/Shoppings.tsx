import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Product from "../components/Product";

const Shoppings = () => {
  return (
    <section className="border-t-[3px] border-[#2B2D31] py-[48px]">
      <div className="flex justify-between items-center">
        <p className="text-[20px] font-[600]">👕 Shopping</p>
        <span className="flex items-center gap-[10px]">
          <GoArrowLeft className="text-[24px] text-gray" />
          <GoArrowRight className="text-[24px] text-gray" />
        </span>
      </div>

      <div className="mt-[32px] flex gap-[24px]">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
};

export default Shoppings;
