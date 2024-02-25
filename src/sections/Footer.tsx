const Footer = () => {
  return (
    <footer className="mt-[100px] sm:mt-[50px} py-[24px] px-[10px] vsm:px-[25px] flex flex-col gap-[30px] md:flex-row justify-between text-[14px] text-gray">
      <div className="flex flex-col sm:flex-row gap-[10px] sm:gap-[32px]">
        <a href="#">Terms Of Service</a>
        <a href="#">Report Abuse</a>
        <a href="#">Privacy & Data Policy</a>
      </div>

      <p className="vsm:self-end md:self-auto">
        {new Date().getFullYear()} All Rights Reserved © Onesport
      </p>
    </footer>
  );
};

export default Footer;
