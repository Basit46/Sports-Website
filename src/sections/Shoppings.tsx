import Product from "../components/Product";

const Shoppings = () => {
  return (
    <section id="shop" className="border-t-[3px] border-[#2B2D31] py-[48px]">
      <div className="flex justify-between items-center">
        <p className="text-[20px] font-[600]">👕 Shopping</p>
      </div>

      <div className="mt-[32px] flex flex-wrap justify-center gap-[24px]">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
};

export default Shoppings;
