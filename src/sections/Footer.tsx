const Footer = () => {
  return (
    <footer className="mt-[100px] flex justify-between text-[14px] text-gray">
      <div className="flex gap-[32px]">
        <a href="#">Terms Of Service</a>
        <a href="#">Report Abuse</a>
        <a href="#">Privacy & Data Policy</a>
      </div>

      <p>{new Date().getFullYear()} All Rights Reserved © Onesport</p>
    </footer>
  );
};

export default Footer;
