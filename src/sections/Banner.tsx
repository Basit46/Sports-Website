import appstore from "../assets/appstore.svg";
import googleplay from "../assets/ggplay.svg";
import gradient1 from "../assets/bg1.png";
import gradient2 from "../assets/bg2.png";
import gradient3 from "../assets/bg3.png";
import gradient4 from "../assets/bg4.png";
import screen1 from "../assets/screen1.svg";
import screen2 from "../assets/screen2.svg";

const Banner = () => {
  return (
    <section className="relative h-[650px] xmd:h-[350px] w-full bg-[#1B1C21] rounded-[24px]">
      <div className="relative pl-[27px] pt-[56px] z-[7]">
        <p className="text-[#F5C451] font-medium">New Platform</p>
        <p className="mt-[8px] mb-[24px] text-[28px] font-[600] leading-[36.4px]">
          Get one of our sports <br /> apps, which is only <br /> available on
        </p>
        <p className="mb-[16px]">Download Apps :</p>
        <div className="flex items-center gap-[18px]">
          <a href="#">
            <img src={appstore} alt="Appstore link" />
          </a>
          <a href="#">
            <img src={googleplay} alt="Google play link" />
          </a>
        </div>
      </div>

      {/* Background Gradients */}
      <img
        className="absolute top-0 right-0 z-[4]"
        src={gradient4}
        alt="gradient"
      />
      <img
        className="absolute top-0 right-[10%] z-[3]"
        src={gradient3}
        alt="gradient"
      />
      <img
        className="absolute top-0 right-[20%] z-[2]"
        src={gradient2}
        alt="gradient"
      />
      <img
        className="absolute top-0 right-[30%] z-[1]"
        src={gradient1}
        alt="gradient"
      />

      {/* Screens */}
      <img
        className="absolute bottom-0 right-[35%] z-[6]"
        src={screen1}
        alt="mobile app screen"
      />
      <img
        className="absolute bottom-0 right-[7.5%] z-[6]"
        src={screen2}
        alt="mobile app screen"
      />
    </section>
  );
};

export default Banner;
