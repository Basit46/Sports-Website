import jersey from "../assets/chelseaJersey.png";
import { toast } from "react-toastify";

const Product = () => {
  return (
    <div
      onClick={() => toast("Coming soon")}
      className="cursor-pointer w-full sm:w-[223px]"
    >
      <div className="w-full h-[282px] p-[24px] rounded-[16px] bg-[#1B1C21] grid place-items-center">
        <img src={jersey} alt="product" />
      </div>
      <div className="mt-[16px]">
        <p className="mb-[8px] font-medium">Chelsea Home Kit 21 / 22</p>
        <p className="text-[#F5C451] text-[18px] font-medium">$150.10</p>
      </div>
    </div>
  );
};

export default Product;
